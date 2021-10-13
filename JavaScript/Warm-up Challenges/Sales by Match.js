function sockMerchant(n, ar) {
    // Write your code here
    let result=0;
    ar.sort();
    for (let i=0; i < n-1; i++) {
    {
        if (ar[i]===ar[i+1]){
            result++;
            i+=1;
        }
    }
    }
    return result;
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);