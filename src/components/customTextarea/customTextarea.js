import { Component } from "react";

class CustomTextarea extends Component {
  render() {
    const {
      name,
      onChange,
      state,
      label,
      rows,
      placeholder,
        maxLength,
         onBlur,
         length,
        length2,
        length3,
        error,
        error2,
        error3

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
            {length2}
            {length3}
        /
            {maxLength}
        </span>
        <span className="errorMax">{error}{error2}{error3}</span>
      </>
    );
  }
}

export default CustomTextarea;
