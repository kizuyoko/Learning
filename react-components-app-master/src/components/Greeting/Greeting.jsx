import PropTypes from "prop-types";
import { useState } from "react";

/** This is my original component. */
export default function Greeting({ fontFamily }) {
  const [name, setName] = useState('');

  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div style={fontFamily && { fontFamily }}>
      <h1>Hi{name && <span>, </span>}{name}!</h1>
      {!name && <p>Please fyll in your name below.</p>}
      {name && <p>Nice to meet you!</p>}
      <label 
        htmlFor='yourName'
        className="block text-gray-700 text-sm font-bold mt-2" 
      >Your name: </label>
      <input type="text" id='yourName' name='yourName' onChange={onChange} />
    </div>
  );
}


Greeting.propTypes = {
  fontFamily: PropTypes.string,
};

Greeting.defaultProps = {
  fontFamily: 'Arial'
};