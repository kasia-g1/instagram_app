// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	Image,
// 	FlatList,
// 	TouchableOpacity,
// } from 'react-native';

// import React, { useState, useEffect } from 'react';

// const styles = StyleSheet.create({
// 	container: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		height: '100%',
// 		paddingTop: 0,
// 	},
// });

// const url = 'https://jsonplaceholder.typicode.com/photos';
// async function getImage() {
// 	const response = await fetch(url);
// 	return await response.json();
// }

// export default function SearchScreen({ navigation }) {
// 	const [fotos, setFotos] = useState([]);
// 	useEffect(() => {
// 		getImage().then((resFotos) => setFotos(resFotos));
// 	}, []);

// 	return (
// 		<View style={styles.container}>
// 			<Text
// 				onPress={() => navigation.navigate('Home')}
// 				style={{ fontSize: 26, fontWeight: 'bold' }}
// 			>
// 				Search Screen
// 			</Text>

// 			<FlatList
// 				keyExtractor={(item) => item.id}
// 				data={fotos}
// 				renderItem={({ item }) => (
// 					<View>
// 						<TouchableOpacity onPress={() => navigation.navigate('Home')}>
// 							<Image
// 								source={{ uri: item.thumbnailUrl }}
// 								style={{ height: 200, width: 200 }}
// 							/>{' '}
// 						</TouchableOpacity>
// 					</View>
// 				)}
// 			/>
// 		</View>
// 	);
// }
