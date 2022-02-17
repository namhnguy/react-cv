import React, { Component } from "react";
import EducationInfo from './components/EducationInfo'
import GeneralInfo from './components/GeneralInfo'
import PracticalInfo from './components/PracticalInfo'
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      educationItems: [],
      practicalItems: [],
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      uniName: "",
      uniCity: "",
      uniDegree: "",
      showAddEducation: false,
      position: "",
      company: "",
      city: "",
      showAddExperience: false
    }

    this.handleSetPersonalInfo = this.handleSetPersonalInfo.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
    this.handleRemoveEducationItem = this.handleRemoveEducationItem.bind(this);
    this.handleEditEducationItem = this.handleEditEducationItem.bind(this);
    this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
    this.handleRemoveExperienceItem = this.handleRemoveExperienceItem.bind(this);
    this.handleEditExperienceItem = this.handleEditExperienceItem.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSetPersonalInfo(first, last, email, phone) {
    this.setState({
      firstName: first,
      lastName: last,
      email: email,
      phoneNumber: phone,
    })
  }

  handleAddEducation() {
    this.setState({
      showAddEducation: !this.state.showAddEducation
    })
  }

  handleAddExperience() {
    this.setState({
      showAddExperience: !this.state.showAddExperience
    })
  }

  handleRemoveEducationItem(id) {
    let newEducationitems = [...this.state.educationItems];
    newEducationitems = newEducationitems.filter(item => item.id !== id);
    this.setState({
      educationItems: newEducationitems
    })
  }

  handleRemoveExperienceItem(id) {
    let newExperienceitems = [...this.state.practicalItems];
    newExperienceitems = newExperienceitems.filter(item => item.id !== id);
    this.setState({
      practicalItems: newExperienceitems
    })
  }

  handleEditEducationItem(name, city, degree, id) {
    let newEducationItems = [...this.state.educationItems];
    let newItem = {
      name: name,
      city: city,
      degree: degree,
      id: id
    }
    let index = newEducationItems.findIndex(element => element.id === id);
    newEducationItems.splice(index, 1, newItem);
    this.setState({
      educationItems: newEducationItems
    })
  }

  handleEditExperienceItem(position, company, city, id) {
    let newExperienceitems = [...this.state.practicalItems];
    let newItem = {
      position,
      company,
      city,
      id
    }
    let index = newExperienceitems.findIndex(element => element.id === id);
    newExperienceitems.splice(index, 1, newItem);
    this.setState({
      practicalItems: newExperienceitems
    })
  }

  handleSubmitEducation() {
    this.setState({
      educationItems: this.state.educationItems.concat({
        name: this.state.uniName,
        city: this.state.uniCity,
        degree: this.state.uniDegree,
        id: uniqid()
      }),
      showAddEducation: !this.state.showAddEducation,
      uniName: "",
      uniCity: "",
      uniDegree: ""
    })
  }

  handleSubmitExperience() {
    this.setState({
      practicalItems: this.state.practicalItems.concat({
        position: this.state.position,
        company: this.state.company,
        city: this.state.city,
        id: uniqid()
      }),
      showAddExperience: !this.state.showAddExperience,
      position: "",
      company: "",
      city: ""
    })
  }

  render() {
    return (
      <>
        <header className="heading"><h1>CV Application Generator</h1></header>
        <main className="main">
          <section className="general-info">
            <GeneralInfo editInfo={this.handleSetPersonalInfo}/>
          </section>
          <section className="education-info">
            <h2>Education</h2>
            {this.state.educationItems?.map((educationItem) => <EducationInfo key={educationItem.id} educationItem={educationItem} removeFunction={this.handleRemoveEducationItem} editFunction={this.handleEditEducationItem} />)}
            {this.state.showAddEducation ? <div className="education">
              <input type="text"
                name="uniName"
                value={this.state.uniName}
                onChange={this.handleChange}
                placeholder="University Name"
              />
              <input type="text"
                name="uniCity"
                value={this.state.uniCity}
                onChange={this.handleChange}
                placeholder="City"
              />
              <input type="text"
                name="uniDegree"
                value={this.state.uniDegree}
                onChange={this.handleChange}
                placeholder="Degree"
              />
              <button className="submit-btn" onClick={this.handleSubmitEducation}>Submit</button>
              <button className="cancel-btn" onClick={this.handleAddEducation}>Cancel</button>
            </div> : null}
            {!this.state.showAddEducation ? <button className="add-btn" onClick={this.handleAddEducation}>Add</button> : null}
          </section>
          <section className="practical-info">
            <h2>Experience</h2>
            {this.state.practicalItems?.map((practicalItem) => <PracticalInfo key={practicalItem.id} practicalItem={practicalItem} removeFunction={this.handleRemoveExperienceItem} editFunction={this.handleEditExperienceItem} />)}
            {this.state.showAddExperience ? <div className="experience">
              <input type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                placeholder="Position"
              />
              <input type="text"
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
                placeholder="Company"
              />
              <input type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                placeholder="City"
              />
              <button className="submit-btn" onClick={this.handleSubmitExperience}>Submit</button>
              <button className="cancel-btn" onClick={this.handleAddExperience}>Cancel</button>
            </div> : null}
            {!this.state.showAddExperience ? <button className="add-btn" onClick={this.handleAddExperience}>Add</button> : null}
          </section>
        </main>
      </>
    );
  }
}

export default App;
