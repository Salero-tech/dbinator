import {getData} from "$lib/logic/data";
import { json } from "@sveltejs/kit";

export async function GET () {
    try {
        const data = await getData();
        console.log(data);
        return json(data);
    }
    catch (err) {
        return json({});
    }
    
    
    
}