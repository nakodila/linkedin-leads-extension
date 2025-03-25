<script>
    import {
        leetBasicEncode,
        leetBasicDecode,
        leetIntermediateEncode,
        leetIntermediateDecode,
        leetAdvancedEncode,
        leetAdvancedDecode,
        flipEncode,
        flipDecode,
        cyrillicEncode,
        cyrillicDecode,
        greekEncode,
        greekDecode,
    } from '../utils/conversions.js'
    import AppHeader from './AppHeader.svelte';
    import RateUs from './RateUs.svelte';
    import TextArea from './TextArea.svelte';
    import SelectDictionary from './SelectDictionary.svelte';

    const DICTIONARY = {
        leet_basic:  'Leet Speak Basic',
        leet_intermediate: 'Leet Speak Intermediate',
        leet_advanced: 'Leet Speak Advanced',
        flip: 'Flip',
        cyrillic: 'Cyrillic',
        greek: 'Greek',
    }

    let from = '';
    let to = '';
    let selectedDictionary = 'leet_basic';
    let visibility = 'hidden'
    let isDarkMode = true;

    function onInput() {
        const input = this;
        from = input.value
    }

    function handleDictionaryChange() {
        const target = this
        const encodeDictionary = Object.entries(DICTIONARY).find(entry => entry[1] === target.value)[0]
        selectedDictionary = encodeDictionary;
        visibility = 'hidden'
    }

    function openOptions() {
        visibility = visibility === 'hidden' ? 'visible' : 'hidden';
    }

    function toggleDark() {
        isDarkMode = true
    }

    function toggleLight() {
        isDarkMode = false
    }

    const onClickEncode = () => {
        switch (selectedDictionary) {
            case 'leet_basic':
                to = leetBasicEncode(from);
                break;
            case 'leet_intermediate':
                to = leetIntermediateEncode(from);
                break;
            case 'leet_advanced':
                to = leetAdvancedEncode(from);
                break;
            case 'flip':
                to = flipEncode(from);
                break;
            case 'cyrillic':
                to = cyrillicEncode(from);
                break;
            case 'greek':
                to = greekEncode(from);
                break;
            default:
                break;
        }
    }

    const onClickDecode = () => {
        switch (selectedDictionary) {
            case 'leet_basic':
                to = leetBasicDecode(from);
                break;
            case 'leet_intermediate':
                to = leetIntermediateDecode(from);
                break;
            case 'leet_advanced':
                to = leetAdvancedDecode(from);
                break;
            case 'flip':
                to = flipDecode(from);
                break;
            case 'cyrillic':
                to = cyrillicDecode(from);
                break;
            case 'greek':
                to = greekDecode(from);
                break;
            default:
                break;
        }
    }
</script>

<div class="extension-container {isDarkMode ? 'dark-mode' : 'light-mode'}">
    <AppHeader {isDarkMode} />
    <TextArea id="from" {isDarkMode} placeholder="Type or paste" value={from} {onInput} decode={false}/>
    <SelectDictionary {selectedDictionary}  {onClickEncode} {onClickDecode} {isDarkMode} dictionaries={DICTIONARY} {handleDictionaryChange} {openOptions} {visibility}/>
    <TextArea id="to" placeholder="Result" value={to} onInput={undefined} {isDarkMode} decode={true}/>
    <RateUs {isDarkMode} {toggleDark} {toggleLight} />
</div>

<style>
    .extension-container {
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        width: 330px;
        height: 390px;
        flex-shrink: 0;
        padding-left: 10px;
        padding-right: 10px;
    }

    .dark-mode {
        background-color: #0C0D13;
    }

    .light-mode {
        background-color: #FFF;
    }
</style>