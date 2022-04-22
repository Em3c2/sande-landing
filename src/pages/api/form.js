const FORMSPARK_ACTION_URL = "https://submit-form.com/tiDQxA7K";

export default function handler(req, res) {
  if (req.method !== 'POST') return;

  fetch(FORMSPARK_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(req.body),
  }).then(data => {
    return res.status(200).json({ data });
  }).catch(err => {
    return res.status(500).json({ err });
  });
};
