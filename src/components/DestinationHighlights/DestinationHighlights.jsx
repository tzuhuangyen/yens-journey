import React from 'react';
import { Link } from 'react-router-dom';
import { getPublishedDestinations } from '../../data/destinations';

export default function DestinationHighlights({ limit = 5 }) {
  const items = getPublishedDestinations()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        margin: '2rem 0',
      }}
    >
      {items.map((d) => (
        <Link
          key={d.slug}
          to={`/destinations/${d.slug}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            transition: 'transform 0.15s',
          }}
        >
          <div
            style={{
              height: '120px',
              backgroundImage: `url('${d.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div style={{ padding: '0.9rem 1rem' }}>
            <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 700 }}>
              {d.city}
            </div>
            <h3 style={{ fontSize: '1rem', margin: '0.25rem 0', color: '#0f172a' }}>
              {d.name}自由行攻略
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
              {d.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
