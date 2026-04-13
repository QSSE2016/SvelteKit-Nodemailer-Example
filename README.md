# This project is an example Nodemailer + SvelteKit to send emails to users using Gmail.

In nodemailer, they say that you should use other providers if possible to avoid usage limits and whatnot.
Also for this example I will be using App Password as the authentication method for simplicity.

If you're curious, search "App Password google", enable 2FA (I think it's required) and create a password to use and store it somewhere.

Feel free to copy the code, but if you want it to run you should create a .env file on the project root and add in your credentials (APP_PASSWORD, SENDER_EMAIL).
