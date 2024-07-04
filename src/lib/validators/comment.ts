import * as z from "zod";

export const addCommentSchema = z.object({
  content: z.string().min(1),
});
