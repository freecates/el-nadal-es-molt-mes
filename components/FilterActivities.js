import { useCallback, useState } from 'react';
import Card from './Card';

const FilterActivities = props => {
  const [items, setItems] = useState(props.data);
  const [isActiveTallers, setIsActiveTallers] = useState(false);
  const [isActiveEspectacles, setIsActiveEspectacles] = useState(false);
  const [isActiveFires, setIsActiveFires] = useState(false);
  const [isActiveTradicions, setIsActiveTradicions] = useState(false);
  const [isActiveActivitats, setIsActiveActivitats] = useState(false);
  const [isActiveTotes, setIsActiveTotes] = useState(false);
  const filterFires = useCallback(() => {
    setItems(items);
    setItems(items => items.filter(x => x.type == 'Fira'));
    setIsActiveFires(true);
    setIsActiveTradicions(false);
    setIsActiveEspectacles(false);
    setIsActiveTallers(false);
    setIsActiveActivitats(false);
    setIsActiveTotes(false);
  }, []);
  const filterTradicions = useCallback(() => {
    setItems(items);
    setItems(items => items.filter(x => x.type == 'Tradició'));
    setIsActiveFires(false);
    setIsActiveTradicions(true);
    setIsActiveEspectacles(false);
    setIsActiveTallers(false);
    setIsActiveActivitats(false);
    setIsActiveTotes(false);
  }, []);
  const filterEspectacles = useCallback(() => {
    setItems(items);
    setItems(items => items.filter(x => x.type == 'Espectacle'));
    setIsActiveFires(false);
    setIsActiveTradicions(false);
    setIsActiveEspectacles(true);
    setIsActiveTallers(false);
    setIsActiveActivitats(false);
    setIsActiveTotes(false);
  }, []);
  const filterTallers = useCallback(() => {
    setItems(items);
    setItems(items => items.filter(x => x.type == 'Taller'));
    setIsActiveFires(false);
    setIsActiveTradicions(false);
    setIsActiveEspectacles(false);
    setIsActiveTallers(true);
    setIsActiveActivitats(false);
    setIsActiveTotes(false);
  }, []);
  const filterActivitats = useCallback(() => {
    setItems(items);
    setItems(items => items.filter(x => x.type == 'Activitat'));
    setIsActiveFires(false);
    setIsActiveTradicions(false);
    setIsActiveEspectacles(false);
    setIsActiveTallers(false);
    setIsActiveActivitats(true);
    setIsActiveTotes(false);
  }, []);
  const filterTotes = useCallback(() => {
    setItems(items);
    setIsActiveFires(false);
    setIsActiveTradicions(false);
    setIsActiveEspectacles(false);
    setIsActiveTallers(false);
    setIsActiveActivitats(false);
    setIsActiveTotes(true);
  }, []);

  return (
    <>
      <div className="row sm-12 md-6 lg-3 xl-7-c">
        <button
          className={
            isActiveFires
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterFires}
        >
          Fires
        </button>
        <button
          className={
            isActiveTradicions
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterTradicions}
        >
          Tradicions
        </button>
        <button
          className={
            isActiveEspectacles
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterEspectacles}
        >
          Espectacles
        </button>
        <button
          className={
            isActiveTallers
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterTallers}
        >
          Tallers
        </button>
        <button
          className={
            isActiveActivitats
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterActivitats}
        >
          Activitats
        </button>
        <button
          className={
            isActiveTotes ||
            !(
              isActiveFires ||
              isActiveTallers ||
              isActiveActivitats ||
              isActiveEspectacles ||
              isActiveTradicions
            )
              ? 'active activity-filter-button'
              : 'activity-filter-button'
          }
          onClick={filterTotes}
        >
          Totes
        </button>
        <a
          className={'activity-filter-button calendar'}
          href="#calendar-december"
        >
          Calendari
        </a>
      </div>
      <>
        <div className="row sm-12 md-6 lg-4 xl-3">
          {items
            .sort((a, b) => {
              if (a.id < b.id) {
                return -1;
              }
              if (a.id > b.id) {
                return 1;
              }
              return 0;
            })
            .map((item, id) => (
              <Card
                item={item}
                key={id.toString()}
                id={id}
                isActiveTotes={isActiveTotes}
                isActiveFires={isActiveFires}
                isActiveTallers={isActiveTallers}
                isActiveEspectacles={isActiveEspectacles}
              />
            ))}
        </div>
      </>
    </>
  );
};

export default FilterActivities;
