import { Link } from "react-router-dom";
import { UserRegisterForm } from "./userRegisterForm";
import { AuthWrap } from "@/components/reusables/authWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";

export function ViewRegister() {
  return (
    <>
      <AuthWrap>
        <h2 className="text-2xl font-semibold mb-6">Create account</h2>
        <UserRegisterForm />
        <p className="text-center mt-4 text-xs font-medium">
          Already have an account?{" "}
          <Link to="/">
            <TextMainWrap>Login</TextMainWrap>
          </Link>
        </p>
      </AuthWrap>
    </>
  );
}
