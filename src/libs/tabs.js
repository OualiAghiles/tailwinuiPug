

/**
 * This line of code is exporting a default function that returns an object with properties and methods for the tabs plugin. The function is immediately invoked with `()` and returns an object with the properties and methods defined inside it.
 *
 * @property
 * @name tabs
 * @kind function
 * @method [trigger] methode that get the ref for the new tab
 * @method [transition] call the alpinejs x-tansition methode to add some tailwindcss classes tou add some effects to the plugin
 * @type {any}
 * * @param e ['envent'] needed tout check the ref
 *  * this plugin need Aplinejs library to work
 * @example
* *           <div (x-data="tabs" )>
* *             <div>
* *               <button x-bind="trigger" data-ref="1"  :class="tabs === '1' ? 'activeClass' : ''"> </button>
* *               <button x-bind="trigger" data-ref="2" :class="tabs === '2' ? 'activeClass' : ''"> </button>
* *               <button x-bind="trigger" data-ref="2" :class="tabs === '3' ? 'activeClass' : ''"> </button>
* *             </div>
* *             <div  x-bind="transition" x-show="tabs === 'tab1'"></div>
* *             <div  x-bind="transition" x-show="tabs === 'tab2'"></div>
* *             <div  x-bind="transition" x-show="tabs === 'tab3'"></div>
* *           </div>
* @returns {Object} {tabs:"",trigger:method, transitions: methode}
 */





export default () => ({
  // initialize the active tab
  tabs: 'tab1',

  trigger: {
    // call the alpinejs x-on:click methode te return the new active element
    ['@click.prevent'](e) {
      // return the update on tabs to change the avtive tab
      return this.tabs = e.target.dataset.ref
    },


  },
  transition: {
    ['x-transition:enter']: 'transition ease-out duration-150',
    ['x-transition:enter-start']: 'transform opacity-0 translate-x-full',
    ['x-transition:enter-end']: 'transform opacity-100 -translate-x-0',
    ['x-transition:leave']: 'transition ease-in duration-100',
    ['x-transition:leave-start']: 'transform opacity-50 translate-x-0',
    ['x-transition:leave-end']: 'transform opacity-0 -translate-x-full',

  },
})
