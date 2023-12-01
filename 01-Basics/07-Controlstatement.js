/*
Control statement is of 2 types.
It is a condition which controls the execution of the program

1. conditional statement :- 
These statements are used for decision making or decision made by the condition.
	- if statement
	- if-else statement
	- switch statement
	- ternary statement
2. Iterative statement :- 
This is a statement that iterates repeatedly until a condition met.
	- using loops(while/do-while/for) 

    syntax of if statement:-
	if(condition) {
		//if condition will be satisfied then the body will execute
		}
syntax of if-else statement :-
	if(condition){
		//if condition will true then body will be executed.
		} 
syntax of switch statement :-
        switch(expression){
            case value1 :
                statement1;
                break;
            case value1 :
                statement1;
                break;
            
            default:
                statement;
        
        }


*/
// example of switch
// let num = 5;
// switch(num){
//     case 0:
//         console.log("no is 0");
//         break;
//     case 1:
//         console.log("no is 1");
//         break;
//     case 5:
//         console.log("no is 5");
//         break;
//     case 4:
//         console.log("no is 4");
//         break;
//     default:
//         console.log("no is not matched");
// }

// example of ternary operator(? :)
// syntax :- condition?statement1:statement2
// check number is positive or not

// let num = -26;
// let result = (num>=0 ? console.log(num,"is positive") :  console.log(num,"is negative"));

/*
 example of else-if
 syntax:- if(condition){
    //body
    }
    else if(condition){
        //statement
    }
    else if(condition){
        //statement
    }
    else {
        //statement
    }
*/

/*
Iterative statement :-
1. while loop (Entry control loop)
2. do-while loop (Exit control loop)

syntax of while loop: -
        while(condition){
            //code block will be executed.
        }
syntax of do-while loop:-
        do {
            //code will be executed first
            increment/decrement;
        }while(condition);
*/

let num = 0;
while(num<=10){
    console.log(num);
    num++;
}

let number = 0;
do {
    console.log(number);
    number++;
}while(number<=10);


