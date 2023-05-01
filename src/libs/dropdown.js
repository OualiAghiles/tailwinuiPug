
/**
 * 
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
 */

/**
         * <div x-data="dropdown">
            <button x-bind="trigger"></button>
        
            <div x-bind="dialogue"></div>
        </div>


        Alpine.data('dropdown', () => ({
            open: false,
        
            trigger: {
                ['@click']() {
                    this.open = ! this.open
                },
            },
        
            dialogue: {
                ['x-show']() {
                    return this.open
                },
            },
        }))
 * 
        @keydown.arrow-up.prevent='onArrowUp()'
        @keydown.arrow-down.prevent='onArrowDown()'
        @keydown.tab='open = false'
        @keydown.enter.prevent='open = false; focusButton()'
        @keyup.space.prevent='open = false; focusButton()'
*/


export default () => ({
  isOpen: false,
  trigger: {
    ['@click.prevent']() {
      this.isOpen = !this.isOpen
    },
    ['@click.away']() {
        this.isOpen = false;
    },
    ['@keydown.escape.prevent']() {
      
      this.isOpen = false;
    }
  },
  dialogue:  {
    ['x-show']() {
      return this.isOpen;
    },
    
    ['x-transition:enter']: 'transition ease-out duration-100',
    ['x-transition:enter-start']: 'transform opacity-0 scale-95',
    ['x-transition:enter-end']: 'transform opacity-100 scale-100',
    ['x-transition:leave']: 'transition ease-in duration-75',
    ['x-transition:leave-start']: 'transform opacity-100 scale-100',
    ['x-transition:leave-end']: 'transform opacity-0 scale-95',
    
  },
})