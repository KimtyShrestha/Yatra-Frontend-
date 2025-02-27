import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaFilter, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';

function TravelGroups() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    destination: '',
    groupSize: 'any',
    duration: 'any',
    type: 'any'
  });
  const [showFilters, setShowFilters] = useState(false);

  const [groups] = useState([
    {
      id: 1,
      name: "Everest Base Camp Trek",
      destination: "Everest Region",
      startDate: "2024-05-15",
      duration: "14 days",
      currentMembers: 4,
      maxMembers: 8,
      type: "Trekking",
      description: "Join us for an epic journey to Everest Base Camp. Experience breathtaking mountain views and Sherpa culture.",
      image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800",
      organizer: {
        name: "Sarah Wilson",
        rating: 4.8,
        trips: 12
      }
    },
    {
      id: 2,
      name: "Annapurna Circuit Adventure",
      destination: "Annapurna Region",
      startDate: "2024-06-01",
      duration: "12 days",
      currentMembers: 6,
      maxMembers: 10,
      type: "Trekking",
      description: "Complete the famous Annapurna Circuit, crossing Thorong La Pass and experiencing diverse landscapes.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      organizer: {
        name: "Mike Chen",
        rating: 4.9,
        trips: 15
      }
    },
    {
      id: 3,
      name: "Chitwan Safari Experience",
      destination: "Chitwan National Park",
      startDate: "2024-04-20",
      duration: "4 days",
      currentMembers: 3,
      maxMembers: 6,
      type: "Wildlife",
      description: "Explore Chitwan National Park's wildlife, including rhinos and tigers. Cultural activities included.",
      image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800",
      organizer: {
        name: "Raj Sharma",
        rating: 4.7,
        trips: 8
      }
    },
    {
      id: 4,
      name: "Kathmandu Valley Cultural Tour",
      destination: "Kathmandu Valley",
      startDate: "2024-05-01",
      duration: "5 days",
      currentMembers: 5,
      maxMembers: 8,
      type: "Cultural",
      description: "Visit UNESCO World Heritage sites, ancient temples, and experience local culture in Kathmandu Valley.",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800",
      organizer: {
        name: "Lisa Thompson",
        rating: 4.6,
        trips: 10
      }
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJoinGroup = (groupId) => {
    console.log('Joining group:', groupId);
    // Implement join group logic here
  };

  return (
    <div className="travel-groups">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            <FaArrowLeft /> Back to Dashboard
          </button>
          <h1>Travel Groups</h1>
        </div>
        <button 
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter /> Filters
        </button>
      </nav>

      <main className="groups-content">
        <div className="search-filter-section">
          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search travel groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch /> Search
            </button>
          </form>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-group">
                <label htmlFor="destination">Destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={filters.destination}
                  onChange={handleFilterChange}
                >
                  <option value="">All Destinations</option>
                  <option value="everest">Everest Region</option>
                  <option value="annapurna">Annapurna Region</option>
                  <option value="chitwan">Chitwan</option>
                  <option value="kathmandu">Kathmandu Valley</option>
                  
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="groupSize">Group Size</label>
                <select
                  id="groupSize"
                  name="groupSize"
                  value={filters.groupSize}
                  onChange={handleFilterChange}
                >
                  <option value="any">Any Size</option>
                  <option value="small">Small (2-4)</option>
                  <option value="medium">Medium (5-8)</option>
                  <option value="large">Large (9+)</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  value={filters.duration}
                  onChange={handleFilterChange}
                >
                  <option value="any">Any Duration</option>
                  <option value="short">Short (1-3 days)</option>
                  <option value="medium">Medium (4-7 days)</option>
                  <option value="long">Long (8+ days)</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="type">Trip Type</label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                >
             
                  <option value="any">All Types</option>
                  <option value="trekking">Trekking</option>
                  <option value="cultural">Cultural</option>
                  <option value="wildlife">Wildlife</option>
                  <option value="adventure">Adventure</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="groups-grid">
          {groups.map(group => (
            <div key={group.id} className="group-card">
              <div className="group-image" style={{ backgroundImage: `url(${group.image})` }}>
                <div className="group-type">{group.type}</div>
              </div>
              <div className="group-content">
                <h3>{group.name}</h3>
                <div className="group-details">
                  <p className="location">
                    <FaMapMarkerAlt /> {group.destination}
                  </p>
                  <p className="date">
                    <FaCalendarAlt /> {new Date(group.startDate).toLocaleDateString()} ({group.duration})
                  </p>
                  <p className="members">
                    <FaUsers /> {group.currentMembers}/{group.maxMembers} members
                  </p>
                </div>
                <p className="description">{group.description}</p>
                <div className="organizer-info">
                  <div className="organizer-details">
                    <p className="organizer-name">Organized by {group.organizer.name}</p>
                    <p className="organizer-stats">
                      ⭐ {group.organizer.rating} · {group.organizer.trips} trips
                    </p>
                  </div>
                </div>
                <button 
                  className="join-group-button"
                  onClick={() => handleJoinGroup(group.id)}
                  disabled={group.currentMembers >= group.maxMembers}
                >
                  {group.currentMembers >= group.maxMembers ? 'Group Full' : 'Join Group'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TravelGroups;