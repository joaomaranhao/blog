import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-blue-700">
      <div className="max-w-5xl m-auto flex justify-between items-center p-6 lg:px-0">
        <div>
          <a href="/">
            <Image
              className="w-10 hover:scale-110 ease-out duration-300"
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex">
          <a
            className="mr-4 hover:scale-110 ease-out duration-300 text-white"
            href="https://www.github.com/joaomaranhao"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="mr-4 hover:scale-110 ease-out duration-300 text-white"
            href="https://www.linkedin.com/in/joaofmaranhao"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            className="mr-4 hover:scale-110 ease-out duration-300 text-white"
            href="https://twitch.tv/joaofmaranhao"
          >
            <FaTwitch size={30} />
          </a>
          <a
            className="mr-4 hover:scale-110 ease-out duration-300 text-white"
            href="https://www.twitter.com/joaofmaranhao"
          >
            <FaTwitter size={30} />
          </a>
          <a
            className="hover:scale-110 ease-out duration-300 text-white"
            href="https://www.youtube.com/@joaofmaranhao"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};
