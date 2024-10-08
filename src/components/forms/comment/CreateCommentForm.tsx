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
import { addComment } from "@/lib/actions/comment";

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
    startTransition(() => {
      addComment(postId, values).then((data) => {
        if (data?.error) {
          toast({
            title: "Error",
            description: data.error,
          });
        } else {
          toast({
            title: "Success",
            description: data.success,
          });
          form.reset();
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row w-full gap-2"
      >
        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex w-full">
              <FormControl className="rounded-3xl flex w-full">
                <Input {...field} className="flex w-full " />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-fit bg-transparent text-primary hover:bg-transparent hover:scale-110 flex items-center justify-center p-0"
          disabled={isPending}
        >
          <SendHorizonal />
        </Button>
      </form>
    </Form>
  );
};

export default CreateCommentForm;
