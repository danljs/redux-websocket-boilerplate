'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {loging_in} from '../actions/index'
import {withRouter, Link} from 'react-router'
import {base} from './base.jsx'

class login extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      info: ''
    }
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.ws)
    if(!this.props.ws.connected && nextProps.ws.connected){
      return
    }
    
    !!nextProps.ws.received ? this.props.router.push('/dashboard') : ''
  }
  render() {
    let lang = this.props.lang.keys
    return (
      <div className='login'>
        <form method="POST" action="${contextPath}/login" className="form-signin">
          <h2 className="form-heading">Log in</h2>
          <div className="form-group ${error != null ? 'has-error' : ''}">
              <span>message</span>
              <input name="username" ref="username" type="text" className="form-control" placeholder="Username" autofocus="true"/>
              <input name="password" ref="password" type="password" className="form-control" placeholder="Password"/>
              <span>error</span>
              <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>

              <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>

              <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={e=>{
                if (!this.refs.username.checkValidity()||!this.refs.password.checkValidity()) {
                  return
                }
                e.preventDefault()
                this.props.dispatch(loging_in({username : this.refs.username, password : this.refs.password}))
              }}>Log In</button>

              <h4 className="text-center"><Link to="/register">Create an account</Link></h4>
          </div>
        </form>
      </div>
    )
  }
}
export default connect(any => any)(withRouter(base(login)))
// export default connect(any => any)(withRouter(login))