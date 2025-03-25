<script>
    let title = 'Leet Speak Translator';
    export let isDarkMode;
</script>

<div class="extension-header">
    <div class="title-icon-container">
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 164">
                <g id="Group 163">
                    <path id="Union" d="M16 5.5H9V8.5H7.5V13H16V5.5Z" fill="#FF4D00"/>
                    <path id="Union_2" d="M0 0H8V7.46153H0V0Z" fill="#FF4D00"/>
                    <path id="A" d="M2.15381 6.03823L3.54122 1.11359H4.78453L5.91005 6.03823H4.90886L4.67983 4.95851H3.54122L3.31219 6.03823H2.15381ZM3.70482 4.17326H4.50969L4.28066 3.02157C4.25013 2.85579 4.21741 2.6922 4.18251 2.53079C4.15197 2.36501 4.12798 2.23632 4.11053 2.14471C4.09308 2.23632 4.06908 2.36283 4.03855 2.52424C4.01237 2.68565 3.98183 2.84925 3.94693 3.01502L3.70482 4.17326Z" fill="white"/>
                    <path id="4" d="M12.1952 12.0384V10.8749H10.1143V9.50722L11.8942 6.97479H12.9739L11.0304 9.78205V10.0242H12.1952V9.00335L13.2308 8.94923V11.9843L12.1952 12.0384Z" fill="white"/>
                    <path id="Vector 127" d="M9 2L14 2V5" stroke="#FF4D00" stroke-width="2"/>
                    <path id="Vector 128" d="M6.5 11L2 11L2 8" stroke="#FF4D00" stroke-width="2"/>
                </g>
            </g>
        </svg>
    </div>
    <p class="extension-title {isDarkMode ? 'extension-title-dark-mode ' : 'extension-title-light-mode '}">{title}</p>
</div>

<style>
    .extension-header {
        display: flex;
        justify-content: flex-start;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        height: 32px;
    }

    .title-icon-container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        flex-shrink: 0;
    }

    .extension-title {
        font-size: 15px;
    }

    .extension-title-dark-mode {
        color: #DDD;
    }
    .extension-title-light-mode {
        color: #000;
    }
</style>