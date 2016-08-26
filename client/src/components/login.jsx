'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {post_message} from '../actions/index'
import {withRouter} from 'react-router'
import {base} from './base.jsx'

class login extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      info: ''
    }
  }
  
  // static contextTypes = {router: React.PropTypes.object}
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps.ws)
    if(!this.props.ws.connected && nextProps.ws.connected){
      return
    }
    
    !!nextProps.ws.received ? this.props.router.push('/dashboard') : ''
    // !!nextProps.ws.received ? this.context.router.push('/dashboard') : ''
  }
  render() {
    let lang = this.props.lang.keys
    return (
      <div className='login'>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">{lang.email}</label>
            <div className="col-sm-10">
              <input ref="email" type="email" className="form-control" id="inputEmail3" placeholder={lang.email}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">{lang.password}</label>
            <div className="col-sm-10">
              <input ref="password" type="password" className="form-control" id="inputPassword3" placeholder={lang.password}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> {lang.remember_me}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default" onClick={e=>{
                if (!this.refs.email.checkValidity()||!this.refs.password.checkValidity()) {
                  return
                }
                e.preventDefault()
                this.props.dispatch(post_message({author:'message',body:'login'}))
              }}>{lang.sign_in}</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default connect(any => any)(withRouter(base(login)))
// export default connect(any => any)(withRouter(login))