import { Box } from "@mui/material";
import { type NextPage } from "next";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


let md = `# CRUD App (T3)

This project was bootstrapped with [Create T3 App](https://create.t3.gg/).

## Project Goals

- Gain familiarity with create-t3-app (T3)
- Gain experience using TypeScript, NextJS, tRPC, React Query (via tRPC), Zod, and Prisma
- Gain experience using tRPC API (vs REST API)
- Play around with project architecture (e.g. folders, index.js files, etc.) to improve personal "best practices" (tRPC API)
  - (minimal playing done -- T3 architecture is well done)

## End Goal

- Have improved "best practices" for project architecture (tRPC) + have created any related snippets (for future efficiency)

## Minimal-To-No Concern Given To

- UI/UX
`


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box ml={4}>
        <ReactMarkdown children={md} />
      </Box>
    </>
  );
};
export default Home;
