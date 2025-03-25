    <script>
        export let dictionaries;
        export let selectedDictionary;
        export let onClickEncode;
        export let onClickDecode;
        export let visibility;
        export let handleDictionaryChange;
        export let openOptions;
        export let isDarkMode;
    </script>
    
    <div class="translate-options-container">
      <div class="select">
        <input 
          id="dictionary" 
          class="select-input {isDarkMode ? 'select-input-dark-mode' : 'select-input-light-mode'}" 
          readonly 
          type="text" 
          value={dictionaries[selectedDictionary]}
          autocomplete="off"
          placeholder="Leet Speak Basic" 
          on:click|preventDefault={openOptions}
        />
        <ul class="select-options {visibility} {isDarkMode ? 'select-options-dark-mode' : 'select-options-light-mode'}">
            {#each Object.keys(dictionaries) as dictionary}
                <input class="select-options-item {isDarkMode ? 'select-options-item-dark-mode' : 'select-options-item-light-mode'}" on:keypress={handleDictionaryChange} on:click={handleDictionaryChange} value={dictionaries[dictionary]} />
            {/each}
        </ul>
      </div>
      <button id="encode" class="button {isDarkMode ? 'button-dark-mode':'button-light-mode'}" on:click|preventDefault={onClickEncode}>Encode</button>
      <button id="decode" class="button {isDarkMode ? 'button-dark-mode':'button-light-mode'}" on:click|preventDefault={onClickDecode}>Decode</button>
    </div>

    <style>
        .translate-options-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
        }

        .select-input {
            box-sizing: border-box;
            display: flex;
            width: 175px;
            height: 30px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            box-shadow: none;
            padding-left: 10px;
            font-size: 13px;
            cursor: pointer;
        }
        
        .select-input-dark-mode {
            background: url('../assets/arrow-down-dark-mode.svg') no-repeat;
            background-position: 155px center;
            color: #DDD;
            border: 1px solid #414650;
        }
        
        .select-input-light-mode {
            color: #000;
            border: 1px solid #C0C6D2;
            background: url('../assets/arrow-down-light-mode.svg') no-repeat;
            background-position: 155px center;
        }

        .select-input-light-mode:hover {
            border: 1px solid #88ABF1;
        }

        .select-input-dark-mode:hover {
            border: 1px solid #5B75AA;
        }

        .select-input:focus {
            outline: none;
            box-shadow: none;
        }

        .select-input-dark-mode::placeholder {
            font-weight: 200;
            color: #656B78;
        }
        .select-input-light-mode::placeholder {
            font-weight: 200;
            color: #9BA3B3;
        }

        .select {
            position: relative;
            margin: 4px 0;
            cursor: pointer;
        }

        .select .select-options {
            box-sizing: border-box;
            list-style-type: none;
            margin: 2px 0;
            padding: 0;
            width: 175px;
            height: 180px;
            font-size: 13px;
            position: absolute;
            overflow-y: scroll;
            overflow-x: hidden;
            animation: expandOptions 0.1s ease-in 0s 1 forwards;
        }
        
        .select-options-dark-mode {
            border: 1px solid #414650;
            background: #0C0D13;
        }
        
        .select-options-light-mode {
            border: 1px solid #C0C6D2;
            background: #FFF;
        }
        .select-options.hidden {
            display: none;
            z-index: -1000;
        }

        .select-options.visible {
            display: block;
            z-index: 1000;
        }
        .select-options-item {
            box-sizing: border-box;
            line-height: 30px;
            padding: 0 8px;
            width: 190px;
            height: 30px;
            border: none;
            cursor: pointer;
        }
        
        .select-options-item-dark-mode {
            background: #0C0D13;
            border-bottom: 1px solid #414650;
            color: #DDD; 
        }

        .select-options-item-light-mode {
            background: #FFF;
            border-bottom: 1px solid #C0C6D2;
            color: #0C0D13; 
        }

        .select-options-item-dark-mode:hover {
            color: #fff;
        }

        .select-options-item-light-mode:hover {
            color: #000;
        }

        .select-options-item-dark-mode:focus-visible {
            outline: none;
        }

        .select-options-item-light-mode:focus-visible {
            outline: none;
            
        }

        @keyframes expandOptions {
            0% {
                max-height: 0;
            }

            100% {
                max-height: 180px;
            }
        }

        .button {
            display: flex;
            width: 64.4px;
            height: 30px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-width: 1px;
            border-style: solid;
            border-radius: 0%;
            font-size: 13px;
        }

        .button-dark-mode {
            background-color: #2B303F;
            border-color: #2B303F;
            color: #DDD;
        }
        .button-dark-mode:hover {
            background-color: #1a1f2d;
            border-color: #1A1F2D;
            cursor: pointer;
        }

        .button-dark-mode:active {
            border-color: #0c0d13;
            background-color: #0c0d13;
            cursor: pointer;          
        }

        .button-light-mode {
            background-color: #ECECEC;
            border-color: #ECECEC;
            color: #000;
        }
        .button-light-mode:hover {
            background-color: #D8DBE0;
            border-color: #D8DBE0;
            cursor: pointer;
        }

        .button-light-mode:active {
            border-color: #C0C6D2;
            background-color: #C0C6D2;
            cursor: pointer;          
        }
    </style>