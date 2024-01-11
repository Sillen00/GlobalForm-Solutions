import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

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
})
