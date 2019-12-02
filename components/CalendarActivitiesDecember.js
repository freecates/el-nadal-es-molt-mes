import { useCallback, useState } from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import styled from 'styled-components';
import List from './List';

const TableCalendar = styled.section`
  margin-bottom: 1em;
  #calendar-december {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  #calendar-december thead,
  #calendar-december tr,
  #calendar-december tbody {
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

  #calendar-december td,
  #calendar-december th {
    padding: 0;
    box-sizing: border-box;
  }

  #calendar-december .weekdays,
  caption {
    background: ${props => props.theme.red};
  }

  #calendar-december .weekdays th,
  caption {
    text-align: center;
    text-transform: uppercase;
    border: none !important;
    color: ${props => props.theme.white};
  }

  #calendar-december td {
    display: flex;
    flex-direction: column;
    border: 0.5px solid ${props => props.theme.red};
  }
  @media screen and (min-width: 768px) {
    #calendar-december td {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    #calendar-december td {
      font-size: 3rem;
    }
  }
  #calendar-december .days button {
    font-family: 'ITC Grouch', serif;
  }

  #calendar-december .other-month {
    background: #f5f5f5;
    color: #666;
  }
`;

const CalendarActivitiesDecember = props => {
  let [calendarDays, setCalendarDays] = useState([
    { day: '2019-12-01T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-02T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-03T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-04T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-05T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-06T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-07T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-08T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-09T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-10T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-11T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-12T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-13T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-14T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-15T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-16T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-17T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-18T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-19T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-20T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-21T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-22T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-23T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-24T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-25T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-26T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-27T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-28T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-29T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-30T00:00:00.000Z', current: false, active: false },
    { day: '2019-12-31T00:00:00.000Z', current: false, active: false },
  ]);
  const [items, setItems] = useState({
    data: props.data.filter(
      x =>
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
          new Date(x.startDate).getDate() ==
            new Date(calendarDay.day).getDate() &&
          new Date(x.startDate).getMonth() ==
            new Date(calendarDay.day).getMonth()
      ),
    });
    const itemsLength = {
      data: props.data.filter(
        x =>
          new Date(x.startDate).getDate() == new Date(calendarDay.day).getDate()
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
          <table id='calendar-december'>
            <caption>Desembre 2019</caption>
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
                <td className='day' />
                <td className='day' />
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
                key={`${dat.title}-${dat.startDate}`}
                isActiveDayActivities={''}
              />
            ))}
        </section>
      )}
    </div>
  );
};

export default CalendarActivitiesDecember;
