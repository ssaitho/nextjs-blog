import Layout from '../layout/layout'
import { getSortedPostsData } from '../lib/posts'
import { useEffect, useRef, useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import Date from '../components/date'

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
      <div className='mt-8 mb-8 px-4 mx-auto w-full max-w-5xl'>
        <section className='mb-8'>
          <div className='bg-white rounded-lg shadow-lg'>
            <div className='p-6 flex items-center'>
              <figure className=''>
                <Image src="/images/prof_min.jpg" width={100} height={100} className='rounded-full' />
              </figure>
              <div className='ml-6'>
                <h2 className='font-bold text-3xl mb-2'>Shinsuke Saito blogs test</h2>
                <p>
                  Hi, I'm Shinsuke Saito is a front-end engineer loves baseball of Tokyo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className='bg-white rounded-lg shadow-lg'>
          <div className='p-6'>
            <h2 className='font-bold text-3xl'>Blog</h2>
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}