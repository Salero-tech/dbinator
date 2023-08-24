<script lang="ts">
    export let size:number;
    console.log(size);
</script>

<style lang="scss">

    div {
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: row;
        text-justify: right;
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
    

</style>

<div class="main">
    <div class="number" style="font-size: {size}vw;">74</div>
    <div class="holder">
        <select name="test" id="choose">
            <option value="0">Leq1s</option>
            <option value="1">Leq1min</option>
            <option value="2">Leq5min</option>
            <option value="3">Leq10min</option>
            <option value="4">Leq15min</option>
            <option value="5">Leq60min</option>
        </select>
        <div class="text" style="font-size: {size-4}vw;">dBA</div>
    </div>
</div>