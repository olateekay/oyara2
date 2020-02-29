import React from 'react';
import './TransactionForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class TransactionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'option',
        fullname: "",
        accountnumber: "",
        password: " ",
        transaction: " ",
        actualBalance: '40000',
        data: {
          StartDate: '',
          EndDate: ''
        }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBalance = this.handleBalance.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    

    handleSubmit(event){
      if (this.state.value == "balance") {
        alert('your balance is 40000')
      }else{
        alert('you opted for a transfer')
      };
      event.preventDefault();
    }

    handleBalance (event) {

    }
  
    render() {
      return (
        <div className="App">
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Transaction Form</span>
              </div>
            </nav>
          </div>
        </header>
        <div >
          <div className="">
            <div className="">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Full Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Account Number</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="accountnumber"
                      value={this.state.accountnumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">What would you like to do</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.transaction}
                        name="transaction"
                        onChange={this.handleChange}
                      >
                        <option value="vscode">Check Balance</option>
                        <option value="atom">Transfer</option>
                      </select>
                    </div>
                  </div>
                </div>

    

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={this.state.terms}
                        onChange={this.handleChange}
                      />
                      I agree to the{" "}
                      <a href="https://google.com">terms and conditions</a>
                    </label>
                  </div>
                </div>

                

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
        
      );
    }
  }
  
 export default TransactionForm;







