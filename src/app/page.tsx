import Image from "next/image"
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
export default function Home() {
  return (
    <main>
      <nav className="bg-blue-700">
        <div className="max-w-5xl m-auto flex justify-between items-center p-6">
          <div>
            <a href="/">
              <Image className="w-10" src="/logo.svg" alt="logo" width={100} height={100} /> 
            </a>
          </div>
          <div className="flex">
            <a className="mr-4" href="https://www.github.com/joaomaranhao">
              <FaGithub size={30} />
            </a>
            <a className="mr-4" href="https://www.linkedin.com/in/joaofmaranhao">
              <FaLinkedinIn size={30} />
            </a>
            <a href="https://www.twitter.com/joaofmaranhao">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </nav>
    </main>
  )
}
