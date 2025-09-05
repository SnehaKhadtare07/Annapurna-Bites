# 🍴 Catering Reservation & Ordering System

Yo! 👋 Welcome to my crazy food playground built with **React + Vite + JSX + CSS**.  
This bad boy lets users browse, reserve, and order catering stuff without losing their minds 😎.

---

## 🔥 Features

- **Auth stuff:** Login/Signup like a pro (email & password)  
- **Cookie drama:** Accept cookies or get blocked from commenting/ordering 💀  
- **Foodie heaven:** See food pics, names, ratings, Add to Cart & Fav it  
- **Cart & Favs:** Keep your faves handy & order in one click  
- **Responsive AF:** Mobile, tablet, desktop – we got you  
- **Profile & Settings:** Control your account, see your orders  
- **Pagination:** Scroll less, click more – multiple pages made easy  

---

## 🛠 Tech Stack

- **Frontend:** React + JSX + CSS  
- **Bundler:** Vite (HMR FTW ⚡)  
- **Icons/UI:** Lucide-react + custom CSS vibes  
- **Backend:** Firebase Auth + Firestore DB  
- **Routing:** React Router DOM  
- **State:** Good ol’ `useState` & `useEffect`  

---

## 🗂 Folder Vibes

Catering-Reservation-System/
│
├─ public/ # Assets: images, videos, slideshow, all the goodies
│
├─ src/
│ ├─ components/ # Reusable stuff: Navbar, ProductCard, CartItem, CookiePopup
│ ├─ pages/ # Home, Store, Cart, Profile, Login, Register, Settings
│ ├─ services/ # Firebase configs
│ ├─ styles/ # All CSS files
│ ├─ routes/ # ProtectedRoute, etc.
│ ├─ App.jsx # Root component
│ └─ main.jsx # Entry point
│
└─ package.json

yaml
Copy code

---

## ⚡ Getting Started (Dev Mode)

1. **Clone it:**  
```bash
git clone https://github.com/SnehaKhadtare07/catering-reservation-system.git
cd catering-reservation-system
Install deps:

bash
Copy code
npm install
Run it:

bash
Copy code
npm run dev
Go to http://localhost:5173

HMR + Fast Refresh = magic ✨

Build for prod:

bash
Copy code
npm run build
dist/ folder is where the magic lives.

⚠️ Notes / Dev Tips
Firebase creds go in src/services/firebase.js

Cookie popup is mandatory – reject and boom, no orders/comments

Desktop slideshow, mobile video, scrollable full-screen vibes

Pagination is slick, current page highlighted, hover effects, all that jazz

💡 Pro Tips
Wanna go hardcore? Use TypeScript + typescript-eslint for brain-safe code

Keep assets light for fast loading

Deploy on Vercel or Netlify, it’s a breeze with Vite

🚀 Credits
Made with ❤️LOVE and way too much caffeine by Sneha Khadtare ! 

THANK YOU !