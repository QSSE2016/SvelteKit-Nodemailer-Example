# Nodemailer in SvelteKit example with Gmail

_This project is an example Nodemailer + SvelteKit to send emails to users using Gmail._

In nodemailer, they say that you should use other providers if possible to avoid usage limits and whatnot.
Also for this example I will be using App Password as the authentication method for simplicity.

If you're curious, search "App Password google", enable 2FA (I think it's required) and create a password to use and store it somewhere.

Feel free to copy the code if you're interested, but if you want it to run you should create a .env file on the project root and add in your credentials (APP_PASSWORD, SENDER_EMAIL). I will say though, it will be more worthwhile if you type out the code yourself, as you will retain information that way.

_In case you were wondering if your learning capability sucks in today's age, no it's not that, it's the fact that everybody copies whatever GPT tells them..._

Obviously, like the nodemailer docs state, you should be using OAuth 2.0 for serious applications because it is the modern safety standard. But for the sake of actually learning the basics of nodemailer, I think keeping things simple is best.
