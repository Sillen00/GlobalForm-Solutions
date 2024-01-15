import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"

export const userRouter = createTRPCRouter({
  getForms: protectedProcedure.input(z.undefined()).query(async ({ ctx }) => {
    const forms = ctx.db.user.findUnique({
      where: {
        clerkUserId: ctx.authenticatedUser.userId,
      },
      select: {
        forms: true,
      },
    })
    return forms
  }),
})
