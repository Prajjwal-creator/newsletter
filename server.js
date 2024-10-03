// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'sandboxe3efed81a0ba4585ab2bdd57c55b9806.mailgun.org', 
  key: 'd0aeb7dd582fff2cbfecf4a6100102ed-2b91eb47-8a0d3dc3',  // your Mailgun API key
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  mg.messages.create('sandboxe3efed81a0ba4585ab2bdd57c55b9806.mailgun.org', {  // your Mailgun domain
    from: "DEV@Deakin <prajjwalmakkar@gmail.com>",
    to: ["s223588867@deakin.edu.au"],
    subject: "Welcome to DEV@Deakin",
    text: "Thank you for subscribing to our newsletter!",
    html: "<h1>Welcome to DEV@Deakin!</h1><p>Thank you for subscribing to our newsletter!</p>",
  })
  .then(msg => res.status(200).json({ message: 'Welcome email sent successfully!' }))
  .catch(err => res.status(500).json({ message: 'Error sending email' }));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
