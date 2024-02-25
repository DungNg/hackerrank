function bonAppetit(bill, k, b) {
    // Write your code here
    let sumIf = 0;
    bill.forEach(item => {
            sumIf = sumIf + (item * 1);
    });
    let result = b - (sumIf - bill[k]) / 2;
    console.log(result > 0 ? result : "Bon Appetit");
}