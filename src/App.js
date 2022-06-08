import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


class App extends React.Component {
    componentDidMount() {
        const db = firebase.database();
        console.log(db);
    
    }

    render() {
        return (
            <div>
                <div className="login_block">
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="submit" />
                </div>
            </div>
        )
    }

}

export default App;
