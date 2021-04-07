import React,{useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import imgURL from '../img/say.jpg';

const Container  = styled.div`
    with: 100%;
    height: 80%;
    margin-top: 1%;
    // background-color: rgb(255,255,255);
    background: url(${imgURL}) center;
    background-size: cover;
    // opacity:0.5;//透明度设置
    overflow:auto;
    position: relative;
`;

const TodoList = props => {
    const {todoTexts, removeItem,handleCheck} = props;

    const printTodoList = todoTexts.map((ary,index)=>(<TodoItem key={index} id={ary.id} text={ary.text} flag={ary.flag} removeItem={removeItem} remove={ary.remove} handleCheck={handleCheck}/>))


    return(
        <Container>
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    background:`rgba(255,255,255,0.6)`
                }}>
                {printTodoList}
            </div>
        </Container>
    );
}

export default TodoList;
