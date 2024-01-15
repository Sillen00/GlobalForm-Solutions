import { z } from "zod"

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc"

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
  formId: z.string(),
  answers: z.object({}).passthrough(),
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
  // Form procedures
  getFormById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const form = ctx.db.form.findUnique({
        where: {
          id: input,
        },
      })
      return form
    }),
  createForm: protectedProcedure
    .input(formSchema)
    .mutation(async ({ ctx, input }) => {
      const form = ctx.db.form.create({
        data: {
          userId: ctx.authenticatedUser.userId,
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

  deleteForm: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.$transaction(async db => {
        // Delete all associated data before deleting the form
        await db.formBlock.deleteMany({
          where: { formId: input },
        })
        await db.response.deleteMany({
          where: { formId: input },
        })

        // Finally, delete the form
        const form = db.form.delete({
          where: {
            id: input,
          },
        })
        return form
      })
    }),

  // Form responses procedures
  getResponses: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const responses = ctx.db.response.findMany({
        where: {
          formId: input,
        },
        select: {
          answers: true,
        },
      })
      return responses
    }),
  addResponse: publicProcedure
    .input(formResponsesSchema)
    .mutation(async ({ ctx, input }) => {
      const response = ctx.db.response.create({
        data: {
          formId: input.formId,
          answers: input.answers,
        },
      })
      return response
    }),
  deleteResponse: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const response = ctx.db.response.delete({
        where: {
          id: input,
        },
      })
      return response
    }),
})
