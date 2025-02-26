/* eslint-disable react-refresh/only-export-components */
import { SignUpFormValues } from "@/validation/schema";
import { createContext, useState } from "react";

interface SignUpContextvalueTypes {
  isValid: boolean;
  setIsValid: (value: boolean) => void;
  formData: SignUpFormValues;
  updateFormData: (data: Partial<SignUpFormValues>) => void;
}

export const SignUpFormContext = createContext<
  SignUpContextvalueTypes | undefined
>(undefined);

export const SignUpContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<SignUpFormValues>({
    gender: "",
    projectDescription: "This is a description for the project",
    projectName: "",
    userAddress: "",
    userEmail: "",
    userName: "",
    storeName:"",
    storeAddress:"",
    storeDescription:"",
    storeType:"",
    storeNumber:"",
    businessCategory:"",
    currency:"",
    paymentMethods:""
  });

  const updateFormData = (data: Partial<SignUpFormValues>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <SignUpFormContext.Provider
      value={{ isValid, setIsValid, formData, updateFormData }}
    >
      {children}
    </SignUpFormContext.Provider>
  );
};
