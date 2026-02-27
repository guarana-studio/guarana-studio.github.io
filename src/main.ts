import "@fontsource/geist";
import "basecoat-css/all";
import "./app.css";
import { mount } from "svelte";
import App from "./app.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
