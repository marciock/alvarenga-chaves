export class InputKey extends HTMLElement{

    constructor(){
        super();
    }
    connectedCallback(){
        const input=document.createElement('input');
        //input.style='width:4em;height:auto';
        input.classList.add('form-control');
        //input.setAttribute('maxlength','3');
       
        input.readOnly=true;
        input.type='text';
      //  input.inputMode='numeric';
              
      

        


        this.appendChild(input);
    }
}