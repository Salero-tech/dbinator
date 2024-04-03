<script lang="ts">
    export let isActive:boolean = false;
    export let deactivate:Function;

    import {getIp, setIp} from "../logic/settings"
    import { onMount } from "svelte";

    let ip:String = "0.0.0.0";


    function onSubmit (e:Event) {
        setIp(ip)
        deactivate();
    }
    function clickOut (e:Event) {
        if(e.target.id != "SettingsPopUp") return;
        deactivate();
    }

    async function updateIp (){
        ip = await getIp();
    }

    onMount(() => {
        updateIp();
    });

</script>

<style lang="scss">
    .main{
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(59, 61, 61, 0.767);
    }
    .window  {
        background-color: rgb(59, 61, 61);
        padding: 1vw;
        border-radius: 0.2vw;
    }
</style>

{#if isActive}
<div class="main" id = "SettingsPopUp" on:click={clickOut} role="button" tabindex="0" aria-hidden="true">
    <form class="window" on:submit|preventDefault={onSubmit} action="#">
        <label>
            dB Ip:
            <input type="text" bind:value={ip}/>
        </label>
        
        <input type="submit" />
    </form>
</div>
{/if}