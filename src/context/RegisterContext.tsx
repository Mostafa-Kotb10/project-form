import { createContext, useState } from "react";

interface SignUpContextvalueTypes { 
  isValid: boolean;
  setIsValid: (value: boolean) => void;
}

export const SignUpFormContext = createContext<SignUpContextvalueTypes | undefined>(undefined);

export const SignUpContextProvider = ({children}: {children: React.ReactNode}) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <SignUpFormContext.Provider value={{isValid, setIsValid}}>
      {children}
    </SignUpFormContext.Provider>
  )
};
