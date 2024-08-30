import Layout from "@theme/Layout";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Heading from '@theme/Heading';

function VerticalCard(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Verticals</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Our verticals are designed to address the unique needs of our clients in various industries. We understand that every business is different, and we tailor our services to meet the specific requirements of each vertical.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}

function BackgroundSquares() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-blue-200">
                    <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
                </svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
        </div>
    );
}


const ourVerticals = () => {
    return <>
        <Layout>
            <BackgroundSquares />
            
            

        </Layout>
    </>
};

export default ourVerticals