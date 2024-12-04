import { createGlobalStyle } from "styled-components";


export const GlobalStyles= createGlobalStyle`
:root{
    --bg-body: #f0f0f0;
    --bg-container: #f9f9f9;
    --bg-color-add:#287AF9;
    --bg-color-delete: #F84E50;
    --bg-allDelete:#F84E50;
    --color-title: #;
    --color-input: #DCDFE9;
    --color-task:#31343E;
    --txt-btn: #FCDAF4;
    --boxShadow-container: #EBEBEB;
    --text-white: #ffffff;
    --border-input:#E1E1E1;
    --divisor: #c2c2c2;

}

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
body{
    background-color: #f0f0f0;

}
.container{
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

`
