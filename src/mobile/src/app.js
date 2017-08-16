import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	componentWillMount() {

		firebase.initializeApp({
	    	apiKey: 'AIzaSyDkgRMlWYsz4klhLozzgGhYF7LaM1tQd9E',
	    	authDomain: 'plankit-26637.firebaseapp.com',
	    	databaseURL: 'https://plankit-26637.firebaseio.com',
	    	projectId: 'plankit-26637',
	    	storageBucket: 'plankit-26637.appspot.com',
	    	messagingSenderId: '868441012056'
  		});	
	}

	render(){
		return (
			<View>
				<Header headerText="Plankit" />
				<LoginForm />
			</View>
		);
	}
}


export default App;