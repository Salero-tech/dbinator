import { type DbData } from './type';
import * as convert from 'xml-js';


interface InputData{
    response: {
        LAEQ: Array<string>
        LCEQ: Array<string>
        LIMIT: Array<string>
        LEQREF: Array<string>
        WEIREF: Array<string>
        COLOR: Array<string>
        OFFSET: Array<string>
        VUMETER: Array<string>           
    }
};

export async function getData ():Promise<DbData> {
    const res = await fetch(`/api/data`);
    const XMLdata = await res.text();
    return splitData(JSON.parse(convert.xml2json(XMLdata, {compact:true})));
    
      
}

function splitData (input:any):DbData{

    let data = input["response"];
    console.log(data);

    let vuArrayString = data.VUMETER["_text"].split(',');
    vuArrayString.splice(vuArrayString.indexOf(""),1)
    let vuArray = [];
    for (let i = 0; i < vuArrayString.length; i++) {
        if (vuArrayString[i] == "1") vuArray.push(true)
        else vuArray.push(false);
    }

    return {
        LAEQ: data.LAEQ["_text"].split(',').map(Number),
        LCEQ: data.LCEQ["_text"].split(',').map(Number),
        LIMIT: data.LIMIT["_text"].split(',').map(Number),
        LEQREF: data.LEQREF["_text"].split(',').map(Number),
        WEIREF: data.WEIREF["_text"].split(',').map(Number),
        COLOR: data.COLOR["_text"].split(','),
        OFFSET: data.OFFSET["_text"].split(',').map(Boolean)[0],
        VUMETER: vuArray,
        
    }

}

