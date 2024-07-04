"use client";

import * as z from "zod";
import React, { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addPostSchema } from "@/lib/validators/post";
import {
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { addPost } from "@/lib/actions/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const CreatePostForm = () => {

  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof addPostSchema>>({
    resolver: zodResolver(addPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof addPostSchema>) => {
    startTransition(() => {
      addPost(values).then((data) => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="content"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2"
          disabled={isPending}
        >
          Publish
        </Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;