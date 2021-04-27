export class DateTime extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const div=document.createElement('div');
       

        let date=this.getAttribute('date');
        let time=this.getAttribute('time');

        div.classList.add('text-truncate','text-sm-center','font-weight-bold');
        div.style='font-size:0.7em;margin-left:1em;'
        div.innerHTML=`${date} ${time}`;

       
        this.appendChild(div);
    }
}