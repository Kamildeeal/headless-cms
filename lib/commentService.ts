import { client, managementClient } from "./contentfulClient";
import { TypeComment, TypeCommentSkeleton } from "../types/commentTypes";
import { Entry } from "contentful";
import { RichTextCommentDocument } from "contentful-management";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

type CommentEntry = Entry<TypeCommentSkeleton, undefined, string>;

export interface Comment {
  name?: string;
  content?: RichTextDocument;
  postReference?: any;
  createdAt?: Date;
}

export function parseContentfulComment(
  commentEntry?: CommentEntry
): Comment | null {
  if (!commentEntry) {
    return null;
  }

  return {
    name: commentEntry?.fields.name,
    content: commentEntry?.fields.content,
    postReference: commentEntry?.fields.postReference,
    createdAt: commentEntry?.fields.createdAt
      ? new Date(commentEntry.fields.createdAt)
      : undefined,
  };
}

export async function fetchCommentsForPost(postId: string): Promise<Comment[]> {
  const commentsResult = await client.getEntries({
    content_type: "comments",
    "fields.postReference.sys.id": postId,
    order: "sys.createdAt",
  });

  return commentsResult.items.map(
    (commentEntry: CommentEntry | undefined) =>
      parseContentfulComment(commentEntry) as Comment
  );
}
