import Layout from '../layout/layout'
import { getSortedPostsData } from '../lib/posts'
import { useEffect, useRef, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import Date from '../components/date'
import component from '@ssaitho/react_ts_storybook';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <section>
        <figure>
          <Image src="/images/prof_min.jpg" width={100} height={100} />
        </figure>
        <h2>Shinsuke Saito blogs test</h2>
        <p className=''>
          Hi, I'm Shinsuke Saito is a front-end engineer loves baseball of Tokyo.
        </p>
      </section>
      <section className='mb-8'>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='mt-4'>
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
      <component.Card />
      <component.Button label={"npmからインポートしたボタン"} />
      <component.Modal
        label={"npmからインポートしたモーダル"}
      />
    </Layout>
  )
}