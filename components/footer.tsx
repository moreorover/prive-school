import Link from "next/link";
import React from "react";
import { Divider } from "@heroui/divider";
import { LuTwitter } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <LuLayers className="text-primary-500 text-2xl" />
              <span className="ml-2 font-bold text-lg">HeroCompany</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building the future of web development with powerful, intuitive tools.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <LuTwitter className="text-gray-500 hover:text-primary-500 text-xl" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <LuGithub className="text-gray-500 hover:text-primary-500 text-xl" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <LuLinkedin className="text-gray-500 hover:text-primary-500 text-xl" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Features</Link></li>
              <li><Link href="/pricing"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Integrations</Link>
              </li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Changelog</Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Documentation</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Tutorials</Link>
              </li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Support</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">About</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Contact</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">Partners</Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} HeroCompany. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm" href="#">
              Terms of Service
            </Link>
            <Link className="text-gray-600 dark:text-gray-400 hover:text-primary-500 text-sm" href="#">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};