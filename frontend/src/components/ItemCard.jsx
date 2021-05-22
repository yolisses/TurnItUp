import './ItemCard.css'
import api from '../services/api'
import { useState } from 'react'

export default function ItemCard(params) {
    const size = 10
    const [name, setName] = useState("Fetching name")
    const [author, setAuthor] = useState("Fetching author")
    const [image, setImage] = useState("")

    api.get(`/music/${params.id}`)
        .then((res) => {
            setName(res.data.name)
            setAuthor(res.data.author)
            setImage(res.data.image)
        })

    return <div className="parentCard" style={{ width: size + 'rem' }}>
        <a href="/music">
            <div className="imageWrapper" style={{ "backgroundImage": `url(${image})` }}></div>
        </a>
        <div className="description">
            <div>{name}</div>
            <div className="faded">{author}</div>
        </div>
    </div >
}