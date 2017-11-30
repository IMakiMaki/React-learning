import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class Product extends Component {
  render() {
    return (
        <FilterableProductTable/>
    )
  }
}

const obj = `
FilterableProductTable (orange): contains the entirety of the example
SearchBar (blue): receives all user input
ProductTable (green): displays and filters the data collection based on user input
ProductCategoryRow (turquoise): displays a heading for each category
ProductRow (red): displays a row for each product
`

class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const productData = this.props.productList;
    const filterText = this.props.filterText;
    const showStock = this.props.showStock;
    return (
        <div>
          {
            this.props.productList.map(item => {
              return <p>{item.price}</p>
            })
          }
        </div>
    )
  }
}

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      showStock: false
    }
  }

  handleSearchTextChange = (text) => {
    this.setState({
      searchText: text
    })
  }

  handleShowStockChange = (isStock) => {
    this.setState({
      showStock: isStock
    })
  }

  render() {
    return (
        <div>
          <SearchBar
              onTextChange={ this.handleSearchTextChange }
              onShowChange={ this.handleShowStockChange }
              searchText={ this.state.searchText }
              showStock={ this.state.showStock } />
          <ProductTable
              filterText={ this.state.searchText }
              showStock={ this.state.showStock }
              productList={ PRODUCTS } />
        </div>
    )
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchTextChange = (event) => {
    this.props.onTextChange(event.target.value)
  }

  handleCheckedChange = (event) => {
    this.props.onShowChange(event.target.checked)
  }

  render() {
    return (
        <form>
          <p>
            <input value={ this.props.searchText } onChange={ this.handleSearchTextChange } placeholder="Please enter the keywords" type="text"/>
          </p>
          <p>
            <input checked={ this.props.showStock } onChange={ this.handleCheckedChange } type="checkbox"/>Only show products in stock
          </p>
        </form>
    )
  }
}

export default Product;