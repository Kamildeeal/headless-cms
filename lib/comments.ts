import { createClient } from "contentful-management";

export default async function handler({ req, res }: any) {
  const spaceID = process.env.CONTENTFUL_SPACE_ID as string;
  const accessToken = process.env.ADD_POST_TOKEN as string;
  if (req.method === "POST") {
    try {
      const client = createClient({ accessToken });
      const { name, content, postId } = req.body;
      const space = await client.getSpace(spaceID);
      const environment = await space.getEnvironment("master");
      await environment.createEntry("comments", {
        fields: {
          name: { "en-US": name },
          content: { "en-US": content },
          postReference: {
            "en-US": { sys: { type: "Link", linkType: "Entry", id: postId } },
          },
          createdAt: { "en-US": new Date().toISOString() },
        },
      });
      res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Unable to add comment" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
