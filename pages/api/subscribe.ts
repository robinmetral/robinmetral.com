import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const email: string = req.body.email;
  const payload = {
    email,
    referrer_url: "https://robinmetral.com/newsletter",
  };
  const response = await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    res.statusCode = 500;
    res.end();
  } else {
    res.statusCode = 200;
    res.end();
  }
}
