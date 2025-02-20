import { SignUpContextProvider } from "@/context/RegisterContext";
import SignUpFormCard from "./SignUpFormCard";

const SignUp = () => {
  return (
    <SignUpContextProvider>
      <SignUpFormCard />
    </SignUpContextProvider>
  );
};

export default SignUp;
