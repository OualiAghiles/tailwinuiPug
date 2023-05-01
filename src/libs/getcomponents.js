import data from './data.js'
export default () => ({
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
      return this.dataStore;
    },
    
  })
