import api from '../services/api'
import { useState } from 'react'
import ItemCard from './ItemCard'

import './Carousel.css'

function Carousel(params) {
    const [itens, setItens] = useState([])

    if (itens.length === 0) {
        api.get(params.src)
            .then((res) => {
                setItens(res.data)
            })
    }

    return <div className="carousel vertical_margin">
        {itens.map(item => <ItemCard id={item} key={item}></ItemCard>)}
    </div>
}

export default Carousel