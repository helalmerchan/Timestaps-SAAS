import { MailIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800">
      <MaxWidthWrapper>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            📜
            <span className="text-lg font-bold">Chapters Generator</span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
            Tools will generate a YouTube video links to timestamp chapters that
            allows you to boost your SEO.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Contact</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>
                <a href="mailto:stackhelal@gmail.com">
                  stackhelal@gmail.com
                </a>
              </span>
            </div>
          </div>         
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex items-center gap-4">

            <Link
              href="https://www.youtube.com/@codexdude2248"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/devmhu"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stackhelal/"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/helalmerchan"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-center">
            &copy; 2024 StackHelal, all rights reserved.
          </p>          
        </div>
      </div>
    </MaxWidthWrapper>
    </footer>
  );
}
