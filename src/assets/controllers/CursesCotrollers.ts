import { useParams } from "react-router-dom";
import json from '../../json/db.json';

export default class CursesControllers {
    static async createCurse(inputs: any) {
        const response = await fetch("http://localhost:3000/curses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: inputs[0].value,
                type: inputs[1].value,
                img: inputs[2].value,
            }),
        });
        inputs.forEach((input: any) => {
            input.value = ''
        })
    }
    static async editCurse(inputs: any, id: any) {
        const response = await fetch(`http://localhost:3000/curses/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: inputs[0].value,
                type: inputs[1].value,
                img: inputs[2].value,
            }),
        });
        inputs.forEach((input: any) => {
            input.value = ''
        })
    }
    static async deleteCurse(id: any) {
        const response = await fetch(`http://localhost:3000/curses/${id}`, {
            method: 'DELETE',
            
        })
    }
}

