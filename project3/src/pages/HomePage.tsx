import { Slideshow } from '../components/Slideshow';

export function HomePage() {
  return (
    <div>
      <Slideshow />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Notre Mission</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Chez WePack, nous avons bâti notre entreprise sur une base d'innovation et de dévouement.
            </p>
            <p>
              Notre mission est simple : fournir des systèmes de convoyage et des pièces de rechange 
              exceptionnels qui améliorent l'efficacité et optimisent les opérations. Avec un 
              engagement sans faille envers la qualité et la satisfaction de nos clients, nous visons 
              à révolutionner la manière dont les industries progressent.
            </p>
            <p>
              Rejoignez-nous dans cette quête d'excellence chez WePack, où la fiabilité rencontre 
              l'innovation.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">
          Solutions d'emballage professionnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Qualité supérieure</h3>
            <p className="text-gray-600">
              Nos produits sont fabriqués avec les meilleurs matériaux pour garantir
              une protection optimale.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Service personnalisé</h3>
            <p className="text-gray-600">
              Notre équipe d'experts vous accompagne dans le choix des solutions
              adaptées à vos besoins.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Livraison rapide</h3>
            <p className="text-gray-600">
              Profitez de notre service de livraison express pour recevoir vos
              commandes dans les meilleurs délais.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}