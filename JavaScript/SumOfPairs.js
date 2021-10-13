function sumPairs(ints, s) {
    let valueFirst=undefined;
    let valueSecond=undefined;
   
    for (let i=0;i<ints.length;i++){
    let pair=s-ints[i];
   
       for (let j=i+1;j<ints.length;j++){
         if (ints[j]==pair){
        
           valueFirst=ints[i];
           valueSecond=ints[j];
           ints.splice(j,1);
         }
       } 
     }

    if (valueFirst===undefined){
        return undefined;
    } else{
        return[valueFirst,valueSecond];
    }
       
   }