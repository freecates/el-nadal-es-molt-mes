import Link from 'next/link';
import { IntlProvider } from 'react-intl';

const List = props => {
  return (
    <IntlProvider locale="ca">
      <div
        key={props.id.toString() + '-' + props.item.StartDate}
        className="list fade-in"
      >
        <main>
          <h2 className="list-title">{props.item.title}</h2>
          <p className="list-type">
            <small>{props.item.type}</small>
          </p>
          <p className="list-location-time">
            <small>
              <span className="list-place">{props.item.place}</span>
            </small>
          </p>
          <p>
            <Link
              as={`/a/${props.item.id}`}
              href={`/actvitat?id=${props.item.id}`}
            >
              <a>
                <small>+ info</small>
              </a>
            </Link>
          </p>
        </main>
      </div>
    </IntlProvider>
  );
};

export default List;
