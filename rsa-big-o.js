/* 
  1. What is the Big O for this?
    Determine the Big O for the following algorithm:
    You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"
    
    Answer: Constant time O(1) because we can make the request and get response
    ------
    Determine the Big O for the following algorithm:
    You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
    
    Answer: Linear time O(n)

  2. Even or odd
    What is the Big O of the following algorithm? Explain your answer

    function isEven(value) {
        if (value % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    Answer: Linear time O(n); We get an input into the function where we have to do an evaluation of the 'value % 2' and return a true/false result based on that. It's a one in, one out function.
  
  3. Are you here?
    What is the Big O of the following algorithm? Explain your answer

    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
            for (let j = 0; j < arr2.length; j++) {
                const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

    Answer: Exponential time O(2^n); We have to loop through first array to get a value and then loop through the second one to see if we find a matching value.

  4. Doubler
    What is the Big O of the following algorithm? Explain your answer

    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }

    Answer: Linear time O(n); We iterate through the array at O(1) and then have to write to the array at O(n) time as it is not at the end.

  5. Naive search
    What is the Big O of the following algorithm? Explain your answer

    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }

    Answer: Linear time O(n); We have to iterate through the array which them could be all of the way at the end of. So this means you could possibly have to go through n number of times.

  6. Creating pairs:
    What is the Big O of the following algorithm? Explain your answer

    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }

    Answer: Polynomial time O(n^k); We have to loop through 1 array, loop through another array.

  7. Compute the sequence
    What does the following algorithm do? What is its runtime complexity? Explain your answer

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i === 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }

    Answer: It creates the fibonacci sequence. Constant time O(1) as we access an array and insert at the end.
  
  8. An efficient search
    In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }
  
    Answer: Logarithmic time O(Log(n)); We evaluate the middle point and split the sorted array in half each time.

  9. Random element
    What is the Big O of the following algorithm? Explain your answer

    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    Answer: Constant time O(1); We return a randomly accessed array element.

  10. What Am I?
    What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

    function isWhat(n) {
        if (n < 2 || n % 1 !== 0) {
            return false;
        }
        for (let i = 2; i < n; ++i) {
            if (n % i === 0) return false;
        }
        return true;
    }

    Answer:

  11. Tower of Hanoi
    The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

    There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
    The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

    If you are given 5 disks, how do the rods look like after 7 recursive calls?
    S, T, D
    5, 0, 0
    ...
    2, 0, 3
      S           T          D
                           [ ]
    [    ]                 [  ]
    [     ]                [   ]  
    How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
    7, 15, 31
    What is the runtime of your algorithm?
    Linear time O(n)
*/

const tower = (height, srcRod, desRod, tempRod) => {
  if (height >= 1) {
    // Move a tower of height-1 to the temp rod, using the destination rod.
    tower(height - 1, srcRod, tempRod, desRod);
    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower', srcRod, 'to Tower', desRod);
    // Move the tower of `height-1` from the `temp rod` to the `destination rod` using the `source rod`.
    tower(height - 1, tempRod, desRod, srcRod);
  }
  return;
};

tower(4, '1', '2', '3');

/* 12. a.
    const countSheep = (count) => {
      // Base case
      if (count === 0) {
        return 'All sheep jumped over the fence';
      }
      // General case
      return (
        `${count}: Another sheep jumps over the fence \n` + countSheep(count - 1)
      );
    };

    Linear time O(n)
*/

const countSheep = (count) => {
  for (let i = 1; i <= count; i++) {
    console.log(`${i}: Another sheep jumps over the fence \n`);
  }
  console.log('All sheep jumped over the fence');
  return;
};

/* 12. b.
    const powerCalculator = (base, exponent) => {
      if (exponent >= 0) {
        // Base case
        if (exponent === 0) {
          return 1;
        }
        // General case
        return base * powerCalculator(base, exponent - 1);
      }
      return 'exponent should be >= 0';
    };

    Linear time O(n)
*/

const powerCalculator = (base, exponent) => {
  let total = base;
  for (let i = 1; i < exponent; i++) {
    total = total * base;
  }
  console.log(total);
  return total;
};

/* 12. c.
    const reverseString = (string) => {
      if (string === '') {
        return '';
      } else {
        return reverseString(string.substr(1)) + string.charAt(0);
      }
    };
    Linear time O(n)
*/

const reverseString = (string) => {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  console.log(reversed);
  return reversed;
};

/* 12. d.
    const triangularNumber = (num) => {
      // Base case
      if (num <= 1) {
        return 1;
      }
      // General case
      return num + triangularNumber(num - 1);
    };

    Linear time O(n)
*/

const triangularNumber = (num) => {
  let triNum = 0;
  for (let i = 1; i <= num; i++) {
    triNum += i;
  }
  console.log(triNum);
  return triNum;
};

/* 12. e.
    const stringSplitter = (str, sep, result) => {
      result = result || [];
      // Base case
      if (str.indexOf(sep) === -1) {
        result.push(str);
      } else {
        // General case
        result.push(str.slice(0, str.indexOf(sep))) +
          stringSplitter(str.slice(str.indexOf(sep) + 1), sep, result);
      }
      return result;
    };

    Polynomial time O(n^2)
*/

const stringSplitter = (str, sep) => {
  let result = [];
  let prevSep = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === sep) {
      str.slice(prevSep, i) ? result.push(str.slice(prevSep, i)) : '';
      prevSep = i + 1;
    } else if (i === str.length - 1) {
      result.push(str.slice(prevSep, i + 1));
    }
  }
  console.log(result);
  return result;
};

stringSplitter('/02/20/2020//', '/');

/* 12. f.
    const fibonacci = (num) => {
      if (num === 1) {
        return [1];
      } else if (num === 2) {
        return [1, 1];
      } else {
        const result = fibonacci(num - 1);
        result.push(result[result.length - 2] + result[result.length - 1]);
        return result;
      }
    };

    Linear time O(n)
*/

const fibonacci = (num) => {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result.push(1);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  console.log(result);
  return result;
};

fibonacci(9);

/* 12. g.
    const factorial = (num) => {
      // Base case
      if (num === 1) {
        // Will be the multiplication of 1.
        return num;
      } else {
        // General case
        // Multiply the number by the number - 1.
        return num * factorial(num - 1);
      }
    };
    
    Linear time O(n)
*/

const factorial = (num) => {
  let result = num;
  for (let i = num - 1; i > 0; i--) {
    result *= i;
  }
  console.log(result);
  return result;
};

factorial(5);
