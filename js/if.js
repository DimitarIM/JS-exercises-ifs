// don't touch the window.addEventListener line, or the closing }); at the end of the file
window.addEventListener('load', function () {

    /* let exercise1 = prompt("Enter a number");
    
    if(exercise1 > 5) this.alert(true);
    else this.alert(false); */

    /* let exercise2 = prompt("Enter a number");
    
    if(exercise2 > 5) this.alert(true);
    else this.alert(false); */

    /* let exercise3 = prompt("Enter a number");
    
    if(exercise2 >= 5) this.alert(true);
    else this.alert(false);  */

    /*     let exercise4 = null;
    
        for (let i = 0; i < 10; i++) {
            console.log(typeof(exercise4));
        }
    
        exercise4 = prompt("Enter a number");
    
        for (let i = 0; i < 10; i++) {
            console.log(exercise4);
        }
    
        for (let i = 0; i < 10; i++) {
            console.log(typeof(exercise4));
        }
     */

    /*     let exercise5 = prompt("Enter a number");
        if(exercise5>=5 && exercise5<=10)this.alert(true)
            else this.alert(false); */

    /*     let exercise6 = prompt("Enter a number");
        if (exercise6 < 5 || exercise6 > 10) this.alert(true)
        else this.alert(false); */

    /*     let exercise7 = prompt("Enter a number");
        if (exercise7 < 5) this.alert("less than 5");
        else if (exercise7 > 10) this.alert("greater than 10");
        else this.alert("neither"); */

    //Exercise 8
    /*     let num1 = prompt("Enter a number");
        let num2 = prompt("Enter a number");
        
        this.alert(num1>num2 ? num1 : num2); */

    //Exercise 9
    /*     let arr = [this.prompt("Enter a number"), this.prompt("Enter a number"), this.prompt("Enter a number")];
    
        this.alert(arr.sort()) */

    //Exercise 10 

    const person = {};

    person.breed = null;
    person.breedSound = null;

    let animal = this.prompt("Do you like cats or dogs");



    switch (animal) {
        case "cats":
            if (this.prompt("Do you prefer a tabby or a tiger") === "tabby") {
                person.breed = "tabby";
                person.breedSound = "miaow"
            }
            else {
                person.breed = "tiger";
                person.breedSound = "growl";
            }
            break;

        case "dogs":
            if (this.prompt("Do you prefer a chihuahua or a wolf") === "chihuahua") {
                person.breed = "chihuahua";
                person.breedSound = "yap";
            }

            else {
                person.breed = "wolf";
                person.breedSound = "howl";
            }
            break;
    }

    if(person.breed !=null && person.breedSound != null)this.alert(person.breed + " " + person.breedSound + "s");
    else this.alert("person undefined");
    /*      
    Complete each exercise, test by running if.html, then comment out the code to stop it running again when you move on to subsequent exercises. 
    
    If you don't the prompts and alerts from previous exercises will run whenever you reload the page
    
    Use the exercise number as the variable for the prompt.
    
    Eg:
    let exercise1 = prompt("Enter a number");
    */

});