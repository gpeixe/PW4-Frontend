import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json'
    }
});

class ChampionsAPI {
    static async getAllChampions(){
        return await client.get('/Champion').then(result => result.data).catch(e => console.error(e))
    }
}

export default ChampionsAPI;