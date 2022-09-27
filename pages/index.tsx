import Layout from "../layout/layout";
import { getSortedPostsData } from "../lib/posts";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";
<<<<<<< HEAD
import Button from "@ssaitho/react_ts_storybook";
=======
import { Button } from "@ssaitho/react_ts_storybook";
>>>>>>> a2f3e802880e0d513d2c73b0e259a28c145a1e34

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <figure>
          <Image src="/images/prof_min.jpg" width={100} height={100} />
        </figure>
        <h2>Shinsuke Saito blogs test</h2>
        <p className="">
          Hi, I'm Shinsuke Saito is a front-end engineer loves baseball of
<<<<<<< HEAD
          Tokyo.github actions test
=======
          Tokyo. github actions test
>>>>>>> a2f3e802880e0d513d2c73b0e259a28c145a1e34
        </p>
      </section>
      <section className="mb-8">
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mt-4">
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
<<<<<<< HEAD
      <Button>hogehoge</Button>
=======
      <Button label={"npmからインポートしたボタン"} />
>>>>>>> a2f3e802880e0d513d2c73b0e259a28c145a1e34
    </Layout>
  );
}
