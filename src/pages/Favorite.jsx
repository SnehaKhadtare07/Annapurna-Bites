import React from 'react';
import FavCard from '../components/favCard';
import '../styles/Favorite.css';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Favorite() {
  const {
    Favorites,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    isInCart,
  } = useCart();

  const toggleFavorite = (item) => {
    const isAlready = Favorites.some((fav) => fav.id === item.id);
    if (isAlready) {
      removeFromFavorites(item.id);
      toast.warn('💔 Removed from Favorites!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else {
      addToFavorites(item);
      toast.success('❤️ Added to Favorites!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  const handleAddToCart = (item) => {
    if (isInCart(item.id)) {
      toast.info('🛒 This item is already in your cart.', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else {
      addToCart(item);
      toast.success('✅ Added to Cart!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="Favorite-page">
      <ToastContainer transition={Slide} />
      {Array.isArray(Favorites) && Favorites.length === 0 ? (
        <div className="empty-Favorite-container">
          <img
            src="/src/assets/Noheart.png"
            alt="Empty Favorites"
            className="empty-fav-image"
          />
          <p className="empty-fav-text">No items in Favorites yet!</p>
        </div>
      ) : (
        <div className="Favorites-grid">
          {Favorites.map((item) => (
            <FavCard
              key={item.id}
              item={item}
              onToggleFavorite={() => toggleFavorite(item)}
              onAddToCart={() => handleAddToCart(item)}
              isInFavorites={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
