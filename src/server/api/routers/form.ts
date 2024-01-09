import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc"

export const formRouter = createTRPCRouter({
  test: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
})
