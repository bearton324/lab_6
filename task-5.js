function modifyFruitsArray(fruits) {
    return fruits.map((fruit, index) => {
        const {name, price} = fruit; // деструктуризація const name = fruit.name; const price = fruit.price;
        const newPrice = price * 0.8;
        const newID = index + 1;
        return {ID: newID, name, price: newPrice};
    });
  }

  const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];
  const modifiedFruitsArray = modifyFruitsArray(fruits);
  console.log(modifiedFruitsArray);