/*
Condition statement :- 
    - condition statement are those who create condition on whether you goes this side you goes another side like that.
    1. if :- if condition is true then statement is true otherwise it will false
        if(condition)
        {
            statement
        }
    ex :-
    var a = 20;
    if(a<18)
    {
    console.log("they did not give vote");
    }
    2. if-else :- if condition is satisfied then if block is executed otherwise else block will executed.
        if(condition)
        {
            statement
        }
        else
        {
            statement
        }
    ex :-
    var a = 29;
    if(a%2==0)
    {
    console.log("even");
    }
    else
    {
    console.log("odd");
    }
    3. if else-if :- In that we add multiple case simultaneously to check the condition where we get executed.
        if(condition)
        {
            statement
        }
        else if(condition)
        {
            statement
        }
        else if(condition)
        {
            statement
        }
        else
        {
            statement
        }
    ex :-
    const balance = 700;
    if(balance<500)
    {
    console.log("less than 500");
    }
    else if(balance<700)
    {
    console.log("less than 700");
    }
    else if(balance<900)
    {
    console.log("less than 900");
    }
    else 
    {
    console.log("less than 1200");
    }
    4. switch :- A part of JavaScript conditional statement where we execute different statement depends on the condition that they check.
    switch(key)
    {
        case : value
        break;
        case : value
        break;
        case : default
        break;
    }
ex :-
    const month = 8;
switch(month)
    {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        default:
            console.log("default case");
    }

    const month = "jan";
    switch(month)
        {
            case "jan":
                console.log("January");
                break;
            case "feb":
                console.log("February");
                break;
            case "mar":
                console.log("March");
                break;
            case "apr":
                console.log("April");
                break;
            case "may":
                console.log("May");
                break;
            case "june":
                console.log("June");
                break;
            default:
                console.log("default case");
        }
    
        
*/

