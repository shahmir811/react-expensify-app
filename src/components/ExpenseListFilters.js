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
      <div>
         <input type="text" value={this.props.filters.text} onChange={(e) => this.props.setTextFilter(e.target.value)} />
         <select value={this.props.filters.sortBy} onChange={(e) => this.props.selectedSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
         </select>
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
