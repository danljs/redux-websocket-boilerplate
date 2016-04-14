'use strict'
import React from 'react';
import { connect } from 'react-redux'

@connect(state => state)
export default class login extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      info: ''
    }
  }
  
  render() {
    var me = this
    return (
      <div className='login'>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input ref="email" type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input ref="password" type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={e => {
                if (!me.refs.email.checkValidity()||!me.refs.password.checkValidity()) {
                  return
                }
                e.preventDefault()
                console.log(me)
                me.props.history.push('/dashboard')
                // me.props.history.push({ path: '/dashboard', query: {}, state: {} })
                // me.props.history.pushState(null, '/dashboard')
              }}>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}