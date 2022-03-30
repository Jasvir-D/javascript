// write a function to count odd and even numbers from an array of numbers

 var arr = [ 2, 3, 4, 5, 6 ];
    var n = arr.length;
    CountEvenOdd(arr, n);

function CountEvenOdd(arr, arr_size)
{
    var Ecount = 0;
    var Ocount = 0;
 
    for (var i = 0; i < arr_size; i++) {
        if (arr[i] & 1 == 1)
            Ocount++;
        else
            Ecount++;
    }
 console.log("Number of even elements =" + Ecount);
    console.log("number of odd elements =" + Ocount);
}
   
