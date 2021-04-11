import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';
export default class index extends Component {

    constructor(props){
        super();
        this.state = {
            data: []
        }
      }

      AllService = () =>
      {
  
    
        var formData = new FormData();
        formData.append('leadid', '967817092');
       
        fetch('https://vivahomepros.com/mobile-app/service-request-detail.php', {
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
            console.log(responseData.srdetails[0]);
           this.setState({data: responseData.srdetails})
            console.log("HAHAHA",this.state.data);
    
          })
          
      }

      componentDidMount(){
          this.AllService();
      }

	render() {
		return (
			<ScrollView style={styles.maincontainer}>
				<View >
					<Text style={styles.text1}>Are you intrested in this Service Request?</Text>
				</View>

				<View style={{flexDirection:'row',}}>
                    <View>
                       <TouchableOpacity style={styles.ButtonStyle} >
                           <Text  style={styles.text3}>Yes</Text>
                       </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.ButtonStyle2} >
                           <Text style={styles.text3}>No</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View >
                        <Text style={styles.text1}>Postal Code</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>255</Text>
                    </View>
                </View>

                <View>
                    <View >
                        <Text style={styles.text1}>What type of project is this?</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>255</Text>
                    </View>
                </View>

                <View>
                    <View >
                        <Text style={styles.text1}>Choose appropriate status for this?</Text>
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.text4}>255</Text>
                    </View>
                </View>
			</ScrollView>
		);
	}
}
