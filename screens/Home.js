import React,{Component} from "react"
import {View,Text,Flatlist,StyleSheet,Alert,SafeAreaView} from "react-native"
import {ListItem} from "react-native-elements"
import axios from "axios"

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            listData:[],
            url:"http://localhost:19002/"
        }
    }
    componentDidMount(){
        this.getPlanets()
    }
    getPlanet=()=>{
        const {url}= this.state
        axios
        .get(url)
        .then(response=>{
            return this.setState({
                listData:response.data.data
            })
        })
        .catch(error=>{
        Alert.alert(error.message)
        })
    }
    render(){
        return(
            <View>
            <Text>Home Screen</Text>
            </View>
        )   
    }

}