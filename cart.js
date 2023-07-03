///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function (acc, cur) { return acc + cur.price }, 0)

console.log("Problem 1: " + summedPrice)


//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal = (cartTotal * (1 + tax)) - couponValue
    return cartTotal
}

console.log("Problem 2: " + calcFinalPrice(summedPrice, 5, .06))

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE
    const customerExample = {
        name: string - a name would just be a string - a resturant needs to know who is ordering
        phoneNumber: number- non special character list of numbers could just be a number, not a string - contact number in case there is an issue or changes needed to the order
        email: string - emails are a mix of characters so that would be a string - to send an order confirmation and reciept
        dishesOrdered: array - there may be multiple items that need to be included, so an array can vary in length - the different items a user will be ordering

    }

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerKathryn = {
    name: "Kathryn Speltz",
    phoneNumber: 6511234567,
    email: "kathryn@gmail.com",
    dishesOrdered: ["french fries", "veggie burger", "chocolate milkshake"]
}