import React, { useEffect } from 'react'

const text = {
    "values": [
        { 'number': '10k', 'text': 'COMPANIES' },
        { 'number': '312', 'text': 'TEMPLATES' },
        { 'number': '12M+', 'text': 'QUARYS' },
    ]
}


const element = (text) => {
    // console.log(text.values[0].number)

    const items = [];

    for (let i = 0; i < text.values.length; i++) {
        const item = text.values[i];

        items.push(
            <div className="m-4 md:10 xl:10">
                <h1 className="text-white text-xl text-center">{item.number}</h1>
                <h1 className="text-white text-sm text-center">{item.text}</h1>
            </div>
        )
    }

    return items

}

export default function NumberArea() {

    return (
        <div className=" flex flex-col md:flex-row xl:flex-row ">
            {element(text)}
        </div>
    )
}
