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
