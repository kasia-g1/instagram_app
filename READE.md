- Podstawowe

import {
	View,
	Text,
	StyleSheet,
	Alert,
	TouchableOpacity,
	Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AdaptiveIcon from './assets/adaptive-icon.png';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	name:{
		flex:1,
		alignItems:'center',

	},
});

export default function App() {
	return (
		<View style={styles.container}>
			<View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
			<View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>

			<TouchableOpacity onPress={() => Alert.alert('Hello')}>
				<Text>
					Hello <Text style={{ color: 'green' }}>World</Text>
				</Text>
			</TouchableOpacity>

			<Image source={AdaptiveIcon} style={{ height: 200, width: 200 }}></Image>

			<Image
				source={{
					uri: 'https://pngimg.com/uploads/pinterest/pinterest_PNG63.png',
				}}
				style={{ height: 200, width: 200 }}
			/>

			<AntDesign name='phone' size={24} color='black' />

			<Text style={styles.name}>Kasia Stone</Text>
		</View>
	);
}

--------------------------

 - ScrollView i funkacja map do tworzenia listy numerków

import {
	View,
	Text,
	StyleSheet,
	Alert,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AdaptiveIcon from './assets/adaptive-icon.png';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
	},
});

export default function App() {
	const data = new Array(100).fill(0).map((_, index) => index);

	return (
		<View style={styles.container}>
			<Text>Moja Lista</Text>
			<ScrollView style={{ height: 250, width: '100%' }}>
				{data.map((item) => (
					<Text key={item}>{item}</Text>
				))}
			</ScrollView>
		</View>
	);
}
-----------------------------

TABLIAC miast z FlatList

// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	Alert,
// 	TouchableOpacity,
// 	Image,
// 	ScrollView,
// 	FlatList,
// } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// import AdaptiveIcon from './assets/adaptive-icon.png';

// const styles = StyleSheet.create({
// 	container: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		height: '100%',
// 	},
// });

// export default function App() {
// 	const CITIES = [
//         {
//             id: "0",
//             city: "Warsaw",
//         },
//         {
//             id: "1",
//             city: "Lublin",
//         },
//         {
//             id: "2",
//             city: "Manila",
//         },
//         {
//             id: "3",
//             city: "Lviv",
//         }
//     ];

// 	const CityItem = ({id, city}) => {
// 		return <View>
// 			<Text>{city}</Text>
// 		</View>
// 	}

// 	return (
// 		<View style={styles.container}>
// 			<Text>Moja Lista</Text>
// 			<FlatList data={CITIES} renderItem = {({item}) => <CityItem {...item}/>}
// 				keyExtractor = {item =>item.id}
// 				/>
		
// 		</View>
// 	);
// }

import {View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Image, ScrollView, FlatList} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import Svg, {Circle, Rect} from 'react-native-svg';

import AdaptiveIcon from './assets/adaptive-icon.png'


const styles = StyleSheet.create({
    container: {
        display: 'flex', alignItems: 'center', height: '100%'
    }
})


export default function App() {

    const CITIES = [
        {
            id: "0",
            city: "Warsaw",
        },
        {
            id: "1",
            city: "Lublin",
        },
        {
            id: "2",
            city: "Manila",
        },
        {
            id: "3",
            city: "Lviv",
        }
    ];

    const CityItem = ({id, city}) => {
        return <View>
            <Text>{city}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <Text>Nasza lista</Text>
            <FlatList data={CITIES} renderItem={({item}) => <CityItem {...item}/>}
                      keyExtractor={item => item.id}
            />

        </View>
    );
}


-------------------------
LISTA MISAST z obrazkami i FlatList

import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import Svg, {Circle, Rect} from 'react-native-svg';

import AdaptiveIcon from './assets/adaptive-icon.png'


const styles = StyleSheet.create({
    container: {
        display: 'flex', alignItems: 'center', height: '100%',
        paddingTop: 50
    }
})


export default function App() {

    const CITIES = [
        {
            id: "0",
            city: "Warsaw",
            img: 'https://www.polska.travel/images/pl-PL/glowne-miasta/warszawa/warszawa_panorama_centrum_noca_1170.jpg'
        },
        {
            id: "1",
            city: "Lublin",
            img: 'https://lublininfo.com/wp-content/uploads/2020/11/42_43_18-MarcinTarkowski-Piximo-LublinwMigawce-21.jpg'
        },
        {
            id: "2",
            city: "Manila",
            img: 'https://a.cdn-hotels.com/gdcs/production68/d905/058945db-234d-4ffe-b600-eb019cae6d6e.jpg'
        },
        {
            id: "3",
            city: "Lviv",
            img: 'https://images.theconversation.com/files/453079/original/file-20220318-22992-4zgt50.jpg'
        }
    ];

    const CityItem = ({id, city, img, index}) => {
        return <TouchableOpacity key={id} style={{
            backgroundColor: index % 2 === 0 ? '#fff' : 'green',
            width: '100%',
        }}>
            <Image source={{uri: img}} style={{width: 100, height: 100}}/>
            <Text>{city}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{
                    width: '100%',
                }}
                ListHeaderComponent={() => <Text>Lista miast</Text>}
                ListFooterComponent={() => <Text>Koniec listy</Text>}
                 data={CITIES} renderItem={({item, index}) => <CityItem index={index} {...item}/>}
                      keyExtractor={item => item.id}
            />

        </View>
    );
}


----------------------------
USESTATE z IMPUTEM

import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingTop: 50,
	},
});

export default function App() {
	const [text, setText] = useState('');

	return (
		<View style={styles.container}>
			<Text>Wpisz imię: {text}</Text>
			<TextInput
				value={text}
				onChangeText={(value) => setText(value)}
				style={{
					width: 100,
					borderColor: 'black',
					borderWidth: 1,
				}}
			/>
		</View>
	);
}

-------------------
! Stary sposób FETCH APA Users from JSONPlaceholder

import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingTop: 50,
	},
});

async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	return await response.json();
}

export default function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers().then((users) => setUsers(users));
	}, []);

	return (
		<View style={styles.container}>
			<Text>Users:</Text>
			<View>
				{users.map(user => (
					<Text>{user.name}</Text>
				))}
			</View>
		</View>
	);
}

-------------------
-------------------
! NOWY sposób FETCH APA Users from JSONPlaceholder

1 App

import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {QueryClientProvider, QueryClient} from "react-query";


import Todos from './Todos'


const styles = StyleSheet.create({
    container: {
        display: 'flex', alignItems: 'center', height: '100%',
        paddingTop: 50
    }
})

const client = new QueryClient({})


export default function App() {
    return <QueryClientProvider client={client}>
        <Todos/>
    </QueryClientProvider>

}
=========

2 Compnenet Todo

import {Text, View} from "react-native";
import {useQuery} from "react-query";


async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

function Todos () {
    const { data: users, isError, isLoading  } = useQuery('users', fetchUsers, {
        placeholderData: []
    });

    return (
        <View >
            <Text>
                Users:
            </Text>
            {isLoading && <Text>Loading...</Text>}
            {isError && <Text>Error!</Text>}
            <View>
                {users.map(user => <Text key={user.id}>
                    {user.name}
                </Text>)
                }
            </View>
        </View>
    );

}

export default Todos;
----------------------------------------------------

ANIMACJA z plikiem JSON z Lottie (nie dziła)



import { useEffect, useRef } from 'react';

import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';

import AnimationFile from './assets/104853-thinking.json';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		justifyContent: 'center',
		width: '100%',
	},
});

export default function App() {
	return (
		<View style={styles.container}>
			<LottieView source={AnimationFile} autoPlay loop />
		</View>
	);
}
------------------------------

