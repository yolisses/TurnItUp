import './ItemCard.css'
import axios from 'axios'
import { useState } from 'react'

export default function ItemCard() {
    const size = 8
    const testImage = 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=pan-yunbo-EgL0EtzL0Wc-unsplash.jpg&w=640'
    const [name, setName] = useState("Fetching name")
    const [author, setAuthor] = useState("Fetching author")

    axios.get('http://localhost:5000/music/0')
        .then((res) => {
            setName(res.data.name)
            setAuthor(res.data.author)
        })

    return <div>
        <a href="/music">
            <div className="imageWrapper" style={{ "background-image": `url(${testImage})`, width: size + 'rem', height: size + 'rem' }}></div>
        </a>
        <div id="name">{name}</div>
        <div>{author}</div>
    </div >
}