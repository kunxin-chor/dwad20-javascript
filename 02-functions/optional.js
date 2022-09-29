// optional arguments
// assume gst is already a percentage (7% = 0.07)
function calculateNetBill(bill, gst=0.07) {
    return bill * (1 + gst);
}

console.log("Net bill for 100=", calculateNetBill(100, 0.07));
console.log("Net bill for 200=", calculateNetBill(200));
console.log("Net bill for 100=", calculateNetBill(100,0.08))

function calculateResturantBill(bill, gst=0.07, serviceCharge=0.1) {
    console.log("gst =", gst);
    console.log("serviceCharge=", serviceCharge);
    return bill * (1 + gst + serviceCharge);
}
console.log("resturant bill for 100=", calculateResturantBill(100));
// Order matters when you specify the values of the optional arguments
console.log("resturant bill for 200=", calculateResturantBill(200, gst=0.1, serviceCharge=0.25));

// want have a mix of optional and complusory parameters
// just make sure the optional ALL come after the complusory