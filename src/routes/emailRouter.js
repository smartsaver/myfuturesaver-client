const express = require('express');
// const md5 = require('md5');
const axios = require('axios');
const router = express.Router();

function validateEmail(email) {
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

async function subscribeToEmailList(email) {
  const listId = '55b8e53120';
  // get list url
  const url = `https://${process.env.MAILCHIMP_DEV_SERVER}.api.mailchimp.com/3.0/lists/${listId}/members`;
  const data = {
    "email_address": email,
    "status": 'subscribed',
  };

  // post
  try {
    const resolve = await axios.post(url, {
      headers: {
        "Content-Type": "application/json",
        "Authenticate": `Basic ${new Buffer('apikey ' + process.env.MAILCHIMP_DEV_API_KEY).toString('base64')}"`,
      },
      body: data
    })

    return resolve.response.data;
  } catch (reject) {
    throw reject;
  }
}

router.post('/subscribe', async (req, res) => {
  // get req body
  const email = req.body.email;
  // invalid email
  if (!validateEmail(email)) {
    res.status(422).json({
      errorMessage: 'Invalid Email'
    })
  }
  
  // send to mailchimp
  try {
    const response = await subscribeToEmailList(email);
    console.log('success', response);
    res.json(response);
  } catch (reject) {
    console.log('error',reject.response.data);
    res.status(reject.response.data.status);
    res.json(reject.response.data);
  }
});

// async function checkEmailSubscriber(email) {
//   const listId = '55b8e53120';
//   const lowerCaseEmail = email.toLowerCase();
//   const url = `https://${process.env.MAILCHIMP_DEV_SERVER}.api.mailchimp.com/3.0/lists/${listId}/members/${md5(lowerCaseEmail)}`;

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `apikey ${process.env.MAILCHIMP_DEV_API_KEY}`
//       }
//     });

//     return true;
//   }
//   catch (reject) {
//     return false;
//   }
// }


module.exports = router;
