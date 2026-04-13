import type { Actions } from "@sveltejs/kit";
import { APP_PASSWORD, SENDER_EMAIL } from "$env/static/private"; // from .env file in project root
import nodemailer from "nodemailer";

export const actions: Actions = {
  signup: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");

    // Create transporter with necessary information
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD,
      },
    });

    transporter
      .sendMail({
        to: email?.toString(),
        subject: "Sign Up Example Subject",
        html: `<h1> OOHH YEEEAH BABY BABYYYY </h1> <p> ${name} </p>`,
      })
      .then(() => {
        return {
          success: true,
        };
      })
      .catch((err) => {
        return {
          success: false,
        };
      });
  },
} satisfies Actions;
