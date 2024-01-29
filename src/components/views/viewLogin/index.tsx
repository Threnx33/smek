import { Link } from "react-router-dom";
import { UserLoginForm } from "./userLoginForm";
import { AuthWrap } from "@/components/reusables/authWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";

export function ViewLogin() {
  return (
    <>
      <AuthWrap>
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <UserLoginForm />
        <p className="text-center mt-4 text-xs font-medium">
          Don't have an account?{" "}
          <Link to="/register">
            <TextMainWrap>Register</TextMainWrap>
          </Link>
        </p>
        <div className="text-center mt-4">
          <Link to="/badges/templates">
            <TextMainWrap className="text-xs font-medium">Enter</TextMainWrap>
          </Link>
        </div>
      </AuthWrap>
    </>
  );
}
