<script lang="ts">
    export let state:Boolean = false;
    export let size:number = 1.5;
</script>


<style lang="scss">
    .main{
        display: flex;
        align-items: center;
    }

</style>


<div class="main" style="font-size: {size}vw;">
    <div style="width: 5px;"></div>
    <div class="circle" style="width: {size}vw; height: {size}vw; background-color: {state ? "#00ff00" : "#ff0000"}; border-radius: {size}vw;"></div>
    <div style="width: 5px;"></div>
    Offset {state ? "ON" : "OFF"}
</div>