export class LineHor extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');

      const mPath=document.createElementNS('http://www.w3.org/2000/svg','polyline');

         let points=this.getAttribute('points');
         let svgHeight=this.getAttribute('svg-height');
         let svgWidth=this.getAttribute('svg-width')

        svg.setAttributeNS(null,'id','poli');

        if(svgHeight ===null && svgWidth ===null){
            svg.setAttributeNS(null,'height','9em');
            svg.setAttributeNS(null,'width','7em');
        }else{
            svg.setAttributeNS(null,'height',svgHeight);
            svg.setAttributeNS(null,'width',svgWidth);
        }
         
       

        //mPath.setAttributeNS(null,'points','0,40 40,40 40,120');
        //mPath.setAttributeNS(null,'points','0,80 40,80 40,0');
        mPath.setAttributeNS(null,'points',points);
        mPath.setAttributeNS(null,'style','fill:white;stroke:black;stroke-width:3');

        svg.appendChild(mPath);

        this.appendChild(svg);

    }
}