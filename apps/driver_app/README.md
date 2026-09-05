# VORA — App Chauffeur (Flutter)

## Initialisation

```bash
cd apps/driver_app
flutter create . --org com.vora --project-name vora_driver
```

Dépendances suggérées : `firebase_core`, `firebase_auth`, `cloud_firestore`,
`google_maps_flutter` ou `mapbox_maps_flutter`, `geoflutterfire2`, `firebase_messaging`.

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
│   ├── dashboard/          # en ligne/hors ligne, revenu du jour
│   ├── ride_request/       # accepter/refuser une course
│   ├── active_ride/        # navigation, communication, urgence
│   ├── earnings/
│   └── profile/
├── models/
├── services/
└── widgets/
```

## Écrans prioritaires (voir manuel hackathon, section 12.2)

- [ ] Connexion
- [ ] Tableau de bord (en ligne / hors ligne)
- [ ] Réception de demande de course
- [ ] Course acceptée / navigation
- [ ] Course en cours
- [ ] Fin de course
- [ ] Revenus
- [ ] Historique
- [ ] Profil
- [ ] Sécurité / assistance
