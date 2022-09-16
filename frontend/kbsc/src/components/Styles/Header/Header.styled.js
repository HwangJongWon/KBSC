import styled from "styled-components";

export const Header = styled.section`
    width:100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items:center;
    font-family:'fac';
    &::before {
        content :'';
        position: absolute;
        width:100%;
        height:80%;
        top:0;
        left:0;
        //max-width:100%;
        display : inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform : scaleX(1.5);
        background-position: right top;
        background-size:100vw 200px;
        background-color:white;
    }
`

export const HomeHeader = styled.section`
    width:100%;
    height: 80vh;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items:center;
    font-family:'fac';
    &::before {
        content :'';
        position: absolute;
        width:100%;
        height: 100%;
        top:0;
        left:0;
        max-width:100%;
        min-height:40px;
        display : inline-block;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        transform : scaleX(1.5);
        background-position: right top;
        background-size:100vw 200px;
        background-color:#ebebeb;
    }
`

export const MainHeader = styled.div`
    position:relative;
    z-index:1;
    margin: 0 0;
    //max-width: 500px;
    background-color: transparent;
    font-family: "main";
    font-size: 50px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    text-align : center;

    .container {
        display: grid;
        grid-template-columns: 400px 50px 400px 50px 400px ;
        grid-template-rows: 400px;
        padding:0;
    }
    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        //border: 1px solid rgba(0, 0, 0, 0.8);
        text-align: center;
        padding-top: 160px;
        border-radius: 50%;
    }

    .text{
        font-family:"fac";
        font-size: 35%;
        color:DimGray;
    }
    
`

export const Img = styled.div`
    *{
        margin : 0;
        padding : 0;
    }

    #wrap{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        margin: 0 auto;
        padding-right:5%;
        padding-left:5%;
        padding-top:4%;
        padding-bottom:4%;
        overflow: hidden;

    }
    
    article{
        float: left;
        margin-left: 5%;
    }

    img {
        display: block;
        width: auto; height: auto;
        max-width: 300px;
        max-height: 300px;
    }

`
