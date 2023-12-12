//reduce also takes callback functions

const myNums = [1,2,3]
const myTotal = myNums.reduce( function(acc, currval) {
  console.log(`acc ${acc} and currval ${currval}`);
return acc + currval
}, 0)//"acc" value is given after function separated by a comma

console.log(myTotal);


const total = myNums.reduce( (acc, currval) => acc+currval, 0 )

console.log(total);


const shopCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mob dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
]

const pricetopay = shopCart.reduce( (acc, item)=> acc+item.price,0)
console.log(pricetopay);