export async function getIp ():Promise<String> {
      const resp = await fetch("http://192.168.2.232/api/targetIp");
      const jsonResp = await resp.json();
      return await jsonResp["ip"];
}


export async function setIp (ip:String) {
      console.log(ip);
      const resp = await fetch("http://192.168.2.232/api/targetIp", {
            method: "POST",
            mode: "no-cors",
            headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            body: `{"ip": "${ip}"}`
      });
}      