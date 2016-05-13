'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {change_lang} from '../actions/index'

class header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillReceiveProps(nextProps){
  }
  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <div>
        <button onClick={e=>{
          me.props.dispatch(change_lang('en'))
        }}>{lang.english}</button>
        <button onClick={e=>{
          me.props.dispatch(change_lang('ch'))
        }}>{lang.chinese}</button>
      </div>
    )
  }
}

export default connect(state => ({lang: state.lang}))(header)