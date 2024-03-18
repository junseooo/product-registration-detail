import './Toggle.css';
import { MdCheckCircle, MdOutlineCircle } from 'react-icons/md';
import { useState } from 'react';

function Toggle(props) {
  const { title, firstText, secondText } = props;
  const [firstToggle, setFirstToggle] = useState(false);
  const [secondToggle, setSecondToggle] = useState(false);

  const handleFirstToggleClick = () => {
    if (!firstToggle && !secondToggle) {
      setFirstToggle(true);
    }
    else if (firstToggle && !secondToggle) {
      setFirstToggle(false);
    }
    else if (!firstToggle && secondToggle) {
      setFirstToggle(true);
      setSecondToggle(false);
    }
  };

  const handleSecondToggleClick = () => {
    if (!firstToggle && !secondToggle) {
      setSecondToggle(true);
    }
    else if (firstToggle && !secondToggle) {
      setFirstToggle(false);
      setSecondToggle(true);
    }
    else if (!firstToggle && secondToggle) {
      setSecondToggle(false);
    }
  };

  return (
    <div className='toggle-container'>
      <div className='toggle-title-container'>
        <span className='toggle-title'>{title}</span>
        {<span className='toggle-title-asterisk'>*</span>}
      </div>
      <div className='toggle-box'>
        <div className='toggle-set'>
          <button onClick={handleFirstToggleClick}>
            {firstToggle ? <MdCheckCircle className='check-icon' /> : <MdOutlineCircle className='non-check-icon' />}
          </button>
          <span className='toggle-text'>{firstText}</span>
        </div>
        <div className='toggle-set'>
          <button onClick={handleSecondToggleClick}>
            {secondToggle ? <MdCheckCircle className='check-icon' /> : <MdOutlineCircle className='non-check-icon' />}
          </button>
          <span className='toggle-text'>{secondText}</span>
        </div>
      </div>
    </div>
  );
}

export default Toggle;