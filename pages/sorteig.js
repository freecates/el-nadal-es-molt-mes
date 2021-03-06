import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import AppForm from '../components/AppForm';
import MainLayout from '../components/MainLayout';
import BasicPageStyles from '../components/styles/BasicPageStyles';
import SubscriptionButtons from '../components/SubscriptionButtons';

const Sorteig = props => (
    <MainLayout mainlayout>
        <Head>
            <title>{props.data.title} | Nadal és molt més</title>
            <meta name='description' content={props.data.title} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${props.data.title}",
            "description": "${props.data.title}",
            "author": {
              "@type": "Organization",
              "name": "Diputació de Barcelona"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nadal és molt més",
              "url": "https://diba.cat/",
              "logo": "https://nadalesmoltmes.diba.cat/static/icons/android-chrome-512x512.png"
                },  
            "image": "${props.data.img.src}"
          }`,
                }}
            />
        </Head>

        <BasicPageStyles>
            <div className='hero no--no-height red-hero'>
                <div className='icona-mes-blanca'>
                    <h2 className='subtitle'>{props.data.title}</h2>
                    <p className='align-center'>
                        <img
                            loading='lazy'
                            src={props.data.img.src}
                            alt={props.data.img.alt}
                            width={'150'}
                            height={'196'}
                        />
                    </p>
                    <SubscriptionButtons buttons={props.data.subscriptionButtons} />
                    <AppForm buttons={props.data.subscriptionButtons} />
                </div>
            </div>
        </BasicPageStyles>
    </MainLayout>
);

Sorteig.getInitialProps = async function() {
  const res = await fetch(
    `https://nadalesmoltmesdata.now.sh/sorteig-nadal.json`
  );
  const data = await res.json();

  return { data };
};

export default Sorteig;
