// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 


// const myNumbers = [1, 2, 3, 4, 5, 6, 7]

// const myTotal = myNumbers.reduce((index,curval) => {
//     console.log(`accumlator : ${index} current value : ${curval}`);
//     return index + curval
// }, 0)


// the reduce method is used for adding cart in ecom website 

const shoppingCart = [
    {
        itemName:"i-phone-15",
        itemprice: 70000,
    },

    {
        itemName:"Air-pods",
        itemprice: 50000,
    },

    {
        itemName:"Charger",
        itemprice: 5400,
    },

    {
        itemName:"cover",
        itemprice: 400,
    }
]

const priceTotal = shoppingCart.reduce((index,item) => index + item.itemprice,0 )
console.log(`total price to pay ${priceTotal}`);
