import React from "react";
import CustomTextarea from "./customTextarea/customTextarea";
import CustomTextareaSecond from "./customTextarea/customTextareaSecond";
import CustomTextareaThird from "./customTextarea/CustomTextareaThird";
import CustomInput from "./customInput";
import MaskedInput from "react-text-mask/dist/reactTextMask";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      link: "",
      header: "",
      userAbout: "",
      userSteak: "",
      projectDescrip: "",
      errors: "",
      zeroSecond: 0,
      zeroThird: 0,
      maxLengthFirst: 600,
      maxLengthSecond: 600,
      maxLengthThird: 600,
      dash: "/",
      dashSecond: "/",
      dashThird: "/",
      first: "",
      second: "",
      third: "",
      isSubmited: false,
      length: 0,
    };
    this.calculateChar = this.calculateChar.bind(this);
    this.calculateChar1 = this.calculateChar1.bind(this);
    this.calculateChar2 = this.calculateChar2.bind(this);
  }
  calculateChar = (e) => {
    const errors = {};
    const { value } = e.target;
    this.setState({ length: e.target.value.length });
    if (value.length > this.state.maxLengthFirst) {
      this.setState({
        first: "Превышен лимит символов в поле",
        dash: "/",
      });
    } else if (value.length === 0) {
      this.setState({
        first: "Поле пустое. Заполните пожалуйста",
      });
    } else if (value.length <= this.state.maxLengthFirst) {
      this.setState({
        first: "",
        dash: "/",
      });
    }
  };

  calculateChar1 = (e) => {
    const { value } = e.target;
    this.setState({ zeroSecond: e.target.value.length });
    if (value.length > this.state.maxLengthSecond) {
      this.setState({
        second: "Превышен лимит символов в поле",
        dash: "/",
      });
    } else if (value.length <= this.state.maxLengthSecond) {
      this.setState({
        second: "",
        dash: "/",
      });
    } else if (value.length === 0) {
      this.setState({
        second: "Поле пустое. Заполните пожалуйста",
      });
    } else if (value.length <= this.state.maxLengthSecond) {
      this.setState({
        second: "",
        dash: "/",
      });
    }
  };

  calculateChar2 = (e) => {
    const { value } = e.target;
    this.setState({ zeroThird: e.target.value.length });
    if (value.length > this.state.maxLengthThird) {
      this.setState({
        third: "Превышен лимит символов в поле",
        dash: "/",
      });
    } else if (value.length === 0) {
      this.setState({
        third: "Поле пустое. Заполните пожалуйста",
      });
    } else if (value.length <= this.state.maxLengthThird) {
      this.setState({
        third: "",
        dash: "/",
      });
    }
  };
  validateForm = () => {
    let isValid = true;
    const errors = {};
    this.state.firstName.trim();
    this.state.lastName.trim();
    this.state.phone.trim();
    if (this.state.firstName.length <= 0) {
      errors.nameEr = "Поле пустое. Заполните пожалуйста";
    } else if (
      this.state.firstName[0] !== this.state.firstName[0].toUpperCase()
    ) {
      errors.nameEr = "Имя должно начинаться с большой буквы";
    }
    if (this.state.lastName.length <= 0) {
      errors.surnameEr = "Поле пустое. Заполните пожалуйста";
    } else if (
      this.state.lastName[0] !== this.state.lastName[0].toUpperCase()
    ) {
      errors.surnameEr = "Фамилия должно начинаться с большой буквы";
    }
    if (this.state.phone.length <= 0) {
      errors.telEr = "Поле пустое. Заполните пожалуйста";
    } else if (this.state.phone.length < 12) {
      errors.telEr = "Телефон должен содержать 12 символов";
    }
    if (this.state.date.length <= 0) {
      errors.dateEr = "Поле пустое. Заполните пожалуйста";
    }
    if (this.state.link.length <= 0) {
      errors.linkEr = "Поле пустое. Заполните пожалуйста";
    } else if (!this.state.link.includes("https://")) {
      errors.linkEr = "Поле должно начинаться с https://";
    }
    if (this.state.projectDescrip.length <= 0) {
      errors.projectEr = "Поле пустое. Заполните пожалуйста";
    } else if (this.state.projectDescrip.length > this.state.maxLengthThird) {
      errors.projectEr = " ";
    }
    if (this.state.userAbout.length <= 0) {
      errors.aboutEr = "Поле пустое. Заполните пожалуйста";
    } else if (this.state.userAbout.length > this.state.maxLengthFirst) {
      errors.aboutEr = " ";
    }
    if (this.state.userSteak.length <= 0) {
      errors.steakEr = "Поле пустое. Заполните пожалуйста";
    } else if (this.state.userSteak.length > this.state.maxLengthSecond) {
      errors.steakEr = " ";
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      console.log(Object.keys(errors));
      this.props.changeState(this.state);
    }

    return isValid;
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  };
  onBlur = (e) => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };
  onReset = (e) => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      date: "",
      phone: "",
      link: "",
      header: "",
      userAbout: "",
      userSteak: "",
      projectDescrip: "",
      zeroFirst: 0,
      zeroSecond: 0,
      zeroThird: 0,
      maxLengthFirst: 600,
      maxLengthSecond: 600,
      maxLengthThird: 600,
      dash: "/",
      dashSecond: "/",
      dashThird: "/",
      first: "",
      second: "",
      third: "",
      isSubmited: false,
      length: 0,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <form
          className="form"
          action="#"
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        >
          <header className="header">Создание анкеты</header>

          <CustomInput
            type="text"
            name="firstName"
            state={this.state}
            label="Имя:"
            placeholder="Введите имя..."
            isSubmited={this.state.isSubmited}
            value={this.state.firstName}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <div className="color-div">{this.state.errors.nameEr}</div>

          <CustomInput
            type="text"
            name="lastName"
            state={this.state}
            label="Фамилия:"
            placeholder="Введите фамилию..."
            isSubmited={this.state.isSubmited}
            value={this.state.lastName}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <div className="color-div">{this.state.errors.surnameEr}</div>
          <CustomInput
            type="date"
            name="date"
            state={this.state}
            label="Дата рождения:"
            isSubmited={this.state.isSubmited}
            value={this.state.date}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <div className="color-div">{this.state.errors.dateEr}</div>
          <label>Телефон:</label>
          <MaskedInput
            type="phone"
            name="phone"
            state={this.state}
            placeholder="Введите номер телефона..."
            isSubmited={this.state.isSubmited}
            value={this.state.phone}
            mask={[
              /[1-9]/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />

          <div className="color-div">{this.state.errors.telEr}</div>

          <CustomInput
            type="text"
            name="link"
            state={this.state}
            label="Сайт:"
            placeholder="Введите адрес сайта..."
            isSubmited={this.state.isSubmited}
            value={this.state.link}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          <div className="color-div">{this.state.errors.linkEr}</div>

          <CustomTextarea
            rows="7"
            name="userAbout"
            onChange={this.calculateChar}
            onBlur={this.onBlur}
            counter={this.state.maxLengthFirst}
            first={this.state.first}
            length={this.state.length}
            dash={this.state.dash}
            state={this.state}
            label="О себе:"
            placeholder="Напишите о себе..."
            isSubmited={this.state.isSubmited}
            value={this.state.userAbout}
          />

          <div className="color-div">{this.state.errors.aboutEr}</div>

          <CustomTextareaSecond
            rows="7"
            name="userSteak"
            onChange={this.calculateChar1}
            onBlur={this.onBlur}
            counter={this.state.maxLengthSecond}
            second={this.state.second}
            zeroSecond={this.state.zeroSecond}
            dash={this.state.dash}
            state={this.state}
            label="Стек технологий:"
            placeholder="Напишите технологии..."
            isSubmited={this.state.isSubmited}
            value={this.state.userSteak}
          />
          <div className="color-div">{this.state.errors.steakEr}</div>

          <CustomTextareaThird
            rows="7"
            name="projectDescrip"
            onBlur={this.onBlur}
            onChange={this.calculateChar2}
            counter={this.state.maxLengthThird}
            third={this.state.third}
            zeroThird={this.state.zeroThird}
            dash={this.state.dash}
            state={this.state}
            label="Описание последнего проекта:"
            placeholder="Опишите ваш последний проект..."
            isSubmited={this.state.isSubmited}
            value={this.state.projectDescrip}
          />
          <div className="color-div">{this.state.errors.projectEr}</div>
          <div className="buttons">
            <button type="reset" onClick={this.onReset}>
              Отмена
            </button>
            <button
              type="submit"
              onClick={() => this.setState({ isSubmited: true })}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Main;
