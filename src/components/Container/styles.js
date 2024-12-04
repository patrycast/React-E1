import styled from 'styled-components'

export const SectionContainer= styled.section`
 background-color: var(--bg-container);
 background-color: var(--bg-container);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width:900px;
 height: 400px;
 box-shadow: 2px 2px 8px 8px var(--boxShadow-container);
 border:1px solid var(--text-white);
 border-radius: 15px;

  @media (max-width: 768px) { 
   width: 100%; 
   padding: 20px; 
   border: none; 
}

`;

export const Title = styled.h1` 
 font-size: 2em;     
 color: #333; 
 margin-bottom: 10px;

 @media (max-width: 768px) { 
  font-size: 1.5em; 
}

`;



export const DivInpuButton= styled.div`
 width: 90%;
 display:flex;


@media (max-width: 768px) { 
 width: 100%;
 flex-direction:column;
 align-items: center;
 justify-content: center;
 gap:20px;
}

`

export const Input = styled.input` 
 padding: 12px; 
 font-size: 1em; 
 margin-right: 10px; 
 width:90%; 
 border: 1px solid var(--border-input);
 font-weight: 600;
 border-radius: 8px;
 border: 2px solid var(--text-white);


  `;

export const ButtonAdd=styled.button`
 background-color: var( --bg-color-add);
 padding: 14px 25px;
 border-radius: 9px;
 font-size: 1em; 
 color:var( --text-white);
 font-weight: 400;
 border: none; 
 cursor: pointer;
 border: 2px solid var(--text-white);

 &:hover { background-color: #0056b3; }


 @media (max-width: 768px) { 
    width: 90%; 
  }
`


export const Task=styled.div`
 width: 90%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;

export const Paragraph = styled.p`
 font-weight: 500;
 font-size: 18px;
 text-shadow: 2px 2px 6px white;
 `;


export const DeleteButton = styled.button` 
 padding: 10px 20px; 
 border-radius: 10px;
 font-size: 1em; 
 background-color:var( --bg-color-delete); 
 color: white; 
 border: 2px solid var(--text-white); 
 cursor: pointer; 
 margin-top: 20px; 
 &:hover { 
 background-color: #c82333; 
    } 
`;

export const Divisor=styled.div`
 width: 90%;
 height: 2px;
 margin-top: 15px;
 border: 2px solid var(--text-white);
 color: red;
`;

export const AllBtn=styled.button`
 width:90%;
 margin-top:30px;
 background-color: var(--bg-color-delete);
 border:2px solid var(--text-white);
 border-radius: 8px;
 padding:15px 0;
 font-size: 1em; 
 font-weight: 600;
 color: var(--text-white)
`