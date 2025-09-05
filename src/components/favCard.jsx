import '../styles/favCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

export default function FavCard({ item, onToggleFavorite, onAddToCart, isInFavorites }) {
  return (
    <div className="fav-card">
      <div className="fav-img-container">
        <img src={item.image} alt={item.name} className="fav-img" />
        <FontAwesomeIcon
          icon={isInFavorites ? solidHeart : regularHeart}
          className={`heart-icon ${isInFavorites ? 'red' : 'white'}`}
          onClick={onToggleFavorite}
        />
      </div>
      <h3>{item.name}</h3>
      <p>Half ₹{item.price}</p>
      <div className="fav-card-actions">
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          View in Cart
        </button>
      </div>
    </div>
  );
}
