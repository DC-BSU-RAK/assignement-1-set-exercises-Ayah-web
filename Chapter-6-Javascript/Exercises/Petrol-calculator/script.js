document.addEventListener('DOMContentLoaded', function() {

    // storage of references of elements in const
    const costPerLiterInput = document.getElementById('cost-per-liter');
    const litersInput = document.getElementById('liters');
    const calculateButton = document.getElementById('calculate-btn');
    const totalCostDisplay = document.getElementById('total-cost');

    // adding click event listener for calculate button
    calculateButton.addEventListener('click', calculateTotalCost);

    // function in order to calculate and show total cost
    function calculateTotalCost() {
        // gets the values input by user from input fields and converts them to floats
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const liters = parseFloat(litersInput.value);
        
        // makes sure inputs are valid numbers
        if (isNaN(costPerLiter) || isNaN(liters)) {
            totalCostDisplay.textContent = 'Please enter valid numbers';
            return;
        }
        
        // makes sure numbers are only positive (not negative)
        if (costPerLiter < 0 || liters < 0) {
            totalCostDisplay.textContent = 'Values cannot be negative';
            return;
        }
        
        // const that calculates the total cost by multiplying cost per liter and liters
        const totalCost = costPerLiter * liters;
        
        // shows the result with currency up to 2 decimal places only
        totalCostDisplay.textContent = `Total cost: AED ${totalCost.toFixed(2)}`;
    }

    // in the initial calculation, displays AED 0.00 default value
    calculateTotalCost();
});