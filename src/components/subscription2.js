import React from "react";
import { rhythm } from "../utils/typography"
import addToMailchimp from "gatsby-plugin-mailchimp"

//эта форма находится на странице Подписки
//единственное отличие от первой формы в том, что тут стоят две галочки для подписки на разные рассылки
export default class Subscription2 extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
    }
  }

  _handleChange = e => {
    console.log({
        [`${e.target.name}`]: e.target.value,
    })
    this.setState({
        [`${e.target.name}`]: e.target.value,
    })
  }
  
  _handleSubmit = e => {
    e.preventDefault()

    if (!this.state.email) {
      this.setState({
        status: "error",
        msg: "Please enter valid email!",
      })
    }

    console.log('submit', this.state)

    addToMailchimp(this.state.email, this.state)
        .then(({ msg, result }) => {
            console.log('msg', `${result}: ${msg}`)

            if (result !== 'success') {
              this.setState({
                status: "error",
                msg: msg,
              })
            } else {
              this.setState({
                status: "success",
                msg: result.msg,
              })
            }
        })
        .catch(err => {
            console.log('err', err)
            this.setState({
              status: "error",
              msg: err,
            })
        })
  }

  render() {
    const isNothingSuccessError = this.state.status    
    let caption;


    if (isNothingSuccessError === "success") {
      caption = ("Вы подписаны 👌")
    }

    if (isNothingSuccessError === "error") {
      caption = ("Что-то пошло не так 🙈")
    }

    if (isNothingSuccessError !== "error" && isNothingSuccessError !== "success") {
      caption = ("Не буду ничего придумывать, просто приведу умную цитату умного человека. Но вначале подпишитесь.")
    }

    return (
      <div >
        <div
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          {caption}
        </div>
        <form
          onSubmit={this._handleSubmit}
          noValidate
        >
          <div>
            <input
              style={{
                fontFamily: `sans-serif`,
                fontSize: `0.8rem`,
                width: `10rem`,
              }}
              type="email"
              name="email"
              placeholder="Почта"
              onChange={this._handleChange}
              required
            />
            <input
              style={{
                fontFamily: `sans-serif`,
                fontSize: `0.8rem`
              }}
              type="submit"
              value="Подписаться ❤️"
            />
            <br />
            <input
                type="checkbox"
                value="2"
                name="group[32862][2]"
                onChange={this._handleChange}
                defaultChecked
                style={{
                    marginRight: `0.25rem`
                  }}
            />
            <label 
                htmlFor="group[32862][2]"
                style={{
                    fontFamily: `sans-serif`,
                    fontSize: `0.8rem`,
                }}>
                Посты из блога
            </label>
            <br />
            <input
                type="checkbox"
                value="1"
                name="group[32862][1]"
                onChange={this._handleChange}
                defaultChecked
                style={{
                    marginRight: `0.25rem`
                  }}
            />
            <label 
                htmlFor="group[32862][1]"
                style={{
                    fontFamily: `sans-serif`,
                    fontSize: `0.8rem`,
                }}>
                Подборки кейсов
            </label>
            {this.state.status === "error" && this.state.msg === "The email you entered is not valid." && (
              <div
                style={{
                  marginTop: rhythm(1 / 4)
                }}
                dangerouslySetInnerHTML={{ __html: "Похоже, в адресе ошибка." }}
              />
            )}
            {this.state.status === "error" && this.state.msg != "The email you entered is not valid." && (
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