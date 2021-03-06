window.onload = function () {
    
    /* FizzBuzz */
    function fizzBuzz() {
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
    }
    //fizzBuzz();

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
    //console.log(chess);

    function min(arg1, arg2) {
        var result = arg1 < arg2 ? arg1 : arg2;
        return result;
    }
    //console.log(min(-56, 11));

    function isEven(arg) {

        if (arg === 0) {
            console.log("true");
        } else if (arg === 1) {
            console.log("false");
        } else {
            isEven(arg - 2);
        }
    }
    //console.log(isEven(10));

    function countBs(stringB, symbol) {
        var counter = 0;
        for (var i = 0; i < stringB.length; ++i) {
            if (stringB[i] === symbol) {
                counter++;
            }

        }

        if (counter) {
            return counter;
        } else {
            return 'такой буквы нет!';
        }
    }
    //console.log(countBs('dfdf3434', 'd'));

    function range(start, finish, step) {
        var resultArray = [];
        step = step || 1;

        if (step > 0) {
            for (; start <= finish; start += step) {
                resultArray.push(start);
            }
        } else {
            for (; start >= finish; start += step) {
                resultArray.push(start);
            }
        }

        return resultArray;
    }
    //console.log(range(5, 1, -1));

    function sum(array) {
        var lengthArray = array.length;
        var result = 0;

        for (var i = 0; i < lengthArray; ++i) {
            result = result + array[i];
        }
        return result;
    }
    //console.log(sum(range(1, 10)));

    function reverse(array) {
        var newArray = [];
        for (var i = array.length - 1; i >= 0; --i) {
            newArray.push(array[i]);
        }
        return newArray;
    }
    //console.log(reverse(["A", "B", "C"]));

    function reverseArrayInPlace(array) {
        for (var i = 0; i <= array.length - 1; ++i) {
            array[i] = array[array.length - (1 + i)];
            console.log(array.length - (1 + i));
        }
        return array;
    }
    //console.log(reverseArrayInPlace([5, 4, 3, 2, 1]));

    function arrayToList(array) {
        var list = null;
        for (var i = array.length - 1; i >= 0; i--)
            list = {value: array[i], rest: list};
        return list;
    }

    function listToArray (list) {
        var array = [];
        var node = list;
        for (; node; node = node.rest)
            array.push(node.value);
        return array;
    }
    console.log(listToArray(arrayToList(["10", "20", "30"])));
};
