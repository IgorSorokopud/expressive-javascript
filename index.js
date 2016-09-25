window.onload = function () {
    /* FizzBuzz */
    for (var i = 1; i <= 100; ++i) {
        if (i % 15 == 0) {
            console.log('FizzBuzz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }

    var chess = '';
    for (var j = 0; j <= 8; ++j) {
        for (var i = 0; i <= 8; ++i) {
            if ((i + j) % 2 == 0) {
                chess += ' ';
            } else {
                chess += '#';
            }
        }
        chess += "\n"
    }
    console.log(chess);

    /*  */
    function min (arg1, arg2) {
        var result = arg1 < arg2 ? arg1 : arg2;
        return result;
    }

    console.log(min(-56, 11));
};