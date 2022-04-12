import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAP_OPTIONS_DEFAULT } from '../../core/helpers';
import { FC } from 'react';
import { Coord, Loader } from '../../store/types';

type MapProps = {
  lat: number,
  lon: number
}


const Map:FC<MapProps> = ({lat,lon}) => { 
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center:Coord = {
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

  const onUnmount = useCallback(function callback(map): void {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options = {MAP_OPTIONS_DEFAULT}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map