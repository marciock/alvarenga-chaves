window.supportCustomElements="customElements" in window;

//import {Icone} from './components/icone.js';

//window.customElements.define('icone-img',Icone);

import {DropDown} from './components/dropdown.js';
import {InputPoint} from './components/inputpoint.js';
import {LineHor} from './components/linehor.js';

window.customElements.define('drop-down',DropDown);
window.customElements.define('input-point',InputPoint);
window.customElements.define('line-hor',LineHor);

