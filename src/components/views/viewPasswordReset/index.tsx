import { Link } from "react-router-dom";
import { PasswordResetForm } from "./passwordResetForm";
import { AuthWrap } from "@/components/reusables/authWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";

export function ViewPasswordReset() {
  return (
    <>
      <AuthWrap>
        <h2 className="text-2xl font-semibold mb-4">Forgot password</h2>
        <h2 className=" font-normal mb-6">
          Enter email address, and we’ll send you and email with instructions
          for how to reset your password.
        </h2>
        <PasswordResetForm />
        <p className="text-center mt-4 text-xs font-medium">
          Remembered password?{" "}
          <Link to="/">
            <TextMainWrap>Login</TextMainWrap>
          </Link>
        </p>
      </AuthWrap>
    </>
  );
}
