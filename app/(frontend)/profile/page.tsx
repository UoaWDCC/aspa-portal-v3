import { redirect } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { User } from "@/payload-types";
import { cookies } from "next/headers";
import LogoutButton from "@/components/Auth/Logout/Button";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("payload-token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = await getPayload({ config: configPromise });

  let user: User | null = null;

  try {
    // Use the auth method with the token
    const authResult = await payload.auth({
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Cookie: `payload-token=${token}`,
      }),
    });

    user = authResult.user as User;
  } catch (error) {
    console.error("Auth failed:", error);
    redirect("/login");
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div style={{ maxWidth: "600px", margin: "100px auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Welcome, {user.firstname || user.email}!</h1>
        <LogoutButton />
      </div>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Profile Information</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {user.firstname && (
          <p>
            <strong>First Name:</strong> {user.firstname}
          </p>
        )}
        {user.lastname && (
          <p>
            <strong>Last Name:</strong> {user.lastname}
          </p>
        )}
      </div>
    </div>
  );
}
