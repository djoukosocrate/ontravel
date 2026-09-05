# VORA — Backend Firebase

## Initialisation

```bash
npm install -g firebase-tools
cd backend/firebase
firebase login
firebase init
# Sélectionnez : Firestore, Functions, Emulators
# Liez votre projet Firebase existant
```

## Lancement en local (émulateurs)

```bash
firebase emulators:start
```

## Cloud Functions (`functions/`)

Fonctions principales à implémenter :

- `onRideRequested` — déclenche la recherche de chauffeur (matching)
- `calculateFare` — calcule le prix estimé/final (`P = B + αD + βT + S`, voir cahier de charges §15)
- `onRideStatusChanged` — envoie les notifications push correspondantes
- `onDriverLocationUpdate` — met à jour la position + geohash du chauffeur

Voir `functions/package.json` et `docs/DATA_MODEL.md`.

## Firestore (`firestore/`)

- `firestore.rules` — règles de sécurité (squelette fourni, à durcir avant la démo)
- `firestore.indexes.json` — index composites nécessaires aux requêtes de matching
