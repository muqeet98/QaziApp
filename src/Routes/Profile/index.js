import styles from './styles';
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

class index extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			bBuild: '',
			name:'',
			buildStatus:'',
			id:'',
			pcover:'',
			ppic:'',
			score:[]

		};
	}
	getDATA =() =>{

		AsyncStorage.getItem('setId').then(id =>
			{
				console.log('id', id);
				 this.setState({id: id})
	
			})
	
		AsyncStorage.getItem('setbbuild').then(bbuild =>
			{
				console.log('bbuild', bbuild)
				this.setState({buildStatus: bbuild})
			 
			})
			AsyncStorage.getItem('setName').then(name =>
				{
					this.setState({name: name})
					console.log('name', name)
	
				})
	}
componentDidMount() {

   this.getDATA();
   setTimeout(()=> {
	this.PostData();
}, 1000/2);
}
	PostData = () =>
	{
		console.log("HAHAHHA", this.state.id);

		var formData = new FormData();
		formData.append('pid', parseInt(this.state.id));
		fetch('https://vivahomepros.com/mobile-app/pro-profile.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			},

			body: formData


		})
			.then((Response) => Response.json())
			.then((responseData) =>
			{
				// console.log(responseData.data[1].profile[0].pcover);
				// console.log(responseData.data[1].profile[0].ppic);
				this.setState({pcover: responseData.data[1].profile[0].pcover})
				this.setState({ppic: responseData.data[1].profile[0].ppic})
			    
				// console.log(responseData.data[0].score);
                this.setState({score: responseData.data[0].data.score})
				console.log(this.state.score);

			})
			.catch(error => console.log(error))

	}

	// CalculateAVG=() => {
    //  for(var a= this.sta)
	// }

	render()
	{
		return (
			<ScrollView>
				<View style={styles.mainContainer}>
					
					<ImageBackground source={{uri: 'https://cdn.eso.org/images/thumb300y/eso1907a.jpg'}} style={styles.image}>
						<View style={styles.TopView}>

							<Text style={styles.text} onPress={()=> console.log(this.state.ppic)}>{this.state.name}</Text>

						</View>
					</ImageBackground>
				  {
					  this.state.buildStatus != 'Yes'?
					  <TouchableOpacity style={styles.buttonView}>
					  <Text style={styles.ButtonText}>Upgrade to Brand Builder</Text>
				  </TouchableOpacity>
				  :
				  null
				  }

					<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("Success")} >
						<Text style={styles.ButtonTextTouch}>Success Tracker</Text>
						<Image
							style={styles.ButtonIcon}
							source={require('../../../assets/right-arrow.png')}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("ViewProfile")}>
						<Text style={styles.ButtonTextTouch}>View Profile</Text>
						<Image
							style={styles.ButtonIcon}
							source={require('../../../assets/right-arrow.png')}
						/>
					</TouchableOpacity>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("ReplayTemps")}>
							<Text style={styles.ButtonTextTouch}>Replay Templates</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2} onPress={() =>this.props.navigation.navigate("Categories")}>
							<Text style={styles.ButtonTextTouch}>Categories & Tasks</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2} onPress={() => this.props.navigation.navigate("VacationMode")}>
							<Text style={styles.ButtonTextTouch}>Vacation Mode</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Users</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Change Company</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20 }}>
						<TouchableOpacity style={styles.buttonView2}>
							<Text style={styles.ButtonTextTouch}>Get Help</Text>
							<Image
								style={styles.ButtonIcon}
								source={require('../../../assets/right-arrow.png')}
							/>
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 20, marginBottom: 20 }}>
						<TouchableOpacity style={styles.buttonViewlogout}>
							<Text style={styles.ButtonTextTouchLogout}>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}
export default index;
