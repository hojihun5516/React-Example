import React, { Component } from 'react';

class PhoneForm extends Component {

  state = {
    name: '',
    phone: '',
  }

  handleSubmit = (e) => {
    // 페이지 새로고침방지
    e.preventDefault();
    //state값을 App.js의 handleCreate에 보내준다
    this.props.onCreate(this.state);
    this.setState({
      name : '',
      phone: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
