import { Engine } from "./core/Engine";

window.onload = () => {
    let engine = new Engine( document.getElementById("viewport") as HTMLCanvasElement);
    engine.Start();
}