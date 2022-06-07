import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import VideoScreen from './screens/VideoScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import ProfileScreen from './screens/ProfileScreen ';

// Screen names
const homeName = 'Home';
const searchName = 'Search';
const videoName = 'Video';
const shoppingName = 'Shopping';
const profileName = 'Profile';

const styles = StyleSheet.create({
	bar: {
		height: 70,
	},
});

const Tab = createBottomTabNavigator();

function MainContainer() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarShowLabel: false,
					tabBarActiveTintColor: 'black',
					tapBarInactiveTintColor: 'black',
					tapBarShowLabel: false,
					tapBarStyle: styles.bar,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === homeName) {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === searchName) {
							iconName = focused ? 'search' : 'search';
							size = focused ? size + 8 : size + 2;
						} else if (route.name === videoName) {
							iconName = focused ? 'tv' : 'tv-outline';
						} else if (route.name === shoppingName) {
							iconName = focused ? 'basket' : 'basket-outline';
						} else if (route.name === profileName) {
							iconName = focused
								? 'ios-person-circle'
								: 'ios-person-circle-outline';
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
			>
				<Tab.Screen name={homeName} component={HomeScreen} />
				<Tab.Screen name={searchName} component={SearchScreen} />
				<Tab.Screen name={videoName} component={VideoScreen} />
				<Tab.Screen name={shoppingName} component={ShoppingScreen} />
				<Tab.Screen name={profileName} component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default MainContainer;
