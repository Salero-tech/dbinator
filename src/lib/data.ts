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
    const res = await fetch("http://192.168.30.60/xml/Global.xml");
    const XMLdata = await res.text();
    return new Promise(resolve => {
        xml2js.parseString(XMLdata, (err, res) => {
            console.log(res);
            resolve(splitData(res));
        });  
    })
      
}

function splitData (input:InputData):DbData{
    let data = input["response"];

    return {
        LAEQ: data.LAEQ[0].split(',').map(Number),
        LCEQ: data.LCEQ[0].split(',').map(Number),
        LIMIT: data.LIMIT[0].split(',').map(Number),
        LEQREF: data.LEQREF[0].split(',').map(Number),
        WEIREF: data.WEIREF[0].split(',').map(Number),
        COLOR: data.COLOR[0].split(','),
        OFFSET: data.OFFSET[0].split(',').map(Boolean)[0],
        VUMETER: data.VUMETER[0].split(',').map(Boolean),
        
    }

}

