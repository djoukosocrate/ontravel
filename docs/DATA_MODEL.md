# Modèle de données — Firestore (proposition)

Firestore est une base NoSQL orientée documents. Collections proposées :

## `users`
```
users/{userId}
  - role: "passenger" | "driver" | "admin"
  - firstName, lastName
  - phone, email
  - createdAt
  - status: "active" | "suspended"
```

## `drivers` (extension pour les chauffeurs)
```
drivers/{userId}
  - vehicle: { brand, model, plate, category }
  - documents: { license: url, insurance: url, ... }
  - validationStatus: "pending" | "approved" | "rejected"
  - isOnline: boolean
  - currentLocation: { lat, lng, geohash, updatedAt }
  - rating: number
```

## `rides`
```
rides/{rideId}
  - passengerId
  - driverId (nullable tant que non matché)
  - pickup: { lat, lng, address }
  - destination: { lat, lng, address }
  - status: "requested" | "searching" | "accepted" | "arrived" |
             "in_progress" | "completed" | "cancelled"
  - estimatedPrice, finalPrice
  - estimatedDuration, estimatedDistance
  - createdAt, acceptedAt, startedAt, completedAt
  - cancellation: { by, reason, timestamp } (si annulé)
```

## `payments`
```
payments/{paymentId}
  - rideId
  - amount
  - method: "cash" | "mobile_money" | "simulated"
  - status: "pending" | "confirmed" | "failed"
  - createdAt
```

## `ratings`
```
ratings/{ratingId}
  - rideId
  - fromUserId, toUserId
  - score (1-5)
  - comment
  - createdAt
```

## Index géospatial (matching)

Firestore ne supporte pas nativement les requêtes par rayon. Solution recommandée pour le
MVP : stocker un `geohash` dans `drivers.currentLocation.geohash` (via un package type
`geoflutterfire2`) et interroger par plage de geohash pour approximer une recherche par zone.

Voir `docs/BACKEND_DECISION.md` pour la discussion Firebase vs Supabase/PostGIS.
