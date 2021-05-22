import './Carousel.css'

function Carousel(params) {
    return <div className="carousel vertical_margin">
        {params.children}
    </div>
}

export default Carousel