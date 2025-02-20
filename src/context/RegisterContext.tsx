import { createContext, useState } from "react";

const RegisterContext = createContext<RegisterFormValueTypes | undefined>(undefined);

interface RegisterFormValueTypes {
  formData: any;
  setFormData: (data: any) => void
}

interface RegisterFormProviderTypes {
  children: React.ReactNode
}

export const RegisterFormProvider = ({children}: RegisterFormProviderTypes) => {
  const {formData, setFormData} = useState({});

  return (
    <RegisterContext.Provider value={{formData, setFormData}}>
      {children}
    </RegisterContext.Provider>
  )
};
