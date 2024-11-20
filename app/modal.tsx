import { StatusBar } from 'expo-status-bar'
import { Platform, View } from 'react-native'
import { Chip, Text } from 'react-native-paper'

import { ScreenStyles } from '@/ui/'

const Modal = () => (
  <View style={ScreenStyles.centeredScreen}>
    <Text variant="displaySmall">Modal</Text>
    <Text variant="bodyLarge">To edit this screen open the file:</Text>
    <Chip icon="language-typescript" textStyle={{ fontFamily: 'SpaceMono' }}>
      app/modal.tsx
    </Chip>

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
  </View>
)

export default Modal
