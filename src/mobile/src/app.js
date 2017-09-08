import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: "AIzaSyDkgRMlWYsz4klhLozzgGhYF7LaM1tQd9E",
			authDomain: "plankit-26637.firebaseapp.com",
			databaseURL: "https://plankit-26637.firebaseio.com",
			projectId: "plankit-26637",
			storageBucket: "plankit-26637.appspot.com",
			messagingSenderId: "868441012056"
		};

		firebase.initializeApp(config);		
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (

			<Provider store={store} >
				<View style={{flex:1}}>
					<Router />
				</View>

			</Provider>	

		)
	}
 }


export default App;