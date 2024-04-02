<script lang="ts">
    export let isActive:boolean = false;
    export let msg:string = "ERROR"

</script>



<style lang="scss">
    .main{
        top: 0;
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(59, 61, 61, 0.767);
    }
    .window  {
        background-color: red;
        padding: 0.2vw;
        border-radius: 0.2vw;
        font-size: 10vw;
        
    }
</style>

{#if isActive}
<div class="main">
    <div class="window">
        {msg}
    </div>
</div>
{/if}