import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Home: React.FC<any> = ({ results }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${name} : ${email}`);
    const aaa = await saveUser({ email, name });
    console.log(aaa);
  };

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">display prisma data</h1>

        <section>
          <form onSubmit={handleSubmit}>
            <label className="block">
              <span>Name：</span>
              <input
                className="rounded-md"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="block mt-4">
              <span>Email：</span>
              <input
                className="rounded-md"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button
              className="block px-4 py-2 bg-gray-800 text-white mt-4 rounded-md"
              type="submit"
            >
              submit
            </button>
          </form>
        </section>
        <section className="mt-10">
          <ul>
            {results &&
              results.map((result: any) => (
                <div key={result.id}>
                  <li>{`ID: ${result.id}`}</li>
                  <li>{`Name: ${result.name}`}</li>
                  <li>{`Email: ${result.email}`}</li>
                  <br />
                  <br />
                </div>
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await prisma.user.findMany();

  return {
    props: {
      results,
    },
  };
}

async function saveUser(user: Prisma.UserCreateInput) {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
