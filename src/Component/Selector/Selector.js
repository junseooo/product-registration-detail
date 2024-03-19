import './Selector.css';
import Default from '../Default';
import { useState } from 'react';
import styled from 'styled-components';

function Selector(props) {
  const { title, need } = props;
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function arrow() {
    return (
      <SelectBody>
        <select className='select-container'
          value={selectedOption}
          onChange={handleChange}
        >
          <SelectText value=''>Select an option</SelectText>
          <SelectText value="option1">Option 1</SelectText>
          <SelectText value="option2">Option 2</SelectText>
          <SelectText value="option3">Option 3</SelectText>
        </select>
      </SelectBody>
    );
  }

  return (
    <Default title={title} need={need} arrow={arrow()} />
  );
}

export default Selector;

const SelectBody = styled.div`
  width: 100%;
  height: 26px;
`

// const SelectBodyContainer = styled.select`
//   border: none;
//   outline: none;
//   background-color: transparent;
//   width: 100%;
//   height: 26px;

//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   background-image: url('../../Icon/ArrowDown.png');
//   background-repeat: no-repeat;
//   background-position: calc(100% - 10px) center;
//   background-size: 24px;

//   /* font-family: Noto Sans KR; */
//   font-size: 11px;
//   font-weight: 700;
//   line-height: 16px;
//   letter-spacing: 0em;
//   text-align: left;
//   color: #737373;

//   &::-ms-expand {
//     display: none;
//   }
// `

const SelectText = styled.option`
  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #737373;
`