<script lang="ts">
    export let isActive:boolean = false;

</script>



<style lang="scss">

    @keyframes damage {
        0%   {box-shadow: inset 0 0 40px 30px red;}
        50%  {box-shadow: inset 0 0 20px 10px red;}
        100% {box-shadow: inset 0 0 40px 30px red;}
    }

    .main{
        
        position: absolute;
        width: 100%;
        height: 100%;

        animation-name: damage;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;

        
    }
</style>

{#if isActive}
<div class="main">

</div>
{/if}