import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { IntlProvider } from 'react-intl';
import ImportMDFileWithHooks from '../components/ImportMDFileWithHooks';
import MainLayout from '../components/MainLayout';
import BasicPageStyles from '../components/styles/BasicPageStyles';

const Bases = props => (
  <MainLayout mainlayout>
    <Head>
      {/* <title>{props.data.title} | Nadal és molt més</title>
      <meta name="description" content={props.data.content} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${props.data.title}",
            "description": "${props.data.content[0].text}",
            "author": {
              "@type": "Organization",
              "name": "Diputació de Barcelona"
            },
            "publisher": {
            "@type": "Organization",
            "name": "Nadal és molt més",
            "logo": {
              "@type": "ImageObject",
              "url": "https://nadalesmoltmes.diba.cat/static/icons/android-chrome-512x512.png"
                }
              }, 
            "image": "${props.data.fileImages[0].src}"
          }`
        }}
      /> */}
    </Head>

    <BasicPageStyles>
      <IntlProvider locale="ca">
        <div className="hero no--no-height">
          <div className="icona-mes">
            <section className="bases">
              <ImportMDFileWithHooks file={'baes-sorteig.md'} />
              <p className="align-center">
                <Link href="/sorteig">
                  <a title="Tormar al soteig" className="">
                    Tornar
                  </a>
                </Link>
              </p>
            </section>
          </div>
        </div>
      </IntlProvider>
    </BasicPageStyles>
  </MainLayout>
);

Bases.getInitialProps = async function() {
  const res = await fetch(
    `https://nadalesmoltmesdata.now.sh/activitats-nadal.json`
  );

  return {};
};

export default Bases;
