import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
 
class MyDatePicker extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({date})
 
  render() {
    return (
      <div className="date-picker">
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default MyDatePicker;