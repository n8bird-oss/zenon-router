import '../style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../vite.svg'
import { setupCounter } from '../counter.js'
import router from '../main.js'

export const Home = () => {
  document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <button type="button" id="about">About Page</button>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `
  setupCounter(document.querySelector('#counter'))

  document.getElementById("about").addEventListener('click', () => router.push('/about'))
}