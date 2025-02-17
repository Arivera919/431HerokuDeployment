import api from './index';

const endpoints = {
    async getUsers() {
        return api('users'); 
    }
};

export default endpoints;
