# Architecture — VORA

## Vue d'ensemble

```
┌─────────────────────┐     ┌─────────────────────┐
│  App Passager        │     │  App Chauffeur       │
│  (Flutter)            │     │  (Flutter)            │
└──────────┬───────────┘     └──────────┬───────────┘
           │                            │
           └────────────┬───────────────┘
                         ▼
              ┌───────────────────────┐
              │   Firebase Auth        │
              └───────────┬───────────┘
                          ▼
              ┌───────────────────────┐
              │   Firestore (données)  │
              └───────────┬───────────┘
                          ▼
              ┌───────────────────────┐
              │  Cloud Functions       │
              │  - matching            │
              │  - calcul du prix      │
              │  - notifications (FCM) │
              └───────────┬───────────┘
                          ▼
              ┌───────────────────────┐
              │  Admin Dashboard (web) │
              └───────────────────────┘
```

## Composants

| Composant | Rôle |
|---|---|
| App Passager (Flutter) | Commande de course, suivi, paiement, évaluation |
| App Chauffeur (Flutter) | Réception des courses, navigation, revenus |
| Firebase Auth | Authentification & gestion des sessions |
| Firestore | Stockage des données (utilisateurs, courses, paiements) |
| Cloud Functions | Logique métier serveur (matching, tarification, validations) |
| Cloud Messaging (FCM) | Notifications push |
| Admin Dashboard | Supervision, gestion des utilisateurs/chauffeurs/courses |
| Google Maps / Mapbox | Cartographie, géolocalisation, itinéraires |

## Pourquoi cette architecture ?

- **Firebase** permet une mise en place très rapide (Auth + DB + Functions + Push en un
  seul écosystème), essentiel avec 48h de développement.
- **Flutter** pour les deux apps mobiles = un seul langage (Dart), code potentiellement
  partagé (modèles, appels API) entre passager et chauffeur.
- **Cloud Functions** centralisent la logique sensible (calcul du prix, matching) pour
  éviter qu'un client mobile ne puisse la manipuler.

## Limites connues

*(À compléter — ex. pas de vrai moteur géospatial, matching simplifié, etc. Voir
`docs/BACKEND_DECISION.md`)*
