// export const contentful = require("contentful");

// export const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   environment: "master", // defaults to 'master' if not set
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// client
//   .getEntry("75k1uCikuIh7E3UGphTHZy")
//   .then((entry) => console.log(entry))
//   .catch(console.error);

const contentful = require("contentful");

export const client = contentful.createClient({
  space: "pa1gbwd5q5hb",
  environment: "master", // defaults to 'master' if not set
  accessToken: "yo0sPARx6batU_4AVVPfkCPHdj8OV65SSPYcBedCyR0",
});

client
  .getEntry("75k1uCikuIh7E3UGphTHZy")
  .then((entry) => console.log(entry))
  .catch(console.error);
