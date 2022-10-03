import styled from "styled-components";

export const Image = styled.img`
width: 13vw;
height:18vw;
`

export const Name = styled.li`
color:white;
list-style:none;
text-align:center;
`

export const Section = styled.section`
display:flex;
flex-wrap:wrap;
width:50vw;
justify-content:space-evenly;
position:relative;
left:25vw;
top:4vw;
height:70vw;

.caracteres{
    color:white;
    position:relative;
    transform:scale(0.1%);
    transition: ease-in-out 0.5s;
}&:hover{
    .caracteres{
        transform:scale(105%);
    }
}
`