console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (num1: number) => (num2: number) => num1 + num2;
// console.log(sum(44)(3));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
  let val = 0;

  return () => {
    val++;

    return val;
  };
};
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounter2 = (initVal: number) => {
  let val = initVal;

  return {
    increase: () => {
      val++;

      return val;
    },
    decrease: () => {
      val--;

      return val;
    },
    reset: () => {
      val = initVal;
    },
    set: (setVal: number) => {
      val = setVal;
    },
  };
};
// const counter3 = makeCounter2(3);
// console.log(counter3.increase());
// console.log(counter3.increase());
// console.log(counter3.reset());
// console.log(counter3.decrease());
// console.log(counter3.set(42));
// console.log(counter3.increase());

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

const superSum = (len: number): Function => {
  let _numArr: number[] = [];

  if (len <= 0) return () => 0;

  if (len === 1) return (num: number) => num;

  const helper = (...numbers: number[]) => {
    _numArr.push(...numbers);

    if (_numArr.length >= len) {
      return _numArr.slice(0, len).reduce((a, c) => a + c);
    }

    return helper;
  };

  return helper;
};

// console.log(superSum(3)(1)(2, 4, 5, 7));

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// 1
const sumTo = (num: number): number => {
  if (num === 1) {
    return num;
  }

  return num + sumTo(num - 1);
};
// console.log(sumTo(100));

// 2
const factorial = (num: number): number => {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
};
console.log(factorial(5));

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

const myFlat = (arr: any[]): any[] => {
  let newArr: any[] = [];

  for (const el of arr) {
    newArr = Array.isArray(el) ? [...newArr, ...myFlat(el)] : [...newArr, el];
  }

  return newArr;
};

// console.log(myFlat([1, 2, 3, [4, 5, [6, [7, 8, 9], 10]]]));

// just a plug
export default () => {};
