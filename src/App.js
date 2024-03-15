import './App.css';
import Print from './Component/Print/Print';
import Selector from './Component/Selector';
import Toggle from './Component/Toggle';

function App() {
  return (
    <div>
      <div className='top' />
      <div className='body'>
        <div className='container'>
          <span className='title'>상품등록</span>
          <div className='contents'>
            <Selector title={'대분류'} need={true}/>
            <Selector title={'중분류'} need={true}/>
            <Print title={'상품코드'} need={true}/>
            <Print title={'상품명'} need={true}/>
            <Toggle title={'판매상태'} need={true}/>
            <Print title={'판매단가'} unit={'원'} need={false}/>
            <Toggle title={'과세구분'} need={true}/>
            <Selector title={'재고단위'} need={true}/>
            <Selector title={'발주단위'} need={false}/>
            <Print title={'재고환산'} content={'1.0'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
