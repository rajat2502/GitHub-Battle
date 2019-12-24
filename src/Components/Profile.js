import React from 'react';
import GitHub from './GitHub/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEnvelope, faQuoteLeft, faFolderOpen, faUser, faPray } from '@fortawesome/free-solid-svg-icons';

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
        // Github comnponent returns a promise
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
                
                <form onSubmit={this.sendData} className="form">
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
                            <p><FontAwesomeIcon icon={faUser} /> {this.state.data.name}</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> {this.state.data.email}</p>
                            <p><FontAwesomeIcon icon={faQuoteLeft} /> {this.state.data.bio}</p>
                            <p><FontAwesomeIcon icon={faUsers} /> Followers: {this.state.data.followers}</p>
                            <p><FontAwesomeIcon icon={faPray} /> Following: {this.state.data.following}</p>
                            <p><FontAwesomeIcon icon={faFolderOpen} /> {this.state.data.public_repos}</p>
                            
                        </div>
                     </div>
                     : <h4>Please Enter the Username</h4>
                }
            </div>
        );
    }
}

export default Profile;