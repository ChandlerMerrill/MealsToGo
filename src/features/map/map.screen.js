import React, { useContext, useState, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "./components/search.component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { LocationContext } from "../../services/location/location.context";
import { MapCallout } from "./components/map-callout.component";
import { TouchableOpacity } from "react-native";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: restaurant,
                    })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </TouchableOpacity>
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
