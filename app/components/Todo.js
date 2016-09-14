import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:[
                {
                    head:'dummy task',
                    description:'dummy description',
                    time:Date.now()
                }
            ]
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Messages messages={this.props.messages}/>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{this.state.tasks[0].head}</h1>
                        <h1>{this.state.tasks[0].description}</h1>
                        <h1>{this.state.tasks[0].time}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages : state.messages
    }
};

export default connect(mapStateToProps)(Todo)