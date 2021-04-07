import React, { Component } from 'react'
import { Text, View,TouchableOpacity,FlatList ,SafeAreaView,Image} from 'react-native'
 import styles from "../styles";
export default class index extends Component {
    constructor(){
        super();
        this.state = {
          token:'',
          token_type: '',
          dataSource:[{
            "id": "1",
            "name": "Zeeshan",
            "text": 'Cancel',
          
          },
          {
            "id": "2",
            "name": "Muqeet",
            "text": 'hrjjc',
          }
          ]
        }
      }


      Test = ({item}) => {
        return (
          <View elevation={3} style={styles.listItem}>
            {/* <Text style={{alignSelf:'flex-end'}}>2020-09-22</Text> */}
          <Image   source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
         style={{ width: 60, height: 60, borderRadius: 30 }} />
          <View style={{ alignItems: "flex-start", flex: 1, paddingLeft: 20,  }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ paddingTop: 20}}>{item.text}</Text>
          </View>
          <Text style={{alignSelf:'flex-start'}}>2020-09-22</Text>
        </View>
        );
      }

    render() {
        return (
            <View>
                 <FlatList
        refreshing={true}
        data={this.state.dataSource}
        style={{marginTop: 1, marginStart: 1}}
        renderItem={this.Test}
        numColumns={1}
        indicatorStyle={"black"}
        showsVerticalScrollIndicator={true}
        
      />
                                
            </View>
        )
    }
}
