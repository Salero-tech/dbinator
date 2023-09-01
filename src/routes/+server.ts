import {getData} from "$lib/logic/data";
import { json } from "@sveltejs/kit";

export async function GET () {
    try {
        const data = await getData();
        return json(data);
        
    }
    catch (err) {
        return json({});
    }
    
    
    
}