import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

export const prerender = true;

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
