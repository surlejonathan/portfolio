import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    await sendgrid.send({
      to: process.env.NEXT_PUBLIC_SENDGRID_MAIL_TO, // Your email where you'll receive emails
      from: process.env.NEXT_PUBLIC_SENDGRID_MAIL_FROM, // your website email address here
      templateId: process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID,
      dynamicTemplateData: {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      },
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}
