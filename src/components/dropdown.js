export class DropDown extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const select=document.createElement('select');
        const options=`<option value=0> </option> 
        <option value="1">Anderson</option> 
        <option value="2">Giovani </option> 
        <option value="3"> Marcio</option> 
        <option value="4"> Tapita</option> 
        <option value="5">Enzo </option> 
        `;

        select.innerHTML=options;
        select.classList.add('form-control');
        select.classList.add('form-select')
        //select.style='width:10em;height:auto';

        this.appendChild(select);


    }
}