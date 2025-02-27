import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage, FaGlobe, FaArrowLeft } from 'react-icons/fa';

function UserProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Kimti Shrestha',
    email: 'Kimtishrestha@example.com',
    phone: '+977 98723072164',
    location: 'Kathmandu, Nepal',
    languages: ['English', 'Nepali'],
    bio: 'Passionate traveler exploring the beauty of Nepal. Love hiking, photography, and meeting new people.',
    interests: ['Hiking', 'Photography', 'Cultural Exploration'],
    travelStyle: 'Adventure & Cultural',
    profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the profile changes to a backend
    console.log('Saving profile:', profile);
  };

  return (
    <div className="user-profile">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            <FaArrowLeft /> Back to Dashboard
          </button>
          <h1>Profile Settings</h1>
        </div>
        <button 
          className={`edit-profile-button ${isEditing ? 'save-button' : ''}`}
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </nav>

      <main className="profile-content">
        <div className="profile-header">
          <div className="profile-image-container">
            <img src={profile.profileImage} alt="Profile" className="profile-image" />
            {isEditing && (
              <button className="change-photo-button">Change Photo</button>
            )}
          </div>
          <div className="profile-summary">
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="edit-input name-input"
              />
            ) : (
              <h2>{profile.fullName}</h2>
            )}
            <p className="travel-style">
              <FaGlobe /> {profile.travelStyle}
            </p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h3>Contact Information</h3>
            <div className="detail-item">
              <FaEnvelope />
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>
            <div className="detail-item">
              <FaPhone />
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                <span>{profile.phone}</span>
              )}
            </div>
            <div className="detail-item">
              <FaMapMarkerAlt />
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleInputChange}
                  className="edit-input"
                />
              ) : (
                <span>{profile.location}</span>
              )}
            </div>
          </div>

          <div className="detail-section">
            <h3>About Me</h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="edit-input bio-input"
              />
            ) : (
              <p className="bio">{profile.bio}</p>
            )}
          </div>

          <div className="detail-section">
            <h3>Languages</h3>
            <div className="language-list">
              <FaLanguage />
              {profile.languages.map((lang, index) => (
                <span key={index} className="language-tag">{lang}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3>Travel Interests</h3>
            <div className="interests-list">
              {profile.interests.map((interest, index) => (
                <span key={index} className="interest-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;