import React from 'react';

export default function Todo(props) {
    let copy = props.list.map((e,i) => {
        return <h2 key={i}>{e}</h2>
    })
    return (
        <div>{copy}</div>
    )
}