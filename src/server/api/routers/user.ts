import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"

export const userRouter = createTRPCRouter({
  getForms: protectedProcedure.input(z.undefined()).query(async ({ ctx }) => {
    const forms = await ctx.db.form.findMany({
      where: {
        userId: ctx.authenticatedUser.userId,
      },
      include: {
        formBlocks: true,
      },
    })
    return forms
  }),
})
