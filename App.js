import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight,TouchableOpacity} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  }

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
      
      <View style={[styles.bottomContainer]}>
        {this.laps()}
      </View>

      </View>
    );
  }

  laps(){
    return this.state.laps.map(function(time, index){
      return <View style= {styles.lap}> 
        <Text style= {styles.labItems}>
          Lap #{index+1}
        </Text>
        <Text style= {styles.labItems} >
          {formatTime(time)}
        </Text>
      </View>
    })
  }
  timerButton(){
    return <View>
      <Text style= {styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
    </View>
  }
  startButton(){
    var style = this.state.running ? styles.stopButton : styles.startButton
    return <TouchableOpacity 
    style= {[styles.button,style]}
    //onPress = {this.handleStartPress}
    onPress={() => this.handleStartPress()}
    >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableOpacity>
  }

  labButton(){
    return <TouchableOpacity 
    style= {styles.button}
    onPress={() => this.handleLapPress()}
    >
      <Text>LAB</Text>
    </TouchableOpacity>
  }

  handleLapPress(){
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    })
  }
  handleStartPress(){
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running:false})
      return
    }
  
    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true

      });
    },30);
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
  stopButton:{
    borderColor: '#CC0000'
  },
  labItems:{
    fontSize: 40
  },
  lap:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
