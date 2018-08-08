import React, { Component } from 'react';
import styled from 'styled-components';



const Input = {
    width:'380px',
    height:'90px',
    background:'#0E0C14',
    border:'solid 0px #000',
    fontSize:'8rem',
    color: '#292929',
};

const HOne = styled.div`
    font-size:2rem;
    font-family:sans-serif;
    color: #292929;
    
`;

const Btn = styled.button`
height:67px;
    background:rgba(0,0,0,0);
    box-shadow: 1px 0px 435px #292929;
    color: #292929;
    border:solid 0px #000;
    font-size:2rem;
    font-family:sans-serif;
    text-align:end;
    &:hover{
        background:rgba(111,111,111,0.1);
        color:#0E0C14;
    }
`;

const FormContainer = styled.div`
    width:400px;
    height:300px;
    margin:5% ;
    ${'' /* border: solid 1px #292929; */}
    position:fixed;
    display:flex;
    flex-flow:column;
    justify-content:stretch;
`;



class Form extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
        };
    }

    componentDidMount(){

    }

    handleInput = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return (
            <FormContainer>
                <HOne>adD frienD</HOne>
                <input style={Input} type="text" name="name" placeholder="name" onChange={this.handleInput}/>
                <input style={Input} type="text" name="email" placeholder="email" onChange={this.handleInput} />
                <Btn>mOO pOint</Btn>
            </FormContainer>
        )
    }
}

export default Form;