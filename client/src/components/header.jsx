'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {change_lang} from '../actions/index'
import base from './base'

class header extends base{
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
      <div className='header-area'>
      {/*}  <button onClick={e=>{
        }}>{lang.logout}</button>
        <button onClick={e=>{
          me.props.dispatch(change_lang('en'))
        }}>{lang.english}</button>
        <button onClick={e=>{
          me.props.dispatch(change_lang('ch'))
        }}>{lang.chinese}</button>
        <button onClick={e=>{
          me.context.router.push('/admin')
        }}>{lang.admin}</button>
        <button onClick={e=>{
          me.context.router.push('/quote')
        }}>{lang.quote}</button>
      */}</div>
    )
  }
}

export default connect(state => ({lang: state.lang}))(header)