import { Link } from "react-router-dom";
import { PasswordResetForm } from "./passwordResetForm";
import { AuthWrapper } from "@/components/reusables/authWrapper";
import { TextMainWrapper } from "@/components/reusables/textMainWrapper";

export function ViewPasswordReset() {
  return (
    <>
      <AuthWrapper>
        <h2 className="text-2xl font-bold mb-6">Forgot password</h2>
        <h2 className=" font-semibold mb-4">
          Enter email address, and we’ll send you and email with instructions
          for how to reset your password.
        </h2>
        <PasswordResetForm />
        <p className="text-center mt-4 text-xs font-medium">
          Remembered password?{" "}
          <Link to="/">
            <TextMainWrapper>Login</TextMainWrapper>
          </Link>
        </p>
      </AuthWrapper>
    </>
  );
}
