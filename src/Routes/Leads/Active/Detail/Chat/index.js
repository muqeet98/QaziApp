// import React, { Component } from 'react'
// import { Text, View,TouchableOpacity } from 'react-native'

// export default class index extends Component {
//     render() {
//         return (
// <View>
//     <Text>Hahahha Chat hai</Text>
// </View>
//         )
//     }
// }


// import { Assets } from '@react-navigation/stack';
// import React, { useState, useCallback, useEffect, Component } from 'react';
// import { render } from 'react-dom';
// import { AsyncStorage, View,Text } from 'react-native';
// import { GiftedChat, Bubble } from 'react-native-gifted-chat';
// import axios from 'axios';
// // import { base_url } from '../../API/types';
// export default class index extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			messages: [],
// 			text: '',
// 			token: '',
// 			token_type: '',
// 			to: ''
// 		};
// 		this.onSend = this.onSend.bind(this);
// 	}

// 	retriveData = async () => {};

// 	renderBubble() {
// 		// if (currentMessage.user._id == this.state.senderData.id) {
//       if (messages == this.state.senderData.id) {
// 			<Bubble {...props} wrapperStyle={{ right: { height: 200, backgroundColor: 'blue' } }} />;
// 		} else {
// 			<Bubble {...props} wrapperStyle={{ left: { backgroundColor: '#f0f0f0' } }} />;
// 		}
// 	}

// 	loadMessages() {
// 		console.log('Authorization', this.props.token_type + ' ' + this.props.token);
// 		console.log("Hell", this.state.messages)
// 		axios({
// 			method: 'get',
// 			url: base_url +'/api/user/messages/' + this.props.to,
// 			headers: {
// 				Authorization: this.props.token_type + ' ' + this.props.token,
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json'
// 			}
// 		})
// 			.then((res) => {
// 				console.log('Hai', res.data);
            
// 				res.data.forEach((element,index) => {
// 					// console.log({
// 					// 	_id: element.id,
// 					// 	text: element.text,
// 					// 	createdAt: element.created_at,
// 					// 	user: {
// 					// 		_id: element.from,
// 					// 		name: element.from
// 					// 	}

// 					// });
//                    console.log(this.props.name2);
// 					// if(this.state.messages.length<=index)
// 					if(this.props.to==element.from){
// 						this.state.messages.push({
// 							_id: parseInt(element.id),
// 							text: element.text,
// 							createdAt: element.created_at,
// 							user: {
// 								_id: parseInt(element.from),
// 								name: this.props.name2
// 							}
	
// 						});
	
// 					}else{
// 						this.state.messages.push({
// 							_id: parseInt(element.id),
// 							text: element.text,
// 							createdAt: element.created_at,
// 							user: {
// 								_id: parseInt(element.from),
// 								name: "b"
// 							}
	
// 						});
	
// 					}
					
// 					//  this.state.messages.reverse();
// 					this.setState({
// 						messages: this.state.messages
// 					});

// 				});	
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}

// 	sendMessage(text) {
// 		console.log("Hai", this.props.to);
// 		// console.log(this.state.messages);
// 		fetch(base_url+'/api/user/messages', {
// 			method: 'post',
// 			headers: {
// 				Authorization: this.props.token_type + ' ' + this.props.token,
// 				Accept: 'application/json',
// 				'Content-Type': 'application/json'
// 			},

// 			body: JSON.stringify({
// 				to: this.props.to,
// 				text: text
// 			})
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				console.log('Hai', data);
// 			})
// 			.catch((error) => console.log(error));
// 	}
// 	// componentDidMount(){

// 	// }
// 	// componentDidMount() {
// 	// 	console.log("hello", this.props.to)
// 	// 	// this.setState({ to: this.props.to });
// 	// 	// console.log(this.state.to, +'        '+ this.props.to)
// 	// 	this.retriveData();
// 	// 	setInterval(async () => {
// 	// 		await this.loadMessages();
		
// 	// 	  }, 10000/2);
// 	// 	// this.loadMessages();

// 	// 	// this.setState({
// 	// 	//   messages: [
// 	// 	//     {
// 	// 	//       _id: 1,
// 	// 	//       text: this.props.text,
// 	// 	//       createdAt: new Date(),
// 	// 	//       user: {
// 	// 	//         _id: 3,
// 	// 	//         name: this.props.from,
// 	// 	//       },
// 	// 	//     },
// 	// 	//   ],
// 	// 	// });
// 	// }

// 	onSend(messages = []) {
// 		this.setState((previousState) => {
// 			return {
// 				messages: GiftedChat.append(previousState.messages, messages)
// 			};
// 		});
// 		this.sendMessage(messages[0].text);
// 	}

// 	render() {
// 		// console.log(this.props.id+"kk")
// 		return (
// 			<GiftedChat
// 				inverted={false}
// 				// scrollToBottom={true}
// 				// messages={this.state.messages}
//                 renderAvatarOnTop={true}
// 				alignTop={false}
// 				onSend={((text) => this.setState({ text: text }), this.onSend)}
// 				// user={{
// 				// 	_id: parseInt(this.props.id) 
// 				// }}
// 			/>

//             // <View>
//             //     <Text>Hahaha Chat</Text>
//             // </View>
// 		);
// 	}
// }










import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ImagePropTypes, LogBox ,Modal,TouchableHighlight, TouchableOpacity, Platform, Dimensions} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';

// import  uuidv4  from 'uuid';
// import Sound from 'react-native-sound';
// import { AudioRecorder, AudioUtils } from 'react-native-audio';
// import Video from 'react-native-video';
// import Recording from './Recording';
// import Constant from './constant';
const index = (props, { navigation }) => {
//   const { item } = props.route.params;
  // console.log(props.route.params)
  const [filePath, setFilePath] = useState('');
  const [videofilePath, setVideoFilePath] = useState('');
  const [audioPath, setaudioPath] = useState('')
  const [rand, setRandom] = useState(4);
  const [counter, setCounter] = useState(18);
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState('');
  const [pathName,setpathName]= useState('')
  const [messages, setMessages] = useState([]);


  const renderCustomView = (props, newMessage = []) => {
    if (props.currentMessage.audio != null) {
      return (
        <View style={props.containerStyle}>
          {/* <Text>{props.currentMessage.audiodetails.audio}</Text> */}
          <Icon name="mic" size={40} color="#000" style={{ paddingRight: 10 }}
        
          />
          
        </View>
      );
    }
   
    return null
  }

  const counterFun= ()=> {
      console.log(counter);
      setCounter(counter+1);
     
  }
  useEffect(() => {
    if (Platform.OS !== 'web') {
        const { status } =  ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
        //   alert('Sorry, we need camera roll permissions to make this work!');
        }
      }

      setInterval(async () => {
        await loadMessages();
         
      }, 90000);
  }, []);


  const loadMessages = () =>
  {
    var formData = new FormData();
    formData.append('leadid', '639263331');
    formData.append('uid', '627470772');
    formData.append('pid', '11');
   
    fetch('https://vivahomepros.com/mobile-app/chat.php?chatcall=getmsg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },

      body: formData

    })
      .then((Response) => Response.json())
      .then((res) => {
        console.log('Hai', res.images);
    
        res.images.forEach((element,index) => {

           console.log("ELEMENT Console", element.pid);
           
            if('11'==element.pid){
                messages.push({
                    _id: parseInt(element.mid),
                    text: element.message,
                    createdAt: element.mdate,
                    user: {
                        _id: parseInt(element.pid),
                        name: 'm'
                    }

                });

            }
            else{
                messages.push({
                    _id: parseInt(element.id),
                    text: element.message,
                    createdAt: element.mdate,
                    user: {
                        _id: parseInt(element.pid),
                        name: "b"
                    }

                });

            }
            
            //  this.state.messages.reverse();
            // this.setState({
            //     messages
            // });
            setMessages(messages)

        });	
    })
      
  }

 const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        setFilePath(result.uri);

        handleImageSend(result.uri);
        
    }
  };



  const handleImageSend = (newMessage = []) => {

    if (filePath != '' || newMessage != []) {
      setMessages(GiftedChat.append(messages, {
        _id: 2,
        image: newMessage,

        // image: filePath,
        createdAt: new Date().getTime(),
        user: {

          _id: 2,
          name: 'Zia'
        }
      }
      ))
     
      console.log(messages);
      setFilePath('');
    }
  }

//   const handleVideoSend = (newMessage = []) => {
//     console.log("hai Zia")

//     setMessages(GiftedChat.append(messages, {
//       _id: counter,
//       // image: newMessage,
//        video: newMessage,
//       // image: filePath,
//       createdAt: new Date().getTime(),
//       user: {

//         _id: 2,
//         name: 'Zia'
//       }
//     }
    
//     ))

//     console.log(messages);

//   }

  const SendTextMessage = (newMessage = []) => {
      if(audioPath!= ''){
        newMessage[0].audio=audioPath
        newMessage[0].text=''
        setMessages(GiftedChat.append(messages, newMessage
          ))
          console.log(newMessage);
          setaudioPath('');
      }
      else{
    setMessages(GiftedChat.append(messages, newMessage));
    console.log(newMessage)
    console.log("fdsfdfdf ");
    }
  }




  const renderBubble = (newItem = []) => {
    return (
      <View style={{ position: 'relative', height: 150, width: 250 }}>
        <Video
        
        source={{ uri: videofilePath }}
         controls={true}
        fullscreen
        style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: 150,
            width: 250,
            borderRadius: 20,
          }}
         
          height={150}
          width={250}
        
         
           />
      </View>
    );
  }

  const OnSendCheck= () =>{
return(
<View style={{flexDirection:'row'}}>
  <TouchableOpacity style={{marginHorizontal: 55, backgroundColor:'red', borderRadius: 25,width: Width* 0.25, height: Height* 0.04, justifyContent:'center'}}
  onPress={OnCancel} >
    <Text style={styles.HeaderText1}>Cancel</Text>
  </TouchableOpacity>
  <Text>Recorded {time} seconds</Text>
  
  </View>
)
  }
  const OnCancel=() =>{
    setpathName('');
    setaudioPath('');
  }

  return (
    <View style={styles.container}>
      <GiftedChat
       isAnimated
        renderMessageAudio={renderCustomView}
        alwaysShowSend={true}
        messages={messages}
        text={pathName}
        onInputTextChanged={text=>{
          setpathName(text)
        }

        }
        renderMessageVideo={renderBubble}
        onSend={SendTextMessage}
        user={{ _id: 2 }}
      />

      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity style={{justifyContent:'center', marginHorizontal: 15}}>
          <Text style={{color:'red'}}> {audioPath!='' ? OnSendCheck() : null}</Text>
          </TouchableOpacity>
         
   
        <Icon name="camera" size={30} color="#000" style={{ alignSelf: 'flex-end', paddingRight: 10 }}  onPress={() => pickImage() } />
        {/* <Icon name="camera" size={30} color="#000" style={{ alignSelf: 'flex-end', paddingRight: 10 }} onPress={() => chooseVideoFile('video')} /> */}
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}></Text>
           
            
            <TouchableOpacity style={{backgroundColor: '#2196F3', width: Width* 0.5, height: Height* 0.06, borderRadius:30, justifyContent:'center'}} 
             onPress={() => pickImage()}>
                <Text style={styles.HeaderText1}>Pictures</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: '#2196F3',marginTop:20, width: Width* 0.5, height: Height* 0.06, borderRadius:30, justifyContent:'center'}}>
                <Text style={styles.HeaderText1}>Videos</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={{ ...styles.openButton, width: Width* 0.3, height: Height* 0.06, backgroundColor: "red",marginTop:20, borderRadius:30,justifyContent:'center' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.HeaderText1}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );

}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  HeaderText1: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    color: '#fff',
    alignSelf:'center'
  },
  modalView: {
      
    marginTop: "30%",
    marginLeft: "5%",
    marginRight:"5%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


});

