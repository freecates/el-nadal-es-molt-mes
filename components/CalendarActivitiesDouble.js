import { useCallback, useState } from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import styled from 'styled-components';
import List from './List';

const TableCalendar = styled.section`
  #calendar {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  #calendar thead,
  #calendar tr,
  #calendar tbody {
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

  #calendar td,
  #calendar th {
    padding: 0;
    box-sizing: border-box;
  }

  #calendar .weekdays,
  caption {
    background: ${props => props.theme.red};
  }

  #calendar .weekdays th,
  caption {
    text-align: center;
    text-transform: uppercase;
    border: none !important;
    color: ${props => props.theme.white};
  }

  #calendar td {
    display: flex;
    flex-direction: column;
    border: 0.5px solid ${props => props.theme.red};
  }
  @media screen and (min-width: 768px) {
    #calendar td {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    #calendar td {
      font-size: 3rem;
    }
  }
  #calendar .days button {
    font-family: 'ITC Grouch', serif;
  }

  #calendar .other-month {
    background: #f5f5f5;
    color: #666;
  }
`;

const CalendarActivities = props => {
  let december = [
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
    { day: '2019-12-31T00:00:00.000Z', current: false, active: false }
  ];
  let janaury = [
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
    { day: '2020-01-31T00:00:00.000Z', current: false, active: false }
  ];
  let [calendarDays, setCalendarDays] = useState(december);
  const [items, setItems] = useState({
    data: props.data.filter(
      x =>
        new Date(x.startDate).getDate() == new Date().getDate() &&
        new Date(x.startDate).getMonth() == new Date().getMonth()
    )
  });
  const changeMonthDecember = () => {
    setCalendarDays(december);
  };
  const changeMonthJanaury = () => {
    setCalendarDays(janaury);
  };
  const [isCurrentDayActivities, setIsCurrentDayActivities] = useState();
  const filterDayActivites = useCallback(calendarDay => {
    setItems({ data: props.data });

    if (calendarDay.day.includes('2020')) {
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
        )
      });
    } else {
      setItems({
        data: props.data.filter(
          x =>
            new Date(x.startDate).getDate() ==
              new Date(calendarDay.day).getDate() &&
            new Date(x.startDate).getMonth() ==
              new Date(calendarDay.day).getMonth()
        )
      });
    }
    const itemsLength = {
      data: props.data.filter(
        x =>
          new Date(x.startDate).getDate() == new Date(calendarDay.day).getDate()
      )
    };
    if (itemsLength.data.length == 0) {
      return null;
    } else {
      setIsCurrentDayActivities(false);
      setCalendarDays([...calendarDays, (calendarDay.active = true)]);
      setCalendarDays(calendarDays);
    }
  }, []);

  return (
    <div className="row sm-12 md-6" id="calendar">
      <IntlProvider locale="ca">
        <TableCalendar>
          <table id="calendar" ismonth={calendarDays}>
            <caption>
              <FormattedDate
                value={calendarDays[0].day}
                year="numeric"
                month="long"
              />
            </caption>
            <thead>
              <tr className="weekdays">
                <th scope="col">Dl</th>
                <th scope="col">Dm</th>
                <th scope="col">Dc</th>
                <th scope="col">Dj</th>
                <th scope="col">Dv</th>
                <th scope="col">Ds</th>
                <th scope="col">Dg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="days">
                <td className="day" />
                <td className="day" />
                <td className="day" />
                <td className="day" />
                <td className="day" />
                <td className="day" />
                {calendarDays.map(calendarDay => (
                  <td className="day" key={calendarDay.day}>
                    <button
                      className={`${
                        calendarDay.active == true ? 'active' : ''
                      } activity-filter-button`}
                      onClick={() => filterDayActivites(calendarDay)}
                    >
                      <FormattedDate value={calendarDay.day} day="numeric" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button onClick={() => changeMonthDecember()}>Desembre</button>
          <button onClick={() => changeMonthJanaury()}>Gener</button>
        </TableCalendar>
      </IntlProvider>
      {items.data.length == 0 ? (
        ''
      ) : (
        <section className="event-list">
          <div className="day-of-list">
            <IntlProvider locale="ca">
              <h2>
                <FormattedDate
                  value={items.data[0].startDate}
                  month="long"
                  day="numeric"
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
              <List item={dat} id={id} isActiveDayActivities={''} />
            ))}
        </section>
      )}
    </div>
  );
};

export default CalendarActivities;
