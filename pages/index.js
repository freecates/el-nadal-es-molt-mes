import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React from 'react';
import { IntlProvider } from 'react-intl';
import CalendarActivitiesDecember from '../components/CalendarActivitiesDecember';
import CalendarActivitiesJanaury from '../components/CalendarActivitiesJanaury';
import Card from '../components/Card';
import MainLayout from '../components/MainLayout';
import Slides from '../components/Slides';
import BasicPageStyles from '../components/styles/BasicPageStyles';
import Title from '../components/Title';

const Index = props => (
    <MainLayout mainlayout>
        <Head>
            <title>Nadal és molt més</title>
            <meta name='description' content={'Nadal és molt més'} />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://schema.org",
            "@type": "WebPAge",
            "name": "${'Nadal és molt més'}",
            "description": "${'Nadal és molt més'}",
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
            "image": "${props.data[0].fileImages[0].src}"
          }`,
                }}
            />
        </Head>

        <BasicPageStyles>
            <Slides slides={props.slides} slideSorteig={props.slideSorteig} />
            <div className='hero no--no-height'>
                <Title title={'Activitats destacades'} />
                <div className='row sm-12 md-6 lg-4 xl-3'>
                    <IntlProvider locale='ca'>
                        {props.datafet
                            .sort((a, b) => {
                                if (a.id < b.id) {
                                    return -1;
                                }
                                if (a.id > b.id) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map((dat, id) => (
                                <Card
                                    item={dat}
                                    featured={true}
                                    id={id}
                                    key={`${dat.title}-${dat.startDate}`}
                                />
                            ))}
                    </IntlProvider>
                </div>
            </div>
            <div className='hero no--no-height'>
                <div className='row sm-12'></div>
            </div>

            <div className='hero no--no-height'>
                <CalendarActivitiesDecember data={props.data} />
                <CalendarActivitiesJanaury data={props.data} />
            </div>
        </BasicPageStyles>
    </MainLayout>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    `https://nadalesmoltmesdata.now.sh/activitats-nadal.json`
  );
  const data = await res.json();

  const res2 = await fetch(
    `https://nadalesmoltmesdata.now.sh/slides-activitats-nadal.json`
  );
  const lesSlides = await res2.json();

  const slides = lesSlides.filter(x => x.id != 9);
  const slideSorteig = lesSlides.filter(x => x.id == 9);
  const datafet = data.filter(x => x.featured == true);

  return { data, slides, datafet, slideSorteig };
};

export default Index;
