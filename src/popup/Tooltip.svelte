<script>
    export let text;
    export let visible;
</script>

{#if visible}
    <div class='visible tooltip'>
        <div class='tick-container'>
            <div class='tick'/>
        </div>
        {text}
    </div>
{/if}

<style>
    .visible {
        position: absolute;
        border-radius: 5px;
        padding: 5px 10px;
        left: -26px;
        top: -55px;
    }

    .tooltip {
        background-color: #FFF622;
        color: #000;
        font-size: 13px;
    }  
    .tick-container {
        position: relative;
        width: 0;
        height: 0;
    }
    .tick {
        position: absolute;
        top: 15px;
        left: 17px;
        background-color: #FFF622;
        transform: rotate(45deg);
        width: 9px;
        height: 9px;
    }
</style>