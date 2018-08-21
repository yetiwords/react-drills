import React from 'react'

export default function NewTask(props) {
    const {inputHandlerFn, addTaskFn} = props
    return (
        <div>
        <input onChange={(e) => inputHandlerFn(e)} placeholder='lol'></input>
        <button onClick={addTaskFn}>Add</button>
        </div>
    )
}