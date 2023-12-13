import PropTypes from "prop-types";
import { useState } from "react";

export default function Greeting({ fontFamily }) {
  const [name, setName] = useState('');

  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div style={{ fontFamily }}>
      <h1>Hi{name && <span>, </span>}{name}!</h1>
      {!name && <p>Please fyll in your name below.</p>}
      {name && <p>Nice to meet you!</p>}
      <input type="text" id='yourName' name='yourName' onChange={onChange} />
    </div>
  );
}


Greeting.propTypes = {
  fontFamily: PropTypes.string,
};