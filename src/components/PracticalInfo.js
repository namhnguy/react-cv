import React, { Component } from "react";

class PracticalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.practicalItem.position,
            company: this.props.practicalItem.company,
            city: this.props.practicalItem.city,
            id: this.props.practicalItem.id,
            disabled: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDelete() {
        this.props.removeFunction(this.state.id);
    }

    handleEdit(e) {
        if (e.target.innerText === 'Edit') {
            e.target.innerText = 'Save'
            this.setState({disabled: false});
        }
        else {
            this.props.editFunction(this.state.position, this.state.company, this.state.city, this.state.id);
            e.target.innerText = 'Edit';
            this.setState({disabled: true});
        }
    }

    render() {
        return (
            <div className="practical">
                <input type="text"
                    name="position"
                    value={this.state.position}
                    onChange={this.handleChange}
                    placeholder="Position"
                    disabled={this.state.disabled}
                />
                <input type="text"
                    name="company"
                    value={this.state.company}
                    onChange={this.handleChange}
                    placeholder="Company"
                    disabled={this.state.disabled}
                />
                <input type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City"
                    disabled={this.state.disabled}
                />
                <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
                <button className="edit-btn" onClick={this.handleEdit}>Edit</button>
            </div>

        )
    }
}

export default PracticalInfo;
