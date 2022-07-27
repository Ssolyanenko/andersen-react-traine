import "./App.css";
import React from "react";
import { Template } from "./components/Template";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

  }

  changeState = (state) => {
    this.setState({
      ...state,
      showModal: true,
    });
  };

  backToForm = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    if (this.state.showModal) {
      const {
        firstName,
        lastName,
        date,
        phone,
        link,
        userAbout,
        userSteak,
        projectDescrip,
        showModal,
      } = this.state;
      return (
        <Template
          firstName={firstName}
          lastName={lastName}
          date={date}
          phone={phone}
          link={link}
          about={userAbout}
          stack={userSteak}
          project={projectDescrip}
          backToForm={this.backToForm}
          showModal={showModal}
        />
      );
    }

    return <Form changeState={this.changeState} />;
  }
}

export default App;
