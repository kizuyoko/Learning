import ReactDOM from 'react-dom';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      <h1>Hi!</h1>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);