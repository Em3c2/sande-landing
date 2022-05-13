const ACTION_URL = process.env.ACTION_URL;

const handler = (req, res) => {
  if (req.method !== 'POST') return;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(req.body),
  }

  if(!ACTION_URL) throw new Error('Missed enviroment variable');

  fetch(ACTION_URL, options)
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(err => {
      return res.status(500).json({ err });
    });
};

export default handler;