import * as z from "zod";

export const addPostSchema = z.object({
  title: z.string().min(1, { message: "Post title is required!" }),
  content: z.string().min(1, { message: "Post content is required!" }),
});
