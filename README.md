# HorneVibes

Une application de streaming musical développée avec React Native et Expo.

## Fonctionnalités

- **Barre de navigation inférieure** avec trois onglets : Découvrir, Recherche et Bibliothèque.
- **Lecteur de musique** avec des contrôles de base (play/pause, avancer, reculer) et une ligne de progression.
- **Design** pur et simple, neutre et premium.

## Prérequis

- Node.js
- Expo CLI
- Un smartphone avec l'application Expo Go installée

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Installez les dépendances nécessaires en exécutant la commande suivante dans le terminal :
   ```bash
   npm install
   ```
3. Installez les dépendances spécifiques à Expo :
   ```bash
   expo install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-vector-icons expo-av
   ```

## Utilisation

1. Démarrez le serveur de développement Expo :
   ```bash
   expo start
   ```
2. Scannez le QR code affiché dans le terminal avec l'application Expo Go sur votre smartphone.

## Structure du Projet

```
HorneVibes/
├── assets/
│   ├── images/
│   └── fonts/
├── components/
│   └── Player.jsx
├── screens/
│   ├── DiscoverScreen.jsx
│   ├── SearchScreen.jsx
│   └── LibraryScreen.jsx
├── App.jsx
├── app.json
└── README.md
```

## Contribution

Les contributions sont les bienvenues ! Pour contribuer à ce projet, suivez ces étapes :

1. Fork ce dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalité`).
3. Commitez vos modifications (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, vous pouvez me contacter à l'adresse suivante : [hachtek98@gmail.com](mailto:hachtek98@gmail.com).