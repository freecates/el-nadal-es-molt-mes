import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import CalendarActivitiesDecember from '../components/CalendarActivitiesDecember';
import CalendarActivitiesJanaury from '../components/CalendarActivitiesJanaury';
import FilterActivities from '../components/FilterActivities';
import MainLayout from '../components/MainLayout';
import BasicPageStyles from '../components/styles/BasicPageStyles';
import Title from '../components/Title';

const Activitats = props => (
    <MainLayout mainlayout>
        <Head>
            <title>{props.data.description} | Nadal és molt més</title>
            <meta name='description' content={props.data.description} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${props.data.subtitle}",
            "description": "${props.data.description}",
            "author": {
              "@type": "Person",
              "name": "Ramon Gil"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nadal és molt més",
              "url": "https://diba.cat/",
              "logo": "https://nadalesmoltmes.diba.cat/static/icons/android-chrome-512x512.png"
                },   
            "image": "${props.data[0].fileImages[0].src}"
          }`,
                }}
            />
        </Head>

        <BasicPageStyles>
            <ScrollUpButton
                style={{ backgroundColor: '#f3f5e7', fill: '#146e50', right: '15px' }}
            />
            <div className='hero no--no-height'>
                <Title title={'Més propostes'} />
                <FilterActivities data={props.data} />
            </div>

            <div className='hero no--no-height'>
                <CalendarActivitiesDecember data={props.data} />
                <CalendarActivitiesJanaury data={props.data} />
            </div>
        </BasicPageStyles>
    </MainLayout>
);

Activitats.getInitialProps = async function() {
  const res = await fetch(
    `https://nadalesmoltmesdata.now.sh/activitats-nadal.json`
  );
  const data = await res.json();

  return { data };
};

export default Activitats;
