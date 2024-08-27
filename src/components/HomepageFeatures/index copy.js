// import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Our Corporate Divisions',
    src: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default,
    description: (
      <>
      RiVidium (dba TripleCyber®) is structured across four divisions. Our divisions provide core services to our clients and enables RiVidium's delivery platform through our Program Lifecycle Management.     
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Logistics & Financial
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Human Capital & Training 
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            IT & Engineering
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Cyber & Intelligence
          </Link>
      </div>
      </>
    ),
  },
  {
    title: 'How we Do It',
    src: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default,
    description: (
      <>
        We are a CMMI Development driven team with the knowledge and credentials in ITIL and ISO processes. Do not leave it to chance. When it's time to go with the right team, RiVidium is that team.
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            CMMI Development
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Cost Avoidance
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ width: '250px', justifyContent: 'center', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            DCAA Compliant
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Contracts',
    src: require('@site/static/img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Government Contract Vehicles
          </Link>
      </div>
      
      </>
    ),
  },
];

// Cards 
function Feature({src, title, description}) {
  return (
    <div className=" transition duration-300 ease-out hover:-translate-y-2 flex drop-shadow-xl flex-wrap flex-col items-center text--center max-w-sm py-3 mx-3 sm:my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href='#'>
        <img src={src} className={styles.featureSvg} role="img" alt={title} />
      </a>
      <div className="padding-horiz--md">
        <Heading className='text-5xl' as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


// Background Squares
function BackgroundSquares () {
  return <>
    <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-blue-200">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  </>
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <BackgroundSquares />
        <div className="flex justify-center  flex-wrap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
