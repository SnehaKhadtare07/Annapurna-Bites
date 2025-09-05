import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import "../styles/Profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [addresses, setAddresses] = useState([""]);
  const [successMsg, setSuccessMsg] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        setEmail(user.email || "");
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setName(data.name || "");
          setPhoto(data.photo || "");
          setAddresses(data.addresses || [""]);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    }

    setLoading(false); // done loading
  });

  return () => unsubscribe();
}, []);


  const handlePhotoChange = async (e) => {
  const file = e.target.files[0];
  const user = auth.currentUser;

  if (file && user) {
    try {
      setUploadingPhoto(true);
      console.log("Uploading photo...");
      const storageRef = ref(storage, `profile_photos/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      console.log("Uploaded photo URL:", url);
      setPhoto(url);

      // Save photo URL to Firestore immediately
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { photo: url }, { merge: true });
      setUploadingPhoto(false);
      console.log("Photo upload complete.");
    } catch (error) {
      setUploadingPhoto(false);
      console.error("Failed to upload photo:", error);
      alert("Failed to upload profile photo.");
    }
  }
};


  const handleAddressChange = (index, value) => {
    const updated = [...addresses];
    updated[index] = value;
    setAddresses(updated);
  };

  const addAddressField = () => {
    setAddresses([...addresses, ""]);
  };

  const deleteAddressField = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
  };

 const handleSave = async () => {
  const user = auth.currentUser;

  if (user) {
    try {
      await setDoc(doc(db, "users", user.uid), {
        name,
        photo,
        addresses,
      }, { merge: true });

      alert("🎉 Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error.message || error);
      alert(`❌ Failed to save profile! ${error.message || ''}`);
    }
  } else {
    alert("You're not logged in!");
  }
};


  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedOut(true);
    });
  };

  if (loading) return <div className="loading-profile">Loading profile...</div>;
  if (error) return <div className="error-profile">Error loading profile: {error.message}</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <span className="logout-link" onClick={() => setShowLogoutModal(true)}>Logout</span>
        <h2>My Profile</h2>

        <div className="photo-section">
          <label htmlFor="profile-upload" className="photo-wrapper">
          {photo ? (
            <>
              <img
                src={photo}
                alt="Profile"
                className="preview-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const fallback = document.getElementById('fallback-avatar');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                id="fallback-avatar"
                className="fallback-avatar"
                style={{ display: 'none' }}
              >
                {name ? name.charAt(0).toUpperCase() : "U"}
              </div>
              <style>{`.upload-placeholder { display: none; }`}</style>
            </>
          ) : (
            <div className="upload-placeholder">Click to Upload</div>
          )}
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
        </div>

        <div className="info-section">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            value={email}
            placeholder="Email"
            disabled
          />

          {addresses.map((addr, idx) => (
            <div className="address-item" key={idx}>
              <input
                type="text"
                placeholder={`Address ${idx + 1}`}
                value={addr}
                onChange={(e) => handleAddressChange(idx, e.target.value)}
              />
              <button className="delete-address-btn" onClick={() => deleteAddressField(idx)}>✖</button>
            </div>
          ))}
          <button className="add-address-btn" onClick={addAddressField}>+ Add Address</button>
        </div>

        <button className="save-btn" onClick={handleSave}>Save</button>
        {successMsg && <p className="success-msg">{successMsg}</p>}
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {isLoggedOut ? (
              <>
                <h3>You have been logged out 😔</h3>
                <p>You can log in again using your email ID and password :) </p>
              </>
            ) : (
              <>
                <h3>Your Details</h3>
                <p><strong>Email:</strong> {email}</p>
                {name && <p><strong>Name:</strong> {name}</p>}
                {addresses[0] && (
                  <p><strong>Address:</strong> {addresses.filter(Boolean).join(", ")}</p>
                )}
                <button className="logout-btn" onClick={handleLogout}>Log Out</button>
              </>
            )}
            <button className="close-modal" onClick={() => {
              setShowLogoutModal(false);
              setIsLoggedOut(false);
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
