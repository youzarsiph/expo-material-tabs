import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { router, Tabs } from 'expo-router'
import { Appbar } from 'react-native-paper'

import { TabBar, TabsHeader, useClientOnlyValue } from '@/ui'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name']
  color: string
}) {
  return <MaterialIcons size={24} {...props} />
}

const TabLayout = () => (
  <Tabs
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      header: (props) => (
        <TabsHeader navProps={props} children={undefined} elevated />
      ),
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.
      headerShown: useClientOnlyValue(false, true),
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home-filled' : 'home'} color={color} />
        ),
        headerRight: () => (
          <Appbar.Action
            icon="information"
            onPress={() => router.push('/modal')}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            name={focused ? 'explore' : 'travel-explore'}
            color={color}
          />
        ),
      }}
    />
  </Tabs>
)

export default TabLayout
