const foodList = [
    {name: "Eggs", calories:12}
];

function addFood(name, calories) {
    foodList.push({name:name, calories:calories});
    return true;
};

function removeFood(i){
    this.foodList.splice(i,1);
    return true;
    };

module.exports={
    foodList,
    removeFood,
    addFood
}