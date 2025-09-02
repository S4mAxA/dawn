/**
 * Fond Ruban Animé - Style Écran de Veille Windows
 * Effets de parallaxe, mouvement de souris et animations fluides
 */

class RibbonBackground {
  constructor() {
    this.ribbonBackground = document.getElementById('ribbonBackground');
    this.ribbons = document.querySelectorAll('.ribbon, .ribbon-secondary, .ribbon-tertiary');
    this.mouseX = 0;
    this.mouseY = 0;
    this.scrollY = 0;
    this.time = 0;
    
    this.init();
  }
  
  init() {
    if (!this.ribbonBackground) return;
    
    // Événements
    this.bindEvents();
    
    // Animation loop
    this.animate();
  }
  
  bindEvents() {
    // Scroll
    window.addEventListener('scroll', () => {
      this.scrollY = window.pageYOffset;
    }, { passive: true });
    
    // Mouvement de souris
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX / window.innerWidth;
      this.mouseY = e.clientY / window.innerHeight;
    }, { passive: true });
    
    // Redimensionnement
    window.addEventListener('resize', () => {
      this.handleResize();
    }, { passive: true });
    
    // Touch pour mobile
    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouseX = e.touches[0].clientX / window.innerWidth;
        this.mouseY = e.touches[0].clientY / window.innerHeight;
      }
    }, { passive: true });
  }
  
  handleResize() {
    // Ajuste les positions après redimensionnement
    this.ribbons.forEach((ribbon, index) => {
      ribbon.style.transform = 'translate(-50%, -50%)';
    });
  }
  
  animate() {
    this.time += 0.01;
    
    // Effet de parallaxe au scroll
    const scrollParallax = this.scrollY * -0.3;
    
    // Mouvement de souris
    const mouseMoveX = (this.mouseX - 0.5) * 30;
    const mouseMoveY = (this.mouseY - 0.5) * 30;
    
    // Animation de pulsation
    const pulse = Math.sin(this.time * 2) * 0.01;
    
    // Applique les transformations
    this.ribbonBackground.style.transform = `
      translate(${mouseMoveX + scrollParallax * 0.1}px, ${mouseMoveY + scrollParallax * 0.1}px)
      scale(${1 + pulse})
    `;
    
    // Animation individuelle des rubans
    this.ribbons.forEach((ribbon, index) => {
      const speed = 1 + index * 0.5;
      const rotation = this.time * speed;
      const scale = 1 + Math.sin(this.time * speed) * 0.05;
      
      ribbon.style.transform = `
        translate(-50%, -50%) 
        rotate(${rotation}deg) 
        scale(${scale})
      `;
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  new RibbonBackground();
});

// Fallback pour les navigateurs plus anciens
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new RibbonBackground();
  });
} else {
  new RibbonBackground();
}
