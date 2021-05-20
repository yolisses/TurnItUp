import './ItemCard.css'

export default function ItemCard() {
    const size = 8
    const testImage = 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=pan-yunbo-EgL0EtzL0Wc-unsplash.jpg&w=640'
    return <div>
        <a href="/music">
            <div className="imageWrapper" style={{ "background-image": `url(${testImage})`, width: size + 'rem', height: size + 'rem' }}></div>
        </a>
        <div id="name">
            Music name
        </div>
        <div>Author</div>
    </div >
}