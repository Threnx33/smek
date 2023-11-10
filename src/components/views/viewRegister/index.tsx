import { Link } from "react-router-dom";
import { UserRegisterForm } from "./userRegisterForm";
import { AuthWrapper } from "@/components/reusables/authWrapper";
import { TextMainWrapper } from "@/components/reusables/textMainWrapper";

export function ViewRegister() {
  return (
    <>
      <AuthWrapper>
        <h2 className="text-2xl font-bold mb-4">Create account</h2>
        <UserRegisterForm />
        <p className="text-center mt-4 text-xs font-medium">
          Already have an account?{" "}
          <Link to="/">
            <TextMainWrapper>Login</TextMainWrapper>
          </Link>
        </p>
      </AuthWrapper>
    </>
  );
}
