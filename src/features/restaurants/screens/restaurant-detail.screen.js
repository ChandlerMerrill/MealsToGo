import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Spacer size="medium">
        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Pancakes" />
            <Divider />
            <List.Item title="Waffles" />
            <Divider />
            <List.Item title="French Toast" />
            <Divider />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="B.L.T" />
            <Divider />
            <List.Item title="Hamburger" />
            <Divider />
            <List.Item title="Salad" />
            <Divider />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="spaghetti" />
            <Divider />
            <List.Item title="Kow Soi" />
            <Divider />
            <List.Item title="Any kind of soup you can imagine" />
            <Divider />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="OJ" />
            <Divider />
            <List.Item title="Belching Beaver PB Milk Stout" />
            <Divider />
            <List.Item title="Water" />
            <Divider />
          </List.Accordion>
        </ScrollView>
      </Spacer>
    </SafeArea>
  );
};
