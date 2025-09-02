# 🎨 Cartes de Collection Transparentes - Guide d'utilisation

## 📋 Vue d'ensemble

Les cartes de collection transparentes offrent un design moderne et élégant pour afficher vos collections Shopify avec un effet de transparence et de flou (backdrop-filter) qui s'intègre parfaitement avec votre palette gris et violet.

## ✨ Caractéristiques

- **Design transparent** avec effet de flou (backdrop-filter)
- **Animations fluides** au survol et à l'apparition
- **Responsive** avec grille adaptative
- **Deux variantes** : grille standard et style héro
- **Badges "Nouveau"** automatiques pour les collections récentes
- **Personnalisation complète** via l'éditeur de thème

## 🚀 Installation

### 1. Fichiers créés
- `assets/dawn-custom-theme.css` - Styles des cartes (déjà inclus)
- `snippets/collection-card.liquid` - Snippet pour une carte individuelle
- `sections/collections-grid.liquid` - Section complète avec grille
- `templates/list-collections.json` - Template modifié

### 2. Utilisation automatique
Les cartes sont automatiquement disponibles dans votre thème. Vous pouvez les utiliser de deux façons :

## 🎯 Utilisation

### Option 1 : Section prête à l'emploi

1. Allez dans **Thème > Personnaliser**
2. Ajoutez une nouvelle section **"Grille de collections"**
3. Configurez les paramètres selon vos besoins
4. Sauvegardez

### Option 2 : Snippet personnalisé

Utilisez le snippet `collection-card` dans vos templates :

```liquid
{% render 'collection-card',
  collection: collection,
  show_description: true,
  show_product_count: true,
  variant: 'grid',
  show_badge: true
%}
```

## 🔧 Paramètres disponibles

### Paramètres du snippet `collection-card`

| Paramètre | Type | Défaut | Description |
|-----------|------|---------|-------------|
| `collection` | Object | Requis | L'objet collection Shopify |
| `show_description` | Boolean | `true` | Afficher la description |
| `show_product_count` | Boolean | `true` | Afficher le nombre de produits |
| `variant` | String | `'grid'` | `'grid'` ou `'hero'` |
| `show_badge` | Boolean | `false` | Afficher le badge "Nouveau" |

### Paramètres de la section `collections-grid`

#### Contenu
- **Titre de la section** : Titre principal de la section
- **Sous-titre de la section** : Description de la section
- **Collections à afficher** : Sélection spécifique (optionnel)

#### Apparence
- **Style des cartes** : Grille standard ou Style héro
- **Afficher les descriptions** : Afficher/masquer les descriptions
- **Afficher le nombre de produits** : Afficher/masquer le compteur
- **Afficher les badges "Nouveau"** : Badges automatiques

#### Mise en page
- **Colonnes sur desktop** : 2 à 4 colonnes
- **Colonnes sur mobile** : 1 à 2 colonnes
- **Espacement supérieur/inférieur** : 0 à 100px

## 🎨 Variantes de design

### 1. Style Grille Standard (`variant: 'grid'`)
- Fond semi-transparent avec effet de flou
- Image au-dessus du contenu
- Bordure subtile avec effet hover
- Animation de translation vers le haut

### 2. Style Héro (`variant: 'hero'`)
- Image en arrière-plan
- Contenu superposé avec fond sombre
- Effet de flou sur le contenu
- Aspect plus immersif

## 📱 Responsive

- **Desktop** : Grille adaptative avec nombre de colonnes configurable
- **Tablet** : Adaptation automatique des colonnes
- **Mobile** : 1 ou 2 colonnes selon la configuration
- **Breakpoints** : 749px, 990px, 1200px

## 🎭 Animations et interactions

### Hover effects
- Translation vers le haut (`translateY(-4px)`)
- Bordure violette avec ombre
- Overlay sur l'image
- Flèche qui se déplace

### Animations d'apparition
- Fade-in progressif des cartes
- Délais échelonnés (0.1s à 0.6s)
- Animation `fadeInUp` fluide

### Transitions
- Toutes les propriétés : 0.2s ease
- Transformations : 0.15s ease
- Images : 0.3s ease

## 🎨 Personnalisation CSS

### Variables disponibles
```css
:root {
  --radius-lg: 16px;           /* Rayon des cartes */
  --transition-normal: 0.2s ease; /* Transitions */
  --surface: #17171b;          /* Fond des cartes */
  --surface-2: #1f2025;        /* Fond des images */
  --violet-400: #a78bfa;       /* Couleur d'accent */
  --text: #ffffff;             /* Texte principal */
  --muted: #b9bbca;            /* Texte secondaire */
}
```

### Classes CSS personnalisables
- `.collection-item-card` - Carte principale
- `.collection-item-card--hero` - Variante héro
- `.collection-item-card__media` - Zone image
- `.collection-item-card__content` - Zone contenu
- `.collection-item-card__badge` - Badge "Nouveau"

## 🔍 Exemples d'utilisation

### Grille simple de collections
```liquid
<div class="collections-grid">
  {% for collection in collections limit: 6 %}
    {% render 'collection-card',
      collection: collection,
      show_description: true,
      show_product_count: true
    %}
  {% endfor %}
</div>
```

### Collection mise en avant (style héro)
```liquid
{% render 'collection-card',
  collection: featured_collection,
  variant: 'hero',
  show_description: true,
  show_product_count: false
%}
```

### Grille avec collections spécifiques
```liquid
<div class="collections-grid">
  {% for collection in collections limit: 3 %}
    {% render 'collection-card',
      collection: collection,
      show_description: false,
      show_product_count: true,
      show_badge: true
    %}
  {% endfor %}
</div>
```

## 🧪 Tests et validation

### Vérifications recommandées
1. **Contraste** : Utilisez WebAIM Contrast Checker
2. **Responsive** : Testez sur différents appareils
3. **Performance** : Vérifiez avec Lighthouse
4. **Accessibilité** : Navigation au clavier et lecteurs d'écran

### Problèmes courants
- **Backdrop-filter non supporté** : Fallback automatique vers fond semi-transparent
- **Images manquantes** : Placeholder automatique avec nom de collection
- **Performance** : Images optimisées avec `loading="lazy"`

## 📚 Intégration avec d'autres sections

### Compatible avec
- Sections de collections existantes
- Grilles de produits
- Bannières et hero sections
- Navigation et menus

### Extensions possibles
- Filtres de collections
- Tri automatique
- Pagination
- Recherche en temps réel

## 🤝 Support et maintenance

### Mise à jour
- Sauvegardez avant toute modification
- Testez sur un thème de développement
- Vérifiez la compatibilité avec les mises à jour Shopify

### Personnalisation avancée
- Modifiez `dawn-custom-theme.css` pour les styles
- Ajustez le snippet `collection-card.liquid` pour la logique
- Personnalisez la section `collections-grid.liquid` pour la mise en page

---

**Version** : 1.0.0  
**Dernière mise à jour** : Décembre 2024  
**Compatibilité** : Shopify Dawn 15.4.0+  
**Navigateurs supportés** : Chrome 76+, Firefox 70+, Safari 13.1+, Edge 79+
