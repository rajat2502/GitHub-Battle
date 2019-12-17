import React from 'react';
import GitHub from './GitHub/GitHub';

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            userName: e.target.value,
        })
    }
    sendData = e => {
        e.preventDefault();
        GitHub.getUserData(this.state.userName)
        .then(res => console.log(res));
        
        console.log("SUbmit");
    }

    render(){
    return (
            <div>
                <h1>Welcome to the Profile Section</h1>
                <form onSubmit={this.sendData} className="form1">
                    <input 
                        type="text"
                        value={this.state.userName}
                        // name="player1"
                        onChange={this.handleSubmit}
                        placeholder="Enter GitHub username"
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Profile;