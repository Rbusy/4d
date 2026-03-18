import React from 'react';
import { Eye, Map, Clock, ShieldAlert } from 'lucide-react';

const Surveillance = () => {
  return (
    <div className="page-container glass-card">
      <h1 className="section-title">Filature & Surveillance</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2>L'Art de l'Invisibilité</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            La filature est le cœur de métier de l'agent de recherches privées. Elle permet de confronter les déclarations à la réalité du terrain.
          </p>
          <p>
            Que ce soit pour vérifier l'emploi du temps d'un conjoint volage, le comportement d'un associé sur des salons professionnels, ou les agissements d'un employé prétendument en arrêt maladie, nos dispositifs s'adaptent à toutes les situations.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)' }}>
              <ShieldAlert /> Tactique en Milieu Balnéaire
            </h3>
            <p>
              Opérer sur la côte et dans les lieux festifs requiert une expertise spécifique. Les tenues, les véhicules de sous-marin ("planques"), et les méthodes d'approche sont totalement différents d'une filature parisienne classique. Nous sommes les spécialistes de cet environnement.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ borderLeft: '1px solid var(--primary-color)' }}>
            <Eye color="var(--primary-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4>Moyens de Suivi Urbain</h4>
            <p>Motos banalisées, véhicules équipés de vitres sur-teintées, et dispositifs de prise de vue longue distance pour rester totalement hors de vue.</p>
          </div>

          <div className="glass-card" style={{ borderLeft: '1px solid var(--secondary-color)' }}>
            <Map color="var(--secondary-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4>Géolocalisation</h4>
            <p>Dans un cadre légal très strict et avec l'accord prouvé du propriétaire du véhicule (loi sur la vie privée), nous utilisons parfois des balises GPS pour assister les équipes de terrain.</p>
          </div>

          <div className="glass-card" style={{ borderLeft: '1px solid var(--accent-color)' }}>
            <Clock color="var(--accent-color)" size={32} style={{ marginBottom: '1rem' }} />
            <h4>Réactivité 24/7</h4>
            <p>La preuve ne dort jamais. Nos équipes peuvent être déclenchées en urgence, de jour comme de nuit, dimanches et jours fériés inclus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
