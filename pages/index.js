import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
// import { PrismaClient } from '@prisma/client'


export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();

//   const categories = await prisma.category.findMany();

//   return {props: {
//     categories
//   }}
// }
