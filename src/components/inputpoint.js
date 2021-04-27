export class InputPoint extends HTMLElement{

    constructor(){
        super();
    }
    connectedCallback(){
        const input=document.createElement('input');
        input.style='width:4em;height:auto';
        input.classList.add('form-control');
        input.setAttribute('maxlength','3');
       
        input.readOnly=true;
        input.type='text';
        input.inputMode='numeric';
              
       input.onkeypress=()=>{
           return event.charCode >=48 && event.charCode<=57;
       }      
        

        /*this.addEventListener('dblclick',()=>{
            input.readOnly=false;
        });*/
        this.addEventListener('click',()=>{
            input.readOnly=false;
        })
        this.addEventListener('touchend',()=>{
            input.readOnly=false;
        })
        this.addEventListener('focusout',()=>{
            input.readOnly=true;
        });


        this.appendChild(input);
    }
}