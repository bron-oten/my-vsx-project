import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'Our Corporate Divisions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        
      RiVidium (dba TripleCyber®) is structured across four divisions. Our divisions provide core services to our clients and enables RiVidium's delivery platform through our Program Lifecycle Management.     
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg "
            to="/docs/intro">
            Logistics & Financial
          </Link>
      </div>
      <div className="{styles.buttons}">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Human Capital & Training 
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            IT & Engineering
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Cyber & Intelligence
          </Link>
      </div>
      </>
    ),
  },
  {
    title: 'How we Do It',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We are a CMMI Development driven team with the knowledge and credentials in ITIL and ISO processes. Do not leave it to chance. When it's time to go with the right team, RiVidium is that team.
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            CMMI Development
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Cost Avoidance
          </Link>
      </div>
      <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            DCAA Compliant
          </Link>
      </div>
      </>
    ),
  },
  {
    title: 'Contracts',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
