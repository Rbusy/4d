import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Votre message sécurisé a été envoyé à AD4. Nous vous recontacterons sous 24h.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container glass-card">
      <h1 className="section-title">Prenons Contact Secrètement</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>Contact Sécurisé</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', opacity: 0.9 }}>
            N'hésitez pas à nous exposer votre situation. Nos échanges sont couverts par le secret professionnel dès la première prise de contact.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Votre Nom ou Pseudo" 
                required 
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '4px', border: '1px solid rgba(212, 154, 154, 0.2)', background: 'rgba(35, 23, 27, 0.5)', color: 'var(--text-color)', fontFamily: 'var(--font-main)' }}
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email Sécurisé" 
                required 
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '4px', border: '1px solid rgba(212, 154, 154, 0.2)', background: 'rgba(35, 23, 27, 0.5)', color: 'var(--text-color)', fontFamily: 'var(--font-main)' }}
              />
            </div>
            <div>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Moyen de communication préféré et bref résumé, sans détails nominatifs sensibles..." 
                rows="6"
                required
                style={{ width: '100%', padding: '1.5rem', borderRadius: '4px', border: '1px solid rgba(212, 154, 154, 0.2)', background: 'rgba(35, 23, 27, 0.5)', color: 'var(--text-color)', resize: 'vertical' }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: 'fit-content' }}>
              Transmettre <Send size={18} />
            </button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card" style={{ borderTop: '1px solid var(--secondary-color)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary-color)' }}>
              <Phone /> Ligne Directe
            </h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>01 23 45 67 89</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.7, marginTop: '0.5rem' }}>Permanence 24/7 pour les urgences absolues.</p>
          </div>

          <div className="glass-card" style={{ borderTop: '1px solid var(--accent-color)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)' }}>
              <Mail /> Courriel
            </h3>
            <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>contact@ad4.fr</p>
          </div>

          <div className="glass-card" style={{ borderTop: '1px solid var(--primary-color)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)' }}>
              <MapPin /> Rayon d'Action
            </h3>
            <p style={{ marginTop: '1rem', opacity: 0.9 }}>
              Basés stratégiquement sur le littoral, nous couvrons l'ensemble de la Paca (Nice, Cannes, Marseille, Toulon) ainsi que la Corse et Monaco selon la complexité des affaires (compétence nationale).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
