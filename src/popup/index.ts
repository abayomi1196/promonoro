import "../app.css";
import Welcome from "../components/Welcome.svelte";

const target = document.getElementById("app");

async function render() {
  new Welcome({ target });
}

document.addEventListener("DOMContentLoaded", render);
