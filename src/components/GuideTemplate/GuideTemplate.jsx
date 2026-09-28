// src/components/GuideTemplate/GuideTemplate.jsx
import React from 'react';
import ViewCount from '../ViewCount';
import { guideStyles as s } from './guideStyles';

export default function GuideTemplate({
  badge,
  title,
  description,
  heroImage,
  children,
}) {
  return (
    <div style={s.container}>
      {/* Hero Section */}
      <div style={s.hero}>
        <div
          style={{
            ...s.heroBg,
            backgroundImage: `url('${heroImage}')`,
          }}
        ></div>
        <div style={s.heroContent}>
          <span style={s.badge}>{badge}</span>
          <div>
            <ViewCount />
          </div>
          <h1 style={s.h1}>{title}</h1>
          <p style={s.heroDesc}>{description}</p>
        </div>
      </div>

      {/* Article Container */}
      <div style={s.main}>
        <div style={s.articleCard}>{children}</div>
      </div>
    </div>
  );
}
