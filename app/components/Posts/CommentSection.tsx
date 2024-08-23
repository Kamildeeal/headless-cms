"use client";
import React, { useState, useEffect } from "react";
import {
  fetchCommentsForPost,
  Comment,
  parseContentfulComment,
} from "../../../lib/commentService";
import { managementClient } from "@/lib/contentfulClient";
import RichText from "@/lib/contentRichText";

function Comments({ postId }: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function loadComments() {
      const fetchedComments = await fetchCommentsForPost(postId);
      setComments(fetchedComments);
    }

    loadComments();
  }, [postId]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newComment = await submitComment(name, content, postId);
    if (newComment) {
      setComments([...comments, newComment]);
      setName("");
      setContent("");
    }
  };

  return (
    <div className="w-full max-w-[1170px] my-20">
      <h2 className="text-center text-2xl font-medium font-roboto my-4">
        COMMENTS
      </h2>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id} className="px-4 py-1">
            <strong>{comment.name}</strong>
            <p className="text-gray-600 text-sm">
              {comment.createdAt.toLocaleString()}
            </p>
            <div className="my-6 text-lg">
              <RichText document={comment.content} />
            </div>
            <div className="w-full h-[2px] bg-gray-300 my-8"></div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          placeholder="Your comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded h-[125px]"
        />
        <>
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 max-w-max my-4 mx-auto bg-gray-300 rounded hover:bg-gray-500"
          >
            Submit
          </button>
        </>
      </form>
    </div>
  );
}

export default Comments;

export async function submitComment(
  name: string,
  content: string,
  postId: string
): Promise<Comment | null> {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    if (!spaceId) {
      throw new Error("CONTENTFUL_SPACE_ID is not defined");
    }

    const space = await managementClient.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    const newCommentEntry = await environment.createEntry("comments", {
      fields: {
        name: { "en-US": name },
        content: {
          "en-US": {
            nodeType: "document",
            content: [
              {
                nodeType: "paragraph",
                content: [
                  {
                    nodeType: "text",
                    value: content,
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
        },
        postReference: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postId,
            },
          },
        },
        createdAt: { "en-US": new Date().toISOString() },
      },
    });
    await newCommentEntry.publish();
    return parseContentfulComment(newCommentEntry as any);
  } catch (error) {
    console.error("Error details:", error);
    return null;
  }
}
