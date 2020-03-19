import React from "react";
import { rhythm } from "../utils/typography"

import addToMailchimp from "gatsby-plugin-mailchimp"

export default class Subscription extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
    }
  }
  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== "success") {
          this.setState({
            status: "error",
            msg: result.msg,
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: "success",
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: "error",
          msg: err,
        })
      })
  }
  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!this.state.email) {
      this.setState({
        status: "error",
        msg: "Please enter valid email!",
      })
    }
    else {
      this.setState(
        {
          status: "sending",
          msg: null,
        }
      )
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      })
    }
  }
  render() {

    const isNothingSuccessError = this.state.status    
    let caption;


    if (isNothingSuccessError === "success") {
      caption = ("Супер 👌")
    }

    if (isNothingSuccessError === "error") {
      caption = ("Что-то пошло не так 🙈")
    }

    if (isNothingSuccessError !== "error" && isNothingSuccessError !== "success") {
      caption = ("Подпишитесь на рассылку, чтобы получать новые посты на почту.")
    }

    return (
      <div >
        <div
          style={{
            marginBottom: rhythm(1 / 4)
          }}
        >
          {caption}
        </div>
        <form
          onSubmit={this._handleFormSubmit}
          noValidate
        >
          <div>
            <input
              placeholder="Почта"
              onChange={this._handleEmailChange}
              required
            />
            <input
              type="submit"
              value="Подписаться ❤️"
            >
            </input>
            {this.state.status === "error" && this.state.msg === "The email you entered is not valid." && (
              <div
                style={{
                  marginTop: rhythm(1 / 4)
                }}
                dangerouslySetInnerHTML={{ __html: "Похоже, в адресе ошибка." }}
              />
            )}
            {this.state.status === "error" && (
              <div
                style={{
                  marginTop: rhythm(1 / 4)
                }}
                dangerouslySetInnerHTML={{ __html: this.state.msg }}
              />
            )}
          </div>
        </form>
      </div>


    )
  }
}