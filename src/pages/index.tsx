import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">display prisma data</h1>



        <p className="">
          Get started by editing{" "}
          <code className="">pages/index.js</code>
        </p>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {

  return {
    props: {}, // will be passed to the page component as props
  };
}
