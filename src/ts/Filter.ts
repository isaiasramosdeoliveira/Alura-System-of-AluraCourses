import json from '../json/db.json';

export default class Filter {
    static FilterCurses(type: string) {
        if (type === 'todos') {
            return json.curses
        }
        const curse = json.curses.filter(curse => curse.type === type);
        return curse;
    }
}