simpleCalculator('plus');
simpleCalculator('minus');
simpleCalculator('divide');
simpleCalculator('multiply');
simpleCalculator('mod')


function simpleCalculator(button,){

        document.getElementById(button).addEventListener('click', function(){

        const firstValue = document.getElementById('firstInput').value;
        const firstValueInput = parseFloat(firstValue);

        const secondValue = document.getElementById('secondInput').value;
        const secondValueInput = parseFloat(secondValue);

        if(button == 'plus'){
            const totalValue = (firstValueInput + secondValueInput);
            document.getElementById('output').value = totalValue;
        }

        else if(button == 'minus'){
            const totalValue = (firstValueInput - secondValueInput);
            document.getElementById('output').value = totalValue;
        }
        else if(button == 'divide'){
            const totalValue = (firstValueInput / secondValueInput)
            document.getElementById('output').value = totalValue;
        }

        else if(button == 'multiply'){
            const totalValue = (firstValueInput * secondValueInput);
            document.getElementById('output').value = totalValue;
        }

        else if(button == 'mod'){
            const totalValue = (firstValueInput % secondValueInput);
            document.getElementById('output').value = totalValue;
        }

        document.getElementById('firstInput').value = "";
        document.getElementById('secondInput').value = "";
    })
}