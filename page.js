import React from 'react';

export default function Home() {
  const whatsappNumber = "19043181164";
  
  const getWhatsAppLink = (planName, price) => {
    const message = `Bonjour G.L Tikomik Studio, mwen ta renmen peye pou plan ${planName} lan ki koute ${price}. Mwen pare pou m valide peman an.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-modern-black text-clean-white font-sans">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800 bg-premium-blue">
        <h1 className="text-2xl font-bold text-clean-white">
          G.L <span className="text-neon-purple">Tikomik Studio</span>
        </h1>
        <nav className="space-x-4">
          <button className="hover:text-neon-purple transition">Français</button>
          <button className="hover:text-neon-purple transition">Kreyòl</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Kreye <span className="text-neon-purple">Tikomik</span> ou an kèk klik
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
          La première plateforme SaaS AI premium pour générer des vidéos animées avec voix en Créole, Français et Anglais.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          
          {/* Plan Limité */}
          <div className="bg-premium-blue p-8 rounded-2xl border border-gray-700 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">PLAN LIMITÉ</h3>
            <p className="text-4xl font-extrabold text-neon-purple mb-4">20 USD <span className="text-sm text-gray-400">≈ 1500 HTG</span></p>
            <ul className="text-left space-y-3 mb-8 flex-1">
              <li>✅ Fonctionnalités limitées</li>
              <li>✅ Nombre limité vidéos</li>
              <li>✅ Export standard</li>
              <li>✅ Paiement via Natcash / PayPal</li>
            </ul>
            <a 
              href={getWhatsAppLink("LIMITÉ", "20 USD")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition w-full block text-center"
            >
