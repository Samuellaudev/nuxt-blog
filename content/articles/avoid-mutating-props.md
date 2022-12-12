---
title: Avoid Mutating Props
description: Learning how to use @nuxt/content to create a blog
img: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80
alt: Avoid Mutating Props
author: 
  name: Samuel
  bio: All about Peter and what he does and where he works
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags: 
  - nuxtjs
  - javascript
---

# Avoid Mutating Props

## This is a heading

<div class="html-inside-markdown">
  This is HTML inside markdown that has a class some classes
</div>

<info-box>
  <template #info-box>
    <span class="info-text">
        This is a vue component inside markdown using slots with class-name "info-text"
    </span>
    <p>This is a vue component inside markdown using slots with no class-name</p>
  </template>
</info-box>

```js[nuxt.config.js]
export default {
  nuxt: "is the best"
}
```
```html[my-first-blog-post.md]
<p>code styling is easy</p>
```

### This is a sub heading
This is some more info
