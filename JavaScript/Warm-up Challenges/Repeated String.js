function repeatedString(s, n) {
    // Write your code here
    let str='';
    let nrAinit=0;
    let nrArest=0;
    let nrLetters=s.length;

    let intreg=Math.floor(n/nrLetters);
    let rest=n%nrLetters;

    for(let i=0;i<nrLetters;i++){
      if(s.charAt(i)=='a'){
          nrAinit++;
      }
    }
    
    let substring=s.substring(0, rest);
    for(let i=0;i<substring.length;i++){
      if(substring.charAt(i)=='a'){
          nrArest++;
      }
    }
    let totalA=nrAinit*intreg+nrArest;
    
    return totalA;
}
