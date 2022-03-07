import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { useEffect, useRef, useState } from "react";
import Link from 'next/link'
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

  const ref = useRef(null);

  useEffect(() => {
    // tocbot.init({
    //   tocSelector: '.js-toc',
    //   contentSelector: '.blog-detail-content',
    //   headingSelector: 'h2',
    //   hasInnerContainers: true,
    //   scrollSmoothOffset: -100
    // });
    // var city = ["新宿", "渋谷", "池袋"];
    let array = ref.current?.children
    // let unko = Array.from( array ) ;
    // let elm = [].slice.call(array)
    var arr = [...array]
    let filterItems = arr.filter(function(value) {
      return value === "h2";
    });
    console.log(array)
    // console.log(elm)
    console.log(filterItems)
    console.log(arr)
    // console.log(unko)
    // console.log(city)

    // let elements = document.querySelectorAll('h2');
    // for (const [i, e] of filterItems.entries()) {
    //   e.id = `id-${i}`;
    // }
    
    // tocbot.refresh()
    // return () => tocbot.destroy()
  }, [])
  

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Shinsuke Saito is a front-end engineer loves baseball of Tokyo.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <div ref={ ref } className='blog-detail-content'>
          <h2>これはh2タグの文章1です</h2>
          <h2>これはh2タグの文章2です</h2>
          <h2>これはh2タグの文章3です</h2>
          <p>これはPタグの文章です</p>
        </div>
      </section>
    </Layout>
  )
}