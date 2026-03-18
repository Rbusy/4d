import React from 'react';
import { Scan, Database, AlertTriangle } from 'lucide-react';

const ProofSearch = () => {
  return (
    <div className="page-container glass-card">
      <h1 className="section-title text-gradient">L'Enjeu Crucial de la Preuve</h1>
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Dans une procédure judiciaire, il ne suffit pas d'avoir raison. <strong>Il faut pouvoir le prouver.</strong> Face à une situation précaire, la preuve est le seul moyen de rétablir l'équilibre.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card" style={{ borderLeft: '1px solid var(--accent-color)', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)' }}>
              <Scan color="var(--accent-color)" /> Capture de l'Instant Décisif
            </h3>
            <p style={{ opacity: 0.9 }}>Nos enquêteurs savent se fondre dans le décor (plages, soirées, milieu urbain) pour figer les éléments probants sans jamais éveiller les soupçons.</p>
          </div>

          <div className="glass-card" style={{ borderLeft: '1px solid var(--primary-color)', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)' }}>
              <Database color="var(--primary-color)" /> Légalité & Recevabilité
            </h3>
            <p style={{ opacity: 0.9 }}>La preuve perd toute valeur si elle est obtenue illégalement. Nos rapports détaillés respectent strictement le Code civil et la jurisprudence de la Cour de Cassation, afin d'être imparables devant le magistrat.</p>
          </div>

          <div className="glass-card" style={{ borderLeft: '1px solid var(--secondary-color)', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary-color)' }}>
              <AlertTriangle color="var(--secondary-color)" /> Sortir de la Précarité Juridique
            </h3>
            <p style={{ opacity: 0.9 }}>Se retrouver victime d'un mensonge (ex-conjoint, associé, employé) crée une grande détresse. L'apport d'un constat factuel par un détective agréé vous redonne immédiatement le pouvoir d'agir.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofSearch;
