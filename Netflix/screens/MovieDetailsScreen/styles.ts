import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
image:{
    width:'100%',
    aspectRatio: 16/9,
    resizeMode: 'cover'
},
title:{
    fontSize: 24,
    fontWeight: 'bold'
},
match: {
    fontWeight: 'bold',
    color: '#00aa00',
    marginRight: 5   
},
year:{  
    color:'grey',
    marginRight: 5 
},
age:{
    color:'black',
    fontWeight: 'bold'
},
ageContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5  
},
playButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
},
playButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
},
downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
   
},
downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
}
}); 

export default styles;