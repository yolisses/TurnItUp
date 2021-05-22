import SearchBox from './components/SearchBox'
import ItemCard from './components/ItemCard'
import Carousel from './components/Carousel'

function App() {
	return <div className='App'>
		<SearchBox></SearchBox>
		<Carousel>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
			<ItemCard></ItemCard>
		</Carousel>
	</div>;
}

export default App;
