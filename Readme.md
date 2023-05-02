# Project:

https://pancakeswap.finance/

<br>

# MEETINGS:

Every Monday, Wednesday, Thursday
Link: https://meet.google.com/tqi-fyat-dsj

<br>

# Github:

https://github.com/Ouzx/pancake-swap-clone-v2

<br>

# Using Project:

- Clone this project
- Run `npm i` for installing dependencies
- Run `npm run dev` for running project

### React Icons:

You can search icons from here:
https://react-icons.github.io/react-icons/search?q=home

Example usage:

```jsx
import { FaHome } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <FaHome />
    </div>
  );
};
```

<br>

## Extensions:

- Auto Close Tag
- Auto Rename Tag
- ES7+ React/Redux/React-Native/JS snippets
- Highlight Matching Tag
- Path Intellisense
- Prettier
- For Backend: Rapid API, Rapid API Services

<hr/>

> **Everyone should use jsx as file extension**

> **Everyone should create a branch for themselves and commit every litte changes regularly.**

> **Everyone should use scss for styling**

<br>

# Folder Structure

```
./
├── public/
└── src/
    ├── assets/
    │   ├── data/
    │   ├── icons/
    │   ├── images/
    │   └── videos/
    ├── components/
    │   └── public / shared components
    ├── context/
    │   ├── theme context/
    │   └── data context - for backend / redux?
    ├── sections/
    │   ├── ozkan/
    │   │   ├── Components/
    │   │   └── index.jsx
    │   ├── oguzhan/
    │   │   ├── Components/
    │   │   └── index.jsx
    │   ├── ulas/
    │   │   ├── Components/
    │   │   └── index.jsx
    │   ├── khaled/
    │   │   ├── Components/
    │   │   └── index.jsx
    │   └── ahmet/
    │       ├── Components/
    │       └── index.jsx
    ├── App.jsx
    ├── App.scss
    │   => global styling file
    ├── globals.scss
    │   => global colors
    │   => when using it you should use css vars, not scss vars: var(--color-black)
    │   => global stylings templates
    ├── main.jsx
    └── screens.scss
        => screen size mixins for pancake-swap
        => Start with mobile size
        => Usage:
            @use "../../../screens.scss" as *;

            .my-component{
                @include xl{
                    border: 1px solid red;
                }
            }

```

## Team:

khsherif13@gmail.com
<br>
ozkanyilmaz384@gmail.com
<br>
ulasardab@gmail.com
<br>
ahmetegeyilmaz@gmail.com
<br>
oguzhankandakoglu@gmail.com
