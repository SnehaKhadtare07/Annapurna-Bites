import { useState } from "react";
import { db, auth } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../styles/Setting.css";

const Setting = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !feedback) return alert("Please fill in both fields.");

    try {
      const feedbackData = {
        userId: auth.currentUser?.uid || "guest",
        name,
        message: feedback,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "feedback"), feedbackData);

      setSubmitted(true);
      setName("");
      setFeedback("");
      alert("✅ Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("❌ Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="settings-container">
      {/* About Section */}
      <section className="about-section">
        <div className="section-header">
          <h2 className="section-title">About AnnapurnaBites</h2>
        </div>
        <div className="section-content">
          <p>
            Welcome to <strong>AnnapurnaBites</strong> – your destination for 
            delicious catering and food ordering. Our mission is to bring the 
            taste of tradition and innovation together on your plate.  
            We value your thoughts, feedback, and suggestions to help us improve 
            and serve you better.
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <div className="section-header">
          <h3 className="section-title">We'd love your Feedback </h3>
        </div>
        <div className="section-content">
          {submitted ? (
            <p className="thankyou-msg">Thank you for your valuable feedback! 💖</p>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit}>
              <label>
                Your Name:
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Your Suggestion / Feedback:
                <textarea
                  placeholder="Write your thoughts here..."
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Setting;
