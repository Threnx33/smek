import { Link } from "react-router-dom";
import { UserLoginForm } from "./userLoginForm";
import { AuthWrapper } from "@/components/reusables/authWrapper";
import { TextMainWrapper } from "@/components/reusables/textMainWrapper";

export function ViewLogin() {
  return (
    <>
      <AuthWrapper>
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <UserLoginForm />
        <p className="text-center mt-4 text-xs font-medium">
          Don't have an account?{" "}
          <Link to="/register">
            <TextMainWrapper>Register</TextMainWrapper>
          </Link>
        </p>
        <div className="text-center mt-4">
          <Link to="/badges">
            <TextMainWrapper>Enter</TextMainWrapper>
          </Link>
        </div>
      </AuthWrapper>
    </>
  );
}
