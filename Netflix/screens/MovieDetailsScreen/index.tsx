import React, { FlatList, Image, Pressable } from "react-native";

import { Text, View } from "../../components/Themed";
import styles from "./styles";

import movie from "../../assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    
    <View>
      
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      
     
      <FlatList
      data={firstSeason.episodes.items}
      renderItem = { ({item}) => <EpisodeItem episode={item}/> }
      style={{marginBottom:250}}
     ListHeaderComponent ={(
      <View style={{ padding: 12 }}>

      
      <Text style={styles.title}> {movie.title} </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.match}> 98% match</Text>
        <Text style={styles.year}> {movie.year} </Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}> 12+ </Text>
        </View>
        <Text style={styles.year}> {movie.numberOfSeasons} Seasons </Text>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>

      <Pressable
        onPress={() => {
          console.warn("Play");
        }}
        style={styles.playButton}
      >
        <Text style={styles.playButtonText}>
          <Entypo name="controller-play" size={16} color="black" />
          Play
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.warn("Download");
        }}
        style={styles.downloadButton}
      >
        <Text style={styles.downloadButtonText}>
          <AntDesign name="download" size={16} color="white" />
          {/* to add space  in between-add empty string  */} Download
        </Text>
      </Pressable>

      <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
      <Text style={styles.year}> Cast: {movie.cast}</Text>
      <Text style={styles.year}> Creator: {movie.creator}</Text>

      {/* Row with icon buttons */}
      <View style={{ flexDirection: "row", marginTop: 20}}>
        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={{ color: "darkgrey", marginTop: 3 }}> My List</Text>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Feather name="thumbs-up" size={24} color="white" />
          <Text style={{ color: "darkgrey", marginTop: 3 }}> Rate</Text>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Entypo name="share" size={24} color="white" />
          <Text style={{ color: "darkgrey", marginTop: 3 }}> Share</Text>
        </View>
      </View>
    </View>
     )}
      />
    </View>
  );
};

export default MovieDetailsScreen;
