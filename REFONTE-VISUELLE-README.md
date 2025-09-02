# 🎨 Refonte Visuelle Shopify Dawn - Palette Gris & Violet

## 📋 Vue d'ensemble

Cette refonte transforme votre thème Shopify Dawn en une esthétique premium, épurée et cohérente, dominée par des gris profonds et des violets lumineux, avec des dégradés subtils sur les éléments interactifs.

## ✨ Caractéristiques principales

- **Palette gris + violet** avec contrastes AA/AAA pour l'accessibilité
- **Boutons en dégradé** avec états normal/hover/active/focus + micro-interactions
- **Cartes produit et sections** avec ombres douces, coins arrondis, espacements généreux
- **Typographie moderne** avec hiérarchie claire (H1/H2/H3, légendes)
- **Accessibilité complète** : focus visibles, tailles suffisantes, ratios de contraste conformes
- **Performance optimisée** : CSS parcimonieux, polices optimisées

## 🎨 Palette de couleurs

### Gris neutres
- `--gray-900: #0f0f12` - Fond principal
- `--gray-800: #17171b` - Surface principale
- `--gray-700: #1f2025` - Surface secondaire
- `--gray-600: #2b2c33` - Bordure
- `--gray-500: #3a3b44` - Accent
- `--gray-400: #8e90a2` - Texte secondaire
- `--gray-300: #b9bbca` - Texte atténué
- `--gray-200: #dee0ea` - Bordure claire
- `--gray-100: #f3f4f8` - Fond clair

### Violet (accent)
- `--violet-700: #6d28d9` - Hover
- `--violet-600: #7c3aed` - Principal
- `--violet-500: #8b5cf6` - Hover
- `--violet-400: #a78bfa` - Secondaire
- `--violet-300: #c4b5fd` - Clair

### Gradients
- `--grad-accent: linear-gradient(135deg, var(--violet-600), var(--violet-400))`
- `--grad-accent-hover: linear-gradient(135deg, var(--violet-700), var(--violet-500))`
- `--grad-subtle: linear-gradient(180deg, rgba(124,58,237,0.12), rgba(139,92,246,0.06))`

## 🚀 Installation

### 1. Fichiers ajoutés
- `assets/dawn-custom-theme.css` - Styles principaux
- `snippets/custom-colors.liquid` - Variables de couleur personnalisables
- `config/settings_schema.json` - Paramètres dans l'éditeur de thème

### 2. Modifications apportées
- `layout/theme.liquid` - Inclusion des nouveaux fichiers CSS

### 3. Paramètres du thème
Dans l'éditeur de thème Shopify, vous trouverez une nouvelle section **"Identité visuelle personnalisée"** avec :
- Couleur de fond principale
- Surface principale
- Surface secondaire
- Couleurs d'accent (violet start/end)
- Calcul automatique du contraste

## 🎯 Utilisation

### Boutons
```html
<!-- Bouton principal avec dégradé -->
<button class="button button--primary">Action principale</button>

<!-- Bouton secondaire avec bordure dégradée -->
<button class="button button--secondary">Action secondaire</button>

<!-- Boutons de taille différente -->
<button class="button button--small">Petit</button>
<button class="button button--large">Grand</button>
```

### Cartes
```html
<!-- Carte produit -->
<div class="product-card">
  <div class="product-card__media">
    <img src="..." alt="...">
  </div>
  <div class="product-card__content">
    <h3 class="product-card__heading">Nom du produit</h3>
    <div class="product-card__price">
      <span class="price__regular">29,99 €</span>
    </div>
  </div>
</div>
```

### Classes utilitaires
```html
<!-- Typographie -->
<h1 class="text-center">Titre centré</h1>
<p class="text-uppercase font-semibold">Texte en majuscules et gras</p>

<!-- Espacement -->
<div class="mb-3 mt-2">Contenu avec marges</div>

<!-- Alignement -->
<div class="text-left">Texte aligné à gauche</div>
```

## 🔧 Personnalisation

### Modifier les couleurs
1. Allez dans **Thème > Personnaliser**
2. Section **"Identité visuelle personnalisée"**
3. Ajustez les couleurs selon vos préférences
4. Les changements s'appliquent automatiquement

### Modifier le CSS
Éditez `assets/dawn-custom-theme.css` pour :
- Ajuster les rayons de bordure
- Modifier les ombres
- Personnaliser les animations
- Ajouter de nouveaux composants

## 📱 Responsive

Le design est entièrement responsive avec :
- Typographie fluide avec `clamp()`
- Grilles adaptatives
- Boutons et cartes optimisés mobile
- Breakpoints : 749px, 990px, 1200px

## ♿ Accessibilité

- **Contraste AA/AAA** : Tous les textes respectent les ratios WCAG
- **Focus visible** : Outlines claires sur tous les éléments interactifs
- **Tailles minimales** : Boutons ≥ 44×44px
- **Navigation clavier** : Support complet des raccourcis clavier
- **Lecteurs d'écran** : Structure sémantique optimisée

## 🎭 Micro-interactions

- **Hover** : Translation Y(-1px), ombre augmentée
- **Active** : Translation Y(0), saturation réduite
- **Focus** : Outline violet avec ombre
- **Chargement** : Animations skeleton
- **Apparition** : Fade-in progressif des cartes

## 📊 Performance

- **CSS optimisé** : Variables CSS pour la réutilisation
- **Animations fluides** : Utilisation de `transform` et `opacity`
- **Polices système** : Pas de téléchargement de polices externes
- **Images optimisées** : Transitions CSS pour les effets visuels

## 🧪 Tests recommandés

### Contraste
- Utilisez [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Vérifiez tous les textes sur fond sombre
- Testez les états hover et focus

### Accessibilité
- Navigation au clavier uniquement
- Lecteurs d'écran (NVDA, JAWS, VoiceOver)
- Zoom 200% et 400%

### Performance
- Lighthouse (Accessibilité ≥ 90)
- Core Web Vitals
- Tests sur appareils lents

## 🐛 Dépannage

### Les couleurs ne s'appliquent pas
1. Vérifiez que `dawn-custom-theme.css` est bien inclus
2. Videz le cache du navigateur
3. Vérifiez la console pour les erreurs CSS

### Problèmes de contraste
1. Ajustez les couleurs dans l'éditeur de thème
2. Utilisez des outils de vérification de contraste
3. Testez sur différents appareils

### Animations saccadées
1. Vérifiez que `transform` est utilisé
2. Évitez les animations sur `width`/`height`
3. Utilisez `will-change` pour les éléments animés

## 📚 Ressources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Shopify Liquid Documentation](https://shopify.dev/docs/themes/liquid)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## 🤝 Support

Pour toute question ou problème :
1. Vérifiez ce README
2. Consultez la documentation Shopify
3. Testez sur un thème de développement
4. Sauvegardez avant toute modification

---

**Version** : 1.0.0  
**Dernière mise à jour** : Décembre 2024  
**Compatibilité** : Shopify Dawn 15.4.0+
