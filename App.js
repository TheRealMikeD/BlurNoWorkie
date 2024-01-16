import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const FirstScreen = ({navigation}) => {
  function goToSecond() {
    navigation.navigate('second');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        This is the first screen.
      </Text>
      <Button style={styles.btn} onPress={goToSecond} title="Go to Second Screen"/>
    </SafeAreaView>
  );
};

const SecondScreen = ({navigation}) => {
	useEffect(() => {
		// Add a focus listener.
		const unsubscribe = navigation.addListener('focus', () => {
			console.log(`[SecondScreen->useEffect->focus] focus listener fired.`);
		});

		return unsubscribe;
	}, [navigation]);

	useEffect(() => {
		// Add a blur listener.
		const unsubscribe = navigation.addListener('blur', () => {
			console.log(`[SecondScreen->useEffect->blur] blur listener fired.`);
		});

		return unsubscribe;
	}, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        This is the second screen.
      </Text>
    </SafeAreaView>
  );
};

function MyNav() {
	// Show the navigation for an unauthenticated user.
	return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="first" component={FirstScreen}/>
        <Stack.Screen name="second" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
	);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyNav/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    maxWidth: 200,
    color: '#FFF'
  }
});
