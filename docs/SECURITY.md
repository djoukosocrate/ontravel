# Sécurité — VORA

## Comptes & accès
- Authentification via Firebase Auth (téléphone/OTP, email/mot de passe).
- Rôles stockés dans `users.role` et vérifiés côté Cloud Functions (jamais uniquement
  côté client).
- Firestore Security Rules : un utilisateur ne peut lire/écrire que ses propres documents
  (voir `backend/firebase/firestore/firestore.rules`).

## Sécurité passager
- [ ] Bouton SOS (à minima : ouvre l'appel vers un contact d'urgence enregistré)
- [ ] Partage de la course (lien ou statut envoyé à un proche)
- [ ] Affichage des infos vérifiées du chauffeur avant la course (nom, véhicule, plaque, note)

## Sécurité chauffeur
- [ ] Signalement d'un passager
- [ ] Bouton d'urgence / alerte assistance

## Sécurité technique
- Aucune clé API, mot de passe ou secret dans le dépôt (voir `.gitignore` et `.env.example`).
- Validation des entrées côté client ET côté Cloud Functions (ne jamais faire confiance
  uniquement au client).
- HTTPS obligatoire pour tout appel API externe.
- Journalisation des actions sensibles (validation chauffeur, changements de statut de
  course, paiements).

## Ce qui est simulé / limité pour le MVP
*(À compléter avant la soumission — soyez transparents avec le jury.)*
