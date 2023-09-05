import {getData} from "$lib/logic/data";
import { json } from "@sveltejs/kit";

const ip:string = process.env.dbIp!;

export async function GET () {
    try {
        const data = await getData(ip);
        return json(data);
        
    }
    catch (err) {
        return json({});
    }
    
    
    
}