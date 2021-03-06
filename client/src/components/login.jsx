'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router'
import { loging_in } from '../actions/index'

class login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.au.connected && nextProps.au.connected) {
      this.props.router.push('/dashboard')
    }
  }

  render() {
    const lang = this.props.lang.keys
    return (
      <div className="login">
        <form method="POST" action="login" className="form-signin">
          <h2 className="form-heading">Log in</h2>
          <div className="form-group">
            <span>{this.props.au.message}</span>
            <input name="username" ref="username" type="text" className="form-control" placeholder="Username" autoFocus />
            <input name="password" ref="password" type="password" className="form-control" placeholder="Password" />
            <input type="hidden" name="_csrf.parameterName" value="_csrf.token" />

            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              onClick={(e) => {
                if (!this.refs.username.checkValidity() || !this.refs.password.checkValidity()) {
                  return
                }
                e.preventDefault()
                this.props.dispatch(loging_in({
                  username: this.refs.username.value,
                  password: this.refs.password.value,
                }))
              }}
            >{lang.sign_in}</button>
            <h4 className="text-center"><Link to="/register">Create an account</Link></h4>
          </div>
        </form>
      </div>
    )
  }
}
export default connect(any => any)(withRouter(login))
// export default connect(any => any)(withRouter(login))
