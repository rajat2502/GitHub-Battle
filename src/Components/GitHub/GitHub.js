const client_id = '45ebb6d8e84478c05bec';
const client_secret = '11ffca05704f88d486072382012903f147489b8c'; 

const GitHub = {
    getUserData(searchUser) {
        let url1 = `https://api.github.com/users/${searchUser}?client_id=${client_id}&client_secret=${client_secret}`;
        return new Promise((resolve, reject) => {

        fetch(url1)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        })
    },

    getRepoData(searchTerm) {
        let url2 = (searchTerm === 'All' ? `https://api.github.com/search/repositories?q=stars:%3E1+&sort=stars&order=desc&type=Repositories
        &client_id=${client_id}&client_secret=${client_secret}` : `https://api.github.com/search/repositories?q=stars:%3E1+language:${searchTerm}&sort=stars&order=desc&type=Repositories&client_id=${client_id}&client_secret=${client_secret}`)
        return new Promise((resolve, reject) => {
            fetch(url2)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}

export default GitHub;