---
title: How to add Font Awesome to Nuxt
description: The Content module is a git files based headless CMS that provides powerful features when it comes to write blogs, documentation sites or just adding content to any regular website. In this post we will go through most of the benefits of this module and discover how we can create a blog with it.
img: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80
alt: Add Font Awesome to Nuxt
author: 
  name: Samuel
  bio: All about Samuel and what he does and where he works
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - nuxtjs
  - others
---

<div class="html-inside-markdown">
  If you just want to add usual Font Awesome icons, then the official tutorials in Font Awesome is suffice. However, if you want to add special icons, such as brands like Instagram, then you would need to add a few more lines to the files. Here I use Nuxt 2 as an example.
</div>

## First, follow the official documentation

### Step 1: Bring in Font Awesome

<!-- <info-box>
  <template #info-box>
    <span class="info-text">
        This is a vue component inside markdown using slots with class-name "info-text"
    </span>
    <p>This is a vue component inside markdown using slots with no class-name</p>
  </template>
</info-box> -->

First, install the core package and vue-fontawesome component.

```js[]
// for Nuxt 2
npm i --save @fortawesome/vue-fontawesome@latest-2 @fortawesome/fontawesome-svg-core 
```

### Step 2: Create file in plugins folder

Second, create a <b>fontawesome.js</b> file in <b>plugins</b> folder

```js[/plugin/fontawesome.js]
// For Nuxt 2
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
```

### Step 3: Modify nuxt.config.js

Then, add the paths to 'css' and 'plugins' sections under <b>nuxt.config.js</b>.

```js[nuxt.config.js]
// Modify nuxt.config.js adding to the `css` and `plugins` sections.
css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
]

plugins: [
  '~/plugins/fontawesome.js'
]
```

### Step 4: Add icons

Finally, add icons with the syntax provided by Font Awesome to the template area.

```js[example.vue]
<template>
  <div>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
  </div>
</template>
```
<div><el-divider/></div>

## Second, add extra icon packages for brand icons

### Step 1: Install brand icon packages

```js[]
npm install --save @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

### Step 2: Bring in the brand library

Inside <b>fontawesome.js</b>, add the library corresponding to the brand icons.

```js[/plugin/fontawesome.js]
...
library.add(fab)
...
```

### Step 3: Add the brand icons

Finally, we can add the brand icons to the template.

```js[example.vue]
<template>
  <div>
    <font-awesome-icon icon="fab fa-instagram" />
  </div>
</template>
```
