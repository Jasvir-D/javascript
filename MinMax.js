// write a function to calculate max and min element of an array

var arr = [ 12, 123, 45, 67, 1 ];
var n = arr.length;

function MinEle(arr, n)
{
    var res = arr[0];
    for(var i = 1; i < n; i++)
        res = Math.min(res, arr[i]);
    return res;
}
function MaxEle(arr, n)
{
    var res = arr[0];
      
    for(var i = 1; i < n; i++)
        res = Math.max(res, arr[i]);
    return res;
}

console.log("Minimum element = " +MinEle(arr, n));
console.log("Maximum element= " + MaxEle(arr, n));
