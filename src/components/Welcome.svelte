<script lang="ts">
  import { formatTimeLeft } from "../utils";

  const TIME_LIMIT = 1500; //25 mins

  let timerStarted = false;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  chrome.action.setBadgeText({ text: `${1500 / 60}` });

  let buttonValue = "Start";

  // const timerInterval = setInterval(() => {
  //   timePassed += 1;
  //   timeLeft -= timePassed;
  // }, 1000);

  // if (timeLeft === 0) {
  //   clearInterval(timerInterval);
  //   timeLeft = TIME_LIMIT;
  //   timePassed = 0;

  //   // call completed function here
  // }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cagliostro&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div class="flex flex-col rounded-[6px]">
    <div class="timer-wrapper">
      <h4 class="time">
        {formatTimeLeft(timeLeft)}
      </h4>

      <button
        on:click={() => {
          timerStarted = !timerStarted;
          buttonValue = timerStarted ? "Stop" : "Start";
        }}
      >
        {buttonValue}
      </button>
    </div>
  </div>
</main>

<style scoped>
  main {
    font-family: "Cagliostro", sans-serif;
    width: 60ch;
    height: 100%;
    border: 2px theme("borderColor.gray.500");
    background-color: theme("colors.gray.600");
    color: theme("colors.blue.300");
    padding: theme("spacing.4");
  }

  .timer-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px 0 40px;
    border-radius: 6px;
    margin: 10px auto 20px;
  }

  .timer-wrapper h4 {
    font-size: 75px;
    margin: 0;
  }

  .timer-wrapper button {
    cursor: pointer;
    border: none;
    padding: 4px 24px;
    min-width: 120px;
    border-radius: 6px;
    box-shadow: theme("colors.blue.300") 0 3px -1px;
    background-color: aliceblue;
    font-size: 18px;
    text-transform: uppercase;
  }
</style>
