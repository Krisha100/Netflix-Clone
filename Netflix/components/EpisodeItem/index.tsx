import React from "react";
import { View, Text } from "../Themed";
import styles from "./styles";
import {Image, Pressable }from 'react-native'; 
import { AntDesign } from '@expo/vector-icons';
import {Episode} from '../../types'; 


interface EpisodeItemProps {
  episode: Episode;
  onPress: (episodee: Episode) => { }
    
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;
  // console.log(episode.poster);
  return (

    <Pressable style={{margin:10}} onPress={() => onPress(episode)}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: episode.poster}} />
        

        <View style={styles.titleContainer}>
          <Text style={styles.title}> { episode.title}</Text>
          <Text style={styles.duration}> { episode.duration}</Text>
        </View>

        <AntDesign name="download" size={24} color="white" />
      </View>

      <Text style={styles.plot}>{episode.plot}</Text> 


    </Pressable>

      
  );
};

export default EpisodeItem;
