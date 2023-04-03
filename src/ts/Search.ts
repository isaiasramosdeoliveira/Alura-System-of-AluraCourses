import json from '../json/db.json';

export default class Search {
    static async SearchCurses(value: string) {
        const json = await fetch(`http://localhost:3000/curses?q=${value}`)
        const response = json.json();
        return response;
    }
}