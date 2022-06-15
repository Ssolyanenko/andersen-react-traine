import React from "react";

class CustomInput extends React.Component {
  render() {
    const { type, name, state, label, placeholder, onChange, onBlur } =
      this.props;
    return (
      <>
        <label className="inputLabel">{label}</label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={state[name]}
          placeholder={placeholder}
          className="inputItem"
          onBlur={onBlur}
        />
      </>
    );
  }
}

export default CustomInput;
