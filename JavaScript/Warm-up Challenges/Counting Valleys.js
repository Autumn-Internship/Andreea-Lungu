function countingValleys(steps, path) {
    // Write your code here
    let sum=0;
    let nrValley=0;

    for (let i=0;i<=steps;i++){
        if(path.charAt(i)=='U'){
            sum++;
        }
        
        if(path.charAt(i)=='D'){
           
             if (sum==0){
             nrValley++;
            }
             sum--;
        }
       
        
    }
    return nrValley;
}
