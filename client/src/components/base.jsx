import React from 'react'
// import {post_message} from '../actions/ws_actions'
// import {update_ui} from '../actions/ui_actions'

export var base = ComposedComponent => class extends React.Component{
    // constructor(props) {super(props)}

    send(message){
      // this.props.dispatch(post_message(message))
    }

    set_status(menu,active,company,project){
        // this.props.dispatch(update_ui({
        //     menu: menu,
        //     active: active,
        //     company: company,
        //     project: project
        // }))
    }

    componentDidMount(){
        this.setState({
            data: { data: 'Data from HOC...'}
        });

        // if(this.props.session.connected){
        //     this.page_load(this.props)
        // }
    }

    componentWillReceiveProps(nextProps){
        // if(!this.props.session.connected && nextProps.session.connected){
        //     this.page_load(nextProps)
        //     return 
        // }
        // this.on_message(nextProps.ws_message)
    }

    page_load(props){}

    on_message(message){}

    render() {
        return <ComposedComponent 
        send={this.send}
        set_status={this.set_status}
        page_load={this.page_load}
        on_message={this.on_message}
        {...this.props} 
        {...this.state} />;
    }
}

// base.propTypes = {
//     session: React.PropTypes.object,
//     ws_message: React.PropTypes.object,
//     ui: React.PropTypes.object
// }

// base.defaultProps = { 
//     session:{},
//     ws_message:{},
//     ui:{}
// }

