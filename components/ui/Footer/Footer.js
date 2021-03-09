import Link from 'next/link';
import s from './Footer.module.css';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-8xl px-6 bg-primary-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary transition-colors duration-150 bg-primary-2">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <a className="flex flex-initial items-center font-bold md:mr-24">
              <span className="rounded-full border border-gray-700 mr-2">
                <Logo />
              </span>
              <span>Desica</span>
            </a>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
              <p className="text-primary font-bold hover:text-accents-6 transition ease-in-out duration-150">
                PRODUCTS
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="https://desica.uk">
                <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                  Desica
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="/">
                <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                  Ads
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="https://blog.desica.uk/">
                <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-primary font-bold hover:text-accents-6 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="https://policies.desica.uk/privacy">
                <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link href="https://policies.desica.uk/terms">
                <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                  Terms of Use
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-primary-2">
        <div>
          <span>&copy; 2021 Desica, LLC. All rights reserved.</span>
        </div>
        <div className="flex items-center" id="mt-0">
          <a href="https://desica.uk" aria-label="desica.uk Link">
            <img src="https://static.desica.uk/hotlink-ok/Badge.svg" className="h-8 text-primary"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
