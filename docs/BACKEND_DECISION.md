# Décision technique : Firebase vs Supabase

Ce projet a été scaffoldé avec **Firebase** par défaut (le plus rapide à mettre en place avec
Flutter : Auth téléphone/OTP, Firestore, Cloud Functions, Cloud Messaging tout intégré).

**Point d'attention à trancher rapidement en équipe** : le cœur de VORA est un problème
**géospatial** — trouver les chauffeurs disponibles les plus pertinents autour d'un passager.

| | Firebase / Firestore | Supabase (PostgreSQL + PostGIS) |
|---|---|---|
| Requêtes géospatiales natives | ❌ Non — nécessite un géohash (ex. `geoflutterfire2`) et reste approximatif | ✅ Oui — PostGIS gère nativement les rayons, distances, index spatiaux |
| Rapidité de mise en place | ✅ Très rapide, écosystème Flutter mature | ⚠️ Un peu plus de setup (schéma SQL) |
| Temps réel (position chauffeur) | ✅ Firestore listeners natifs | ✅ Supabase Realtime (sur tables Postgres) |
| Auth téléphone/OTP | ✅ Intégré | ⚠️ Possible mais moins immédiat |
| Requêtes relationnelles complexes (rapports admin, KPI) | ⚠️ Plus laborieux en NoSQL | ✅ SQL natif, plus adapté aux dashboards/analytics |

**Recommandation pour un MVP 48h** : rester sur Firebase et implémenter le matching avec un
géohash simple (recherche par zone/rayon approximatif) plutôt que d'optimiser la précision.
Documentez cette limite dans la section "Limites" du README — c'est un choix assumé et
défendable devant le jury, pas un oubli.

Si l'équipe a de l'expérience SQL/PostGIS et veut un matching plus précis, basculer vers
Supabase reste une option : il suffira d'adapter `backend/firebase/` en un dossier
`backend/supabase/` équivalent (schéma SQL + Edge Functions).
