import styled from 'styled-components';

export const Camera = styled.div`
    width : 65%;
    height : 80%;
    border: 2px solid #28579a;
    position:relative;
    border-radius: 7% ;
    text-align: center;
    font-family:"main";

    img {
        width: 80%;
        height: 50%;
    }
`

export const Wordlist = styled.div`
    position: absolute;
    margin-top : 8%;
    margin-left: 20%;
    margin-right: 20%;
    width: 65%;
    height: 65%;
    overflow:auto;
    border: 2px solid #28579a;
    border-radius: 7%;
    font-family:"main";
    font-size: 20px;
    text-align: left;
    float:right;
    background-color:#f1f3f5;
    
    img {
        width:12%;
        height:12%;
        margin-left: 5%;
        margin-top : 1%;
    }
    .word{
        margin-bottom:2%;
        margin-left:10%;
    }
`
export const Text = styled.div`
    position: absolute;
    margin-top : 5%;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom:20px;
    border-radius: 50% 50% 0 0 ;
    width: 60%;
    height: 30%;
    border: 3px solid LightSteelBlue;
    font-family:"main";
    font-size: 30px;
    text-align: center;
`