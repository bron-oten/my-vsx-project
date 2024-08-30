import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// import {motion} from "framer-motion"


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ position:'relative' }}>
      <div className="container ">

        {/* Rividium Logo */}
        <Heading as="h1" className=" inset-1 z-40 hero__title">
          <img 
          src='img/Logos/RiVidiumREDGREEN.png'
          alt='Rividium Logo'
          style={{width: '500px', height: 'auto'}}
          />
        </Heading>

        {/* Our People Tagline */}
        <p className="text-4xl inset-1 z-30 dark:text-white">{siteConfig.tagline}</p>

        {/* Wavy Line Image */}
        <div className='absolute inset-0 z-0 rotate-180 translate-y-12 opacity-30'>
          <img 
          src='img/Logos/WhiteLines.svg'
          alt='Background Image'
          className='w-200% h-200% object-cover'/>
        </div>

        {/* Brochure Button Element */}
        <div style={{ position: 'relative', zIndex: 10}}>
          <Link
            className="py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            to="https://www.rividium.com/">
            Rividium Brochure
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Rividium`}
      description="Our People, Our Culture, Our Technology">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
