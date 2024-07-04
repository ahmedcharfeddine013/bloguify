"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { addCommentSchema } from "@/lib/validators/comment";
import React, { useTransition } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonal } from "lucide-react";

const CreateCommentForm = ({ postId }: { postId: string }) => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addCommentSchema>>({
    resolver: zodResolver(addCommentSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof addCommentSchema>) => {
    startTransition(() => {});
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row "
      >
        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl className="rounded-3xl overflow-hidden flex">
                <Input {...field} className="flex w-full " />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-fit bg-transparent text-primary hover:bg-transparent hover:scale-110 flex items-center justify-center"
          disabled={isPending}
        >
          <SendHorizonal />
        </Button>
      </form>
    </Form>
  );
};

export default CreateCommentForm;
