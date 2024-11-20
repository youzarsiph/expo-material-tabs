import { View } from 'react-native'
import { Chip, Text } from 'react-native-paper'

import { ScreenStyles } from '@/ui'

const Explore = () => (
  <View style={ScreenStyles.centeredScreen}>
    <Text variant="displaySmall">Explore Tab</Text>
    <Text variant="bodyLarge">To edit this screen open the file:</Text>
    <Chip icon="language-typescript" textStyle={{ fontFamily: 'SpaceMono' }}>
      app/(tabs)/explore.tsx
    </Chip>
  </View>
)

export default Explore
