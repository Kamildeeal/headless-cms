import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeTripPostFields {
  id?: EntryFieldTypes.Number;
  title?: EntryFieldTypes.Symbol;
  author?: EntryFieldTypes.Object;
  date?: EntryFieldTypes.Date;
  image?: EntryFieldTypes.AssetLink;
  location?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  rating?: EntryFieldTypes.Integer;
  price?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
}

export interface TypeAboutPostFields {
  title?: EntryFieldTypes.Symbol;
  about?: EntryFieldTypes.RichText;
  aboutSecondParagraph?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeTripPostSkeleton = EntrySkeletonType<
  TypeTripPostFields,
  "tripPost"
>;

export type TypeTripPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTripPostSkeleton, Modifiers, Locales>;
