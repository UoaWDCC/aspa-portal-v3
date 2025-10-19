import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstname, lastname, username } =
      await request.json();

    const payload = await getPayloadHMR({ config: configPromise });

    // Check if username already exists
    const existingUserByUsername = await payload.find({
      collection: "users",
      where: {
        username: {
          equals: username,
        },
      },
    });

    if (existingUserByUsername.docs.length > 0) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 },
      );
    }

    // Check if email already exists
    const existingUserByEmail = await payload.find({
      collection: "users",
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingUserByEmail.docs.length > 0) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 },
      );
    }

    // Create the user
    const user = await payload.create({
      collection: "users",
      data: {
        email,
        password,
        firstname,
        lastname,
        username,
        // These fields are present in the generated payload types as nullable strings
        // and must be included when creating a user to satisfy TypeScript types.
        contactNum: null,
        university: null,
        upi: null,
      },
    });

    // Log them in automatically after registration
    const loginResult = await payload.login({
      collection: "users",
      data: { email, password },
    });

    if (loginResult.token) {
      const cookieStore = await cookies();

      // Set the auth cookie
      cookieStore.set("payload-token", loginResult.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return NextResponse.json({
        success: true,
        user: loginResult.user,
      });
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);

    // Handle validation errors
    if (error instanceof Error) {
      if (error.message.includes("duplicate")) {
        return NextResponse.json(
          { message: "Email or username already exists" },
          { status: 400 },
        );
      }

      if (error.message.includes("validation")) {
        return NextResponse.json(
          { message: "Invalid input data" },
          { status: 400 },
        );
      }
    }

    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 },
    );
  }
}
