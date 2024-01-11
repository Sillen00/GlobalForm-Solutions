import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

// Validation scehmas
const formBlockSchema = z.object({
  order: z.number(),
  title: z.string().optional(),
  description: z.string().optional(),
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
  createForm: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        title: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        location: z.string(),
        description: z.string(),
        blocks: z.array(z.string()),
      })
    )
    .query(({ ctx, input }) => {
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
          blocks: input.blocks,
        },
      })
      return form
    }),
})