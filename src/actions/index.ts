import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { EmailService } from "../services/email.service";

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email({ message: "El email no es válido." }),
      message: z
        .string()
        .nonempty({ message: "El mensaje no puede estar vacío." }),
    }),
    handler: async (input) => {
      const emailService = new EmailService();
      const result = await emailService.sendContactEmail(
        input.email,
        input.message,
      );

      if (!result.success) {
        return {
          error:
            "Error al enviar el email. Por favor, inténtalo de nuevo más tarde.",
        };
      }

      return { message: "¡Email enviado con éxito!" };
    },
  }),
};
