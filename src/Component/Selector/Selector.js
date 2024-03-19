import './Selector.css';
import Default from '../Default';
import { useState } from 'react';

function Selector(props) {
  const { title, need } = props;
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function arrow() {
    return (
      <div className='select-body'>
        <select
          className="select-container"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value=''>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    );
  }

  return (
    <Default title={title} need={need} arrow={arrow()} />
  );
}

export default Selector;