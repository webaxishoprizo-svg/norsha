import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // Since there's no backend for this landing page, we simulate an API call
      return new Promise<{ success: boolean; message: string }>((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: "Thanks for contacting us! We will get back to you shortly.",
          });
        }, 1500);
      });
    },
  });
}
