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
*/
