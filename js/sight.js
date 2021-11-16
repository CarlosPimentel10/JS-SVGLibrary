
class SVGElement {
    

    constructor(type, namespace, node){
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';

        this.node = document.createElementNS();
    }
}