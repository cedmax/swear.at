import React from "react";
import ClipboardButton from "react-clipboard.js";
import classNames from "./style.module.css";
import obfuscator from "../../helpers/obfuscator";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess() {
    this.setState({
      copied: true
    });

    setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 3000);
  }

  getText() {
    return `${document.location.protocol}//${
      document.location.host
    }/share/${obfuscator.encode(window.location.pathname)}`;
  }

  render() {
    return (
      <div className={classNames.actionButtons}>
        <ClipboardButton
          className={`${this.state.copied ? classNames.buttonActive : ""} ${
            classNames.button
          }`}
          option-text={this.getText}
          onSuccess={this.onSuccess}
        >
          {this.state.copied ? "successully copied" : "Share obfuscated URL"}
        </ClipboardButton>
      </div>
    );
  }
}
