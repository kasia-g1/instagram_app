import { View, StyleSheet, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import TopBar from '../screenComponents/TopBar';
import Comments from '../screenComponents/Comments';
import UserTop from '../screenComponents/UserTop';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0,
		margin: 0,
		backgroundColor: 'black',
	},
	image: {
		width: '100%',
		height: 400,
		margin: 5,
	},
});

const url = 'https://jsonplaceholder.typicode.com/photos';
async function getImage() {
	const response = await fetch(url);
	return await response.json();
}

export default function HomeScreen({ navigation }) {
	const [fotos, setFotos] = useState([]);
	useEffect(() => {
		getImage().then((resFotos) => setFotos(resFotos));
	}, []);

	return (
		<View style={styles.container}>
			<TopBar />

			<UserTop />

			<FlatList
				keyExtractor={(item) => item.id}
				data={fotos}
				renderItem={({ item }) => (
					<View>
						<Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
						<Comments />
					</View>
				)}
			/>
		</View>
	);
}
