document.addEventListener('DOMContentLoaded', () => {
    // Task 1
    // ------------------------------------------------------------------------
    const header = document.createElement('h1');
    header.textContent = 'Hello World!';
    document.body.appendChild(header);

    // Task 2
    // ------------------------------------------------------------------------
    var employees = [
        { firstName: 'Иван', lastName: 'Петров' },
        { firstName: 'Петр', lastName: 'Иванов' },
        { firstName: 'Мария', lastName: 'Сидорова' },
        { firstName: 'Анна', lastName: 'Кузнецова' },
        { firstName: 'Егор', lastName: 'Смирнов' }
    ];

    const olList = document.createElement('ol');
    for (var i = 0; i < employees.length; i++) {
        var liElement = document.createElement('li');
        liElement.textContent = employees[i].firstName + ' ' + employees[i].lastName;
        olList.appendChild(liElement);
    }

    document.body.appendChild(olList);

    // Task 3
    const shape = document.createElement('div');
    shape.id = 'shape';

    shape.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('circle');
    });

    document.body.appendChild(shape);

    // Task 4
    // ------------------------------------------------------------------------
    var calculator = {
        add: function (a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a + ' + ' + b + ' = ' + (a + b);
            } else {
                console.error('Error: both a and b must be numbers');
            }
        },

        sub: function (a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a + ' - ' + b + ' = ' + (a - b);
            } else {
                console.error('Error: both a and b must be numbers');
            }
        },

        mul: function (a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a + ' * ' + b + ' = ' + (a * b);
            } else {
                console.error('Error: both a and b must be numbers');
            }
        },

        div: function (a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                if (b !== 0) {
                    return a + ' / ' + b + ' = ' + (a / b);
                } else {
                    console.error('Error: division by zero');
                }
            } else {
                console.error('Error: both a and b must be numbers');
            }
        }
    };

    console.log(calculator.add(5, 3));
    console.log(calculator.sub(7, 2));
    console.log(calculator.mul(4, 6));
    console.log(calculator.div(10, 2));

    console.log(calculator.div(8, 0));

    // Task 5
    // ------------------------------------------------------------------------
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Введите текст';

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Сохранить';

    document.body.append(inputElement, buttonElement);

    buttonElement.addEventListener('click', function () {
        var inputText = inputElement.value;
        localStorage.setItem('Text', inputText);

        setTimeout(function () {
            var savedText = localStorage.getItem('Text');
            console.log('Сохраненный текст:', savedText);
        }, 2000);
    });
});

