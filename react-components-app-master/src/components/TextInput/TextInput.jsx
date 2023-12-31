import { useState } from "react";
import PropTypes from "prop-types";

const TextInput = ({name, type, label, placeholder}) => {
  const [value, setValue] = useState('');
  const handlechange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2" 
      >{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder= {placeholder} 
        value={value}
        onChange={handlechange}
        className="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight fpcus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextInput;

