import React from 'react';
import List from './List'

export default function Todo(props) {
    let {list, userInput} = props
    return (
        <div>
        <List list={list} userInput={userInput}/>
        </div>
    )
}