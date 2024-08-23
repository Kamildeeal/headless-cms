import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import { EntryReferenceProps } from "contentful-management/dist/typings/entities/entry";

export interface TypeCommentFields {
  name?: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
  postReference?: EntryReferenceProps;
  createdAt?: EntryFieldTypes.Date;
}

// Definicja szkieletu dla komentarza
export type TypeCommentSkeleton = EntrySkeletonType<
  TypeCommentFields,
  "comments"
>;

// Definicja konkretnego typu komentarza
export type TypeComment<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeCommentSkeleton, Modifiers, Locales>;
