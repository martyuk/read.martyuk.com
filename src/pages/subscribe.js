import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class IndexPage extends React.Component {
    state = {
        email: null
    }

    _handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', this.state);

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`);

                if (result !== 'success') {
                    throw msg;
                }
                alert(msg);
            })
            .catch((err) => {
                console.log('err', err);
                alert(err);
            });
    }

    render() {
        return (
            <div>
                <p>Подпишитесь на рассылку, чтобы получать новые посты на почту.</p>
                <div>
                    <form onSubmit={this._handleSubmit}>
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="почта"
                            name="email"
                        />
                        <input type="submit" value="Подписаться"/>
                    </form>
                </div>
            </div>
        );
    }
}