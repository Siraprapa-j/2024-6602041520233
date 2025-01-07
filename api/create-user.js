const axios = require("axios");
const API_URL = "http://10.80.7.170:8080/api/auth/local/register";
const API_TOKEN = "Bearer aba6f61bcc49cc39bcbb51faea5d53a9267558141df4fe6b03ca94dcb018e3e4ab77893c8431e92c930e5f96e138e9243539c77f8841194a5ff2529abfe9641fb5422c59c669e4a828022be549404049c08bac0a014e3d329ae0135ecde374e9b255bca434cb1d377675cfc29e1f0872044f8a86e0cc8bc7b211adc908422fdf";

const payload = {
username : "siraprapa",
email : "siraprapa@gmail.com",
password : "Mm61188392",

};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err.message);
  });