'use strict'
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router'

const build_weeks = (month_first, month_last, events) => {
  const days_total = month_last.diff(month_first, 'days') + 1
  let day_pointer = 0
  let week_pointer = 0
  const weeks = []
  for (let i = 0, m = parseInt(days_total / 7, 10); i < m; i += 1) {
    weeks.push({ days: [] })
  }

  while (day_pointer < days_total) {
    day_pointer += 1
    const date_events = {
      date: moment(month_first).add(day_pointer - 1, 'days'),
      events: [],
    }
    if (events && events.length > 0) {
      for (let i = 0; i < events.length; i += 1) {
        if (date_events.date.format('YYYY-MM-DD') === moment(events[i].start).format('YYYY-MM-DD')) {
          date_events.events.push(events[i])
          events.splice(i, 1)
        }
      }
    }

    weeks[week_pointer].days.push(date_events)
    if (day_pointer > 0 && day_pointer % 7 === 0) {
      week_pointer += 1
    }
  }
  return weeks
}

class dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: moment(),
      weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      selected_date: moment(),
      month_first: moment().date(1).day(0),
      month_last: moment().endOf('month').day(6),
    }
  }

  render() {
    const { dispatch } = this.props
    const weeks = build_weeks(this.state.month_first, this.state.month_last)
    return (
      <div>
        <div>Dashboard</div>
        <div className="calendar">
          <div className="month">
            <div className="week">
              {
              this.state.weekdays.map((weekday, i) =>
                <div key={i} className="header">{weekday}</div>
              )
            }
            </div>
            {
              weeks.map((week, i) =>
                <div key={i} className="week">
                  {
                  week.days.map((day, ii) =>
                    <div
                      key={ii}
                      className="day"
                      style={{
                        backgroundColor: this.state.now.format('YYYY-MM-DD') === day.date.format('YYYY-MM-DD') ? '#fcf8e3' : '#fff',
                      }}
                    >
                      <div className="header">{day.date.date()}</div>
                      {
                        day.events.map((event, iii) =>
                          <div className="event" key={iii}>{event.title} {moment(event.start).format('YYYY-MM-DD')}
                            onClick={() => {
                              // dispatch(calendar_display(false))
                              // dispatch(form_event(event))
                            }}
                          </div>
                        )
                      }
                    </div>
                  )
                }
                </div>
              )
            }
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={() => this.props.router.push('/admin')}
        >
        go!
        </button>
      </div>
    )
  }
}
export default connect(any => any)(withRouter(dashboard))
