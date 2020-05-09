const exerciseList = [
    {exercise: "Decline pushups"}
];

function addExercise(newExercise) {
    exerciseList.push({exercise:newExercise});
    return true;
};

function removeExercise(i){
    exerciseList.splice(i,1);
    return true;
    };

module.exports = {
    exerciseList,
    addExercise,
    removeExercise
}