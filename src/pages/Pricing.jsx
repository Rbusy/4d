import React from 'react';
import { CreditCard, ShieldCheck, FileCheck } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="page-container glass-card">
      <h1 className="section-title">Tarifs & Déontologie</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
        <div className="glass-card" style={{ padding: '3rem', flex: 1 }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-light)', fontFamily: 'var(--font-heading)' }}>
            <CreditCard /> Grille Tarifaire
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Chaque mission est unique. Cependant, nous prônons une transparence totale sur nos honoraires :
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ borderBottom: '1px solid rgba(212, 154, 154, 0.15)', paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', marginRight: '1rem', fontStyle: 'italic' }}>01.</span> <strong>Consultation Initiale :</strong> Gratuite (au cabinet ou par téléphone)
            </li>
            <li style={{ borderBottom: '1px solid rgba(212, 154, 154, 0.15)', paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', marginRight: '1rem', fontStyle: 'italic' }}>02.</span> <strong>Taux Horaire Filature :</strong> Dès 80€ HT / Heure (selon moyens déployés)
            </li>
            <li style={{ borderBottom: '1px solid rgba(212, 154, 154, 0.15)', paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', marginRight: '1rem', fontStyle: 'italic' }}>03.</span> <strong>Forfait Journée (10h) :</strong> Sur devis
            </li>
            <li style={{ paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)', marginRight: '1rem', fontStyle: 'italic' }}>04.</span> <strong>Recherche Administrative :</strong> Forfaitaire (résultat garanti ou remboursé selon mission)
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', flex: 1 }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)' }}>
              <ShieldCheck /> Code de Déontologie
            </h3>
            <p style={{ margin: 0, fontSize: '1rem', opacity: 0.85, fontWeight: 300 }}>
              Le métier de détective privé est strictement réglementé (Livre VI du CSI). Nous n'acceptons que les missions légales, morales et légitimes. 
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', flex: 1 }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--secondary-color)' }}>
              <FileCheck /> Secret Professionnel
            </h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Contrairement à une idée reçue, notre secret professionnel est <strong>absolu</strong>. Il couvre nos clients, nos cibles et l'intégralité du contenu de nos dossiers de l'entretien initial au rapport final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
