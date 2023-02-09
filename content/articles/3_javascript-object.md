---
title: Objects methods (assign, keys, values, entries and fromEntries) 
description: Learning how and when to use these powerful methods
img: https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80
alt: JavaScript - Object
author: 
  name: Samuel
  bio: All about Peter and what he does and where he works
  img: https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80
createdAt: "2023-01-29"
tags: 
  - object
  - javascript
---

<div class="html-content">
  In this article, you will learn some very useful methods for manipulating objects in JavaScript. Some of them would enable you to combine with array methods such as <code>Array.map</code> and <code>Array.filter</code> to produce the result that you want.
  <hr><br>
  Let's discuss using examples from <a href="https://jsonplaceholder.typicode.com/" target="_blank"><u>JSONPlaceholder</u></a>, a popular free fake API for testing.
</div>

## Data

The data that we are going to use are from this <code>async</code> function:
```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const originalObj = await response.json();

    console.log('originalObj', originalObj)
}

fetchText()
```

The result is an object:
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// originalObj
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```
  </template>
</el-collapse-box>
<div><el-divider/></div>

## Object.assign()

<p>There are many ways to copy an object, <code>Object.assign</code> is one of them. It meant to assign properties from one object to another. The easiest example to understand it is to call this method with an empty object (i.e. target) and another object (i.e. source) makes a copy of the second object.</p>
<br>
<p>Thereby, we can create a shallow clone of an object.</p>

```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const originalObj = await response.json();

    const targetObj = Object.assign({}, originalObj);

    console.log('targetObj', targetObj);
    console.log('originalObj', originalObj)
    console.log('originalObj === targetObj', originalObj === targetObj)
}

fetchText()
```

<p>As you can see, the <code>targetObj</code> looks exactly like the <code>originalObj</code> but they are not, as confirmed from the result of strict equality.</p>
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// targetObj
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

// originalObj
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

// originalObj === targetObj
false
```

  </template>
</el-collapse-box>
<div><el-divider/></div>

## Object.keys()

<p>Before <code>Object.keys</code>, if we want to loop through each of an object's properties we can use <code>for-in</code> loop.</p>

```js
const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};


for (const key in obj) { 
    console.log(`${key}: ${obj[key]}`);
}

```

<el-collapse-box>
  <template #content>

```js[console.log]
userId: 1
id: 1
title: delectus aut autem
completed: false
```
  </template>
</el-collapse-box>

<p>With <code>Object.keys</code>, we are returned an array that contains the keys of the object, which allow us to chain with array methods.</p>

```js
const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

const keys = Object.keys(obj)
console.log(keys)

const values = Object.keys(obj).map(item => obj[item])
console.log(values)

```

<el-collapse-box>
  <template #content>

```js[console.log]
// keys
['userId', 'id', 'title', 'completed']

// values
[1, 1, 'delectus aut autem', false]
```
  </template>
</el-collapse-box>

<p>Other useful application of `Object.keys` is to <a href="https://stackoverflow.com/questions/5223/length-of-a-javascript-object" target="_blank"><u>check the length of an object</u>.</a></p>

```jsx
const objLength = Object.keys(targetObj).length
```

<p>There are numerous situation that you may need this checking. For example, in the below object, if none of the ‘address’ fields is filled which make the property: ‘address’(i.e. object) empty and as a result, zero in array length if using the above checking. Then we could display some placeholders instead of blank field.</p>

```js[console.log]
const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    address: {
        // blank field
    }
};

console.log(Object.keys(obj.address).length)
```
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
0
```
  </template>
</el-collapse-box>
<div><el-divider/></div>

## Object.values()

<code>Object.values</code> is similar to <code>Object.keys</code>, which the latter returns us the keys of an object and the former returns us the values of an object

```js
const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

const keys = Object.keys(obj);
const values = Object.values(obj);

console.log(keys);
console.log(values);
```

<el-collapse-box>
  <template #content>

```js[console.log]
// keys
['userId', 'id', 'title', 'completed']

// values
[1, 1, 'delectus aut autem', false]
```
  </template>
</el-collapse-box>

<div><el-divider/></div>

## Object.entries() and Object.fromEntries()

<code>Object.entries</code> and <code>Object.fromEntries</code> are often seen appeared together because they allows you to converts an object into array and do the reverse respectively. This allows us to use all the <code>Array</code> and <code>Object</code> built-in methods.

### Object.entries()

<p>It convert the key/value paris of an object into a nested array with each internal array consists of the key at index 0 and the value at index 1</p>

```js
const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

const nestedArray = Object.entries(obj);

console.log(nestedArray);
```

<el-collapse-box>
  <template #content>

```js[console.log]
// nestedArray
[
    ['userId',1], 
    ['id',1], 
    ['title', 'delectus aut autem'], 
    ['completed', false]
]
```
  </template>
</el-collapse-box>

<div><el-divider/></div>

### Object.fromEntries()

<p><code>Object.entries</code> allows us to utilize a bunch o array methods, but what if want to convert it back into object? <code>Object.fromtEntries</code> would do the trick.</p>

```js
const array = [
    ['userId',1], 
    ['id',1], 
    ['title', 'delectus aut autem'], 
    ['completed', false]
];

const resultObj = Object.fromEntries(array);

console.log(resultObj);
```

<el-collapse-box>
  <template #content>

```js[console.log]
// resultObj
{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};
```
  </template>
</el-collapse-box>
