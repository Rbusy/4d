import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'var(--footer-bg)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: 'auto' }}>
      <div className="footer-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <div className="footer-section">
          <h3 className="text-gradient">AD4</h3>
          <p>L'expertise de la preuve au service de la vérité et de vos intérêts.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Opérationnel</h4>
          <p>📞 01 23 45 67 89</p>
          <p>📧 contact@ad4.fr</p>
          <p>📍 Réseau Global et Interventions locales.</p>

        </div>
        <div className="footer-section">
          <h4>Agréments</h4>
          <p>Agrément CNAPS N° AUT-XXX-XXXX-XX-XX-XXXXXXXXXXX</p>
          <p>Secret professionnel absolu garanti.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AD4 - Agence de Détectives. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
