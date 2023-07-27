import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    isAgree: false,
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleIsAgree = (e) => {
    this.setState({
      isAgree: e.target.checked,
    });
  };

  submitBtn = () => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ;
    const isValidEmail = regEmail.test(this.state.email)
    const isValidIsAgree = this.state.isAgree;

    if(!isValidEmail){
      alert("Please enter a valid email")
      return
    }
    if(!isValidIsAgree){
      alert("Please, agree with terms")
      return
    }

    this.setState({
      email: "",
      isAgree:""
    })
    alert("Congratulations")
  };

  render() {
    const { email, isAgree } = this.state;
    return (
      <div className="contact">
        <div className="contact-card">
          <div className="contact-title">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-form">
            <form action="#">
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleEmail}
                />
              </div>
              <div>
                <input
                  className="form-checkbox-input my-3 mx-2"
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  checked={isAgree}
                  onChange={this.handleIsAgree}
                />
                <label htmlFor="agreement">Terms & Conditions</label>
              </div>
              <button onClick={this.submitBtn} className="btn btn-success text-end ml-auto mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
