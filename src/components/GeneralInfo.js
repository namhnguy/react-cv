import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });   
    }

    handleSave() {
        this.props.editInfo(this.state.firstName, this.state.lastName, this.state.email, this.state.phoneNumber);
    }

    render() {
        return (
            <div className="general">
                <header className="general-heading"><h2>Personal Information</h2></header>
                <input type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name"
                />
                <input type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />
                <input type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                />
                <input type="text"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    placeholder="Phone Number"
                />
                <button className="delete-btn" onClick={this.handleSave}>Save</button>
            </div>

        )
    }
}

export default GeneralInfo;
