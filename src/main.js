import './style.css'
import './libs/prism'
import './libs/components'
import data from './libs/data'
import Alpine from 'alpinejs'

//import collapse from '@alpinejs/collapse'
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
      open: false,
      toggle () {
          this.open = !this.open
        }
    }))
    Alpine.data('store',()=>({
      dataStore: null,
      getStoreSections() {
        return this.dataStore = data().components.marketing.sections
      },
      getStoreElements() {
        return this.dataStore = data().components.marketing.elements
      },
      getStoreFeedback() {
        return this.dataStore = data().components.marketing.feedback
      },
      getStorePageExemple() {
        return this.dataStore = data().components.marketing.pageExamples
      },
      getStoreApplicationShells() {
        return this.dataStore = data().components.applUI.applicationShells
      },
      getStoreDisplayData() {
        return this.dataStore = data().components.applUI.displayData
      },
      getStoreElements() {
        return this.dataStore = data().components.applUI.elements
      },
      getStoreFeedback() {
        return this.dataStore = data().components.applUI.feedback
      },
      getStoreForms() {
        return this.dataStore = data().components.applUI.forms
      },
      getStoreHeadings() {
        return this.dataStore = data().components.applUI.headings
      },
      getStoreLayouts() {
        return this.dataStore = data().components.applUI.layouts
      },
      getStoreLists() {
        return this.dataStore = data().components.applUI.Lists
      },
      getStoreNavigations() {
        return this.dataStore = data().components.applUI.navigations
      },
      getStoreOverlays() {
        return this.dataStore = data().components.applUI.overlay
      },
      getStorePageExempleUi() {
        return this.dataStore = data().components.applUI.pageExemple
      },


    }))
})
//Alpine.plugin(collapse)
Alpine.start()
window.alpine = Alpine
