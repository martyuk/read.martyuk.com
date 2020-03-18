import React from "react"
import { rhythm } from "../utils/typography"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class Subscription extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  _handleChange = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  _postToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err,
        })
      })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!this.state.email) {
      this.setState({
        status: `error`,
        msg: null,
      })
    } else {
      this.setState({
        status: `sending`,
        msg: null,
      })
      // setState callback (subscribe email to MC)
      this._postToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      })
    }
  }

  render() {

    const isNothingSuccessError = this.state.status;
    let caption;
    if (isNothingSuccessError === "success") {
      caption = "Супер 👌";
    } if (isNothingSuccessError === "error") {
      caption = "Похоже в адресе есть ошибка.";
    } else {
      caption = "Подпишитесь на рассылку, чтобы получать новые посты на почту."
    }

    return (
      <div
        style={{
          display: `inline-block`,
        }}
      >
        <div>
          <div
            style={{
              marginBottom: rhythm(1 / 4)
            }}
          >{caption}</div>
          <form
            onSubmit={this._handleSubmit
          }>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="Почта"
              name="email"
              required
            />
            <input
              type="submit"
              value="Подписаться ❤️"
            />
          </form>
        </div>
      </div>
    );
  }
}