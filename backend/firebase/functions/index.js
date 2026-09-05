const { onDocumentCreated, onDocumentUpdated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Déclenché à la création d'une course : recherche du chauffeur le plus pertinent.
 * MVP : chauffeur disponible le plus proche (geohash), sans optimisation avancée.
 */
exports.onRideRequested = onDocumentCreated("rides/{rideId}", async (event) => {
  // TODO: rechercher les chauffeurs isOnline=true dans une plage de geohash,
  // calculer distance/ETA, sélectionner le meilleur candidat, mettre à jour
  // rides/{rideId}.status = "searching" puis notifier le chauffeur choisi.
});

/**
 * Calcule le prix estimé/final d'une course.
 * P = B + αD + βT + S  (voir cahier des charges, section 15)
 */
exports.calculateFare = async ({ distanceKm, durationMin, category }) => {
  const BASE_FARE = 500; // FCFA — à externaliser en config
  const COST_PER_KM = 150;
  const COST_PER_MIN = 25;
  const categoryMultiplier = { eco: 1, confort: 1.3, xl: 1.6, pmr: 1 }[category] || 1;

  const price = (BASE_FARE + distanceKm * COST_PER_KM + durationMin * COST_PER_MIN) * categoryMultiplier;
  return Math.round(price);
};

/**
 * Déclenché à chaque changement de statut d'une course : envoie une notification push.
 */
exports.onRideStatusChanged = onDocumentUpdated("rides/{rideId}", async (event) => {
  // TODO: comparer before/after status, envoyer une notification FCM adaptée
  // (chauffeur trouvé, chauffeur arrivé, course terminée, etc.)
});
