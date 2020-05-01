// import React, { Component } from 'react'
// import Categories from '../components/Categories'
// import { connect } from "react-redux"
// // import { fetchProducts } from '../redux/actions/getProperties'
// import { addFavoriteCreator } from '../redux/actions/getFavourites'
// import { fetchSearchedCategories, fetchCategoriesCreator } from '../redux/actions/getCategories'

// class CategoriesContainer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             categories: [],
//             categorium: ''
//             };

//         this.onClick = this.onClick.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }

//     // componentDidMount(){
//     //     if (!this.props.categories.length) this.props.fetchCategoriesCreator()
//     // }

//     handleChange(event) {
//         event.preventDefault();

//         this.setState({ categories: event.target.name })

        
//     }

//     onClick() {
//         this.props.fetchSearchedCategories(this.state.categories)
//     }


//     render() {
//         return (
//             <Categories handleChange={this.handleChange} categories={this.props.categories} onClick={this.onClick} user={this.props.user} />
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         user: state.user.logged,
//         categories: state.categories.categories
//     }
// }

// const matchDispatchToProps = (dispatch) => {
//     return {
//         fetchCategoriesCreator: () => dispatch(fetchCategoriesCreator()),
//         addFavoriteCreator: (obj) => dispatch(addFavoriteCreator(obj)),
//         fetchSearchedCategories: (categorium) => dispatch(fetchSearchedCategories(categorium))
//     }
// }

// export default connect(mapStateToProps, matchDispatchToProps)(CategoriesContainer)