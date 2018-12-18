import { STORAGE_KEY } from '../constants';

class Database {
    static set(data) {
        localStorage.setItem(
            STORAGE_KEY, 
            JSON.stringify(data)
        );
    }

    static get() {
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        );
    }
};

export default Database;