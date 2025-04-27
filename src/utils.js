import { BLOG_POSTS } from "./data/blogPosts";

export const getPost = (slug) => {
  return BLOG_POSTS.find((post) => post.slug === slug);
};
