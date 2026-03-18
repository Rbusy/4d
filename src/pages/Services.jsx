import React, { useState } from 'react';
import { Search, Shield, EyeOff, Lock } from 'lucide-react';
import ProofSearch from './ProofSearch';
import Surveillance from './Surveillance';

const Services = () => {
  const [activeTab, setActiveTab] = useState('domaines');

  const servicesList = [
    {
      icon: <Lock size={40} color="var(--primary-color)" />,
      title: "Affaires Familiales & Conjugales",
      desc: "Adultère, abandons de domicile, révision de prestation compensatoire, enquêtes prénuptiales."
    },
    {
      icon: <Shield size={40} color="var(--secondary-color)" />,
      title: "Situations de Garde d'Enfants",
      desc: "Vérification des conditions d'accueil, moralité, emploi du temps réel lors des droits de garde."
    },
    {
      icon: <Search size={40} color="var(--accent-color)" />,
      title: "Litiges Entreprises",
      desc: "Concurrence déloyale, arrêts maladie abusifs, vol en interne, coulage de marchandises."
    },
    {
      icon: <EyeOff size={40} color="var(--primary-light)" />,
      title: "Recherche de Débiteurs & Adresses",
      desc: "Localisation de personnes disparues, débiteurs fuyants ou héritiers."
    }
  ];

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="tabs-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <button 
          className={`btn ${activeTab === 'domaines' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('domaines')}
        >
          Nos Domaines
        </button>
        <button 
          className={`btn ${activeTab === 'preuve' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('preuve')}
        >
          Recherche de Preuve
        </button>
        <button 
          className={`btn ${activeTab === 'surveillance' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('surveillance')}
        >
          Filature & Surveillance
        </button>
      </div>

      {activeTab === 'domaines' && (
        <div className="tab-pane" style={{ animation: 'fadeIn 0.5s ease' }}>
          <h1 className="section-title">Nos Domaines d'Intervention</h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Des solutions sur-mesure pour constituer un dossier solide et irréfutable, en toute discrétion.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {servicesList.map((service, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(212, 154, 154, 0.05)', borderRadius: '50%' }}>
                  {service.icon}
                </div>
                <h3 style={{ letterSpacing: '0.5px' }}>{service.title}</h3>
                <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '0.95rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'preuve' && (
        <div className="tab-pane" style={{ animation: 'fadeIn 0.5s ease' }}>
          <ProofSearch />
        </div>
      )}

      {activeTab === 'surveillance' && (
        <div className="tab-pane" style={{ animation: 'fadeIn 0.5s ease' }}>
          <Surveillance />
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Services;
