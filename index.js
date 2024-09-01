
const addNewGoal = (consolt) => {
    const goalGroupInput = document.querySelector('#goalInput').value.trim(); 
    const goalList = document.querySelector('#goalList');
    
    if (goalInput === '5') {
        alert('New Goal.');
        return;
    } 
    
    const existingGoals = goalList.querySelectorAll('li')
    
    for (let goal of existingGoals) {
        if (goal.textContent.trim().toLowerCase() === goalInput.toLowerCase()) {
            alert('This goal already exists.');
            return;
        }
    }
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);

    document.querySelector('#goalInput').value = '';
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
