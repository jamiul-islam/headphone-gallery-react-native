import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Headphones from "../screens/headphones";
import Details from "../screens/product-details";
import Earphones from "../screens/earphones";
import Speakers from "../screens/speakers";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import { colors } from "../theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen() {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HeadphonesStack.Screen name="Details" component={Details} />
    </HeadphonesStack.Navigator>
  );
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen() {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      <EarphonesStack.Screen name="Details" component={Details} />
    </EarphonesStack.Navigator>
  );
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="Details" component={Details} />
    </SpeakersStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// customIconLogic
function TabBarIcon({ fontFamily, name, color }) {
  if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "Ionicons") {
    return <Ionicons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="home"
                color={color}
              />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Headphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="headphones"
                color={color}
              />
            ),
          }}
          name="HeadphoneTab"
          component={HeadphonesStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Earphone",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"SimpleLineIcons"}
                name="earphones-alt"
                color={color}
              />
            ),
          }}
          name="EarphoneTab"
          component={EarphonesStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Speaker",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"MaterialCommunityIcons"}
                name="speaker"
                color={color}
              />
            ),
          }}
          name="SpeakerTab"
          component={SpeakersStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                fontFamily={"Ionicons"}
                name="cart-outline"
                color={color}
              />
            ),
          }}
          name="CartTab"
          component={CartStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
