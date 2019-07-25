import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filtersAction';

class ExpenseListFilters extends React.Component {

  state = {
    calenderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate),
    this.props.setEndDate(endDate)
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
           <input type="text" className="text-input" value={this.props.filters.text} onChange={(e) => this.props.setTextFilter(e.target.value)} placeholder="Search expenses" />
          </div>
          <div className="input-group__item">
            <select className="select" value={this.props.filters.sortBy} onChange={(e) => this.props.selectedSortBy(e.target.value)}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
               startDateId="MyDatePickerStart"
               endDateId="MyDatePickerEnd"
               startDate={this.props.filters.startDate}
               endDate={this.props.filters.endDate}
               onDatesChange={this.onDatesChange}
               focusedInput={this.state.calenderFocused}
               onFocusChange={this.onFocusChange}
               showClearDates
               numberOfMonths={1}
               isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  };

}

const mapStateToProps = state => {
   return {
      filters: state.filters
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setStartDate: (startDate) => dispatch(setStartDate(startDate)),
      setEndDate: (endDate) => dispatch(setEndDate(endDate)),
      setTextFilter: (text) => dispatch(setTextFilter(text)),
      selectedSortBy: (value) => value === 'amount' ? dispatch(sortByAmount()) : dispatch(sortByDate()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
