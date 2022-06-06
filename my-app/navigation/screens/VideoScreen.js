import * as React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

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

export default function VideoScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={() => navigation.navigate('Home')} style={styles.title}>
				Video Screen
			</Text>
		</SafeAreaView>
	);
}
