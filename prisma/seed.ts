import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const testData = [{ name: "Test Name 1" }, { name: "Test Name 2" }]

  for (const data of testData) {
    const testModel = await prisma.testModel.create({
      data,
    })
    console.log(`Created test model with id: ${testModel.id}`)
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
