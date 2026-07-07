import './SectionTitle.css';

function SectionTitle({ title, subtitle, align = 'center' }) {
  return (
    <section className={`section-title ${align}`}>
      <p className='section-subtitle'>{subtitle}</p>

      <h2 className='section-heading'>{title}</h2>
    </section>
  );
}

export default SectionTitle;
