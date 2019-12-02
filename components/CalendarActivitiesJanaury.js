import { useCallback, useState } from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import styled from 'styled-components';
import List from './List';

const TableCalendar = styled.section`
  #calendar-janaury {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  #calendar-janaury thead,
  #calendar-janaury tr,
  #calendar-janaury tbody {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  caption {
    text-align: center;
    grid-column: 1 / -1;
    padding: 10px 0;
  }

  #calendar-janaury td,
  #calendar-janaury th {
    padding: 0;
    box-sizing: border-box;
  }

  #calendar-janaury .weekdays,
  caption {
    background: ${props => props.theme.red};
  }

  #calendar-janaury .weekdays th,
  caption {
    text-align: center;
    text-transform: uppercase;
    border: none !important;
    color: ${props => props.theme.white};
  }

  #calendar-janaury td {
    display: flex;
    flex-direction: column;
    border: 0.5px solid ${props => props.theme.red};
  }
  @media screen and (min-width: 768px) {
    #calendar-janaury td {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    #calendar-janaury td {
      font-size: 3rem;
    }
  }
  #calendar-janaury .days button {
    font-family: 'ITC Grouch', serif;
  }

  #calendar-janaury .other-month {
    background: #f5f5f5;
    color: #666;
  }
`;

const CalendarActivitiesJanaury = props => {
  let [calendarDays, setCalendarDays] = useState([
    { day: '2020-01-01T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-02T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-03T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-04T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-05T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-06T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-07T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-08T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-09T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-10T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-11T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-12T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-13T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-14T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-15T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-16T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-17T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-18T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-19T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-20T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-21T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-22T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-23T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-24T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-25T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-26T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-27T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-28T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-29T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-30T00:00:00.000Z', current: false, active: false },
    { day: '2020-01-31T00:00:00.000Z', current: false, active: false },
  ]);
  const [items, setItems] = useState({
    data: props.data.filter(
      x =>
        new Date(x.startDate).getFullYear() == 2020 &&
        new Date(x.startDate).getDate() == new Date().getDate() &&
        new Date(x.startDate).getMonth() == new Date().getMonth()
    ),
  });
  const [calendarDayActivity, setCalendarDayActivity] = useState();
  const filterDayActivites = useCallback(calendarDay => {
    setItems({ data: props.data });
    setItems({
      data: props.data.filter(
        x =>
          (new Date(x.startDate).getFullYear() == 2020 &&
            new Date(x.startDate).getDate() ==
              new Date(calendarDay.day).getDate() &&
            new Date(x.startDate).getMonth() ==
              new Date(calendarDay.day).getMonth()) ||
          (new Date(x.endDate).getFullYear() == 2020 &&
            new Date(x.endDate).getDate() ==
              new Date(calendarDay.day).getDate() &&
            new Date(x.endDate).getMonth() ==
              new Date(calendarDay.day).getMonth())
      ),
    });
    const itemsLength = {
      data: props.data.filter(
        x =>
          (new Date(x.startDate).getFullYear() == 2020 &&
            new Date(x.startDate).getDate() ==
              new Date(calendarDay.day).getDate()) ||
          (new Date(x.endDate).getFullYear() == 2020 &&
            new Date(x.endDate).getDate() ==
              new Date(calendarDay.day).getDate())
      ),
    };
    if (itemsLength.data.length == 0) {
      setCalendarDayActivity(calendarDay.day);
    } else {
      setCalendarDayActivity(calendarDay.day);
      setCalendarDays([...calendarDays, (calendarDay.active = true)]);
      setCalendarDays(calendarDays);
    }
  }, []);

  return (
    <div className='row sm-12 md-6' id='calendar'>
      <IntlProvider locale='ca'>
        <TableCalendar>
          <table id='calendar-janaury'>
            <caption>Gener 2020</caption>
            <thead>
              <tr className='weekdays'>
                <th scope='col'>Dl</th>
                <th scope='col'>Dm</th>
                <th scope='col'>Dc</th>
                <th scope='col'>Dj</th>
                <th scope='col'>Dv</th>
                <th scope='col'>Ds</th>
                <th scope='col'>Dg</th>
              </tr>
            </thead>
            <tbody>
              <tr className='days'>
                <td className='day' />
                <td className='day' />
                {calendarDays.map(calendarDay => (
                  <td className='day' key={calendarDay.day}>
                    <button
                      className={`${
                        calendarDay.day == calendarDayActivity ? 'active' : ''
                      } activity-filter-button`}
                      onClick={() => filterDayActivites(calendarDay)}>
                      <FormattedDate value={calendarDay.day} day='numeric' />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </TableCalendar>
      </IntlProvider>
      {items.data.length == 0 ? (
        <section className='event-list'>
          <div className='day-of-list'>
            <IntlProvider locale='ca'>
              <p>
                <FormattedDate
                  value={calendarDayActivity}
                  month='long'
                  day='numeric'
                />
                . No hi ha cap activitat programada aquest dia
              </p>
            </IntlProvider>
          </div>
        </section>
      ) : (
        <section className='event-list'>
          <div className='day-of-list'>
            <IntlProvider locale='ca'>
              <h2>
                <FormattedDate
                  value={items.data[0].startDate}
                  month='long'
                  day='numeric'
                />
                {items.data[0].endDate && (
                  <>
                    {' / '}
                    <FormattedDate
                      value={items.data[0].endDate}
                      month='long'
                      day='numeric'
                    />
                  </>
                )}
              </h2>
            </IntlProvider>
          </div>
          {items.data
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
              <List
                item={dat}
                id={id}
                isActiveDayActivities={''}
                key={`${dat.title}-${dat.startDate}`}
              />
            ))}
        </section>
      )}
    </div>
  );
};

export default CalendarActivitiesJanaury;
