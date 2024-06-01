import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavContainer from "../containers/NavContainer";
import { SelectedValueProvider } from "../../hooks/SelectedValue";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <SelectedValueProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={NavContainer}
            options={{
              title: "Movies App",
              headerStyle: {
                backgroundColor: "#2c3e50",
              },
              headerTitleStyle: {
                color: "#fff",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route }) => ({
              title: route.params?.title || route.params?.name || "show",
              headerBackTitle: "Back to List",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SelectedValueProvider>
  );
};

export default AppStack;
