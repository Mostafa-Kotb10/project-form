import { useEffect } from "react";
import useSignUpContext from "./useSignUpContext";

const useIsValidated = (isValid: boolean) => {
  const { setIsValid } = useSignUpContext();

  useEffect(() => {
    if (isValid) {
      setIsValid(true);
    } else {
      return setIsValid(false);
    }
  }, [isValid, setIsValid]);
};

export default useIsValidated;
