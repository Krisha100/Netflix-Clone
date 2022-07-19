import { Image, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0];


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Popular on Netflix</Text>
      <FlatList  
      data = {firstCategory.movies}
      renderItem = { ({item}) => (
        <Image style={styles.image} source={{ uri: item.poster }}/>
      )}
      horizontal 

      
      />


    </View>
  );
}

export default HomeScreen;

