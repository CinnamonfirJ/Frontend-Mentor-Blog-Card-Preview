# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/CinnamonfirJ/Frontend-Mentor-Blog-Card-Preview.git)
- Live Site URL: [Add live site URL here](https://frontend-mentor-blog-card-preview.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [SCSS](https://sass-lang.com/documentation/) - CSS Preprocessor

### What I learned

I learned to create a shadow effect with a div and how to use javascript and css to add an effect on to the shadow when hovering on the main card

```html
<div class="blog-preview-card shadow" id="shadow"></div>
<div class="blog-preview-card blog-card" id="blog-card"></div>
```

```css
&.shift {
  transform: translate(-48%, -48%);
}
```

```js
let card = document.getElementById("blog-card");
let shadow = document.getElementById("shadow");

card.addEventListener("mouseover", () => {
  shadow.classList.add("shift");
});
```

## Author

- Frontend Mentor - [@CinnamonfirJ](https://www.frontendmentor.io/profile/CinnamonfirJ)
- Twitter - [@jesse_Cinnamon7](https://x.com/jesse_Cinnamon7?t=FAGMSxDBAP3-s-AiPqWgqg&s=09)
