import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowLeft, FaPlus } from 'react-icons/fa';

function UpcomingTrips() {
  const navigate = useNavigate();
  const [showNewTripForm, setShowNewTripForm] = useState(false);
  const [newTrip, setNewTrip] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    maxParticipants: '',
    description: ''
  });

  const [trips] = useState([
    {
      id: 1,
      destination: 'Pokhara',
      startDate: '2024-04-15',
      endDate: '2024-04-20',
      maxParticipants: 4,
      currentParticipants: 2,
      description: 'Exploring Phewa Lake and paragliding adventure'
    },
    {
      id: 2,
      destination: 'Chitwan National Park',
      startDate: '2024-05-01',
      endDate: '2024-05-04',
      maxParticipants: 6,
      currentParticipants: 3,
      description: 'Wildlife safari and cultural experience'
    }
  ]);

  const handleNewTripSubmit = (e) => {
    e.preventDefault();
    console.log('New trip:', newTrip);
    setShowNewTripForm(false);
    setNewTrip({
      destination: '',
      startDate: '',
      endDate: '',
      maxParticipants: '',
      description: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="upcoming-trips">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            <FaArrowLeft /> Back to Dashboard
          </button>
          <h1>Upcoming Trips</h1>
        </div>
        <button 
          className="new-trip-button"
          onClick={() => setShowNewTripForm(true)}
        >
          <FaPlus /> Plan New Trip
        </button>
      </nav>

      <main className="trips-content">
        {showNewTripForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Plan New Trip</h2>
              <form onSubmit={handleNewTripSubmit} className="new-trip-form">
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={newTrip.destination}
                    onChange={handleInputChange}
                    placeholder="Enter destination"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={newTrip.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={newTrip.endDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="maxParticipants">Maximum Participants</label>
                  <input
                    type="number"
                    id="maxParticipants"
                    name="maxParticipants"
                    value={newTrip.maxParticipants}
                    onChange={handleInputChange}
                    min="2"
                    max="20"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Trip Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newTrip.description}
                    onChange={handleInputChange}
                    placeholder="Describe your trip plans..."
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" onClick={() => setShowNewTripForm(false)} className="cancel-button">
                    Cancel
                  </button>
                  <button type="submit" className="submit-button">
                    Create Trip
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="trips-grid">
          {trips.map(trip => (
            <div key={trip.id} className="trip-card">
              <div className="trip-header">
                <h3>{trip.destination}</h3>
                <span className="participants">
                  <FaUsers /> {trip.currentParticipants}/{trip.maxParticipants}
                </span>
              </div>
              <div className="trip-details">
                <p className="trip-dates">
                  <FaCalendarAlt />
                  <span>{new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}</span>
                </p>
                <p className="trip-location">
                  <FaMapMarkerAlt />
                  <span>{trip.destination}</span>
                </p>
                <p className="trip-description">{trip.description}</p>
              </div>
              <button className="join-trip-button">Join Trip</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default UpcomingTrips;