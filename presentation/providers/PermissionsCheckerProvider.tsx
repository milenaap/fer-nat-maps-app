import { PropsWithChildren, useEffect } from 'react'
import { usePermissionsStore } from '../store/usePresentation'
import { PermissionStatus } from '@/infrastructure/interfaces/location'
import { router } from 'expo-router'


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


  return (
    <>
      {children}
    </>
  )
}

export default PermissionsCheckerProvider