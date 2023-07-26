import { Text, View } from '@/components/Themed'
import { Image, StyleSheet, Pressable } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const PlotItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plotSide}>
        <Image
          source={{}}
          src={'https://www.thebeekmantowerny.com/wp-content/uploads/2016/12/200x200.png'}
          style={styles.stretch}
        />
        <View style={styles.line}/>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.nickname}>Example Nickname</Text>
          <Text style={styles.time}>11 h.</Text>
          <Pressable>
            {({ pressed }) => (
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={22}
                color={'white'}
                style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </View>
        <View style={styles.marginTop}>
          <Text style={styles.bodyText}>Example TitleExample TitleExample TitleExample TitleExample TitleExample
            TitleExample Title</Text>
          <Image
            source={{}}
            src={'https://www.thebeekmantowerny.com/wp-content/uploads/2016/12/200x200.png'}
            style={[styles.image, styles.marginTop]}
          />
        </View>
        <View style={styles.actions}>
          <Pressable>
            {({ pressed }) => (
              <AntDesign
                name="hearto"
                size={20}
                color="white"
                style={[styles.actionButtons, {opacity: pressed ? 0.5 : 1 }]}
              />

            )}
          </Pressable>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome5
                name="comment-alt"
                size={18}
                color="white"
                style={[styles.actionButtons, {opacity: pressed ? 0.5 : 1 }]}
              />
            )}
          </Pressable>
          <Pressable>
            {({ pressed }) => (
              <AntDesign
                name="retweet"
                size={21}
                color="white"
                style={[styles.actionButtons, {opacity: pressed ? 0.5 : 1 }]}
              />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PlotItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 15,
    marginBottom: 15
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'stretch'
  },
  content: {
    flex: 1,
    paddingLeft: 10
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 50
  },
  nickname: {
    flexGrow: 1,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  marginTop: {
    marginTop: 8
  },
  bodyText: {
    lineHeight: 22
  },
  actions: {
    flexDirection: 'row',
  },
  actionButtons: {
    marginRight: 20,
    marginTop: 25,
    alignSelf: 'center'
  },
  line: {
    backgroundColor: 'white',
    width: 1,
    flex: 1,
    marginTop: 10,
    zIndex: -1,
    opacity: 0.5
  },
  plotSide: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  time: {
    opacity: 0.5
  }
});
