// Тестовые задания

// 1)Написать метод/функцию, который/которая на вход принимает массив городов. 
В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 
Например, «Москва, Санкт-Петербург, Воронеж.» 

// 2)Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. 
// Пример: 
// 27 => 25, 27.8 => 30, 41.7 => 40.

// 3)Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// 4)Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым 
(не имеет делителей кроме 1 и самого себя).



// Задачки на программирование мое решение
// 1) затратил 7 минут
let cities = ['Moscow', 'Pitersburg', 'Voronej'];

function changedCities (cities) {
    return (cities.join(",") + ".");
}
//проверяем и все ок
console.log(changedCities(cities));

// 2)  затратил 15 минут

let number = 27; // например, или любое другое число

function rounded (number) {
    let restOfNumber = number % 5;
    if (restOfNumber == 0) {
        return number;
    } else if (restOfNumber < 2.5) {
        return (number - restOfNumber);
    } else if (restOfNumber >= 2.5) {
        return (number - restOfNumber) + 5;
    } 
}

// проверил, все ок
console.log(rounded(number));

// 3) затратил 20 минут
let numberA = 1; // компьютер
let numberB = 3; // компьютера
let numberC = 25; //все остальное компьютеров

function correctedComputer(number) {
    let arrayOfNumb = Array.from(number.toString());
    let lastArrayArg = arrayOfNumb[arrayOfNumb.length - 1];
    console.log(lastArrayArg);

    if ((lastArrayArg == 1 && arrayOfNumb[1] != 1) ) {
        return number + " компьютер";
    } else if (lastArrayArg != 1 && lastArrayArg <= 4 && lastArrayArg != 0) {
         return number + " компьютера";
    }
    else {
        return number + " компьютеров";
    }
} 
// проверяем, все норм
console.log(correctedComputer(numberA));


// 4) затратил 20 минут

let numberD = 25;

function checkedOnPrime(number){
       for (let i = 2; i < number; i++) {
        let rest = number % i;
        if (rest === 0) {
            return "Наше число не простое";
        } 
    }
    return `${number} простое`;
}

// проверяем, все ок
console.log(checkedOnPrime (numberD));
