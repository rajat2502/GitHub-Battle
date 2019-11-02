import React, { Fragment, useState, useEffect } from 'react';

import GitHub from './GitHub/GitHub';
import Card from './RepoCard';

const Popular = ({theme}) => {

    const [selected, handleSelected] = useState('All');
    const [repoData, setRepoData] = useState([]);
    const [message, setMessage] = useState('Fetching Data...');

    const arr = ['All', 'Javascript', 'Python', 'Java', 'Ruby', 'CSS'];

    const toggleSelected = (e) => {
        handleSelected(e.target.textContent);
        console.log(selected);
        getReposData(e.target.textContent);
    }

    const getReposData = (searchTerm) => {
        setMessage('Fetching Data...');
        GitHub.getRepoData(searchTerm)
        .then(response => setRepoData(response.items))
        .then(() => setMessage(''));
    } 

    useEffect(() => {
        getReposData(selected);
    }, [])

    return (
        <Fragment>
            {console.log(repoData)}
            <ul className="popular-nav">
                {arr.map((item, index) => {
                    return (
                        <li title={item} className={selected===item ? 'selected' : ''} key={index} onClick={toggleSelected}>{item}</li>
                    )
                })}
            </ul>

            <div className="popular-cards">
                {message === 'Fetching Data...' ? <div className="fetching">Fetching Data...</div> : repoData.map((item, index) => {
                    return (
                        <Card key={index} data={item} theme={theme} />
                    )
                })}
            </div>

        </Fragment>
    )
}

export default Popular;