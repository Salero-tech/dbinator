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
    }
}


</style>

<div class="content">
    <DBmeter size={14} />
    
    <div class="middle">
        <div class="offset">Offset ON</div>
        <div class="line"/>
    </div>

    <div class="bottom">
        <DBmeter size={10}/>
        <DBmeter size={10}/>
    </div>
</div>
    


