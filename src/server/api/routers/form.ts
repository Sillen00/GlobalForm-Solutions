import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const formRouter = createTRPCRouter({
  getUserForms: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.user.findUnique({
      where: {
        clerkUserId: input,
      },
      select: {
        forms: true,
      },
    })
  }),
})
