import { SignUpFormValues } from "@/validation/schema";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import useSignUpContext from "./useSignUpContext";

/**
 *
 * 1- Determin if the form is valid.
 * 2- Save form data.
 *
 */

/*
* 
* form store config;
* 
* Store Setup
* 
* 
Fields: 
1-  storeName – Text input (Store Name)
2-  storeAddress – Text input (Store Address)
3-  storeNumber – Text input (Store Contact Number)
4-  description – Textarea (Store Description)
5-  storeType – Select (e.g., Retail, Wholesale, Online, Physical)
6-  businessCategory – Select (e.g., Fashion, Electronics, Groceries, Services)
7-  currency – Select (e.g., USD, EUR, GBP)
8-  paymentMethods – Multi-select (e.g., Credit Card, PayPal, Cash, Bank Transfer)
9-  openingHours – Time picker (Store Opening Hours)
10- logo – File upload (Store Logo)

*/

interface UseSaveProps {
  isValid: boolean;
  formData: Partial<SignUpFormValues>;
}

const useSave = ({ isValid, formData }: UseSaveProps) => {
  const { updateFormData, setIsValid } = useSignUpContext();

  const [lastSaved, setLastSaved] = useState<
    Partial<SignUpFormValues> | undefined
  >(undefined);

  const debouncedValue = useDebounce(formData); // 500

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsSaving(false);
    setIsValid(false);

    if (isValid) {
      setIsValid(true);
    } else setIsValid(false);

    const hasChanged =
      JSON.stringify(debouncedValue) !== JSON.stringify(lastSaved);

    if (hasChanged && isValid && !isSaving) {
      setIsSaving(true);
      updateFormData(debouncedValue);
      setLastSaved(debouncedValue);
    }
  }, [
    debouncedValue,
    isSaving,
    isValid,
    lastSaved,
    setIsValid,
    updateFormData,
  ]);
};

export default useSave;
