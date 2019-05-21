/******
* Coding challenge 5
*/


/*
Remember the tip calculator challenge? let's create a mroe advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using object and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This methos should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output Create 1) a new array containing all tips and 2) an array containing final paid amounts ( bills+ tip).
Hint: start with two empty arrays [] as properties and then fill them up in the loop.



Extra after Finishing: Mark's family asl went on a holday going to 4 different restaurants. The bills were $77, $375, $110, and $45.

Mark like to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300


5. Implement the same functionality as before, this time using Mark's tipping rule
6. Create a function( not a method) to calculate the average of a given array of tips.
Hint: loop over the array, and in each iteration store the current sum in a variable(starting from 0). After you have the sum of the array, divide it by the number of elements in it ( that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average.

*/
var john = {
    fullName : 'John Smith',
    bills : [124,48,268,180,42],
    calcTip : function(){
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            // Determine percentage based on tipping rules
            if (this.bills[i] < 50){
                percentage =  0.2;
            }else if (this.bills >= 50 && bills <= 200){
                percentage = 0.15;
            }else {
                percentage = 0.1;
            }
            // Add result to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }        
    }
};
john.calcTip();
console.log(john);



var mark = {
    fullName : 'Mark Jodan',
    bills : [77,375,110,45],
    calcTip : function(){
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            // Determine percentage based on tipping rules
            if (this.bills[i] < 100){
                percentage =  0.2;
            }else if (this.bills >= 100 && bills <= 300){
                percentage = 0.1;
            }else {
                percentage = 0.25;
            }
            // Add result to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }        
    }
};

mark.calcTip();
console.log(mark);


function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum /tips.length;
}
// [ 2, 6, 4] - > 12


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john.average, mark.average);

if (john.average > mark.average){
    console.log(john.fullName + ' \'s family paid higher tips with an average of $' + john.average);
}else if (john.average < mark.average){
    console.log(mark.fullName + ' \'s family paid higher tips with an average of $' + mark.average);
}else{    
    console.log('They are paid equally' + john.average);
}


