import './Toggle.css';
import { MdCheckCircle, MdOutlineCircle } from 'react-icons/md';
import { useState } from 'react';
import styled from 'styled-components';

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
    <ToggleContainer>
      <ToggleTitleContainer>
        <ToggleTitle>{title}</ToggleTitle>
        <ToggleTitleAsterisk>*</ToggleTitleAsterisk>
      </ToggleTitleContainer>
      <ToggleBox>
        <ToggleSet>
          <ToggleButton onClick={handleFirstToggleClick}>
            {firstToggle ? <MdCheckCircle className='check-icon' /> : <MdOutlineCircle className='non-check-icon' />}
          </ToggleButton>
          <ToggleText>{firstText}</ToggleText>
        </ToggleSet>
        <ToggleSet>
          <ToggleButton onClick={handleSecondToggleClick}>
            {secondToggle ? <MdCheckCircle className='check-icon' /> : <MdOutlineCircle className='non-check-icon' />}
          </ToggleButton>
          <ToggleText>{secondText}</ToggleText>
        </ToggleSet>
      </ToggleBox>
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 44px;
  gap: 8px;
`

const ToggleTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 16px;
  gap: 2px;
`

const ToggleTitle = styled.span`
  height: 16px;
  display: inline-block;

  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #6B6B6B;
`

const ToggleTitleAsterisk = styled.span`
  width: 6px;
  height: 14px;
  display: inline-block;

  /* font-family: Noto Sans KR; */
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #FF0000;
`

const ToggleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 20px;
  gap: 21px;
`

const ToggleSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 20px;
  gap: 4px;
`

const ToggleButton = styled.button`
  border: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

const ToggleText = styled.span`
  width: auto;
  height: 16px;

  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #6B6B6B;
`