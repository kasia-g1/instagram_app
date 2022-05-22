import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Logo from '../../assets/logo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

	logo: {
		height: 40,
		width: 40,
		borderRadius: 50,
		marginStart: 10,
		backgroundColor: '#666',
	},

	content: {
		flex: 1,
		paddingHorizontal: 10,
	},
	title: {
		fontFamily: 'Arial',
		fontSize: 14,
		fontWeight: '400',
		color: 'white',
	},
	info: {
		fontFamily: 'Arial',
		fontSize: 12,
		fontWeight: '100',
		color: 'white',
	},

	icon: {
		fontSize: 24,
		color: '#fff',
		marginRight: 10,
	},
});

const UserTop = () => {
	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.logo}></Image>
			<View style={styles.content}>
				<Text style={styles.title}>asscrono.official</Text>
				<Text style={styles.info}>Sponsorowane</Text>
			</View>
			<MaterialCommunityIcons name='dots-horizontal' style={styles.icon} />
		</View>
	);
};

export default UserTop;
