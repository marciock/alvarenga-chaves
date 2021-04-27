export class LineHor extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');

      const mPath=document.createElementNS('http://www.w3.org/2000/svg','polyline');

        svg.setAttributeNS(null,'id','poli');
        svg.setAttributeNS(null,'height','9em');
        svg.setAttributeNS(null,'width','7em');

        let points=this.getAttribute('points');

        //mPath.setAttributeNS(null,'points','0,40 40,40 40,120');
        //mPath.setAttributeNS(null,'points','0,80 40,80 40,0');
        mPath.setAttributeNS(null,'points',points);
        mPath.setAttributeNS(null,'style','fill:white;stroke:black;stroke-width:3');

        svg.appendChild(mPath);

        this.appendChild(svg);

    }
}