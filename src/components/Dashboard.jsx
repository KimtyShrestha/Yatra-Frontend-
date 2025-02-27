import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaSearch, FaMapMarkedAlt, FaUsers, FaCalendarAlt, FaBell, FaTimes } from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);

  // Sample destinations for the dropdown
  const destinations = [
    "Pokhara, Nepal",
    "Kathmandu Valley, Nepal",
    "Chitwan National Park, Nepal",
    "Annapurna Circuit, Nepal",
    "Everest Base Camp, Nepal",
    "Lumbini, Nepal",
    "Nagarkot, Nepal",
    "Langtang Valley, Nepal",
    "Rara Lake, Nepal",
    "Mustang, Nepal",
    "Bandipur, Nepal",
    "Ilam, Nepal"
  ];

  // Travel tips content
  const travelTips = {
    customs: {
      title: "Local Customs in Nepal",
      content: [
        {
          heading: "Greetings",
          text: "Namaste (joining palms together) is the traditional greeting. It's respectful to greet elders first."
        },
        {
          heading: "Religious Sites",
          text: "Remove shoes before entering temples and homes. Walk clockwise around stupas and religious monuments."
        },
        {
          heading: "Dining Etiquette",
          text: "Eating with your right hand is customary. Wash hands before and after meals. It's polite to accept food or drink when offered."
        },
        {
          heading: "Dress Code",
          text: "Dress modestly, especially at religious sites. Shoulders and knees should be covered."
        },
        {
          heading: "Public Behavior",
          text: "Public displays of affection are frowned upon. Pointing with your finger is considered rude; use your whole hand instead."
        }
      ]
    },
    weather: {
      title: "Nepal Weather Guide",
      content: [
        {
          heading: "Spring (March-May)",
          text: "Warm temperatures, clear skies, and blooming rhododendrons make this an excellent time for trekking and outdoor activities."
        },
        {
          heading: "Summer/Monsoon (June-August)",
          text: "Hot and humid with heavy rainfall. Not ideal for trekking, but good for cultural tours in rain-shadow areas like Upper Mustang."
        },
        {
          heading: "Autumn (September-November)",
          text: "The most popular season with clear skies, moderate temperatures, and excellent visibility. Perfect for trekking and mountain views."
        },
        {
          heading: "Winter (December-February)",
          text: "Cold in the mountains with occasional snowfall. Lower elevations remain pleasant during the day but cold at night."
        },
        {
          heading: "Regional Variations",
          text: "Terai (southern plains): Hot and humid year-round. Kathmandu Valley: Moderate climate. Himalayan Region: Cold with significant seasonal variations."
        }
      ]
    },
    safety: {
      title: "Safety Guidelines for Travelers",
      content: [
        {
          heading: "Trekking Safety",
          text: "Never trek alone. Register with TIMS (Trekkers' Information Management System). Carry a first aid kit, map, and emergency contact information."
        },
        {
          heading: "Altitude Sickness",
          text: "Ascend slowly, stay hydrated, and acclimatize properly. Know the symptoms: headache, nausea, dizziness, and fatigue. Descend immediately if symptoms persist."
        },
        {
          heading: "Food and Water Safety",
          text: "Drink only bottled or purified water. Eat freshly cooked food. Avoid raw vegetables and unpeeled fruits in remote areas."
        },
        {
          heading: "Transportation",
          text: "Use reputable transportation services. Be cautious on mountain roads, especially during monsoon season."
        },
        {
          heading: "Emergency Contacts",
          text: "Police: 100, Tourist Police: 01-4247041, Ambulance: 102, Nepal Tourism Board: 01-4256909"
        }
      ]
    }
  };

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter(destination => 
    destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setShowDropdown(false);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleDestinationSelect = (destination) => {
    setSearchQuery(destination);
    setShowDropdown(false);
  };

  const handlePlanTrip = () => {
    navigate('/upcoming-trips');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleFindGroups = () => {
    navigate('/travel-groups');
  };

  const openPopup = (type) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="logo">
            <h1>Yatra <span>Sangini</span></h1>
          </div>
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-bar">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Where do you like to go?"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setShowDropdown(true)}
              />
              <button type="submit">
                <FaSearch /> Search
              </button>
            </form>
            {showDropdown && filteredDestinations.length > 0 && (
              <div className="search-dropdown" ref={dropdownRef}>
                {filteredDestinations.map((destination, index) => (
                  <div 
                    key={index} 
                    className="dropdown-item"
                    onClick={() => handleDestinationSelect(destination)}
                  >
                    <FaMapMarkedAlt className="dropdown-icon" />
                    {destination}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="nav-right">
          <div className="user-menu">
            <button className="avatar-button" onClick={handleProfileClick}>
              <FaUser className="avatar-icon" />
            </button>
            <button onClick={handleLogout} className="logout-button">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Find Travel Buddy</h1>
          <p>Discover a new and authentic way of traveling. Find travel buddies who fit your travel style and discover the world together.</p>
        </section>

        {/* Features Grid */}
        <section className="features-grid">
          <div className="feature-card">
            <FaMapMarkedAlt className="feature-icon" />
            <h3>Popular Destinations</h3>
            <p>Explore trending destinations in Nepal</p>
            <ul className="destination-list">
              <li>Pokhara</li>
              <li>Kathmandu Valley</li>
              <li>Chitwan National Park</li>
            </ul>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Travel Groups</h3>
            <p>Join travel groups and make new friends</p>
            <button className="action-button" onClick={handleFindGroups}>Find Groups</button>
          </div>

          <div className="feature-card">
            <FaCalendarAlt className="feature-icon" />
            <h3>Upcoming Trips</h3>
            <p>Plan and organize your next adventure</p>
            <button className="action-button" onClick={handlePlanTrip}>Plan Trip</button>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="travel-tips">
          <h2>Travel Tips & Safety</h2>
          <div className="tips-grid">
            <div className="tip-card" onClick={() => openPopup('customs')}>
              <h4>Local Customs</h4>
              <p>Learn about Nepalese traditions and etiquette</p>
            </div>
            <div className="tip-card" onClick={() => openPopup('weather')}>
              <h4>Weather Guide</h4>
              <p>Best seasons to visit different regions</p>
            </div>
            <div className="tip-card" onClick={() => openPopup('safety')}>
              <h4>Safety Guidelines</h4>
              <p>Essential safety tips for travelers</p>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Modals */}
      {activePopup && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-content travel-tip-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{travelTips[activePopup].title}</h2>
              <button className="close-button" onClick={closePopup}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              {travelTips[activePopup].content.map((item, index) => (
                <div key={index} className="tip-item">
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;