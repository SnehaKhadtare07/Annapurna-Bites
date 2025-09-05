// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Add Favorite (safe version)
export const addFavoriteToFirestore = async (userId, item) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    let currentFavorites = [];

    if (userDoc.exists()) {
      currentFavorites = userDoc.data().favorites || [];
    }

    const exists = currentFavorites.some(fav => fav.id === item.id);
    if (!exists) {
      currentFavorites.push(item);
    }

    await setDoc(userRef, { favorites: currentFavorites }, { merge: true });
    return true;
  } catch (error) {
    console.error("🔥 Error adding favorite:", error);
    return false;
  }
};

// ✅ Remove Favorite
export const removeFavoriteFromFirestore = async (userId, itemId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const favorites = userDoc.data().favorites || [];
      const updatedFavorites = favorites.filter(item => item.id !== itemId);
      
      await setDoc(userRef, { favorites: updatedFavorites }, { merge: true });
    }

    return true;
  } catch (error) {
    console.error("🔥 Error removing favorite:", error);
    return false;
  }
};

// ✅ Get Favorites
export const getUserFavorites = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      return userDoc.data().favorites || [];
    }
    return [];
  } catch (error) {
    console.error("🔥 Error getting favorites:", error);
    return [];
  }
};
