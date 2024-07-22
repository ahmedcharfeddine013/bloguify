import * as z from "zod";

export const addReplySchema = z.object({
  content: z.string().min(1),
});
