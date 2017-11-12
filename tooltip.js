class Tooltip {
  /**
   * Applies bubble info system on elements
   * param      {string}
   */
  static wrap(selector, position = 'top') {
      document.querySelectorAll(selector).forEach(element => new Tooltip(element, position));
  }
  /**
   * Constructs the object.
   *
   * @param      {string}  element   Name of the selector. All css selectors are valid
   * @param      {string}  position  The desired position, you can use the following options: Top, Left, Right and bottom
   */
  constructor (element, position) {
    this.element = element;
    let tooltipTarget = element.getAttribute('data-tooltip');
    if (tooltipTarget){
      this.title =  document.querySelector(tooltipTarget).innerHTML;
    } else {
       this.title = element.getAttribute('title');
    }
    element.removeAttribute('title');
    this.tooltip = null;
    this.position = position;
    this.element.addEventListener('mouseover', this.mouseOver.bind(this));
    this.element.addEventListener('mouseout', this.mouseOut.bind(this));
  }

  mouseOver (e) {
    e.preventDefault();
    let tooltip = this.createTooltip();
    let width = this.tooltip.offsetWidth;
    let height = this.tooltip.offsetHeight;
    let left;
    let top;
    let right;
    let bottom;
    switch (this.position){

      case "top" :
        left = this.element.offsetWidth / 2 -  width /2 + this.element.getBoundingClientRect().left  + document.documentElement.scrollLeft;
        top = this.element.getBoundingClientRect().top +  document.documentElement.scrollTop - height;
      break;

      case "right" :
        left = this.element.getBoundingClientRect().left + this.element.offsetWidth ;
        top = this.element.getBoundingClientRect().top +  document.documentElement.scrollTop + this.element.offsetHeight /2 - height /2;
      break;

      case "left" :
        left = this.element.getBoundingClientRect().left - width ;
        top = this.element.getBoundingClientRect().top +  document.documentElement.scrollTop + this.element.offsetHeight /2 - height /2;
      break;

      case "bottom" :
        left = this.element.offsetWidth / 2 -  width /2 + this.element.getBoundingClientRect().left  + document.documentElement.scrollLeft;
        top = this.element.getBoundingClientRect().top +  document.documentElement.scrollTop + this.element.offsetHeight;
      break;

    }
    if (top <= 20){ top = 20;}
    if (left <= 20){ left = 20;}
    if (left >=  window.innerWidth - width){ left = window.innerWidth - width;}
    if (top >= window.innerHeight - height){ top = window.innerHeight - height;}
    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
    tooltip.classList.add('visible');
    console.log(window.innerHeight);
    console.log(top);
  }

  mouseOut() {
    if (this.tooltip !== null){
      this.tooltip.classList.remove('visible');
      this.tooltip.addEventListener('transitionend', () => {
        if (this.tooltip !== null){
          document.body.removeChild(this.tooltip);
          this.tooltip = null;
        }
      });
    }
  }

 /**
 * Create tool tip.
 *
 * @return     {HTMLElement}   this.tooltip
 */
  createTooltip () {
    if (this.tooltip === null) {
      let  tooltip = document.createElement('div');
      tooltip.innerHTML = this.title;
      tooltip.classList.add('tool-tip');
      tooltip.classList.add(this.position);
      document.body.appendChild(tooltip);
      this.tooltip = tooltip;
    }
    return this.tooltip;
  }
} // End of Class Tooltip


Tooltip.wrap('.item1', 'right');
Tooltip.wrap('.item2', 'bottom');
Tooltip.wrap('.item3', 'left');
Tooltip.wrap('.item4', 'top');
