## Présentation
 
**Meta Eraser** est une application web React qui permet de supprimer toutes les métadonnées sensibles de tes fichiers (images et PDF) directement dans le navigateur.
Pas de serveur, pas de cloud, pas de données envoyées nulle part. Tout se passe en local sur ta machine.

## Technologies utilisées
 
| Technologie | Version | Rôle |
|-------------|---------|------|
| React | 18.2.0 | Framework UI |
| react-dom | 18.2.0 | Rendu dans le DOM |
| react-scripts | 5.0.1 | Outillage de build (CRA) |
| pdf-lib | 1.17.1 | Manipulation de fichiers PDF |
| Canvas API | natif | Redessinage des images sans métadonnées

## Installation
 
### Prérequis
 
- **Node.js** v16 ou supérieur → [nodejs.org](https://nodejs.org)
- **npm** v8 ou supérieur (inclus avec Node.js)
- Un éditeur de code (VS Code recommandé)
 
### Vérifier les prérequis
 
```bash
node --version   # doit afficher v16.x.x ou supérieur
npm --version    # doit afficher 8.x.x ou supérieur
```
 
### Installer les dépendances
 
```bash
npm install
```
 
---
 
## Lancer le projet
 
```bash
npm start
```
 
L'application s'ouvre automatiquement sur **http://localhost:3000**
 
Toute modification de fichier recharge la page instantanément (Hot Reload).
