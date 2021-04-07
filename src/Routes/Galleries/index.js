import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "./styles";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
         <Text>Galleries</Text>
        </View>
      </ScrollView>
    );
  }
}

export default index;
