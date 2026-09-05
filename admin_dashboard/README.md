# VORA — Back-office Administrateur

Stack non figée dans ce squelette. Pour un MVP rapide en 48h, une stack simple comme
**React + Vite** (ou Next.js si vous voulez du SSR) avec le SDK Firebase Web est recommandée.

## Initialisation suggérée (React + Vite)

```bash
cd admin_dashboard
npm create vite@latest . -- --template react
npm install firebase
```

## Lancement

```bash
npm install
npm run dev
```

## Fonctionnalités minimales (voir cahier des charges, section 25 et manuel section 7)

- [ ] Connexion admin
- [ ] Tableau de bord général (utilisateurs actifs, courses du jour, incidents)
- [ ] Gestion des utilisateurs / chauffeurs (recherche, suspension)
- [ ] Suivi des courses (liste + filtres simples)
- [ ] Statistiques de base
