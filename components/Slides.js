import Link from 'next/link';
import React from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';

const Slides = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 768px)',
  });
  const slides = props.slides;
  const slideSorteig = props.slideSorteig;
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      showArrows={true}
      autoPlay={true}
      interval={4500}
      infiniteLoop={true}
      useKeyboardArrows={true}>
      {slides
        .sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        })
        .map((slide, id) => (
          <div
            className='hero no--no-height slider brown'
            key={slide.id.toString() + '-' + slide.startDate}>
            <div className='icona-mes'>
              <div className='row sm-12 md-6 slide'>
                <section>
                  <h2 className='subtitle'>Nadal és molt més</h2>
                  <h1 className='title'>{slide.slideTitle}</h1>
                  <IntlProvider locale='ca'>
                    <p className='card-location-time'>
                      {slide.endDate ? (
                        <span className='card-time'>
                          Del{' '}
                          <FormattedDate
                            year='numeric'
                            month='long'
                            day='numeric'
                            value={slide.startDate}
                          />{' '}
                          al{' '}
                          <FormattedDate
                            year='numeric'
                            month='long'
                            day='numeric'
                            value={slide.endDate}
                          />
                        </span>
                      ) : (
                        <span className='card-time'>
                          <FormattedDate
                            year='numeric'
                            month='long'
                            day='numeric'
                            value={slide.startDate}
                          />
                        </span>
                      )}{' '}
                      <br />
                      <span className='card-title'>{slide.title}</span> a{' '}
                      <span className='card-place'>{slide.place}</span>
                    </p>
                  </IntlProvider>
                  {isDesktopOrLaptop && (
                    <h3>
                      Més de 80 activitats a la província de Barcelona per
                      passar un Nadal diferent
                    </h3>
                  )}
                </section>
                <section className='slide-img'>
                  <p className='draw'>
                    <Link href='/sorteig'>
                      <a title="Participa al sorteig d'un viatge en globus">
                        <img
                          className='globus-draw'
                          src='/static/globus.png'
                          width='140'
                          height='140'
                          alt='Icona globus sorteig'
                        />
                      </a>
                    </Link>
                  </p>
                  <Link
                    as={`/a/${slide.url}`}
                    href={`/activitat?id=${slide.url}`}>
                    <a>
                      <figure className={`description bottom`}>
                        <div>
                          <img
                            src={slide.cardImage.src}
                            alt={slide.cardImage.alt}
                            loading='lazy'
                            width='640'
                            height='640'
                          />
                        </div>
                      </figure>
                    </a>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        ))}
      <div className='hero no--no-height slider red-hero'>
        <div className='icona-mes-blanca-doble'>
          <div className='row sm-12 md-6 slide'>
            <section>
              <h1 className='subtitle'>{slideSorteig[0].slideTitle}</h1>

              <p>
                <Link href={`/${slideSorteig[0].url}`}>
                  <a className='button white'>Participa-hi!</a>
                </Link>
              </p>
            </section>
            <section className='slide-img'>
              <Link href={`/${slideSorteig[0].url}`}>
                <a>
                  <figure className={`description bottom`}>
                    <div>
                      <img
                        src={slideSorteig[0].cardImage.src}
                        alt={slideSorteig[0].cardImage.alt}
                        loading='lazy'
                        width='640'
                        height='640'
                      />
                    </div>
                  </figure>
                </a>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slides;
