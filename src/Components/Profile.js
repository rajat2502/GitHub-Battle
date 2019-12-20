import React from 'react';
import GitHub from './GitHub/GitHub';
import Card from './RepoCard';

class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            hasData: false,
            data: '',
        }

    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            userName: e.target.value,
        })
    }
    sendData = e => {
        e.preventDefault();
        GitHub.getUserData(this.state.userName)
        .then(res => {
            this.setState({
            hasData: true,
            data : res,
            })
            console.log(this.state.data)
        });
        
    }

    render(){
    return (
            <div>
                <br/><h1>Welcome to the Profile Section</h1><br/>
                <form onSubmit={this.sendData} className="form1">
                    <input 
                        type="text"
                        value={this.state.userName}
                        onChange={this.handleSubmit}
                        placeholder="Enter GitHub username"
                        />
                    <button type="submit" disabled={this.state.userName.length > 0 ? false : true}>Submit</button>
                </form><br/>
                { this.state.hasData ?
                    <div className={`repo-card dark`}>
                        <img src={this.state.data.avatar_url} alt= "Owner Avatar" />
                        <a href={this.state.data.html_url}>{this.state.data.login}</a>
                        <div className="repo-data">
                            <p><span role="img" aria-label="Admin">👤</span> {this.state.data.name}</p>
                            <p><span role="img" aria-label="Admin">📧</span> {this.state.data.email}</p>
                            <p><span role="img" aria-label="Admin">Bio: </span> {this.state.data.bio}</p>
                            <p><span role="img" aria-label="Admin">🙋‍♂️ Followers: </span> {this.state.data.followers}</p>
                            <p><span role="img" aria-label="Admin">🚶‍♂️ Following: </span> {this.state.data.following}</p>
                            <p><span role="img" aria-label="Admin">🗂 Repositories: </span> {this.state.data.public_repos}</p>
                            
                        </div>
                     </div>
                     : <h4>Please Enter the Username</h4>
                }
            </div>
        );
    }
}

export default Profile;