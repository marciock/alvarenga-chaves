window.supportCustomElements="customElements" in window;

//import {Icone} from './components/icone.js';

//window.customElements.define('icone-img',Icone);

import {DropDown} from './components/dropdown.js';
import {InputPoint} from './components/inputpoint.js';

import {InputKey} from './components/inputkey.js';
import {DateTime} from './components/datetime.js';

window.customElements.define('drop-down',DropDown);
window.customElements.define('input-point',InputPoint);

window.customElements.define('input-key',InputKey);
window.customElements.define('date-time',DateTime);

