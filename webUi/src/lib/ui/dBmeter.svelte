<script lang="ts">
	import { onMount } from "svelte";

    export let size:number;
    export let defaultIndex:number;
    export let dataArray:Array<number> = [1];
    export let color:string = "#0000ff"
    
    let index:number = 0;
    let stringValue:string = "--";

    onMount(() => {
        index = defaultIndex;
    });

    function changeIndex (e){
        index = e.target.value;
        console.log(index);
        console.log(dataArray[index]);
    }

    function getString (dataArray:Array<number>) {
        if (dataArray[index] <= 73) {
        stringValue = "<span>&#8199;</span>--"
    }
    else {
        if (dataArray[index] >= 100) stringValue = dataArray[index].toString();
        else stringValue = "<span>&#8199;</span>" + dataArray[index].toString();
    }
    return stringValue;
    }

</script>

<style lang="scss">

    div {
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: row;
        text-justify: right;
        padding-bottom: 0;
    }


    .holder{
        flex-grow: 1;
        align-items: end;
        justify-content: baseline;
        flex-direction: column;
    }


    .text {
        color: purple;
    }

    #choose {
        color: gray;
        background-color: transparent;
        border-color: transparent;


        option {
            background-color: black;
            border-color: transparent;
        }
    }

    .main {
        align-items: end;
    }
    

</style>

<div class="main">
    <div class="number" style="font-size: {size}vw; color: {color};">{@html getString(dataArray)}</div>
    <div class="holder">
        <select name="choose" id="choose" on:change={changeIndex} value={index.toString()}>
            <option value="0">LAeq1s</option>
            <option value="1">LAeq1min</option>
            <option value="2">LAeq5min</option>
            <option value="3">LAeq10min</option>
            <option value="4">LAeq15min</option>
            <option value="5">LAeq60min</option>
        </select>

        <div class="text" style="font-size: {size-4}vw;">dBA</div>
    </div>
</div>