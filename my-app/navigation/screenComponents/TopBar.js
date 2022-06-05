import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import InstagramWhite from '../../assets/InstagramWhite.png';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 70,
		width: '100%',
	},

	iconsContainer: {
		flexDirection: 'row',
		marginStart: 115,
	},
	logo: {
		height: 35,
		width: 103,
		marginTop: 10,
	},

	icon: {
		fontSize: 24,
		color: '#fff',
		marginLeft: 10,
	},
});

const TopBar = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image source={InstagramWhite} style={styles.logo}></Image>
			</TouchableOpacity>
			<FontAwesome name='angle-down' style={styles.icon} />

			<View style={styles.iconsContainer}>
				<FontAwesome name='plus-square-o' style={styles.icon} />
				<FontAwesome name='heart-o' style={styles.icon} />
				<Feather name='navigation' style={styles.icon} />
			</View>
		</View>
	);
};

export default TopBar;
