import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';

class Modal extends React.Component{
    render(){
        return (
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:[
                {
                    head:'dummy task',
                    description:'dummy description',
                    time:Date.now(),
                    status:'queued'
                }
            ]
        }
    }
    showModal() {
        $(this.refs.modal.getDOMNode()).modal();
    }
    render() {
        return (
            <div className="container-fluid">
                <Messages messages={this.props.messages}/>
                <Modal/>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3">
                        <button className="btn btn-block btn-info" onClick={this.showModal}>Add Task</button>
                        <div className="panel todos">
                            <h1>{this.state.tasks[0].head}</h1>
                            <h3>{this.state.tasks[0].description}</h3>
                            <h3>{this.state.tasks[0].time}</h3>
                            <h3>{this.state.tasks[0].status}</h3>
                        </div>
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