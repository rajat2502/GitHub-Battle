import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import Instructions from './Instructions';
import GitHub from './GitHub/GitHub';

const Battle = ({theme, handlePlayersData}) => {

    const [player1, handlePlayer1] = useState('');
    const [player2, handlePlayer2] = useState('');
    const [submit1, handleSubmit1] = useState(false);
    const [submit2, handleSubmit2] = useState(false);
    const [user1Data, setUser1Data] = useState({});
    const [user2Data, setUser2Data] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.className === 'form1') {
            handleSubmit1(true);
            getUserData(1)
        } 
        else {
            handleSubmit2(true);
            getUserData(2)
        }
    }

    const handleClose = e => {
        console.log(e.target.className);
        if(e.target.className === 'form1') {
            handleSubmit1(false);
            handlePlayer1('');
        } 
        else {
            handleSubmit2(false);
            handlePlayer2('');
        }
    }

    const playerData = () => {
        handlePlayersData(user1Data, user2Data);
    }

    const getUserData = (num) => {
        const user = (num===1 ? player1 : player2);
        GitHub.getUserData(user)
        .then(response => (num===1 ? setUser1Data(response) : setUser2Data(response)))
    }

    return (
        <div className="battle">

            <Instructions theme={theme} />
            
            <h3 className="text-center mt-5 font-weight-bolder">Players</h3>

            <div className="input-players">
                {
                    submit1===false ? 
                    <form onSubmit={handleSubmit} className="form1">
                        <input 
                            type="text"
                            value={player1}
                            name="player1"
                            onChange={e => handlePlayer1(e.target.value)}
                            placeholder="Enter GitHub user"
                        />
                        <button type="submit" disabled={player1.length > 0 ? false : true}>Submit</button>
                    </form>
                    : 
                    <div className="battle-players">
                        <img src={user1Data.avatar_url} alt={`${user1Data.login}'s avatar`} />
                        <a href={user1Data.html_url}><span className="player-handle">{user1Data.login}</span></a>
                        <span className="form1" onClick={handleClose}>&#x2716;</span>
                    </div>
                }
                {
                    submit2===false ?
                    <form onSubmit={handleSubmit} className="form2">
                        <input 
                            type="text"
                            value={player2}
                            name="player2"
                            onChange={e => handlePlayer2(e.target.value)}
                            placeholder="Enter GitHub user"
                        />
                        <button type="submit" disabled={player2.length > 0 ? false : true}>Submit</button>
                    </form> 
                    : 
                    <div className="battle-players">
                        <img src={user2Data.avatar_url} alt={`${user2Data.login}'s avatar`} />
                        <a href={user2Data.html_url}><span className="player-handle">{user2Data.login}</span></a>
                        <span className="form2" onClick={handleClose}>&#x2716;</span>
                    </div>
                }
            </div>

            <div className="lets-battle">
                {(submit1===true && submit2===true) && 
                <Link to="/battle/result">
                    <button className="battle-button" onClick={playerData}>Battle</button>
                </Link>}
            </div>

        </div>
    )
}

export default Battle;