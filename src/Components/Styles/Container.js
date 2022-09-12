import styled from 'styled-components';


export default styled.div`
  width:50%;
  margin:0 auto;
  margin-bottom:5vh;
  height: auto;
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-between;
  margin-top:${props => props.marginTop};

  @media screen and (max-width: 800px){
    width:${props => props.media800pxWidth};
    flex-direction:column;
  }
    /*.productListItem{
        width:98%;
        height:70%;
        overflow:hidden;
        display:flex;
        justify-content:center;
        background-color:white;
        
        @media screen and (max-width:800px){
            width:100%;
            height:250px;
        }
    }
    .productPriceLinkContainer{
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    .productListLink{
        margin-left:auto;
        text-decoration:none;
        background-color:#202842;
        color:white;
        padding:8px;
        border-radius:25% 10%;
        box-shadow:2px 3px 15px #888888;
        margin-right:10px;

        :hover{
            background-color:#2f3b61;
            transition:0.5s;
        }
    }
    .productListImage{
        width:100%;
        height:80%;
        margin-top: auto;
        display:flex;
        object-fit:contain;
    }
    .productContainer{
        height:500px;
        width:20%;
        flex-direction:column;
        background-color:white;
        margin-right:7%;
        overflow:hidden; 
        @media screen and (max-width:800px){
            width:100%;
            height:250px;
        }
    }
    h3 {
        //white-space:normal;
       // overflow:hidden;
       // text-overflow:ellipsis;
        text-align:left;
        max-width:20ch;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

  #productImg{
        width:35%;
        mix-blend-mode: multiply;
        float:left;
        @media screen and (max-width:800px){
            width:55%;
            float:none;
            margin:0 auto;
        }
    }

    #productDetails {
        width:55%;
        margin-left:5rem;
        margin-bottom:0px;
        @media screen and (max-width:800px){
          width:75%;
        }
    }

    p{
        text-align:left;
    }

    #productTitle{
        text-align:left;
    }

    #addToCartBtn{
        background-color:#f7ca4d;
        display:inline;
        padding:1rem 1rem;
        border:1px solid #CCC;
        border-radius:7.5px;
        cursor:pointer;
        :hover{
            background-color:#fce092;
        }
        @media screen and (max-width:800px){
            max-width:10rem;
            padding:1rem 1rem;
            font-size:20px;
        }
    }

    #productPrice{  
        display:inline;     
        margin-right:1rem;
        font-size:20px;
    }
    #priceCartContent {
        margin-top:2rem;
        width:100%;
        display:inline-block;
        text-align:left;
        @media screen and (max-width: 800px){
            text-align:center;
        }
    }

    #closeAlert {
        cursor:pointer;
        position:absolute;
        top:5px;
        right:5px;      
    }*/
`