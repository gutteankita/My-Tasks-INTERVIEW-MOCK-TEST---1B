import styled from 'styled-components'
// import {CharacterCountContainer,CharacterCountDispalySection,Heading,Img,Para,InputCard,Input,Button} from './styledComponents'
// TaskMainContainer,
//   CreateTaskContainer,
export const TaskMainContainer = styled.div`
    display: flex;
    
    min-height: 100vh;
    width: 100%;
    
`

export const CreateTaskContainer = styled.div`
    display: flex;
   flex-direction: column;
    align-items: center;
    
    background: #1a171d;
    width: 40%;
`

export const Heading = styled.h1`
color: #f3aa4e;
font-size: 30px;
`

export const Li = styled.li``

export const Form = styled.form`
display: flex;
 flex-direction: column;
margin: 40px;

`
export const Label = styled.label`
    color: #f8f8f8;
    font-size: 22px;
    margin-bottom: 10px;
    margin-top: 20px;
`
const commonStyles = {
  background: '#f1f5f9',
  borderStyle: 'none',
  outline: 'none',
  padding: '5px',
  borderRadius: '5px',
  color: '#334155',
  fontSize: '24px',
  height: '40px',
  marginRight: '7px',
  paddingLeft: '15px',
}

export const Input = styled.input`
  ${commonStyles}
`

export const Option = styled.option``
export const Select = styled.select`
${commonStyles}
`

export const TagHeading = styled.h1`
color: #f8f8f8;
font-size: 30px;
margin: 20px;
`
export const Button = styled.button`
    background: #f3aa4e;
    border-style: none;
    outline: none;
    color: #f8f8f8;
    font-weight: 600;
    height: 40px;
    width: 40%;
    border-radius: 5px;
    align-self: center;
    margin-top: 40px;
`

export const DisplayContainer = styled.div`
    background: #000000;
     width: 60%;
    
`
export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    
    align-items: center;
    margin: 20px;
`
export const TaskOrder = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 20px;
`
export const ButtonTags = styled.button`
 background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
    border: 1px solid #f3aa4e;
    outline: none;
    color: #ffffff;
    font-weight: 600;
    border-radius: 15px;
    align-self: center;
    margin-top: 40px;
    margin-right: 20px;
    padding: 7px;
`

export const InputTextpara = styled.p`
color: #ffffff;
font-size: 30px;
`

export const TasksList = styled.li`
    background: #1a171d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
`
export const TagBtn = styled.p`
    background: #f3aa4e;
    border-style: none;
    outline: none;
    color: #1a171d;
    font-weight: 600;
    border-radius: 15px;
    
    font-size: 18px;
    padding: 7px;
`

export const Para = styled.p`
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    margin-top: 180px;
`
