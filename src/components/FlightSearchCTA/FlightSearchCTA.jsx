import { useState } from 'react';
import { buildAviasalesUrl } from '../../utils/buildAviasalesUrl';

import './FlightSearchCTA.css';

function FlightSearchCTA() {
  const [tripType, setTripType] = useState('round-trip');

  const [formData, setFormData] = useState({
    origin: 'TPE',
    destination: 'NRT',
    departDate: '',
    returnDate: '',
  });

  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'origin' || name === 'destination'
          ? value.toUpperCase()
          : value,
    }));
  }

  function handleTripTypeChange(type) {
    setTripType(type);

    if (type === 'one-way') {
      setFormData((prev) => ({
        ...prev,
        returnDate: '',
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const origin = formData.origin.trim().toUpperCase();
    const destination = formData.destination.trim().toUpperCase();

    if (!origin || !destination) {
      setError('Please enter both origin and destination airport codes.');
      return;
    }

    if (origin.length !== 3 || destination.length !== 3) {
      setError('Please use 3-letter airport codes, for example TPE or NRT.');
      return;
    }

    if (!formData.departDate) {
      setError('Please select a departure date.');
      return;
    }

    if (tripType === 'round-trip' && !formData.returnDate) {
      setError('Please select a return date or choose one way.');
      return;
    }

    setError('');

    const url = buildAviasalesUrl({
      origin,
      destination,
      departDate: formData.departDate,
      returnDate: tripType === 'round-trip' ? formData.returnDate : '',
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className='flight-cta-section' aria-labelledby='flight-cta-title'>
      <div className='flight-cta-container'>
        <div className='flight-cta-content'>
          <p className='flight-cta-eyebrow'>Flight Search</p>

          <h2 id='flight-cta-title'>Plan your next journey</h2>

          <p>
            Search flights from Taiwan, Europe, Japan, or anywhere in between.
            This section may include affiliate links, which means I may earn a
            small commission at no extra cost to you.
          </p>
        </div>

        <form className='flight-search-form' onSubmit={handleSubmit}>
          <div className='trip-type-toggle' aria-label='Trip type'>
            <button
              type='button'
              className={tripType === 'round-trip' ? 'active' : ''}
              onClick={() => handleTripTypeChange('round-trip')}
            >
              Round trip
            </button>

            <button
              type='button'
              className={tripType === 'one-way' ? 'active' : ''}
              onClick={() => handleTripTypeChange('one-way')}
            >
              One way
            </button>
          </div>

          <div className='flight-form-grid'>
            <label>
              <span>From</span>
              <input
                type='text'
                name='origin'
                value={formData.origin}
                onChange={handleChange}
                placeholder='TPE'
                maxLength='3'
                autoComplete='off'
              />
            </label>

            <label>
              <span>To</span>
              <input
                type='text'
                name='destination'
                value={formData.destination}
                onChange={handleChange}
                placeholder='NRT'
                maxLength='3'
                autoComplete='off'
              />
            </label>

            <label>
              <span>Departure</span>
              <input
                type='date'
                name='departDate'
                value={formData.departDate}
                onChange={handleChange}
              />
            </label>

            <label className={tripType === 'one-way' ? 'disabled-field' : ''}>
              <span>Return</span>
              <input
                type='date'
                name='returnDate'
                value={formData.returnDate}
                onChange={handleChange}
                disabled={tripType === 'one-way'}
              />
            </label>
          </div>

          {error && <p className='flight-form-error'>{error}</p>}

          <button type='submit' className='flight-search-button'>
            Search flights
          </button>

          <p className='flight-form-note'>
            You will be redirected to Aviasales to compare available flight
            options.
          </p>
        </form>
      </div>
    </section>
  );
}

export default FlightSearchCTA;
