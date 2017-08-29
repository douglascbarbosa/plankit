import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';


class App extends Component {

	render(){
		return (

			<Provider store={createStore(reducers)} >
				<View style={{flex:1}}>
					<Header headerText="Plankit" />
					<LibraryList />
				</View>

			</Provider>	

		)
	}

// 	state = { loggedIn: null };

// 	componentWillMount() {

// 		firebase.initializeApp({
// 	    	apiKey: 'AIzaSyDkgRMlWYsz4klhLozzgGhYF7LaM1tQd9E',
// 	    	authDomain: 'plankit-26637.firebaseapp.com',
// 	    	databaseURL: 'https://plankit-26637.firebaseio.com',
// 	    	projectId: 'plankit-26637',
// 	    	storageBucket: 'plankit-26637.appspot.com',
// 	    	messagingSenderId: '868441012056'
//   		});

//   		firebase.auth().onAuthStateChanged((user) => {
//   			if (user){
//   				this.setState( { loggedIn: true });
//   			} else {
//   				this.setState( { loggedIn: false });
//   			}
//   		});
// 	}

// 	renderContent(){

// 		switch (this.state.loggedIn){
// 			case true:
// 				return(
// 					<View style={{height : 50}}>
// 						<Button onPress={() => firebase.auth().signOut()}>
// 							Log out
// 						</Button>
// 					</View>
// 				)
// 			case false:
// 				return <LoginForm />
// 			default:
// 				return <Spinner size="large" />

// 		}
// 	}

// 	render(){
// 		return (
// 			<View>
// 				<Header headerText="Plankit" />
// 				{this.renderContent()}
// 			</View>
// 		);
// 	}
 }


export default App;