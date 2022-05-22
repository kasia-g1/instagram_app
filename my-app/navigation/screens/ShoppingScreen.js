import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function SettingsScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text onPress={() => navigation.navigate('Home')} style={styles.title}>
				Shopping Screen
			</Text>
		</View>
	);
}
