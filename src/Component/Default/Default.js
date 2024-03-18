import './Default.css';
import { useState } from 'react';

function Default(props) {
  const { title, need, arrow, unit, content, comment } = props;
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className='default-container'>
      <div className='default-title-container'>
        <span className='default-title'>{title}</span>
        {need && <span className='default-title-asterisk'>*</span>}
        {comment && <span className='default-title-comment'>{comment}</span>}
      </div>
      <div className='default-box'>
        {arrow || comment ?
          <span className='default-box-content'>{content}</span> :
          <input className='default-box-input' type='text' onChange={handleChange}
          />
        }
        {unit && <span className='default-box-content'>{unit}</span>}
        {arrow}
      </div>
    </div>
  );
}

export default Default;