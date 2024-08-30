import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Our Verticals',
    description: 'RiVidium (dba TripleCyber®) is structured across four divisions. Our divisions provide core services to our clients and enables RiVidium\'s delivery platform through our Program Lifecycle Management.',
    services: [
      {title: 'Cyber & IT', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
      {title: 'Human Capital & Admin', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
      {title: 'Intelligence & Special Programs', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
    ],
  },
  {
    title: 'How we Do It',
    description: 'We are a CMMI Development driven team with the knowledge and credentials in ITIL and ISO processes. Do not leave it to chance. When its time to go with the right team, RiVidium is that team.',
    services: [
      {title: 'CMMI Development', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
      {title: 'Cost Avoidance', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
      {title: 'DCAA Compliant', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
    ],
  },
  {
    title: 'Contracts',
    description: 'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.',
    services: [
      {title: 'Government Contract Vehicles', icon: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default},
    ],
  },
];

function Feature({ title, description, services }) {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
      <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto">{description}</p>
      {services && services.length > 0 && (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:text-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:translate-y-2 flex flex-col">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-500"></div>
                )}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    {service.icon && <img src={service.icon} alt="" className="w-6 h-6 mr-2" />}
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
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

export default function HomepageFeatures() {
  return (
    <section className={`${styles.features} flex justify-center items-center min-h-screen`}>
      <BackgroundSquares />
      <div className="container mx-auto px-4 py-8"> {/* Changed py-16 to py-8 */}
        <div className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto"> {/* Changed space-y-16 to space-y-12 */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
