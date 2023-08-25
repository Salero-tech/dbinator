<script lang="ts">
    export let size:number = 1;
    export let limit:Array<number>;
</script>


<style lang="scss">
    .main {
        min-width: fit-content;
    }
</style>


<div class="main" style="font-size: {size}vw;">
    Limit: {limit[0]}dBA / {limit[1]}dBC
</div>