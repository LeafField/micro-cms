import { GetAllSlug } from "../types/cms-types";

export const prevNextPost = (allslugs: GetAllSlug[], currentSlug: string) => {
  const numberOfPosts = allslugs.length;
  const index = allslugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allslugs[index + 1];
  const nextPost = index === 0 ? { title: "", slug: "" } : allslugs[index - 1];

  return [prevPost, nextPost];
};
