/*
Loops :- repeatedly execute the statement
- In JavaScript there are 5 types of loops are there.
    1. for loop
        for(initialization;condition;increment/decrement)
        {
            statement
        }

    2. while loop
        while(condition)
        {
            statement;
            ++/--;
        }
    ex:-
    var a = 12;
    while(a<20)
    {
    console.log(a);
    a++;
    }

    3. do-while loop
        do
        {
            statement;
            ++/--;
        }while(condition)
    ex:-
    var a = 12;
    do {
    console.log("hello giftian");
    a++;
    }while(a<15);

    4. for-in loop :- for in loop was only works on object
                    - they iterate the key value pair in object
    var obj = {
    name : "Nibedita",
    age : 22,
    place : "universe",
    };

    for(var key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(key,obj[key]);
    }
    5. for-each loop :- for each loop will only execute with an array.
                      - its main motive is traverse/iterate the array element one by one.
    ex:-
    var a = [1,2,3,4,5,6,7,8,9]
    a.forEach(function(val){
    console.log(val);
    }) 
*/




