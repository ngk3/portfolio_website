import Head from "next/head";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Kevin Ng | Full-Stack Developer"}</title>
        <meta name="description" content="Personal portfolio of Kevin Ng, a full-stack developer with specialization in React, React Native, Typescript, AWS, and other modern web technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <p>{"Testing"}</p>
      </Layout>
    </>
  );
}
