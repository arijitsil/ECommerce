import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    flex-grow:1;
    margin-right :
    
`

const ImageList = (props) => {
    if(props.images.length>0){
        const ideas = props.images.map((image,i) =>{
          
            return <img src={image} alt="recipe thumbnail" key={i} style={{marginRight: '20px'}}/>
        });
    
        return <Container>{ideas}</Container>
    }
   
   
};

export default ImageList;