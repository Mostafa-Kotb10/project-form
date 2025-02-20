import { SignUpFormContext } from "@/context/RegisterContext";
import { useContext } from "react";

const useSignUpContext = () => {
    const context = useContext(SignUpFormContext);

    if (!context) {
        throw new Error("useSignUpContext must be used within a SignUpFormProvider");
    }
    
    return context;
}

export default useSignUpContext;