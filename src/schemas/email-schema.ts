import { z } from "zod";

// enum for services
enum Services {
  webdevelopment = "Web-Development",
  uiux = "UI/UX",
  logodesigner = "Logo-Designer",
  seo = "SEO",
}

export const emailSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "First Name cannont be empty!" })
    .max(20, { message: "First Name cannont be more than 20 characters!" })
    .trim(),
  lastname: z
    .string()
    .min(1, { message: "Last Name cannont be empty!" })
    .max(20, { message: "Last Name cannont be more than 20 characters!" })
    .trim(),
  email: z.string().email().trim(),
  phone: z
    .string()
    .min(1, { message: "Phone Number cannont be empty!" })
    .max(20, { message: "Phone Number cannont be more than 10 characters!" })
    .trim(),
  service: z.nativeEnum(Services),
  message: z
    .string()
    .max(200, { message: "Message cannot exceed 200 characters!" })
    .trim(),
});
