import {
	View,
	StyleSheet,
	Image,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import React, { useState, useEffect } from 'react';
import SearchBox from '../screenComponents/SearchBox';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: '100%',
		paddingTop: 0,
	},
	images: {
		width: 120,
		height: 120,
	},
});

const url = 'https://jsonplaceholder.typicode.com/photos';
async function getImage() {
	const response = await fetch(url);
	return await response.json();
}

export default function SearchScreen({ navigation }) {
	const [fotos, setFotos] = useState([]);
	useEffect(() => {
		getImage().then((resFotos) => setFotos(resFotos));
	}, []);

	return (
		<View style={styles.container}>
			<SearchBox />

			<FlatList
				numColumns={3}
				keyExtractor={(item) => item.id}
				data={fotos}
				renderItem={({ item }) => (
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
							<Image
								source={{ uri: item.thumbnailUrl }}
								style={styles.images}
							/>
						</TouchableOpacity>
					</View>
				)}
			/>
		</View>
	);
}
