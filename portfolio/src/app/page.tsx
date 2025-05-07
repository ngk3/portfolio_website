import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

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
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
