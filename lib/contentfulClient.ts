const contentful = require("contentful");
import { createClient as createManagementClient } from "contentful-management";

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// client
//   .getEntry("75k1uCikuIh7E3UGphTHZy")
//   .then((entry: any) => console.log())
//   .catch(console.error);

export const managementClient = createManagementClient({
  accessToken: process.env.ADD_POST_TOKEN as string,
});
