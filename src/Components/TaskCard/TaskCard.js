import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ProductifyContext from '../../ProductifyContext';
import moment from 'moment';
import './TaskCard.css';

export default class TaskCard extends Component {

    static contextType = ProductifyContext;

    constructor(props) {
        super(props);
        this.id = this.props.task.id;
        this.task_name = this.props.task.task_name;
        this.deadline = this.props.task.deadline;
        this.status = this.props.task.status;
        this.assignee = this.props.task.assignee;
    }

    onDragStart = (e, taskId) => {
        e.dataTransfer.setData("id", taskId);
    }

    getColor() {
        let color;
        switch (this.status) {
            case "inProgress":
                color = 'var(--productify-turquoise)';
                break;
            case "inReview":
                color = 'var(--productify-yellow)';
                break;
            case "complete":
                color = 'var(--productify-green)';
                break;
            case "backlog":
                color = 'var(--productify-red)';
                break;
            default:
                color = '#FFF';
        }
        return {background: color};
    }

    getDeadline() {
        if (this.deadline !== null) {
            return moment(this.deadline).format("MMM Do YYYY");
        }
        return "Deadline not set"
    }

    getInitials() {
        const user = this.context.usersInfo.find(user => user.id === this.id);
        if (!user) {
            console.log("warning : cannot find user with id " + this.id);
            return "";
        }
        const initials = user.first_name.charAt(0) + user.last_name.charAt(0);
        return initials;
    }

    getAssigneeAvatar() {
        return (
            <div className="assigneeAvatarContainer">
                <h5 className="assignee">Assignee:&nbsp;</h5>
                <div className='assigneeAvatar'>
                    <span className="assigneeAvatar__initials">{this.getInitials()}</span>
                </div>
            </div>
        )
    }

    render() {
        return (
            <NavLink to={`/projects/${this.id}`} className="taskCard__nav">
                <div key={this.id}
                     value={this.id}
                     draggable
                     onDragStart={(e) => this.onDragStart(e, this.id)}
                     className="taskCard"
                     title={this.task_name}
                     style={this.getColor()}>
                    <h4 className="taskCard__name">{this.task_name}</h4>
                    <h5 className="taskCard__deadline">{this.getDeadline()}</h5>
                    {this.assignee && this.getAssigneeAvatar()}
                </div>
            </NavLink>
        )
    }
}
