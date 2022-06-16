import { Component } from "react";

class CustomTextarea extends Component {
  render() {
    const {
      name,
      onChange,
      state,
      label,
      rows,
      counter,
      placeholder,
      dash,
      first,
      onBlur,
        length,
    } = this.props;
    return (
      <>
        <label className="textareaLabel">{label}</label>
        <textarea
          rows={rows}
          value={state[name]}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          length={length}
          className="textareaItem"
        ></textarea>
        <span className="counter">
          {length}
          {dash}
          {counter}
        </span>
        <span className="errorMax">{first}</span>
      </>
    );
  }
}

export default CustomTextarea;
