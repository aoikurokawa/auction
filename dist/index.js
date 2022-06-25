"use strict";
// bigint large integers witout running into rounding errors. 
// let a = 1 + 2
// let b = a + 3
// let c = {
//   apple: a,
//   banana: b
// }
// let d = c.apple * 4
// function squareOf(n: number) {
//   return n * n
// }
// squareOf(2)
// let a = 1234n
// const b = 5678n
// var c = a + b
// let a = Symbol('a')
// let b: symbol = Symbol('b')
// let c = a == b
// let a: object = {
//   b: 'x'
// }
// let b = {
//   c: {
//     d: 'f'
//   }
// }
// let a: {b: number} = {
//   b: 12
// }
// let c: {
//   firstName: string,
//   lastName: string
// } = {
//   firstName: 'john',
//   lastName: 'barrowman'
// }
// class Person {
//   constructor(public firstName: string, public lastName: string) { }
// }
// c = new Person('matt', 'smith')
// let a: {
//   b: number,
//   c?: string,
//   [key: number]: boolean
// // }
// type Age = number
// type Person = {
//   name: string,
//   age: Age
// }
// function a(x: number) {
//   if (x < 10) {
//     return x
//   }
//   return null
// }
// function b() {
//   return undefined
// }
// function c() {
//   let a = 2 + 2
//   let b = a * a
// }
// function d() {
//   throw TypeError('I always error')
// }
// function e() {
//   while (true) {
//     d()
//   }
// }
// enum Language {
//   English = 0,
//   Spanish = 1,
//   Russian = 2,
// }
// let myFirstLanguage = Language.English
// let mySecondLanguage = Language['English']
// const enum Flippable {
//   Burger,
//   Chair,
//   Cup,
//   Skateboard,
//   Table,
// }
// function flip(f: Flippable) {
//   return 'flipped it' + f
// }
// flip(Flippable.Chair)
// flip(Flippable.Cup)
// flip(12)
// function greet(name: string) {
//   return 'hello' + name
// }
// let greet2 = function(name: string) {
//   return 'hello' + name
// }
// let greet3 = (name: string) => {
//   return 'hello' + name
// }
// let greet4 = (name: string) => 'hello' + name
// let greet5 = new Function('name', 'return "hello " + name')
// function log(message: string, userId?: string) {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'Not signed in')
// }
// log('Page loaded')
// log('User signed in', 'da35353e')
// type Context = {
//   appId?: string,
//   userId?: string
// }
// function log2(message: string, context: Context = {}) {
//   let time = new Date().toISOString()
//   console.log(time, message, context.userId)
// }
// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0)
// }
// sum([1, 2, 3])
// function sumVariadic(): number {
//   return Array.from(arguments).reduce((total, n) => total + n, 0)
// }
// sumVariadic()
// function sumVariadicSafe(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sumVariadicSafe(1, 2, 3))
// function fancyDate() {
//   return `${this.getDate()}`
// }
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator();
fibonacciGenerator.next();
fibonacciGenerator.next();
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numbers = createNumbers();
numbers.next();
numbers.next();
console.log(numbers.next());
//# sourceMappingURL=index.js.map