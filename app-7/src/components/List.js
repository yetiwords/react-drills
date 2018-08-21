import React from 'react';

export default function List(props) {
    let {list, userInput} = props
    return (
        <div>
        {
            list.map((e,i) => {
                console.log(e);
                return <h1 key={i}>{e}</h1>
            })

        }
        </div>
    )
}