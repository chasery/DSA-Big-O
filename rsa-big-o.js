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

    Answer: Polynomial time O(n^k); We have to loop through first array to get a value and then loop through the second one to see if we find a matching value.
*/
