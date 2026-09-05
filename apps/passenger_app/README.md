# VORA — App Passager (Flutter)

## Initialisation

Ce dossier ne contient pas encore de projet Flutter généré. Pour l'initialiser :

```bash
cd apps/passenger_app
flutter create . --org com.vora --project-name vora_passenger
```

Puis ajoutez vos dépendances dans `pubspec.yaml` (ex. `firebase_core`, `firebase_auth`,
`cloud_firestore`, `google_maps_flutter` ou `mapbox_maps_flutter`, `geoflutterfire2`).

## Lancement

```bash
flutter pub get
flutter run
```

## Structure recommandée (`lib/`)

```
lib/
├── main.dart
├── screens/
│   ├── auth/
│   ├── home/
│   ├── ride_request/
│   ├── ride_tracking/
│   ├── history/
│   └── profile/
├── models/
├── services/       # appels Firebase, géolocalisation, tarification
└── widgets/
```

## Écrans prioritaires (voir manuel hackathon, section 12.2)

- [ ] Connexion / Inscription
- [ ] Accueil (carte)
- [ ] Recherche destination
- [ ] Estimation de course
- [ ] Confirmation
- [ ] Recherche chauffeur
- [ ] Course en cours
- [ ] Course terminée
- [ ] Historique
- [ ] Profil
