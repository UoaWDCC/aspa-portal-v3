import { redirect } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { User } from "@/payload-types";
import { cookies } from "next/headers";
import LogoutButton from "@/components/Auth/Logout/Button";
import GameRequest from "@/components/Games/Request";
import GamesList from "@/components/Games/List";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("payload-token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = await getPayload({ config: configPromise });

  let user: User | null = null;

  try {
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
    <div style={{ maxWidth: "800px", margin: "100px auto", padding: "20px" }}>
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
          marginBottom: "30px",
        }}
      >
        <h2>Profile Information</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {user.username && (
          <p>
            <strong>Username:</strong> {user.username}
          </p>
        )}
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
        <p>
          <strong>ELO Rating:</strong> {user.elo || 1200}
        </p>
      </div>

      <GameRequest />
      <GamesList userId={user.id} />
    </div>
  );
}
