import "./style.css";
import "./libs/prism";
import data from "./libs/data";
//import Alpine from "alpinejs";
//import collapse from '@alpinejs/collapse'
document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      this.open = !this.open;
    },
  }));
  Alpine.data("store", () => ({
    dataStore: [],
    getComponents() {
      const a = data().components;
      let entries = Object.keys(a);
      entries.forEach((el) => {
        let m = {
          header: "",
          desc: "",
          data: [],
        };
        m.header = el;
        m.data = a[el]["data"];
        m.desc = a[el]["description"];
        this.dataStore.push(m);
      });
      console.log(this.dataStore)
      return this.dataStore;
    },
    
  }));
});
//Alpine.plugin(collapse)
Alpine.start();
window.alpine = Alpine;
