import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text
        lightColor="black"
        darkColor="white"
      >
        <MaterialIcons name="scatter-plot" size={40} color="inherit" />
      </Text>
      <View>
        <View>
          <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
          <View>
            <Text>Example Nickname</Text>
          </View>
          <Text>Example Title</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '15%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
