import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		width: '100%',
		padding: 5,
		marginBottom: 0,
	},

	iconsContainer: {
		flexDirection: 'row',
		marginStart: 80,
	},

	logo: {
		fontFamily: 'Lobster-Regular',
		fontSize: 25,
		fontWeight: '500',
		color: '#fff',
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
				<Text style={styles.logo}>Instagram </Text>
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
