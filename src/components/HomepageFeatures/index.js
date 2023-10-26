import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: null, 
    description: (
      <>
       The FREEW0RK app sends you automatically proposals for good days and places 
       based on your individual preferences, calendar entries and 
       real-time weather data for your location
      </>
    ),
  },
  {
    title: 'Join FREEWORK',
    Svg: null,
    description: (
      <>
        Try it our and join our new work community for the good of your physological and psychological health
      </>
    ),
  },
  {
    title: 'Create your Profile today',
    Svg: null,
    description: (
      <>
       Just create a profile and answer us a few questions about your preferences of places, 
       food, cafe or other to directly show you your best FREEWORK places and communities
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
