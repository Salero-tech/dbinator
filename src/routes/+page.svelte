<script lang="ts">
    import DBmeter from "$lib/dBmeter.svelte";
    import Offset from "$lib/offset.svelte";
	import type { DbData } from "$lib/type";
	import { onMount } from "svelte";

    let data:DbData = {
        "LAEQ": [1],
        "LCEQ": [1],
        "LIMIT": [1],
        "LEQREF": [1],
        "WEIREF": [1],
        "COLOR": ["--"],
        "OFFSET": false,
        "VUMETER": [true]        
    };

    async function getFromBackend () {
        const res = await fetch("/");
        data = await res.json();
    }


    onMount(() => {
        const reflesh = setInterval(() =>{
            getFromBackend();
    }, 500);

    return () => {
        clearInterval(reflesh);
    }
    });
    
</script>

<style lang="scss">
:global(html){
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
        width: 20vw;
    }
}

.end {
        display: flex;
        flex-direction: row;
    }


</style>

<div class="content">
    <div class="top"><DBmeter dataArray={data.LAEQ} size={14} index={0} /></div>
    
    <div class="middle">
        <Offset state={data.OFFSET} />
        <div class="line"/>
    </div>

    <div class="bottom">
        <DBmeter dataArray={data.LAEQ} size={8} index={5}/>
        <div class="spacer"></div>
        <DBmeter dataArray={data.LAEQ} size={8} index={2}/>
    </div>
</div>

<div class="end">
    <div style="margin-right: auto;">limit</div>
    <div>network</div>
</div>


    


