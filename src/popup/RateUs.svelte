    <script>
      import DarkModeToggle from './DarkModeToggle.svelte'
      import LightModeToggle from './LightModeToggle.svelte'

      export let isDarkMode;
      export let toggleDark;
      export let toggleLight;
      
      export function rateUs() {
        const rating = parseInt(this.value, 10);
        let url = '';

        if (rating <= 3) {
          url = 'https://forms.gle/xpiH51QAkcNi2CNR8';
        } else {
          url = 'https://chromewebstore.google.com/detail/leet-speak-translator/ajflajodjnnjjiecomolikijdfabbaeb/reviews';
        }

        window.open(url, '_blank');
      }
    </script>
    
    <div class="footer">
      {#if isDarkMode}<button on:click={toggleLight}><DarkModeToggle /></button>{/if}
      {#if !isDarkMode}<button on:click={toggleDark}><LightModeToggle /></button>{/if}
      <div class='rating-container'>
        <p class="rate-us-text {isDarkMode ? 'rate-us-text-dark-mode' : 'rate-us-text-light-mode'}">Rate us:</p>
        <div class="rating-group">
          <input name="fst" id="fst-1" value="1" type="radio" on:click={rateUs} />
          <label for="fst-1">
            <svg class='star {isDarkMode ? "star-dark-mode" : "star-light-mode"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
            <path
                d="M7.2 1.30198L8.69567 4.89799L8.81295 5.17997L9.11737 5.20437L12.9996 5.51561L10.0417 8.0493L9.80981 8.24798L9.88067 8.54504L10.7843 12.3334L7.46063 10.3033L7.2 10.1441L6.93938 10.3033L3.61568 12.3334L4.51934 8.54504L4.5902 8.24798L4.35826 8.0493L1.40044 5.51561L5.28263 5.20437L5.58706 5.17997L5.70434 4.89799L7.2 1.30198Z" />
            </svg>
          </label>
          <input name="fst" id="fst-2" value="2" type="radio" on:click={rateUs} />
          <label for="fst-2">
            <svg class='star {isDarkMode ? "star-dark-mode" : "star-light-mode"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
            <path
                d="M7.2 1.30198L8.69567 4.89799L8.81295 5.17997L9.11737 5.20437L12.9996 5.51561L10.0417 8.0493L9.80981 8.24798L9.88067 8.54504L10.7843 12.3334L7.46063 10.3033L7.2 10.1441L6.93938 10.3033L3.61568 12.3334L4.51934 8.54504L4.5902 8.24798L4.35826 8.0493L1.40044 5.51561L5.28263 5.20437L5.58706 5.17997L5.70434 4.89799L7.2 1.30198Z" />
            </svg>
          </label>
          <input name="fst" id="fst-3" value="3" type="radio" on:click={rateUs} />
          <label for="fst-3">
            <svg class='star {isDarkMode ? "star-dark-mode" : "star-light-mode"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
            <path
                d="M7.2 1.30198L8.69567 4.89799L8.81295 5.17997L9.11737 5.20437L12.9996 5.51561L10.0417 8.0493L9.80981 8.24798L9.88067 8.54504L10.7843 12.3334L7.46063 10.3033L7.2 10.1441L6.93938 10.3033L3.61568 12.3334L4.51934 8.54504L4.5902 8.24798L4.35826 8.0493L1.40044 5.51561L5.28263 5.20437L5.58706 5.17997L5.70434 4.89799L7.2 1.30198Z" />
            </svg>
          </label>
          <input name="fst" id="fst-4" value="4" type="radio" on:click={rateUs} />
          <label for="fst-4">
            <svg class='star {isDarkMode ? "star-dark-mode" : "star-light-mode"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
            <path
                d="M7.2 1.30198L8.69567 4.89799L8.81295 5.17997L9.11737 5.20437L12.9996 5.51561L10.0417 8.0493L9.80981 8.24798L9.88067 8.54504L10.7843 12.3334L7.46063 10.3033L7.2 10.1441L6.93938 10.3033L3.61568 12.3334L4.51934 8.54504L4.5902 8.24798L4.35826 8.0493L1.40044 5.51561L5.28263 5.20437L5.58706 5.17997L5.70434 4.89799L7.2 1.30198Z" />
            </svg>
          </label>
          <input name="fst" id="fst-5" value="5" type="radio" on:click={rateUs} />
          <label for="fst-5">
            <svg class='star {isDarkMode ? "star-dark-mode" : "star-light-mode"}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
            <path
                d="M7.2 1.30198L8.69567 4.89799L8.81295 5.17997L9.11737 5.20437L12.9996 5.51561L10.0417 8.0493L9.80981 8.24798L9.88067 8.54504L10.7843 12.3334L7.46063 10.3033L7.2 10.1441L6.93938 10.3033L3.61568 12.3334L4.51934 8.54504L4.5902 8.24798L4.35826 8.0493L1.40044 5.51561L5.28263 5.20437L5.58706 5.17997L5.70434 4.89799L7.2 1.30198Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>

    <style>
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding-left: 5px;
        padding-right: 5px;
      }

      .rating-container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        width: 70%;
      }

      .rating-group {
        display: inline-flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
      }

      .rate-us-text {
        display: flex;
        align-items: center;
        font: "Roboto";
        font-size: 14px;
        margin: 0;
        margin-right: 6px;
        font-weight: 400;
        height: 16px;
        cursor: default;
      }
      
      .rate-us-text-dark-mode {
        color: #a0aac0;
      }
      .rate-us-text-light-mode {
        color: #656B78;
      }

      .star {
        stroke-width: 0.5px;
      }
      
      .star-dark-mode {
        stroke: #a0aac0;
      }

      .star-light-mode {
        stroke: #656B78;
      }

      .footer input {
        position: absolute;
        left: -9999px;
      }

      .footer label svg {
        height: 18px;
        width: 18px;
      }

      .footer label svg.star-dark-mode {
        fill: #0C0D13;
      }

      .footer label svg.star-light-mode {
        fill: #FFF;
      }

      .footer .rating-group:hover label svg {
        fill: #FFF622;
        transition: fill 0.3s ease;
        cursor: pointer;
      }

      .footer .rating-group label:hover~label svg,
      .footer .rating-group label:hover svg {
        transition: fill 0.3s ease;
        fill: #FF4D00;
      }

      .footer .rating-group label:hover~label svg.star-dark-mode  {
        fill: #0C0D13;
      } 
      .footer .rating-group label:hover~label svg.star-light-mode  {
        fill: #FFF;
      } 

      button {
        margin: 0;
        padding: 0;
        border:none;
        background:none;
        width: 28px;
        height: 15px;
      }

    </style>