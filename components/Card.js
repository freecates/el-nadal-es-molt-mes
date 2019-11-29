import Link from 'next/link';
import { FormattedDate, IntlProvider } from 'react-intl';
import DuotoneEffect from './DuoToneEffect';

const Card = props => {
  return (
    <IntlProvider locale="ca" timeZone="Europe/Madrid">
      {props.featured === true ? (
        <div
          className={'card featured fade-in'}
          key={`${props.id} - ${props.item.startDate}`}
        >
          <Link
            as={`/a/${props.item.id}`}
            href={`/actvitat?id=${props.item.id}`}
          >
            <a>
              <main className="featured">
                <h2 className="card-title">{props.item.title}</h2>
                <p className="card-location-time">
                  <span className="card-location featured">
                    {props.item.place}
                  </span>
                </p>
              </main>
              <figure className={`description bottom`}>
                <DuotoneEffect duo />
                <div>
                  <img
                    className={`duotone-img`}
                    src={props.item.cardImageFeatured.src}
                    alt={props.item.cardImageFeatured.alt}
                    loading="lazy"
                    width="640"
                    height="640"
                  />
                  {props.item.cardBgImage && (
                    <img
                      className={`img-back`}
                      src={props.item.cardBgImage.src}
                      alt={props.item.cardBgImage.alt}
                      width="640"
                      height="640"
                    />
                  )}
                </div>
              </figure>
            </a>
          </Link>
        </div>
      ) : (
        <div
          className={'card fade-in'}
          key={`${props.id} - ${props.item.startDate}`}
        >
          <Link
            as={`/a/${props.item.id}`}
            href={`/actvitat?id=${props.item.id}`}
          >
            <a>
              <main>
                <p className="card-type">
                  <small>{props.item.type}</small>
                </p>
                {props.item.title.length <= 50 ? (
                  <h2 className="card-title">{props.item.title}</h2>
                ) : (
                  <h2 className="card-title">
                    {props.item.title.substring(0, 50)}...
                  </h2>
                )}

                <p className="card-location-time">
                  <small>
                    {props.item.endDate ? (
                      <span className="card-time">
                        <FormattedDate value={props.item.startDate} />
                        {' - '}
                        <FormattedDate value={props.item.endDate} />
                      </span>
                    ) : (
                      <span className="card-time">
                        <FormattedDate value={props.item.startDate} />
                      </span>
                    )}
                    <br />
                    <span className="card-location">{props.item.location}</span>
                    <br />
                    <span className="card-place">{props.item.place}</span>
                  </small>
                </p>
              </main>
              <figure className="description bottom">
                <DuotoneEffect single />
                <img
                  className="duotone-img"
                  src={props.item.cardImage.src}
                  alt={props.item.cardImage.alt}
                  loading="lazy"
                  width="640"
                  height="640"
                />
              </figure>
            </a>
          </Link>
        </div>
      )}
    </IntlProvider>
  );
};

export default Card;
