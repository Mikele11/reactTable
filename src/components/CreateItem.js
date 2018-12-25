import React, { Component } from 'react';

class CreateItem extends Component {

  state = {
    firstName: '',
    lastName:  '',
    phone: '',
    age: 0,
    errors:[],
    inputClassfirstName: 'form-control',
    inputClasslastName: 'form-control',
    inputClassphone: 'form-control',
    inputClassage: 'form-control',
  };

  validate = (firstName, lastName, phone, age) => {
    const errors = [];
  
    if (firstName.length < 2) {
      errors.push("Name can't be so short");
      this.setState({
        inputClassfirstName: "form-control invalid"
      })
    } else {
      this.setState({
        inputClassfirstName: "form-control"
      })
    }

    if ((/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/.test(firstName) === false) && (/^[a-zA-Z]+$/.test(firstName) === false)) {
      errors.push("Name must have only letters");
      this.setState({
        inputClassfirstName: "form-control invalid"
      })
    } else {
      this.setState({
        inputClassfirstName: "form-control"
      })
    }
  
    if (lastName.length < 2) {
      errors.push("Last Name can't be so short");
      this.setState({
        inputClasslastName: "form-control invalid"
      })
    } else {
      this.setState({
        inputClasslastName: "form-control"
      })
    }

    if ((/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/.test(lastName) === false) && (/^[a-zA-Z]+$/.test(lastName) === false)) {
      errors.push("Last Name must have only letters");
      this.setState({
        inputClasslastName: "form-control invalid"
      })
    } else {
      this.setState({
        inputClasslastName: "form-control"
      })
    }

    if ((/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone)) === false) {
      errors.push("Wrong number phone");
      this.setState({
        inputClassphone: "form-control invalid"
      })
    } else {
      this.setState({
        inputClassphone: "form-control"
      })
    } 

    if ((age<1) || (age>140)) {
      errors.push("Age too big or too small");
      this.setState({
        inputClassage: "form-control invalid"
      })
    } else {
      this.setState({
        inputClassage: "form-control"
      })
    }
    return errors;
  } 

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  onSubmit = (e) => {
    e.preventDefault();// this becose dont move event to up
    const { firstName, lastName, phone, age} = this.state;
    const errors = this.validate(firstName, lastName, phone, age);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.props.submit(firstName, lastName, phone, age);
      this.setState({ 
        firstName: '',
        lastName:'',
        phone: '',
        age: 0,
        errors:[],
        inputClassfirstName: 'form-control',
        inputClasslastName: 'form-control',
        inputClassphone: 'form-control',
        inputClassage: 'form-control', 
      });
    }
  }


  render() {
    const { firstName, lastName, phone, age, errors } = this.state;
    return (
        <div className="addForm">
            <h3>Add New Contact</h3>
            <form onSubmit={this.onSubmit}>
                {errors.map(error => (
                  <p className="messErr" key={error}>Error: {error}</p>
                ))}
                <div className="form-group">
                    <label>Enter yours fist name:  </label>
                    <input
                      name="firstName" 
                      type="text" 
                      className={this.state.inputClassfirstName} 
                      value={firstName}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Enter yours last name: </label>
                    <input 
                      type="text"
                      name="lastName" 
                      className={this.state.inputClasslastName}
                      value={lastName}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Enter yours phone: </label>
                    <input 
                      name="phone"
                      type="text" 
                      className={this.state.inputClassphone}
                      value={phone}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                    <label>Enter yours age: </label>
                    <input
                      name="age" 
                      type="number" 
                      className={this.state.inputClassage}
                      value={age}
                      onChange={this.onChange}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Save" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
  }
}

export default CreateItem;