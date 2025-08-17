import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstname, lastname } = await request.json();

    const payload = await getPayloadHMR({ config: configPromise });

    // Create the user
    const user = await payload.create({
      collection: "users",
      data: {
        email,
        password,
        firstname,
        lastname,
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

    // Handle duplicate email error
    if (error instanceof Error && error.message.includes("duplicate")) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 },
    );
  }
}
