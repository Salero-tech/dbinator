<script lang="ts">
    import DBmeter from "./lib/ui/dBmeter.svelte";
    import Offset from "./lib/ui/offset.svelte";
    import type { DbData } from "./lib/logic/type";
    import { onMount } from "svelte";
    import Limit from "./lib/ui/limit.svelte";
    import LastUpdate from "./lib/ui/lastUpdate.svelte";
    import VuMeter from "./lib/ui/vuMeter.svelte";
    import PopUp from "./lib/ui/popUp.svelte";
    import RedEffect from "./lib/ui/redEffect.svelte";
    import { getData } from "./lib/logic/data"
    import Settings from "./lib/ui/settings.svelte"

    let sinceLastUpdate = 0;
    let IsError = false;
    let errorMsg = "Error";
    let damageEffect:boolean = false;
    let data:DbData = {
      //"LAEQ": [100, 100, 100, 100, 100, 100],
      "LAEQ": [73, 73, 73, 73, 73, 73],
      "LCEQ": [73, 73, 73, 73, 73, 73],
      "LIMIT": [100,118],
      "LEQREF": [1, 7, 3],
      "WEIREF": [0, 0, 0],
      "COLOR": ["#00ff00","#00ff00","#00ff00"],
      "OFFSET": false,
      "VUMETER": [true, true, true, true, true, true, true, false, false, false, false, false, false]        
  };
    let settingsActive:boolean = false;

  async function getFromBackend () {
      try {
          const res = await getData();
          const newData = await res.json();
      if (!(JSON.stringify(newData) === JSON.stringify({}))) {
          console.log("update");  
          data = newData;
          sinceLastUpdate = 0;
      }
      else {
          throw "no Connection to Backend";
      }
      } catch (e) {
          console.log(e);
      }
  }

  function showSettings () {
    console.log(settingsActive);
    settingsActive = true;
  }


  onMount(() => {
      const reflesh = setInterval(() => {
          getFromBackend();
  }, 500);

      const sinceLastUpdateInterval = setInterval(() => {
          sinceLastUpdate += 0.1

          //check if connection active
          if (sinceLastUpdate >= 30){
              errorMsg = "NO CONNECTION";
              IsError = true;
          }
          else{
              IsError = false;
          }

          //check if over limit
          if (data.LAEQ[5] >= data.LIMIT[0]) {
              damageEffect = true;
          }
          else {
              damageEffect = false;
          }
      }, 100)

  return () => {
      clearInterval(reflesh);
      clearInterval(sinceLastUpdateInterval);
  }
  });
  
</script>

<style lang="scss">
.app{
  height: 100%;
}
:global(body) {
  background-color: black;
  display: flex;
  height: 100%;
  margin: 0;
  color: whitesmoke;
  flex-direction: column;

}

.mainContent {
  display: flex;
  flex: 1;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;

  .top {
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: end;
  }
  
  .middle {
      min-width: 50px;
      width: 100%;
      display: flex;
      align-items: center;

      .line {
          flex: 1;
          height: 2px;
          background-color: whitesmoke;
      }
      
      
  }
  .bottom {
      display: flex;
      align-items: start;
      justify-content: center;
      height: 100%;
  }
  .spacer {
      width: 5vw;
  }
}



.end {
    display: flex;
    flex-direction: row;
  }


.hiddenButton {
    position: absolute;
    z-index: 100;
    top: 0;
    width: 150px;
    height: 150px;
    left: 0;

}

</style>



<div class="mainContent">
  <div class="content">
      <div class="top">
          <DBmeter dataArray={data.LAEQ} size={21} defaultIndex={0} color={data.COLOR[0]} />
      </div>
      
      <div class="middle">
          <Offset state={data.OFFSET} size={2}/>
          <div class="line"/>
      </div>

      <div class="bottom">
          <DBmeter dataArray={data.LAEQ} size={15} defaultIndex={5} color={data.COLOR[1]} />
          <div class="spacer"></div>
          <DBmeter dataArray={data.LAEQ} size={15} defaultIndex={2} color={data.COLOR[2]} />
      </div>
  </div>
  <VuMeter size={2} dataArray={data.VUMETER}/>
</div>



<div class="end">
  <Limit size={2} limit={data.LIMIT} />
  <div style="width: 100%;"/>
  <LastUpdate size={2.5} sinceLastUpdate={sinceLastUpdate}/>
</div>

<PopUp msg={errorMsg} isActive={IsError} />

<RedEffect isActive={damageEffect}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="hiddenButton" on:dblclick={showSettings}></div>
<Settings isActive={settingsActive} deactivate={() => settingsActive = false}/>


