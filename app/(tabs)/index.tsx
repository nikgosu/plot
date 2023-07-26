import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import { MaterialIcons } from '@expo/vector-icons'
import PlotItem from '@/components/UI/PlotItem'

const _render = ({ item, index }: { item: any; index: number }) => {
  return (
    <View
      style={{ justifyContent: 'center', width: '100%' }}
    >
      {
        index === 0 &&
          <MaterialIcons
              name="scatter-plot"
              size={40}
              color={'white'}
              style={{ alignSelf: 'center' }}
          />
      }
      <PlotItem/>
    </View>
  );
};
export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 1, 2, 1, 2, 1, 2]}
        style={{ width: '100%', marginTop: 50 }}
        renderItem={_render}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
