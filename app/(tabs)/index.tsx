import { View } from 'react-native'
import { Chip, Text } from 'react-native-paper'

import { ScreenStyles } from '@/ui'

const Home = () => (
  <View style={ScreenStyles.centeredScreen}>
    <Text variant="displaySmall">Home Tab</Text>
    <Text variant="bodyLarge">To edit this screen open the file:</Text>
    <Chip icon="language-typescript" textStyle={{ fontFamily: 'SpaceMono' }}>
      app/(tabs)/index.tsx
    </Chip>
  </View>
)

export default Home
