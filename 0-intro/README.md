# What is Typescript?

Is a Javascript superset. Means that, it takes JS and added a new set of features.
Browsers and NodeJS won't run TS. TS is compiled to JS.  
TS compiler, compiles certain code to equivalent JS workarounds.  
TS brings Types, errors checking, autocompletion and other handy tools to JS.

## First steps

If you don't want to try this code on your computer (it is not necessary to follow this presentation), you don't need to follow the next steps.
- Install TypeScript glabally: `npm install -g typescript`
- We will use the follow comand to generate JS files out of TypeScript: `tsc file_name.ts`

## This is Javascript
```js
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(+input1.value, parseInt(input2.value)));
```

## This is TypeScript
```ts
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

console.log(add(+input1.value, parseInt(input2.value)));
```

## This is Javascript compiled from TypeScript
```js
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(+input1.value, parseInt(input2.value)));
```