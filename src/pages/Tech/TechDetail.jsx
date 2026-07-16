import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTechNoteBySlug } from '../../data/techNotes';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function TechDetail() {
  const { slug } = useParams();
  const note = getTechNoteBySlug(slug);

  // 使用動態標題 Hook
  useDocumentTitle(note ? note.title : 'Note Not Found');

  if (!note) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '5rem',
          backgroundColor: '#FAF8F5',
          minHeight: '100vh',
        }}
      >
        <h2>Note not found</h2>
        <Link
          to='/tech'
          style={{ color: '#37473B', textDecoration: 'underline' }}
        >
          Back to Tech
        </Link>
      </div>
    );
  }

  // 內聯樣式
  const pageStyle = {
    backgroundColor: '#FAF8F5',
    minHeight: '100vh',
    padding: '5rem 1.5rem',
    fontFamily: '"DM Sans", "Noto Sans TC", sans-serif',
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '3rem 2.5rem',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    border: '1px solid #EBE2D6',
  };

  const backLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#777777',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '2rem',
    transition: 'color 0.2s',
  };

  const categoryStyle = {
    color: '#A8B89A',
    fontWeight: '600',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
    display: 'block',
  };

  const titleStyle = {
    fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    fontSize: '2.5rem',
    color: '#37473B',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    fontWeight: '600',
  };

  const metaStyle = {
    display: 'flex',
    gap: '1.5rem',
    color: '#777777',
    fontSize: '0.9rem',
    borderBottom: '1px solid #EBE2D6',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
  };

  const paragraphStyle = {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#333333',
    marginBottom: '1.5rem',
  };

  const headingStyle = {
    fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
    fontSize: '1.8rem',
    color: '#37473B',
    marginTop: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '600',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <Link to='/tech' style={backLinkStyle}>
          ← Back to Tech
        </Link>

        <span style={categoryStyle}>{note.category}</span>
        <h1 style={titleStyle}>{note.title}</h1>

        <div style={metaStyle}>
          <span>📅 {note.date}</span>
          <span>⏱️ {note.readingTime}</span>
        </div>

        <div className='note-content'>
          {note.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} style={paragraphStyle}>
                  {block.text}
                </p>
              );
            } else if (block.type === 'heading') {
              return (
                <h2 key={index} style={headingStyle}>
                  {block.text}
                </h2>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default TechDetail;
