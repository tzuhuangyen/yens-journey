import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTechNotes } from '../../data/techNotes';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Tech() {
  useDocumentTitle('Tech Notes');
  const notes = getAllTechNotes();

  // 內聯樣式，完美契合你的 Design System
  const pageStyle = {
    backgroundColor: '#FAF8F5', // 暖白背景
    minHeight: '100vh',
    padding: '5rem 1.5rem',
    fontFamily: '"DM Sans", "Noto Sans TC", sans-serif',
  };

  const headerStyle = {
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    textAlign: 'center',
  };

  const brandLabelStyle = {
    color: '#A8B89A', // 鼠尾草綠
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    display: 'block',
  };

  const titleStyle = {
    fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    fontSize: '3rem',
    color: '#37473B', // 深森林綠
    marginBottom: '1rem',
    fontWeight: '600',
  };

  const subtitleStyle = {
    color: '#777777',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  };

  const gridStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    border: '1px solid #EBE2D6', // 淡淡的米黃邊框
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'block',
  };

  const metaContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#777777',
    fontSize: '0.85rem',
    marginBottom: '1rem',
  };

  const categoryBadgeStyle = {
    backgroundColor: '#FAF8F5',
    color: '#37473B',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontWeight: '500',
    fontSize: '0.8rem',
    border: '1px solid #EBE2D6',
  };

  const cardTitleStyle = {
    fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    fontSize: '1.8rem',
    color: '#37473B',
    marginBottom: '0.75rem',
    fontWeight: '600',
    lineHeight: '1.3',
  };

  const excerptStyle = {
    color: '#333333',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #FAF8F5',
    paddingTop: '1rem',
  };

  const tagsContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  };

  const tagStyle = {
    fontSize: '0.8rem',
    color: '#777777',
    backgroundColor: '#FAF8F5',
    padding: '0.1rem 0.5rem',
    borderRadius: '4px',
  };

  const readMoreStyle = {
    color: '#37473B',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <span style={brandLabelStyle}>Explore . Learn . Share</span>
        <h1 style={titleStyle}>Tech & AI Notes</h1>
        <p style={subtitleStyle}>
          My journey of self-learning Frontend development, leveraging AI tools,
          and building digital solutions.
        </p>
      </header>

      <div style={gridStyle}>
        {notes.map((note) => (
          <Link key={note.slug} to={`/tech/${note.slug}`} style={cardStyle}>
            <div style={metaContainerStyle}>
              <span style={categoryBadgeStyle}>{note.category}</span>
              <span>📅 {note.date}</span>
              <span>⏱️ {note.readingTime}</span>
            </div>

            <h2 style={cardTitleStyle}>{note.title}</h2>
            <p style={excerptStyle}>{note.excerpt}</p>

            <div style={footerContainerStyle}>
              <div style={tagsContainerStyle}>
                {note.tags.map((tag) => (
                  <span key={tag} style={tagStyle}>
                    #{tag}
                  </span>
                ))}
              </div>
              <span style={readMoreStyle}>Read Note →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tech;
