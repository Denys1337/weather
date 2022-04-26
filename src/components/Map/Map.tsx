import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MAP_OPTIONS_DEFAULT } from '../../core/helpers/mapConfig';
import { FC } from 'react';
import { Coord } from '../../core/types/weatherTypes';
import s from './Map.module.scss';
import { Loader, MapProps } from '../../core/types/mapType';



const Map: FC<MapProps> = ({ lat, lon }) => {
  const containerStyle = {
    width: '100%',
    height: '310px',
  };
  
  const center: Coord = {
    lat: lat,
    lng: lon,
  };

  const { isLoaded }: Loader = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAQ0zSdSTORRJk0oYmKM2u_yuwwWRoYe7s"
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map): void {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(): void {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className= { s.map } >
    <GoogleMap
        mapContainerStyle= { containerStyle }
  center = { center }
  zoom = { 10}
  onLoad = { onLoad }
  onUnmount = { onUnmount }
  options = { MAP_OPTIONS_DEFAULT }
    >
    <Marker
       position={ center }
  />
    </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map)