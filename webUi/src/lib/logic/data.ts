import { type DbData } from './type';
import * as xml2js from 'xml2js';

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
    return new Promise(resolve => {
        xml2js.parseString(XMLdata, (err, res) => {
            resolve(splitData(res));
        });  
    })
      
}

function splitData (input:InputData):DbData{
    let data = input["response"];
    console.log(data);

    let vuArrayString = data.VUMETER[0].split(',');
    vuArrayString.splice(vuArrayString.indexOf(""),1)
    let vuArray = [];
    for (let i = 0; i < vuArrayString.length; i++) {
        if (vuArrayString[i] == "1") vuArray.push(true)
        else vuArray.push(false);
    }

    return {
        LAEQ: data.LAEQ[0].split(',').map(Number),
        LCEQ: data.LCEQ[0].split(',').map(Number),
        LIMIT: data.LIMIT[0].split(',').map(Number),
        LEQREF: data.LEQREF[0].split(',').map(Number),
        WEIREF: data.WEIREF[0].split(',').map(Number),
        COLOR: data.COLOR[0].split(','),
        OFFSET: data.OFFSET[0].split(',').map(Boolean)[0],
        VUMETER: vuArray,
        
    }

}

