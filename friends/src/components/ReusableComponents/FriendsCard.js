import styled from 'styled-components';
import { Card, Input, Button, Form } from 'reactstrap';

export const CardsContainer = styled.div`
    display: flex; 
    flex-flow: wrap;
    max-width: 1000px;
    margin: 0 auto
`

export const CardContainer = styled(Card)`
    margin: 20px;
    width: 340px;
    text-align: center;
    background: #333;
`

export const EditInputField = styled(Input)`
    margin: 20px auto;
    margin-bottom: 0;
    width: 80%;
    font-size: 12px;
    
    &:first-child {
        margin-top: 0;
    }
`

export const EditButtons = styled(Button)`
    width: 38%;
    margin: 20px 10px;
    font-size: 12px;
`
export const AddForm = styled(Form)`
    max-width: 1000px;
    margin: 20px auto
    display: flex;
    justify-content: center;
`

export const AddInputField = styled(Input)`
    margin: 0 30px;
    font-size: 14px;
`

export const AddButton = styled(Button)`
    margin: 0 30px;
    font-size: 14px;
`