import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  #root{
    --color-bck: #302B27;
    --color-primary_text: #F5F3F5;  
    --color-bck_gray: #C4C4C4;

    --color-bck-cardP: #393939;
    


    --color-text_secondary: #08A045;
    --color-text_delete : #AD2E24;
    --color-text-black: #000000;
    --color-bck-white: #fff;

    --color-card:#576CA8; 

    --color-progress_red:#AD2E24 ;
    --color-progress_yellow:#FBCD2B;
    --color-progress_green:#70B77E;

    --color-line:#EA8C55;
    --color-bck_options:#484848;
    --color-bck_details:#1B264F;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,button , input{
    font-family: 'Inter', sans-serif;
  }
  html , body ,#root{
    height:100vh;

    
  }
  html,body{
    background-color:#302B27 ;
  }
  button, input {
    outline: none;
    border:none;
   }

  label{
    visibility: hidden ;
    position: absolute;
  }
  .btn {
    height: 2.5rem;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    &:hover{
     filter: brightness(1.2);
     transition: 0.5s;
    }

  }

  .btn-success{
    background:#08A045;
    color: #000;
    font-weight: bold;

   
  }

  .btn-danger{
    background-color: #AD2E24;
    color:#000;
    font-weight: bold;
    margin-right: 15px;
  }
`