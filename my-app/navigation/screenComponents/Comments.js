import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		height: 100,
		width: '100%',
	},

	iconsContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginStart: 5,
	},
	commentsContainer: {
		marginStart: 10,
	},
	title: {
		fontFamily: 'Arial',
		fontSize: 12,
		fontWeight: '400',
		color: 'white',
		margin: 5,
	},
	comments: {
		fontSize: 12,
		fontWeight: '200',
		color: 'white',
		marginHorizontal: 5,
	},
	commentGray: {
		fontSize: 12,
		fontWeight: '200',
		color: 'gray',
	},
	icon: {
		fontSize: 24,
		color: '#fff',
		marginLeft: 10,
		marginTop: 10,
	},
	iconBookmark: {
		fontSize: 24,
		color: '#fff',
		marginTop: 10,
		marginLeft: 230,
	},
});

const Comments = () => {
	return (
		<View style={StyleSheet.container}>
			<View style={styles.iconsContainer}>
				<FontAwesome name='heart-o' style={styles.icon} />
				<Ionicons name='chatbubble-outline' style={styles.icon} />
				<Feather name='navigation' style={styles.icon} />
				<Feather name='bookmark' style={styles.iconBookmark} />
			</View>

			<View style={styles.commentsContainer}>
				<Text style={styles.title}>567 670 wyświetleń </Text>

				<Text style={styles.comments}>
					lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt aliqua.
					<Text style={styles.commentGray}>
						... więcej Zobacz wszystkie komentarze: 80
					</Text>
				</Text>

				<Text style={styles.comments}>Zobacz tłumaczenie.</Text>
			</View>
		</View>
	);
};

export default Comments;
