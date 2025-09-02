(() => {
  console.log('🎨 Featured Collection Ribbons - Initialisation...');
  
  // Vérification des préférences de mouvement
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mql.matches) {
    console.log('⚠️ prefers-reduced-motion activé - Rubans désactivés');
    return;
  }
  
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRibbons);
  } else {
    initRibbons();
  }
  
  function initRibbons() {
    const featuredCollection = document.querySelector('.featured-collection');
    if (!featuredCollection) {
      console.log('ℹ️ Section featured-collection non trouvée');
      return;
    }
    
    console.log('✅ Section featured-collection trouvée, création des rubans...');
    
    // Créer le conteneur des rubans
    const ribbonsContainer = document.createElement('div');
    ribbonsContainer.className = 'featured-collection-ribbons';
    
    // Créer les rubans elliptiques
    const ribbons = [
      { width: 200, height: 80, top: '10%', left: '-100px', delay: 0, duration: 12 },
      { width: 150, height: 60, top: '30%', right: '-75px', delay: 2, duration: 10 },
      { width: 180, height: 70, top: '60%', left: '-90px', delay: 4, duration: 14 },
      { width: 120, height: 50, top: '80%', right: '-60px', delay: 6, duration: 11 }
    ];
    
    ribbons.forEach((ribbon, index) => {
      const ribbonElement = document.createElement('div');
      ribbonElement.className = 'ribbon-elliptical scroll-parallax';
      ribbonElement.style.width = ribbon.width + 'px';
      ribbonElement.style.height = ribbon.height + 'px';
      ribbonElement.style.top = ribbon.top;
      ribbonElement.style.left = ribbon.left;
      ribbonElement.style.right = ribbon.right;
      ribbonElement.style.animationDelay = ribbon.delay + 's';
      ribbonElement.style.animationDuration = ribbon.duration + 's';
      
      // Ajouter des attributs pour le parallaxe
      ribbonElement.setAttribute('data-speed', (0.5 + Math.random() * 0.5).toFixed(2));
      ribbonElement.setAttribute('data-direction', index % 2 === 0 ? 'left' : 'right');
      
      ribbonsContainer.appendChild(ribbonElement);
    });
    
    // Insérer les rubans dans la section
    featuredCollection.insertBefore(ribbonsContainer, featuredCollection.firstChild);
    
    console.log('🎭 Rubans elliptiques créés, activation du parallaxe...');
    
    // Initialiser l'effet de scroll parallaxe
    initScrollParallax();
  }
  
  function initScrollParallax() {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    
    // Calculer la vélocité de scroll
    function updateScrollVelocity() {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    }
    
    // Appliquer l'effet parallaxe
    function updateParallax() {
      const ribbons = document.querySelectorAll('.ribbon-elliptical.scroll-parallax');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      ribbons.forEach(ribbon => {
        const speed = parseFloat(ribbon.getAttribute('data-speed'));
        const direction = ribbon.getAttribute('data-direction');
        const rect = ribbon.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        
        // Calculer l'effet parallaxe basé sur la position de l'élément
        const parallaxOffset = (scrollY - elementTop) * speed * 0.1;
        
        // Ajouter l'effet de vélocité de scroll
        const velocityEffect = scrollVelocity * speed * 0.05;
        
        // Appliquer les transformations
        let transformX = parallaxOffset;
        let transformY = velocityEffect;
        
        // Ajouter un mouvement elliptique subtil
        const time = Date.now() * 0.001;
        const ellipticalX = Math.sin(time * 0.5) * 20 * speed;
        const ellipticalY = Math.cos(time * 0.3) * 15 * speed;
        
        transformX += ellipticalX;
        transformY += ellipticalY;
        
        // Appliquer la transformation
        ribbon.style.transform = `translate3d(${transformX}px, ${transformY}px, 0) rotate(${time * 10}deg)`;
        
        // Ajuster l'opacité basé sur la vélocité
        const baseOpacity = 0.6;
        const velocityOpacity = Math.min(Math.abs(scrollVelocity) * 0.01, 0.3);
        ribbon.style.opacity = baseOpacity + velocityOpacity;
      });
      
      ticking = false;
    }
    
    // Gérer le scroll avec throttling
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollVelocity();
          updateParallax();
        });
        ticking = true;
      }
    }
    
    // Écouter les événements de scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Écouter le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
      requestAnimationFrame(updateParallax);
    }, { passive: true });
    
    console.log('🚀 Effet de scroll parallaxe activé !');
  }
  
  // Fonction de nettoyage
  function cleanup() {
    const ribbons = document.querySelectorAll('.featured-collection-ribbons');
    ribbons.forEach(ribbon => ribbon.remove());
    console.log('🧹 Rubans nettoyés');
  }
  
  // Exposer la fonction de nettoyage globalement
  window.featuredCollectionRibbonsCleanup = cleanup;
  
})();
