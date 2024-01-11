import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

// Validation schemas

const formBlockSchema = z.object({
  order: z.number(),
  title: z.string().optional(),
  content: z.string().optional(),
  type: z.enum([
    "text",
    "textInput",
    "textarea",
    "radio",
    "checkbox",
    "dropdown",
    "date",
    "number",
    "email",
    "tel",
    "url",
  ]),
  required: z.boolean().optional(),
  placeholderText: z.string().optional(),
  options: z.array(z.string()).optional(),
})

const formResponsesSchema = z.object({
  answers: z.any(),
})

const formSchema = z.object({
  userId: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  location: z.string(),
  description: z.string(),
  blocks: z.array(formBlockSchema),
  responses: z.array(formResponsesSchema).optional(),
})

// Router

export const formRouter = createTRPCRouter({
  getUserForms: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const forms = ctx.db.user.findUnique({
      where: {
        clerkUserId: input,
      },
      select: {
        forms: true,
      },
    })
    return forms
  }),
  getFormById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const form = ctx.db.form.findUnique({
      where: {
        id: input,
      },
    })
    return form
  }),
  createForm: publicProcedure.input(formSchema).query(({ ctx, input }) => {
    const form = ctx.db.form.create({
      data: {
        userId: input.userId,
        title: input.title,
        startDate: input.startDate,
        endDate: input.endDate,
        startTime: input.startTime,
        endTime: input.endTime,
        location: input.location,
        description: input.description,
        blocks: {
          create: input.blocks,
        },
      },
    })
    return form
  }),
})
