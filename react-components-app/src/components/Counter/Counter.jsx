import Button from '../Button/Button';

export default function Counter() {
  const handleOnClick = (evtType) => {
    if(evtType === 'ADD') {
      console.log('add button click');
      return;
    }
    console.log('substract button');
  };
  
  return (
    <>
      <span>Counter: {}</span>
      <Button onClick={() => handleOnClick('ADD')} backgroundColor='#2B860B' />
      <Button onClick={() => handleOnClick()}  backgroundColor='#2B860B' />
    </>
  );
}