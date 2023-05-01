import data from "./libs/data";
import "./style.css";
import "./libs/prism";
import "./libs/components";
import dropdown from "./libs/dropdown";
import getData from "./libs/getcomponents";
console.log('getData', getData());
//import Alpine from "alpinejs";
import collapse from '@alpinejs/collapse'
document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", dropdown);
  Alpine.data("store", getData);
  Alpine.data("tabs", tabs)
});
Alpine.plugin(collapse)
Alpine.start();
window.alpine = Alpine;
