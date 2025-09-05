import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  auth,
  addFavoriteToFirestore,
  removeFavoriteFromFirestore,
  getUserFavorites,
} from '../services/firebase';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load favorites on auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const favs = await getUserFavorites(currentUser.uid);
          setFavorites(favs || []);
        } catch (err) {
          console.error('Error loading Favorites:', err);
        }
      } else {
        setFavorites([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Cart logic
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      return exists ? prev : [...prev, { ...item, quantity: 1 }];
    });
  };

  const isInCart = (itemId) => cartItems.some((item) => item.id === itemId);
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  // Favorite logic
  const addToFavorites = async (item) => {
    if (!user) {
      alert('Please login to add favorites');
      return;
    }

    const exists = Favorites.some((fav) => fav.id === item.id);
    try {
      if (exists) {
        const success = await removeFavoriteFromFirestore(user.uid, item.id);
        if (success) {
          setFavorites((prev) => prev.filter((p) => p.id !== item.id));
          console.log('💔 Removed from Favorites:', item.id);
        }
      } else {
        const success = await addFavoriteToFirestore(user.uid, item);
        if (success) {
          setFavorites((prev) => [...prev, item]);
          console.log('❤️ Added to Favorites:', item);
        }
      }
    } catch (err) {
      console.error('❌ Error updating Favorites:', err);
    }
  };

  const removeFromFavorites = async (itemId) => {
    if (!user) return;
    try {
      const success = await removeFavoriteFromFirestore(user.uid, itemId);
      if (success) {
        setFavorites((prev) => prev.filter((p) => p.id !== itemId));
      }
    } catch (err) {
      console.error('❌ Error removing from Favorites:', err);
    }
  };

  const isFavorite = (itemId) => Favorites.some((item) => item.id === itemId);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        Favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        isInCart,
        user,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
