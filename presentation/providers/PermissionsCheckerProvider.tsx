import { PropsWithChildren, useEffect } from 'react'
import { usePermissionsStore } from '../store/usePresentation'
import { PermissionStatus } from '@/infrastructure/interfaces/location'
import { router } from 'expo-router'
import { AppState } from 'react-native'


const PermissionsCheckerProvider = ({children}: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionsStore()



    useEffect(() => {
      if(locationStatus === PermissionStatus.GRANTED){
        router.replace('/map')
      }else if(locationStatus !== PermissionStatus.CHECKING){
        router.replace('/permissions')
      }

      
    }, [locationStatus])
    
    useEffect(() => {
      checkLocationPermission();
    
    }, [])
    
    //TODO
    useEffect(() => {
     const subscription = AppState.addEventListener('change', (nextAppState) => {

      // console.log({nextAppState});

      if(nextAppState === 'active'){
        checkLocationPermission();
      }
     })

     return () => {
      subscription.remove();
     };
    }, [])
    


  return (
    <>
      {children}
    </>
  )
}

export default PermissionsCheckerProvider