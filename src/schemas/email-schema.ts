import { z } from "zod";

// enum for services
enum Services {
  webdevelopment = "Web-Development",
  uiux = "UI/UX",
  logodesigner = "Logo-Designer",
  seo = "SEO",
}

export const emailSchema = z.object({
  // optional
  firstname: z
    .optional(
      z
        .string()
        .max(20, { message: "First Name cannont be more than 20 characters!" })
        .trim()
    )
    .default(""),
  lastname: z
    .optional(
      z
        .string()
        .max(20, { message: "Last Name cannont be more than 20 characters!" })
        .trim()
    )
    .default(""),
  phone: z
    .optional(
      z
        .string()
        .max(10, {
          message: "Phone Number cannont be more than 10 characters!",
        })
        .trim()
    )
    .default(""),
  service: z
    .union([
      z.nativeEnum(Services, { message: "No other Option is allowed!" }),
      z.literal(""),
    ])
    .default(""),
  // Non-optional.
  email: z
    .string()
    .email({ message: "Email is required for confirmation!" })
    .trim(),
  message: z
    .string()
    .min(1, { message: "Message is too short!" })
    .max(200, { message: "Message cannot exceed 200 characters!" })
    .trim()
    .default(""),
});
