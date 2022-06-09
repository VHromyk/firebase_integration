import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: '',
            key: '',
            value: '',
        };
    }
    componentDidMount() {
        const db = firebase.database();

        const name = db.ref('name');
        name.on('value', (elem) => {
            this.setState({ name: elem.val() });
        });
    }

    handleChange = ({ target: { id, value } }) => {
        this.setState({
            [id]: value,
        });
    };

    createAccount = () => {
        const { email, password } = this.state;
        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(email, password)
        //     .catch((error) => console.log(error));

        // for login I should use
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ hasAccount: true });
            })
            .catch((error) => console.log(error));
    };

    //write data to database

    sendData = () => {
        const { key, value } = this.state;
        const db = firebase.database();

        db.ref(key).push({value});
    };

    getData = () => {
        const db = firebase.database();

        const name = db.ref('name');
        const surname = db.ref('surname');
        name.on('value', (elem) => console.log(elem.val()));
        surname.on('value', (elem) => console.log(elem.val()))
    }

    render() {
        const { hasAccount } = this.state;
        this.getData()
        return (
            <div>
                {hasAccount ? (
                    <div className="login_block">
                        <input
                            type="text"
                            id="key"
                            placeholder="enter key"
                            onChange={this.handleChange}
                        />
                        <input
                            // type=""
                            id="value"
                            placeholder="enter value"
                            onChange={this.handleChange}
                        />
                        <input type="submit" onClick={this.sendData} />
                    </div>
                ) : (
                    <div className="login_block">
                        <input
                            type="text"
                            id="email"
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            onChange={this.handleChange}
                        />
                        <input type="submit" onClick={this.createAccount} />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
