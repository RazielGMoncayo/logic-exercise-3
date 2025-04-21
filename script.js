let contion = 0;

do{
    //! values user input 
    let number = parseFloat(prompt("Enter the number to get the factorial: "));

    if(!isNaN(number)){
        let factorial = 1;
        for(let i = 1; i <= number; i++){
            factorial *= i;
        }
        console.log("The factorial of " + number + " 5is " + factorial);
        contion = parseInt(prompt("Do you want to continue? (0 to exit, 1 to continue)"));
    } else {
        console.log("Enter only a number to get the factorial");
    }

} while(contion!=0);