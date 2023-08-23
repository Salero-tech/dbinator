
<script lang="ts">
    import DBmeter from "$lib/dBmeter.svelte";
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
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;

    
    .middle {
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
        flex: 1;
        align-items: start;
    }
}


</style>

<div class="content">
    <DBmeter />
    
    <div class="middle">
        <div class="offset">Offset ON</div>
        <div class="line"/>
    </div>

    <div class="bottom">
        <DBmeter />
        <DBmeter />
    </div>
</div>
    


