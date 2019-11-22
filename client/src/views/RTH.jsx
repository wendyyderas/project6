import React from 'react'
import vipImage from '../vip.png'

export default class RTH extends React.Component {
	constructor(props){
		super(props);
		this.state={
			error:null,
			isLoaded: false,
			allProducts: [],
			currentFilter: 'All',
			currentProducts: [],
			data: "",
			options: [
				{
					name: "All", value: "All"
				},
				{
					name: "Cake $69-$50", value: "Cake"
				},
				{
					name: "CakePop $12", value: "CakePop"
				},
				{
					name: "Cupcakes $30", value: "Cupcakes"
				},
				{
					name: "Macaroons $25", value: "Macaroons"
				},
				
			],
			value: "All"
	
		}
	}
	componentDidMount() {
		fetch('/api/users/allproducts')
			.then((res) => res.json())
			.then(
				(data) => {
					console.log(data)
					this.setState({
						isLoaded: true,
						allProducts: data,
						currentProducts: data
					})
				})
			.catch(error => {
				this.setState({
					isLoaded: true,
					error
				})
			});
	}
	
	render() {
		const { error, isLoaded, allProducts} = this.state;
		const filter = (e) => {
			console.log('e - ',e.target.value)
			fetch(`/api/productfilter/${e.target.value}`)
			.then((res) => res.json())
			.then(
				(data) => {
					console.log(data)
					this.setState({
						isLoaded: true,
						allProducts: data,
						currentProducts: data
					})
				})
			.catch(error => {
				this.setState({
					isLoaded: true,
					error
				})
			});
	
			this.setState({
				value: e.target.value
			})
		}
		
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
		   
			return (
				<main class="main">
					<section class="jumbotron text-center">
						<div class="container">
							<p class="bake">Cake&amp;Bake</p>
						</div>
					</section>
	
					<div class="album py-5 bg-light">
	
						<button>
	
							<select onChange={filter} value={this.state.value}>
								{this.state.options.map(item => (
								<option key={item.value} value={item.value}>
								{item.name}
								</option>
								))}
							</select>
						</button>
						<div class="container-fluid">
	
							<div class="row">
							{this.state.allProducts.map((products,index) =>(
								<div class="col-md-4">
									<div class="card mb-4 shadow-sm">
										<img src={products.UrlImg} height="275" width="100%" alt={products.Description}/>
										<div class="card-body">
											<p class="card-text">{products.Description}</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="btn-group">
												 <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
												 <button type="button" class="btn btn-sm btn-outline-secondary">{products.Price}</button>
												</div>
												<small class="text-muted">{products.ProductName}</small>
											</div>
										</div>
									</div>
								</div>
							))}
							</div>   
						</div>
					</div>
				</main>
				
				
			)
	}
	}
	}
	
	