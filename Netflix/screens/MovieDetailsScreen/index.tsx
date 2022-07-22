import { FlatList, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import styles from "./styles";

import movie from "../../assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode)
  const seasonNames = movie.seasons.items.map((season) => season.name);
  //console.log(seasonNames);
  return (
    <View>
      {/* <Image style={styles.image} source={{ uri: firstEpisode.poster }} /> */}
      <VideoPlayer episode={currentEpisode} />
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} onPress={setCurrentEpisode} />}
        style={{ marginBottom: 250 }} 
        ListHeaderComponent={
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
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 3 }}>
                  {" "}
                  My List
                </Text>
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
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={{ color: "white", width: 130, marginVertical: 30 }}
              itemStyle={{ backgroundColor: "white" }}
              // dropdownIconColor={'white'}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
