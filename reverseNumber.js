// write a function to reverse a number
var num = 42616;
    function revNum(num) {
        var reversedNum = 0;
        while(num > 0)
        {
            reversedNum = reversedNum * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return reversedNum;
    }
    console.log(revNum(num));
