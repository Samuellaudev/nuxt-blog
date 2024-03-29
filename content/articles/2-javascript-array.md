---
title: Arrays methods (map, filter, forEach and reduce) 
description: Learning how and when to use these powerful methods
img: https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80
alt: javascript array
author: 
  name: Samuel
  bio: All about Samuel and what he does and where he works
  img: https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80
createdAt: "2023-01-15"
tags: 
  - array
  - javascript
---

<div class="html-content">
  JavaScript, according to <a href="https://en.wikipedia.org/wiki/Functional_programming" target="_blank"><u>Wikipedia</u></a>, can be considered as an example of functional programming, which has the following characteristics:
  <hr><br>
  "<i>When a pure function is called with some given arguments, it will always return the same result, and cannot be affected by any mutable state or other side effects.</i>
  <hr><br>
  Does all these arrays methods (map, filter, forEach and reduce) fit into this definition? Let's discuss using examples from <a href="https://jsonplaceholder.typicode.com/" target="_blank"><u>JSONPlaceholder</u></a>, a popular free fake API for testing.
</div>

## Data

The data that we are going to manipulate are from this <code>async</code> function:
```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const originalData = await response.json();

    console.log('originalData', originalData)
}

fetchText()
```

The result is an array of objects:
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// originalData
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    ...
]
```

  </template>
</el-collapse-box>
<div><el-divider/></div>

## Array.map()

<p><code>Array.map</code> is a powerful function that enables us to transform one array into another, while the original array is left untouched and the function returns a new array.</p>
<br>
<p>Therefore, it can be seen as a pure function as it does not change the data structure of the original array.</p>

```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const originalData = await response.json();
  
    const transformedData = originalData.map(item => {
      return {
        id: item.id,
        username: item.username,
        email: item.email,
        phone: item.phone,
        website: item.website,
        companyName: item.company.name,
        address: {
            addressLine1: item.address.street,
            addressLine2: item.address.suite,
            city: item.address.city,
            zipCode: item.address.zipcode,
        }
      }
    })

    console.log('transformedData', transformedData);
}

fetchText()
```

As you can check and compare the returned array with the original one, the original array remains the same while the returned array is modified the way we want.
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// Map - transformedData
[
    {
        "id": 1,
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "companyName": "Romaguera-Crona",
        "address": {
            "addressLine1": "Kulas Light",
            "addressLine2": "Apt. 556",
            "city": "Gwenborough",
            "zipCode": "92998-3874"
        }
    },
    ...
]
```

  </template>
</el-collapse-box>
<div><el-divider/></div>

## Array.filter()

<p><code>Array.filter</code> does not transform the existing array, instead, it allows us to filter out values based on the condition that we set.</p>
<br>
<p>Similar to <code>Array.map</code>, it leaves the original array untouched  while return us a new array which the elements passed the condition test.</p>

```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const originalData = await response.json();
  
    const filteredData = originalData.filter(item => item.website.includes('com'))

    console.log('filteredData', filteredData);
}

fetchText()
```

In the above example, we want to filter out those items that the name of their website does not include "com" and return us those websites that includes.
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// Filter - filteredData
[
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    }
]
```

  </template>
</el-collapse-box>
<div><el-divider/></div>

## Array.forEach()

<p>Unlike the two methods before, <code>Array.forEach</code> does not return us new, modified array, it actually returns us <code>undefined</code>. It's meant to do something for each array elements.</p>
<br>

```js
async function fetchText() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const originalData = await response.json();
  
    const processedData = originalData.forEach(item => {
        item['companyName'] = item.company.name
        delete item['company']
        delete item['name']
        item.address = {
            addressLine1: item.address.street,
            addressLine2: item.address.suite,
            city: item.address.city,
            zipCode: item.address.zipcode
        }
    })
    
    console.log('processedData', processedData);
    console.log('originalData', originalData);
}

fetchText()
```

<p>In the above example, for each elements in the array, we want to perform the following operations:
<br>
<br>
1. create new key-value pair (i.e. 'companyName': NEW_VALUE);<br>
2. delete properties named 'company' and 'name';<br>
3. transform the property 'address' with values that we set
</p>
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// ForEach - processedData
undefined

// originalData
[
    {
        "id": 1,
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "companyName": "Romaguera-Crona",
        "address": {
            "addressLine1": "Kulas Light",
            "addressLine2": "Apt. 556",
            "city": "Gwenborough",
            "zipCode": "92998-3874"
        }
    },
    ...
]
```

  </template>
</el-collapse-box>

<p>As you can see, 'processedData' is equal to <code>undefined</code> while 'originalData', which is the original array, is modified.
</p>
<br>
It can be seen as an impure function, as it produces side effects and alter the original array.
<br><br>
<p>Both <code>Array.map</code> and <code>Array.forEach</code> give us the same result, but in a different way. While the former returns us new array with original data untouched, the later returns us <code>undefined</code> and changes the original array permanently.
</p>
<div><el-divider/></div>

## Array.Reduce()

<p><code>Array.reduce</code> can be a tricky one. We can transform every element like <code>Array.map</code> does or filter out some items which <code>Array.filter</code> is capable of. Furthermore, it can choose to affect or not the outer scope. According to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank"><u>MDN</u></a>:</p>
<div class="html-content">
<hr><br>
"<i>The <code>reduce()</code> method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.</i>
<hr><br>
</div>
<p>So ultimately the result we get is a single value if we try to <code>return</code> it.</p>

```js
async function fetchText() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const originalData = await response.json();

    const reducedData = originalData.reduce((acc, item) => {
        if (item.website.includes("com")) {
            const currItem = {
                id: item.id,
                username: item.username,
                email: item.email,
                phone: item.phone,
                website: item.website,
                companyName: item.company.name,
                address: {
                    address1: item.address.street,
                    address2: item.address.suite,
                    city: item.address.city,
                    zipCode: item.address.zipcode,
                },
            };
            return [...acc, currItem];
        }
        return acc;
    }, []);

    console.log("reducedData", reducedData);
    console.log('originalData', originalData);
}

fetchText();
```

<p>In the above example, we first want to filter out those items that its 'website' does not include <code>"com"</code>. Then we transform the structure of each item based on our needs. Finally, we use spread operator to clone the previously accumulated objects so that the newly returned array includes all the items.</p>
<hr><br>
<el-collapse-box>
  <template #content>

```js[console.log]
// Reduce - reducedData
[
    {
        "id": 8,
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "companyName": "Abernathy Group",
        "address": {
            "address1": "Ellsworth Summit",
            "address2": "Suite 729",
            "city": "Aliyaview",
            "zipCode": "45169"
        }
    },
    {
        "id": 9,
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "companyName": "Yost and Sons",
        "address": {
            "address1": "Dayna Park",
            "address2": "Suite 449",
            "city": "Bartholomebury",
            "zipCode": "76495-3109"
        }
    }
]

// originalData
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    ...
]
```

  </template>
</el-collapse-box>

<p>So basically we are using <code>Array.reduce</code> to replicate the exact same result that need <code>Array.filter</code> and <code>Array.map</code> combined together to produce. Beside, it does not alter the original array that <code>Array.filter</code> does.</p>
<br>
<p>However, it could becomes hard to understand the codes if not careful enough. After all, it is a matter of choice between readability and efficiency.</p>
