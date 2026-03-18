import React from 'react';
import { FolderOpen, FileSearch } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      title: "Affaire V.",
      type: "Concurrence Déloyale",
      color: "var(--primary-color)",
      context: "Une PME de l'industrie technologique soupçonnait un ancien salarié, récemment recruté par un concurrent direct, d'avoir emporté avec lui des fichiers clients confidentiels et des secrets de fabrication.",
      result: "Nos filatures et nos recherches informatiques poussées ont permis d'établir avec certitude l'utilisation frauduleuse des données. Preuves remises à un huissier pour constats, permettant à notre client d'engager une procédure en concurrence déloyale aboutissant à de lourds dommages et intérêts."
    },
    {
      title: "Dossier M.",
      type: "Garde d'Enfants",
      color: "var(--primary-light)",
      context: "Dans un contexte de divorce conflictuel, un père craignait pour la sécurité de son enfant de 5 ans lorsque celui-ci était sous la garde de son ex-épouse, suspectée de négligence et d'addiction.",
      result: "Une surveillance discrète sur plusieurs week-ends de garde a permis de relever de graves manquements aux obligations parentales, validés par huissier. Le juge aux affaires familiales a révisé la garde en faveur de notre client sur la base de notre rapport."
    },
    {
      title: 'Opération "Garde Partagée"',
      type: 'Droit de la Famille',
      context: 'Inquiétudes d\'un père concernant le traitement de ses enfants par leur mère et son nouveau compagnon pendant les week-ends d\'été.',
      result: 'Surveillance rapprochée prouvant l\'abandon de surveillance des enfants au bord de piscines et sur des plages bondées, au profit de fêtes. Garde principale redonnée au père.',
      color: 'var(--secondary-color)'
    }
  ];

  return (
    <div className="page-container glass-card">
      <h1 className="section-title">Dossiers d'Enquêtes Récents</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Ces affaires sont anonymisées pour respecter strictement le secret professionnel.
        Elles illustrent notre quotidien, souvent entre soirées festives et situations dramatiques.
      </p>

      <div className="cases-desk">
        {cases.map((c, idx) => (
          <div key={idx} className="data-card" style={{ borderTop: `1px solid ${c.color}` }}>
            <FolderOpen color={c.color} size={40} className="data-icon" />
            <h3 style={{ marginTop: '0.5rem', color: c.color, fontSize: '1.3rem' }}>{c.title}</h3>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, color: 'var(--text-muted)' }}>
              Catégorie: <span style={{ color: 'var(--text-color)' }}>{c.type}</span>
            </span>
            <hr style={{ margin: '1.5rem 0', borderColor: 'var(--glass-border)' }} />
            <p style={{ opacity: 0.85, fontWeight: 300 }}><strong>Contexte :</strong> {c.context}</p>
            <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(212, 154, 154, 0.03)', borderRadius: '4px', borderLeft: `1px solid ${c.color}` }}>
              <strong><FileSearch size={16} color={c.color} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Résultat :</strong> <span style={{ opacity: 0.9 }}>{c.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
