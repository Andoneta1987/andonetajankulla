import React from 'react'
import styled from 'styled-components'
const arrOfColors=["#2187","#000","cfcfcf","eb65757"];
let randomColor=arrOfColors[Math.floor(Math.random()* arrOfColors.length)]

const Comment = (props) => {
  const item=props.comment;
  return (
    <Container>
      <CommentsAvatarContainer>
      </CommentsAvatarContainer>
      <CommentDetail>
      <CommentEmail>{item.email}</CommentEmail>
      <CommentText>{item.body}</CommentText>
      </CommentDetail>
    </Container>

  )
}

export default Comment
const Container=styled.div`
display:flex;
padding:20px;
margin-bottom:20px;
align-items:center;
`;
const CommentsAvatarContainer=styled.div`
width:30px;
height:30px;
background-color:${randomColor};
`;
const CommentEmail=styled.p`
font-weight:800;
`;
const CommentDetail=styled.div`
width:90%;
margin-right:20px;
`;
const CommentText=styled.p`
font-size:18px;
`;