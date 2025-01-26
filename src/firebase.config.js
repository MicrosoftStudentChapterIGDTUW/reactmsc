import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBLWWtX8Do3wZ6jYXUcQ-1q_vADu8b1nuA",
    authDomain: "msc-igdtuw-2024.firebaseapp.com",
    projectId: "msc-igdtuw-2024",
    storageBucket: "msc-igdtuw-2024.firebasestorage.app",
    messagingSenderId: "168763768935",
    appId: "1:168763768935:web:17e0aa7d5e13d8f8fcd4c2",
    measurementId: "G-0S37Y5WWNW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);