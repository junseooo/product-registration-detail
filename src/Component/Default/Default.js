import './Default.css';
import { useState } from 'react';

function Default(props) {
  const { title, need, arrow, unit, comment } = props;
  const [value, setValue] = useState('');
  const [money, setMoney] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleMoneyChange = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setMoney(removedCommaValue.toLocaleString());
  };


  function inBoxContent() {
    if (title === '대분류' || title === '중분류' || title === '재고단위' || title === '발주단위') {
      return arrow;
    }
    else if (title === '상품코드') {
      return <span className='default-box-input'>blank</span>;
    }
    else if (title === '상품명') {
      return <input className='default-box-input' type='text' value={value} onChange={handleChange} />;
    }
    else if (title === '판매단가') {
      return <input className='default-box-input' type='text' value={money} onChange={handleMoneyChange} />;
    }
    else if (title === '재고환산') {
      return <input className='default-box-input' type='number' value={value} onChange={handleChange} placeholder='1.0' />;
    }
  }

  return (
    <div className='default-container'>
      <div className='default-title-container'>
        <span className='default-title'>{title}</span>
        {need && <span className='default-title-asterisk'>*</span>}
        {comment && <span className='default-title-comment'>{comment}</span>}
      </div>
      <div className='default-box'>
        {inBoxContent()}
        {unit && <span className='default-box-unit'>{unit}</span>}
      </div>
    </div>
  );
}

export default Default;