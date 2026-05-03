import nodemailer from 'nodemailer';

// --- CONFIGURATION ---
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'; // Update this for production
const SPAM_KEYWORDS = ['casino', 'crypto', 'loan', 'investment', 'money', 'free', 'win', 'prize'];
const URL_REGEX = /(http|https|www\.)[^\s]+|(\.com|\.net|\.org|\.tk|\.info|\.xyz)/gi;

// --- UTILS ---
const sanitize = (text) => {
  if (!text) return '';
  return text.toString().replace(/<[^>]*>?/gm, '').trim(); // Remove HTML tags
};

export default async function handler(req, res) {
  // 1. Method & Origin Guard
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const origin = req.headers.origin;
  // NOTE: Uncomment origin check in production if needed
  // if (process.env.NODE_ENV === 'production' && origin !== ALLOWED_ORIGIN) {
  //   return res.status(403).json({ error: 'Forbidden: Unauthorized Origin' });
  // }

  // 2. Extract & Honeypot Check
  const { name, email, phone, message, city, budget, company } = req.body;
  if (company) return res.status(403).json({ error: 'Bot detected! Request rejected.' });

  // 3. Sanitization
  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanMessage = sanitize(message);
  const cleanPhone = sanitize(phone);
  const cleanCity = sanitize(city);
  const cleanBudget = sanitize(budget);

  // 4. Strict Validation
  if (!cleanName || cleanName.length > 50) return res.status(400).json({ error: 'Invalid Name' });
  if (!cleanEmail || !cleanEmail.includes('@')) return res.status(400).json({ error: 'Invalid Email' });
  if (cleanMessage && cleanMessage.length > 1000) return res.status(400).json({ error: 'Message too long' });

  // 5. Spam Filtering (Keywords & URLs)
  if (cleanMessage) {
    const isSpam = SPAM_KEYWORDS.some(k => cleanMessage.toLowerCase().includes(k)) || URL_REGEX.test(cleanMessage);
    if (isSpam) return res.status(400).json({ error: 'Message flagged as spam.' });
  }

  // 6. Email Setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Website Contact <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // fallback to self
    replyTo: cleanEmail,
    subject: `New Lead: ${cleanName}`,
    html: `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; padding: 20px; border: 1px solid #eee;">
        <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px;">New Inquiry Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Name:</strong></td><td>${cleanName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Email:</strong></td><td>${cleanEmail}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Phone:</strong></td><td>${cleanPhone}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>City:</strong></td><td>${cleanCity || 'N/A'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #f9f9f9;"><strong>Budget:</strong></td><td>${cleanBudget || 'N/A'}</td></tr>
        </table>
        <p><strong>Message:</strong></p>
        <div style="background: #fdfdfd; padding: 15px; border-left: 4px solid #000; background: #fafafa;">
          ${cleanMessage ? cleanMessage.replace(/\n/g, '<br>') : 'No message provided.'}
        </div>
        <p style="font-size: 11px; color: #999; margin-top: 30px;">This email was sent securely from NIR DESIGNS STUDIO Website.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Sent Securely' });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
