import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // TODO: write seed for adding forms and users to the database
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => {
    void prisma.$disconnect()
  })
