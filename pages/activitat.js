import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import MainLayout from '../components/MainLayout';
import ResponsivePicture from '../components/ResponsivePicture';
import BasicPageStyles from '../components/styles/BasicPageStyles';
import Title from '../components/Title';

const Activitat = props => (
  <MainLayout mainlayout>
    <Head>
      <title>{props.data.title} | Nadal és molt més</title>
      <meta name='description' content={props.data.content} />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${props.data.title}",
            "description": "${props.data.content[0].text}",
            "author": {
              "@type": "Person",
              "name": "Ramon Gil"
            },
            "publisher": {
            "@type": "Organization",
            "name": "Nadal és molt més",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mexicobaila.com/static/icons/android-chrome-512x512.png"
                }
              }, 
            "image": "${props.data.fileImages[0].src}"
          }`,
        }}
      />
    </Head>

    <BasicPageStyles>
      <IntlProvider locale='ca'>
        <div className='hero no--no-height'>
          <Title title={props.data.title} />
          <p className='card-location-time'>
            {props.data.endDate ? (
              <span className='card-time'>
                <FormattedDate value={props.data.startDate} />
                {' - '}
                <FormattedDate value={props.data.endDate} />
              </span>
            ) : (
              <span className='card-time'>
                <FormattedDate value={props.data.startDate} />
              </span>
            )}
            <br />
            <span className='card-location'>{props.data.type}</span>
            <br />
            <span className='card-location'>{props.data.location}</span>{' '}
            <span className='card-place'>{props.data.place}</span>
          </p>
        </div>
        <div className='hero with-img'>
          <ResponsivePicture
            imageAlt={props.data.fileImages[0].alt}
            image={props.data.fileImages[0].src}
            image480={props.data.fileImages[0].src480}
            image768={props.data.fileImages[0].src768}
          />
        </div>
        <div className='hero no--no-height'>
          <div className='icona-mes'>
            <div className='row sm-12 md-6'>
              <section>
                <p className='red'>
                  {props.data.endDate ? (
                    <span className='card-time'>
                      <FormattedDate value={props.data.startDate} />
                      {' - '}
                      <FormattedDate value={props.data.endDate} />
                    </span>
                  ) : (
                    <span className='card-time'>
                      <FormattedDate value={props.data.startDate} />
                    </span>
                  )}
                  <br />
                  <span className='card-location'>
                    {props.data.location}
                  </span>{' '}
                  <span className='card-place'>{props.data.place}</span>
                </p>
                <p className='red'>
                  {props.data.more_info_url ? (
                    <a
                      target='_blank'
                      rel='noopener'
                      className='button mes-info'
                      href={props.data.more_info_url}>
                      Més info
                    </a>
                  ) : (
                    ''
                  )}
                </p>
              </section>
              <p>{props.data.content[0].text}</p>
            </div>
          </div>
          <nav className='row sm-4 md-4 file-navigation'>
            {props.anterior == 0 ? (
              ''
            ) : (
              <p className='align-left'>
                <Link
                  as={`/a/` + `${props.anterior}`}
                  href={`/activitat?id=` + `${props.anterior}`}>
                  <a
                    title={`Anar a ${
                      props.activitats[props.anterior - 1].title
                    }`}>
                    {String.fromCharCode(10229)}{' '}
                    {props.activitats[props.anterior - 1].title}
                  </a>
                </Link>
              </p>
            )}
            <p className='align-center'>
              <Link href='/activitats'>
                <a title='Tornar a activitats'>Tornar</a>
              </Link>
            </p>
            {props.seguent == props.activitats.length + 1 ? (
              ''
            ) : (
              <p className='align-right'>
                <Link
                  as={`/a/` + `${props.seguent}`}
                  href={`/activitat?id=` + `${props.seguent}`}>
                  <a
                    title={`Anar a ${
                      props.activitats[props.seguent - 1].title
                    }`}>
                    {props.activitats[props.seguent - 1].title}{' '}
                    {String.fromCharCode(10230)}
                  </a>
                </Link>
              </p>
            )}
          </nav>
        </div>
      </IntlProvider>
    </BasicPageStyles>
  </MainLayout>
);

Activitat.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://nadalesmoltmesdata.now.sh/activitats-nadal.json`
  );
  const activitats = await res.json();

  const [data] = activitats.filter(x => x.id == id);

  const anterior = data.id - 1;

  const seguent = data.id + 1;

  return { data, activitats, anterior, seguent };
};

export default Activitat;
