import ThemedButton from '@/presentation/components/shared/ThemedButton';
import { ThemedText } from '@/presentation/components/shared/ThemedText'
import { usePermissionsStore } from '@/presentation/store/usePresentation'
import { Pressable, View } from 'react-native'


const PermissionsScreen = () => {

  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View 
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <ThemedButton onPress={requestLocationPermission}>
        Habilitar ubicación 
      </ThemedButton>


      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  )
}

export default PermissionsScreen