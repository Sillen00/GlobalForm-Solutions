import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const userRouter = createTRPCRouter({
  getForms: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
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
})
