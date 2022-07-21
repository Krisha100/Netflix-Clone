import React from "react";
import { View, Text } from "../Themed";
import styles from "./styles";
import {Image }from 'react-native'; 
import { AntDesign } from '@expo/vector-icons';


interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  // console.log(episode.poster);
  return (
    <View style={{margin:10}}>

      <View style={styles.row}>
        <Image style={styles.image} source={{uri: episode.poster}} />
        

        <View style={styles.titleContainer}>
          <Text style={styles.title}> { episode.title}</Text>
          <Text style={styles.duration}> { episode.duration}</Text>
        </View>

        <AntDesign name="download" size={24} color="white" />
      </View>

      <Text style={styles.plot}>{episode.plot}</Text> 
    </View>
  );
};

export default EpisodeItem;
