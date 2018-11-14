import React from 'react';
import {
    AsyncStorage
} from 'react-native';

const userId = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';
const saveUserId = async userId => {
    try {
        await AsyncStorage.setItem('userId', userId);
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
};

const getUserId = async () => {
    let userId = '';
    try {
        userId = await AsyncStorage.getItem('userId') || 'none';
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
    return userId;
}

const deleteUserId = async () => {
    try {
        await AsyncStorage.removeItem('userId');
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
}

function storeEntry() {

}

function storeJournal() {

}

function storeUser() {

}

function readEntry() {

}

function readJournal() {

}

function readUser() {

}