import React, { Component } from "react";

class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uniName: this.props.educationItem.name,
            city: this.props.educationItem.city,
            degree: this.props.educationItem.degree,
            id: this.props.educationItem.id,
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
            this.props.editFunction(this.state.uniName, this.state.city, this.state.degree, this.state.id);
            e.target.innerText = 'Edit';
            this.setState({disabled: true});
        }
    }

    render() {
        return (
            <div className="education">
                <input type="text"
                    name="uniName"
                    value={this.state.uniName}
                    onChange={this.handleChange}
                    placeholder="University Name"
                    disabled={this.state.disabled}
                />
                <input type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City"
                    disabled={this.state.disabled}
                />
                <input type="text"
                    name="degree"
                    value={this.state.degree}
                    onChange={this.handleChange}
                    placeholder="Degree"
                    disabled={this.state.disabled}
                />
                <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
                <button className="edit-btn" onClick={this.handleEdit}>Edit</button>
            </div>

        )
    }
}

export default EducationInfo;
