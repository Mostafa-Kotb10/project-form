import { z } from "zod";

export const projectInfoSchema = z.object({
  projectName: z.string().min(3),
  projectDescription: z.string().min(20)
});

export type ProjectInfoTypes = z.infer<typeof projectInfoSchema>;

export const userInfoFormSchema = z.object({
  userName: z.string().regex(/[^0-9]+/, "No numbers allowed"),
  userEmail: z.string().email(),
  userAddress: z.string(),
  gender: z.string().refine(val => val.length !== 0, "This field is required")
});

export type UserInfoTypes = z.infer<typeof userInfoFormSchema>;

export const storeSetupFormSchema = z.object({
  storeName:z.string().regex(/[^0-9]+/, "No numbers allowed"),
  storeAddress:z.string(),
  storeNumber:z.string(),
  storeDescription:z.string(),
  storeType:z.string(),
  businessCategory:z.string(),
  currency :z.string(),
  paymentMethods :z.string().array(),
  openingHours :z.string()
});
  
export type StoreSetupFormTypes = z.infer<typeof storeSetupFormSchema>;


export type SignUpFormValues = ProjectInfoTypes & UserInfoTypes & StoreSetupFormTypes;


