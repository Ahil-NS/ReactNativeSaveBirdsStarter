import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.timerWrapper}>
          {this.timerButton()}
        </View>
        
        <View style={styles.buttonWrapper}>
          {this.startButton()}
          {this.labButton()}
        </View>
      </View>
      
      <View style={[styles.bottomContainer,{alignItems:"center"}]}>
        <Text style={styles.labItems}>Lab 1</Text>
      </View>

      </View>
    );
  }
  timerButton(){
    return <View>
      <Text style= {styles.timer}>00.00.00</Text>
    </View>
  }
  startButton(){
    return <View style= {[styles.button,styles.startButton]}>
      <Text>START</Text>
    </View>
  }
  labButton(){
    return <View style= {styles.button}>
      <Text>LAB</Text>
    </View>
  }

  //Use This for designing Screens
  // border(colorInput){
  //   return{
  //     borderColor: colorInput,
  //     borderWidth: 4
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  topContainer:{
    flex:1,
  },
  bottomContainer:{
    flex:1
  },
  timerWrapper:{
    flex:5,
    justifyContent:'center',
    alignItems: 'center',
  },
  //Flex Direction default colunm for mobile
  buttonWrapper:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  timer:{
    fontSize: 60
  },
  button:{
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'

  },
  startButton:{
    borderColor: '#00CC00'
  },
  labItems:{
    fontSize: 20
  }
});
