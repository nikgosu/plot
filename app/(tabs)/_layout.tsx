import { Feather, FontAwesome, FontAwesome5, Entypo, Fontisto, AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {padding: 10}
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Feather size={25} name="home" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          headerTitle: 'SEARCH',
          tabBarIcon: ({ color }) => <FontAwesome5 size={25} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newPlot"
        options={{
          title: '',
          headerTitle: 'NEW PLOT',
          tabBarIcon: ({ color }) => <Entypo name="new-message" size={25} color={color} />,
          headerLeft: () => (
            <Link href="/feed" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="close"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="actions"
        options={{
          title: '',
          headerTitle: 'ACTIONS',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Fontisto name="person" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
