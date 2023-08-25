import {getData} from "$lib/data";
import { json } from "@sveltejs/kit";

export async function GET () {
    const data = await getData();
    console.log(data);
    return json(data);
    
}