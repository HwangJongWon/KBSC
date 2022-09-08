import styled from 'styled-components';

export const Camera = styled.div`
    width : 1000px;
    height : 600px;
    border: 3px solid LightSteelBlue;
    position:relative;
    border-radius: 0 0 50% 50%;
    text-align: center;
`

export const Text = styled.div`
    position: absolute;
    margin-top : 50px;
    margin-left: 20%;
    margin-right: 20%;
    width: 60%;
    height: 50%;
    border: 3px solid LightSteelBlue;
    font-family:"fac";
    font-size: 15px;
    text-align: center;

    img {
        width:50%;
        height:50%;
    }
`
