import {  z } from "zod";

const requiredString = z.string().nonempty({
  message: "This field is required!."
})

export const projectInfoSchema = z.object({
  projectName: z.string().min(3),
  projectDescription: z.string().min(20),
});

export type ProjectInfoTypes = z.infer<typeof projectInfoSchema>;

export const userInfoFormSchema = z.object({
  userName: requiredString.regex(/[^0-9]+/, "No numbers allowed"),
  userEmail: z.string().email(),
  userAddress: requiredString,
  gender: z
    .string()
    .refine((val) => val.length !== 0, "This field is required"),
});

export type UserInfoTypes = z.infer<typeof userInfoFormSchema>;

export const storeSetupFormSchema = z.object({
  storeName: requiredString.regex(/[^0-9]+/, "No numbers allowed"),
  storeAddress: requiredString,
  storeNumber: requiredString,
  storeDescription: z.string().optional(),
  storeType: requiredString,
  businessCategory: requiredString,
  currency: requiredString,
  paymentMethods: requiredString,
});

export type StoreSetupFormTypes = z.infer<typeof storeSetupFormSchema>;

export type SignUpFormValues = ProjectInfoTypes &
  UserInfoTypes &
  StoreSetupFormTypes;
