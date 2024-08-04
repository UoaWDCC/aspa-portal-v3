import RegisterAccountForm from "../../../ui/home/RegisterAccountForm"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASPA - Register",
  description: "ASPA Registration: Register an account to join Auckland Student Pool Association",
};

export default function Home() {
  return (
    <div>
      <RegisterAccountForm />
    </div>
  );
}
