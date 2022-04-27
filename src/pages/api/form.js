const FORMSPARK_ACTION_URL = "https://submit-form.com/tiDQxA7K";

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

  fetch(FORMSPARK_ACTION_URL, options)
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(err => {
      return res.status(500).json({ err });
    });
};

export default handler;