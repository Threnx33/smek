import { Link } from "react-router-dom";
import { UserLoginForm } from "./userLoginForm";
import { AuthWrapper } from "@/components/reusables/authWrap";
import { TextMainWrap } from "@/components/reusables/textMainWrap";

export function ViewLogin() {
  return (
    <>
      <AuthWrapper>
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <UserLoginForm />
        <p className="text-center mt-4 text-xs font-medium">
          Don't have an account?{" "}
          <Link to="/register">
            <TextMainWrap>Register</TextMainWrap>
          </Link>
        </p>
        <div className="text-center mt-4">
          <Link to="/badges">
            <TextMainWrap>Enter</TextMainWrap>
          </Link>
        </div>
      </AuthWrapper>
    </>
  );
}
