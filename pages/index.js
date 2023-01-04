import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'


export default function Home({categories}) {
  console.log(categories)
  return (
    <h1>App</h1>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();

  return {props: {
    categories
  }}
}
