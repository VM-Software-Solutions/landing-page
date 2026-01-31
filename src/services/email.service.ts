import {
  Resend,
  type CreateEmailResponseSuccess,
  type ErrorResponse,
} from "resend";

type EmailResponse =
  | {
      data: CreateEmailResponseSuccess | null;
      error: ErrorResponse | null;
      success: boolean;
    }
  | {
      data: null;
      error: ErrorResponse;
      success: false;
    };

export class EmailService {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(import.meta.env.RESEND_API_KEY);
  }

  async sendContactEmail(
    emailFrom: string,
    message: string,
    honeypot?: string
  ): Promise<EmailResponse> {
    // Si el honeypot tiene contenido, es spam: no enviar email
    if (honeypot && honeypot.trim() !== "") {
      return {
        data: null,
        error: null,
        success: true,
      };
    }

    const { data, error } = await this.resend.emails.send({
      from: "onboarding@resend.dev",
      to: "software.vm.solutions@gmail.com",
      subject: "Contact Form Submission",
      html: `
      <h1>New Contact Form Submission</h1>
      <p>From: ${emailFrom}</p>
      <p>Message:</p>
      <p>${message}</p>
    `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { data: null, error, success: false };
    }

    return { data, error: null, success: true };
  }
}
 