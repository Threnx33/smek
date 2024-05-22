import { AuthWrap } from "@/components/reusables/authWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { Link } from "react-router-dom";
import { UserLoginForm } from "./userLoginForm";

export function Login() {
  return (
    <>
      <AuthWrap>
        <h2 className="mb-6 text-2xl font-semibold">Sign In</h2>
        <UserLoginForm />
        <p className="mt-4 text-center text-xs font-medium">
          Don't have an account?{" "}
          <Link to="/register">
            <TextMainWrap>Register</TextMainWrap>
          </Link>
        </p>
        <div className="mt-8 text-center">
          <Link to="/dashboard">
            <TextMainWrap className="text-xs font-medium">Enter</TextMainWrap>
          </Link>
        </div>
      </AuthWrap>
    </>
  );
}
