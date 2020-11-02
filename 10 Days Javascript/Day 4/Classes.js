class Polygon{
    constructor(lengths){
        this.lengths = lengths;
    }
    
    perimeter(){
        let total = 0;
        
        for(let i = 0; i < this.lengths.length; i++){
            total += this.lengths[i] ;
        }
        return total;
    }
 }   