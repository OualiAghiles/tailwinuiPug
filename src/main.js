import "./style.css";
import Alpine from "alpinejs";

//import collapse from '@alpinejs/collapse'
document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));
});
//Alpine.plugin(collapse)
Alpine.start();

window.alpine = Alpine;
