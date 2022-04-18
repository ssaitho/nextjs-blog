import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  )
}