'use strict'
import React from 'react'
import { connect } from 'react-redux'
import base from './base'
import moment from 'moment'

class dashboard extends base{
  constructor(props) {
      super(props)
      this.state = {
        now: moment(),
        weekdays: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
        now : moment(),
        selected_date : moment(),
        month_first : moment().date(1).day(0),
        month_last : moment().endOf('month').day(6),
      }
  }

  build_weeks(month_first, month_last, events){
    let days_total = month_last.diff(month_first, 'days') + 1;  
    let day_pointer = 0,
        week_pointer = 0; 
    let weeks = [];
    for(let i = 0, m = parseInt(days_total / 7); i < m; i++){
      weeks.push({days: []});
    } 
    
    while(day_pointer < days_total){
      day_pointer ++;
      let date_events = {
        date: moment(month_first).add(day_pointer - 1, 'days'),
        events: []
      }
      if(events && events.length > 0){
        for(let i = 0; i < events.length; i ++){
          if(date_events.date.format('YYYY-MM-DD') === moment(events[i].start).format('YYYY-MM-DD')){
            date_events.events.push(events[i]);
            events.splice(i, 1);
          }
        }
      }

      weeks[week_pointer].days.push(date_events);
      if(day_pointer > 0 && day_pointer % 7 === 0){
        week_pointer ++;
      }
    }
    return weeks;
  }

  render() {
    var me = this
    let parent = this;
    const { dispatch } = this.props;
    var weeks = this.build_weeks(this.state.month_first, this.state.month_last)
    return (
      <div>
        <div>Dashboardd</div>
        <div className="calendar">
          <div className="month">
            <div className="week">
              {
                this.state.weekdays.map((weekday, i) => {return (
                  <div key={i} className="header">{weekday}</div>
                )})
              }
            </div>
            {
              weeks.map((week, i) => {return (
                <div key={i} className="week">
                  {
                    week.days.map((day, ii) => {return (
                      <div key={ii} className="day" style={{backgroundColor: parent.state.now.format("YYYY-MM-DD") === day.date.format("YYYY-MM-DD") ? '#fcf8e3' : '#fff' }}>
                        <div className="header">{day.date.date()}</div>
                        {
                          day.events.map((event, iii)=>{return (
                            <div className="event" key={iii}>{event.title} {moment(event.start).format('YYYY-MM-DD')}
                              onClick={() => {
                                dispatch(calendar_display(false))
                                dispatch(form_event(event))
                              }}
                            </div>
                          )})
                        }
                      </div>
                    )})
                  }
                </div>
              )})
            }
          </div>
        </div>
        <button type="submit" className="btn btn-default" onClick={e => {
          me.context.router.push('/quote')
        }}>go!</button>
      </div>
    )
  }
}
export default connect(any => any)(dashboard)