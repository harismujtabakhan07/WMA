import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill in all fields",
    });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "messages.json"
    );

    const existingMessages = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    existingMessages.push({
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify(existingMessages, null, 2)
    );

    return res.status(200).json({
      message: "Your message was submitted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to save your message",
    });
  }
}