import React, { useState, Component } from 'react';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';

import { useForm } from '../hooks/handleHook';
 
// class MyDatePicker extends Component
 
//   onChange = date => this.setState({ date })
 
//   render() {

//   }
// }

const MyDatePicker = () => {
  const [date, setDate] = useState();

  const { fields, submit, handleChanges } = useForm();

  return (
    <div className="date-picker">
      <DatePicker
        onChange={handleChanges}
        value={date}
      />
    </div>
  );

}

export default connect(null, {})(MyDatePicker);