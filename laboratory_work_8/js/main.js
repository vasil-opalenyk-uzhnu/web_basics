// toggle logic
const toggle = document.querySelector('#toggle__input');

toggle.addEventListener('change', (e) => {
    document.documentElement.setAttribute(
        'data-theme',
        e.target.checked ? 'dark' : 'light'
    );
});

//form validation
const form = document.forms.form;
const errorName = document.querySelector('.error-name');
const errorAge = document.querySelector('.error-age');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = form.name.value;
    const age = form.age.value;
    let isError = false;

    if(name.trim() === '') {
        errorName.textContent = 'Please enter your name';
        isError = true;
    }else if(name.length < 3) {
        errorName.textContent = 'Name should be less than 3 characters';
        isError = true;
    }else {
        errorName.textContent = '';
        isError = false;
    }

    if(age.trim() === '') {
        errorAge.textContent = 'Please enter your age';
        isError = true;
    }else if(age < 18) {
        errorAge.textContent = 'You are not allowed to enter age greater than 18';
        isError = true;
    }else {
        errorAge.textContent = '';
        isError = false;
    }

    if(!isError) {
        form.submit();
    }
});

// Task 2
// var foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 10;
//     }
//     alert(foo);
// }
// bar();

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);


//Task 3
// console.log(!false);
// console.log(+"1");
// console.log(-"1");
// console.log(1 + 1);
// console.log(1 - 1);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 && 2);
// console.log(2 || 2);
// console.log(2 > 3 ? "+" : "-");

console.log("".concat(
    "Нехай завжди буде сонце,",
    "\n",
    "Нехай завжди буде небо,",
    "\n",
    "Нехай завжди буде мама",
    "\n",
    "Нехай завжди буду я."
));

//Task 4
function Task1(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
console.log(Task1([1, -2, 3, 4, -5]));

function Task2(num1, num2) {
    num1 = num1.split("");
    num2 = num2.split("");
    let iterationCount = Math.max(num1.length, num2.length);
    let nextGray = 0;
    let result = [];

    while (num1.length < iterationCount) num1.unshift("0");
    while (num2.length < iterationCount) num2.unshift("0");

    for (let i = iterationCount - 1; i >= 0; i--) {
        let a = +num1[i];
        let b = +num2[i];
        let num = a + b + nextGray;

        if(num > 9) {
            result.unshift(num - 10);
            nextGray = 1;
            continue;
        }

        result.unshift(num);
        nextGray = 0;
    }

    result = result.join('');

    return nextGray !== 0 ? 1 + result : result;
}

console.log(Task2("99999999999999123", "12134557681"));
// "99999999999999123"
// "00000012134557681"

function Task3(reduced, subtractor) {
    if(subtractor.length > reduced.length) return "It is not possible to subtract a smaller array from a larger one.";
    let exclusion = {};

    for(let i = 0; i < subtractor.length; i++) {
        exclusion[subtractor[i]] = !exclusion[subtractor[i]] ? 1 : exclusion[subtractor[i]] + 1;
    }

    let difference = [];
    for(let i = 0; i < reduced.length; i++) {
        if(exclusion[reduced[i]] && exclusion[reduced[i]] > 0) {
            exclusion[reduced[i]] -= 1;
            continue;
        }

        difference.push(reduced[i]);
    }
    return difference;
}

console.log(Task3([1, 2, 3, 4, 4, 4, 3, 5], [3, 3, 2, 4]));



