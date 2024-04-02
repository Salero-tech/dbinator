<script lang="ts">
    export let size:number = 1;
    export let sinceLastUpdate:number = 0;
</script>


<style lang="scss">
    .main {
        min-width: fit-content;
    }
</style>


<div class="main" style="font-size: {size}vw;">
    last update: {sinceLastUpdate.toFixed(1)}s
</div>