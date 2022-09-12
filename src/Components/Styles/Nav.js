import styled from 'styled-components'


export default styled.nav`
    width: 70%;
    position:relative;
    margin: 0 auto;
    display:block;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    height:90px;
    padding:0;
    background-color:#202842;
    position:relative;

    @media screen and (max-width:800px){
        width: 100%;
        height:100px;
    }
`