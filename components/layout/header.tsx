import Link from "next/link"
import component from '@ssaitho/react_ts_storybook';

export default function Header() {

  return (
    <div>
      <component.Header/>
    </div>
    // <header>
    //   <nav className="bg-primary py-4">
    //     <div className="flex flex-col px-4 mx-auto w-full max-w-5xl lg:flex-row lg:justify-between lg:items-center">
    //       <h1 className="text-2xl text-white">header</h1>
    //     </div>
    //   </nav>
    // </header>
  )
}
