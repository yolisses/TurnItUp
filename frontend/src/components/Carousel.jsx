import './Carousel.css'

function Carousel(params) {
    return <div className="carousel">
        {params.children}
    </div>
}

export default Carousel