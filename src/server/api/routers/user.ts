import { TRPCError } from "@trpc/server"
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"

export const userRouter = createTRPCRouter({
  getForms: protectedProcedure.input(z.undefined()).query(async ({ ctx }) => {
    const clerkUserId = ctx.auth.userId
    if (!clerkUserId) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User is not authenticated",
      })
    }
    const forms = ctx.db.user.findUnique({
      where: {
        clerkUserId: clerkUserId,
      },
      select: {
        forms: true,
      },
    })
    return forms
  }),
})
