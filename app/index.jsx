import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';


// eslint-disable-next-line no-undef

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">Artsy</Text>
        <StatusBar style="auto" />
        <Link href="/home" style={{ color: 'cyan'}}>Go to home</Link>
        </View>
    );
}


