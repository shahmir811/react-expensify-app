import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends React.Component {

  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? (this.props.expense.amount / 100 ).toString() : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calenderFocused: false,
    error: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // match only decimal numvbers upto 2 points
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  }

  // Andrew named the below function as onSubmit
  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      // clear error
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }

  }

  render() {
    return (
        <form className="form" onSubmit={this.onFormSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input type="text" placeholder="Description" className="text-input" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
          <input type="text" placeholder="Amount" className="text-input" value={this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea placeholder="Add a note for your expenses (optional)" className="textarea" value={this.state.note} onChange={this.onNoteChange}></textarea>
          <div>
            <button className="button" type="submit">Save Expense</button>
          </div>
        </form>
    );
  };

}

export default ExpenseForm;
