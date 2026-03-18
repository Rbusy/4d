import React from 'react';
import { Award, Target, Scale } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container glass-card" style={{ padding: '3rem' }}>
      <h1 className="section-title">L'Agence AD4</h1>
      
      <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '2rem' }}>
        <div className="text-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p className="lead" style={{ fontSize: '1.2rem', fontWeight: '400', color: 'var(--primary-light)', borderLeft: '1px solid var(--primary-color)', paddingLeft: '1.5rem', fontStyle: 'italic' }}>
            Implantée au cœur du sud de la France, notre agence allie l'exigence rigoureuse de l'investigation à une discrétion absolue.
          </p>
          <p>
            Dirigée par des anciens de forces de l'ordre, AD4 s'est imposée comme la référence
            incontournable pour la recherche de vérité et l'obtention de preuves décisives en justice. 
            Que l'atmosphère soit festive ou tendue, notre vigilance reste constante et invisible.
          </p>
          <p>
            Nous intervenons aussi bien dans les grandes métropoles urbaines que dans les stations balnéaires
            prisées (Cannes, Nice, St-Tropez...) où la vérité a parfois tendance à se dissimuler.
          </p>
        </div>
        
        <div className="values-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Award color="var(--primary-color)" size={32} />
            <div>
              <h4 style={{ margin: 0 }}>Agrément Ministériel</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Autorisation CNAPS stricte.</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Scale color="var(--secondary-color)" size={32} />
            <div>
              <h4 style={{ margin: 0 }}>Légalité de la Preuve</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Rapports recevables devant les tribunaux.</p>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Target color="var(--accent-color)" size={32} />
            <div>
              <h4 style={{ margin: 0 }}>Vigilance Festive</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Filatures complexes en milieu estival ou événementiel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
