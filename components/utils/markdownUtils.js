import markdownParser from "@nuxt/content/transformers/markdown";

export const getParsedMarkdown = async (markdown) => {
  return await markdownParser.parse("", markdown);
};
