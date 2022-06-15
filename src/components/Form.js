import React from "react";
import CustomTextarea from "./customTextarea/customTextarea";
import CustomTextareasecond from "./customTextarea/customTextareasecond";
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
      counterTextarea: 600,
      maxCounter: 600,
      header: "",
      userAbout: "",
      userSteak: "",
      projectDescrip: "",
      errors: "",
      count: 0,
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
    };
  }

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
    }
    if (this.state.userAbout.length <= 0) {
      errors.aboutEr = "Поле пустое. Заполните пожалуйста";
    }
    if (this.state.userSteak.length <= 0) {
      errors.steakEr = "Поле пустое. Заполните пожалуйста";
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
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
      counterTextarea: 600,
      maxCounter: 600,
      header: "",
      userAbout: "",
      userSteak: "",
      projectDescrip: "",
      errors: "",
      count: 0,
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
    });
  };
  countSymbols = (e) => {
    const { name, value } = e.target;
    if (name === "userAbout") {
      this.setState({
        maxLengthFirst: this.state.maxCounter - value.length,
      });
      this.setState({
        zeroFirst: (this.state.zeroFirst += 1),
      });

      if (value.length > this.state.maxCounter) {
        this.setState({
          first: "Превышен лимит символов в поле",
          maxLengthFirst: "",
          dash: "",
          zeroFirst: "",
        });
      }
    }

    if (name === "userSteak") {


      this.setState({
        maxLengthSecond: this.state.maxCounter - value.length,
      });
      this.setState({
        zeroSecond: (this.state.zeroSecond += 1),
      });

      if (value.length > this.state.maxCounter) {
        this.setState({
          second: "Превышен лимит символов в поле",
          maxLengthSecond: "",
          dashSecond: "",
          zeroSecond: "",
        });
      }
    }

    if (name === "projectDescrip") {
      this.setState({
        maxLengthThird: this.state.maxCounter - value.length,
      });
      this.setState({
        zeroThird: (this.state.zeroThird += 1),
      });

      if (value.length > this.state.maxCounter) {
        this.setState({
          third: "Превышен лимит символов в поле",
          maxLengthThird: "",
          dashThird: "",
          zeroThird: "",
        });
      }
    }

    this.setState({
      [name]: value,
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
            onChange={this.onChange}
            counter={this.state.maxLengthFirst}
            first={this.state.first}
            zero={this.state.zeroFirst}
            dash={this.state.dash}
            state={this.state}
            label="О себе:"
            placeholder="Напишите о себе..."
            isSubmited={this.state.isSubmited}
            value={this.state.userAbout}
            onBlur={this.onBlur}
            onKeyUp={this.countSymbols}
          />

          <div className="color-div">{this.state.errors.aboutEr}</div>

          <CustomTextareasecond
            rows="7"
            name="userSteak"
            counter={this.state.maxLengthSecond}
            second={this.state.second}
            zero={this.state.zeroSecond}
            dashSecond={this.state.dashSecond}
            state={this.state}
            label="Стек технологий:"
            placeholder="Напишите технологии..."
            isSubmited={this.state.isSubmited}
            value={this.state.userSteak}
            onBlur={this.onBlur}
            onKeyUp={this.countSymbols}
          />
          <div className="color-div">{this.state.errors.steakEr}</div>

          <CustomTextareaThird
            rows="7"
            name="projectDescrip"
            counter={this.state.maxLengthThird}
            third={this.state.third}
            zero={this.state.zeroThird}
            dashThird={this.state.dashThird}
            state={this.state}
            label="Описание последнего проекта:"
            placeholder="Опишите ваш последний проект..."
            isSubmited={this.state.isSubmited}
            value={this.state.projectDescrip}
            onBlur={this.onBlur}
            onKeyUp={this.countSymbols}
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
