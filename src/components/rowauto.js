export class RowAuto extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){

        this.classList.add('row');

        const mt=this.getAttribute('mt');

        if(mt !==''){
            
            this.classList.add('mt-'+mt);
        }


    }
}