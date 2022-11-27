import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
} 
ul,
ol {
  padding: 0;
} 
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
}
article>*+* {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
#root {
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
}
body {
  background-color: #f4f4f4;
  font-family: 'Roboto', sans-serif;
}
`;
