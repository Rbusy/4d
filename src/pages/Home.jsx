import React from 'react';
import { Search, EyeOff, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-home">
      <section className="hero glass-card">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Ne restez plus dans l'incertitude.</span><br />
            La PREUVE est votre meilleure arme.
          </h1>
          <p className="hero-subtitle">
            Face à une situation précaire, que ce soit pour une garde d'enfant, une fraude en entreprise ou un conflit personnel, 
            notre agence vous apporte la vérité.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Consultation Gratuite <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Nos Solutions <Search size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="features-grid">
        <div className="feature-card glass-card">
          <Search className="feature-icon" size={40} />
          <h3>Recherche de Preuve</h3>
          <p>Collecte d'éléments probants, légalement recevables devant les tribunaux pour défendre vos intérêts.</p>
        </div>
        <div className="feature-card glass-card">
          <EyeOff className="feature-icon" size={40} />
          <h3>Surveillance</h3>
          <p>Filatures discrètes par des professionnels agréés. Vous saurez avec exactitude ce qu'il se passe.</p>
        </div>
        <div className="feature-card glass-card">
          <FileText className="feature-icon" size={40} />
          <h3>Rapports Détaillés</h3>
          <p>Remise d'un dossier complet avec photographies, chronologie et attestations en justice.</p>
        </div>
      </section>
      
      <section className="about-preview glass-card">
        <h2>Une Agence aux Méthodes Éprouvées</h2>
        <p>Opérant dans tout le sud, notre équipe allie discrétion absolue et efficacité redoutable. Nous savons que votre situation exige de la clarté et nous mettons tous nos moyens légaux à votre disposition pour lever le doute.</p>
        <Link to="/agence" className="link-button">Découvrir notre éthique</Link>
      </section>
    </div>
  );
};

export default Home;
