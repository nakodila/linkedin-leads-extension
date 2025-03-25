    <script>
        import Tooltip from './Tooltip.svelte';
        export let id;
        export let placeholder;
        export let value;
        export let onInput;
        export let isDarkMode;
        export let decode;

        let visible = false;

        const encode = !decode;

       async function copyToClipboard() {
            await navigator.clipboard.writeText(value)
            visible = true;
            setTimeout(() => {
                visible = false;
            }, 2000);
        }

        function clearText() {
            value = '';
        }
    </script>
    
    <div class="translate-container {isDarkMode ? 'translate-container-dark-mode' : 'translate-container-light-mode'}">
        <textarea {id} class='translate {isDarkMode ? 'translate-dark-mode' : 'translate-light-mode'}' {placeholder} {value} on:input={onInput}></textarea>
        {#if encode}
            <button class='clear-button {isDarkMode ? "clear-button-dark-mode" : "clear-button-light-mode"}' on:click={clearText}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 4L4 12.5"/>
                    <path d="M12.5 12.5L4 4"/>
                </svg>
            </button>
        {/if}
        {#if decode}
            <button class='copy-button {isDarkMode ? "copy-button-dark-mode" : "copy-button-light-mode"}' on:click={copyToClipboard}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="8" height="8"/>
                    <path d="M8 3.5H11.5V11.5H3.5V8.5"/>
                </svg>
                <div class='tooltip-container'>
                    <Tooltip text="Copied" {visible}/>
                </div>
            </button>
        {/if}
    </div>

    <style>
        textarea {
            resize: none;
        }

        textarea:focus {
            outline: none;
            box-shadow: none;
        }

        .translate-container {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            height: 136px;
        }

        .translate-container-dark-mode {
            border: 1px solid #414650;
        }

        .translate-container-light-mode {
            border: 1px solid #C0C6D2;
        }

        .translate {
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            background: none;
        }
        
        .translate-dark-mode {
            color: #DDD;  
        }

        .translate-light-mode {
            color: #000;  
        }

        .translate::placeholder {
            font: "Roboto";
            font-size: 12px;
        }

        .translate-dark-mode::placeholder {
            color: #656B78;
        }

        .translate-dark-mode::placeholder {
            color: #9BA3B3;
        }

        .clear-button {
            position:absolute;
            top: 5px;
            right: 5px;
            background: none;
            border: none;
            cursor: pointer;
        }

        .copy-button {
            position: absolute;
            bottom: 5px;
            right: 5px;
            background: none;
            border: none;
            cursor: pointer;
        }

        .copy-button-light-mode svg *,
        .clear-button-light-mode svg * {
            stroke: #5E6064;
            stroke-width: 1px;
        }

        .copy-button-dark-mode svg *,
        .clear-button-dark-mode svg * {
            stroke: #C0C6D2;
            stroke-width: 1px;
        }

        .copy-button-light-mode:active svg *, 
        .clear-button-light-mode:active svg * {
            stroke: #000;
        }

        .copy-button-dark-mode:active svg *,
        .clear-button-dark-mode:active svg * {
            stroke: #DDDDDD;
        }
        .tooltip-container {
            position: relative;
        }
    </style>