'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {post_message} from '../actions/index'
import {withRouter} from 'react-router'

class register extends React.Component{
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
      <div className='register'>
        <form method="POST" modelAttribute="userForm" className="form-signin">
          <h2 className="form-signin-heading">Create your account</h2>
          <div className="form-group ${status.error ? 'has-error' : ''}">
              <input type="text" ref="username" className="form-control" placeholder="Username" autofocus="true"/>
              <span>error username</span>
          </div>
          <div className="form-group ${status.error ? 'has-error' : ''}">
              <input type="password" ref="password" className="form-control" placeholder="Password"/>
              <span>error password</span>
          </div>
          <div className="form-group ${status.error ? 'has-error' : ''}">
              <input type="password" ref="passwordConfirm" className="form-control" placeholder="Confirm your password"/>
              <span>error passwordConfirm</span>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default connect(any => any)(withRouter(register))