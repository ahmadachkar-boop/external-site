console.log('[CARPOOL] ========== THANKSGIVING SCRIPT LOADED FROM AVADA FOOTER ==========');

(function () {
  console.log('[CARPOOL] Thanksgiving theme function executing');

  function onReady(fn){
    if(document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  // Create warm golden ambient glow particles
  function createGoldenGlow(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing section not found');
      return;
    }

    console.log('[CARPOOL] Creating golden glow particles');

    var glowContainer = document.createElement('div');
    glowContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15;overflow:hidden;';
    glowContainer.id = 'glow-container';

    // Generate 50 warm glowing particles
    for (var i = 0; i < 50; i++) {
      var particle = document.createElement('div');
      var size = 3 + Math.random() * 5;
      var x = Math.random() * 100;
      var y = Math.random() * 100;
      var opacity = 0.2 + Math.random() * 0.4;
      var delay = Math.random() * 4;
      var duration = 3 + Math.random() * 3;

      // Warm golden colors - amber, gold, light orange
      var colors = ['#d4a259', '#e6b66d', '#f2c97d', '#cd853f', '#daa520'];
      var color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = 'position:absolute;width:' + size + 'px;height:' + size + 'px;background:' + color + ';border-radius:50%;box-shadow:0 0 ' + (size * 2) + 'px ' + color + ';left:' + x + '%;top:' + y + '%;opacity:' + opacity + ';animation:warmGlow ' + duration + 's ease-in-out infinite ' + delay + 's;';
      glowContainer.appendChild(particle);
    }

    var section = document.querySelector('.carpool-landing');
    if (section) {
      section.insertBefore(glowContainer, section.firstChild);
    }

    // Add animations
    if (!document.getElementById('glow-animations')) {
      var style = document.createElement('style');
      style.id = 'glow-animations';
      style.textContent = '@keyframes warmGlow { 0%, 100% { opacity: 0.2; transform: scale(1) translateY(0); } 50% { opacity: 0.6; transform: scale(1.3) translateY(-10px); } }';
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Golden glow created - 50 particles added');
  }

  // Thanksgiving Harvest Decorations
  function initThanksgivingDecorations(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - decorations skipped');
      return;
    }

    console.log('[CARPOOL] Initializing Thanksgiving decorations');

    // Create falling autumn leaves with realistic motion
    function createFallingLeaf() {
      var leaf = document.createElement('div');

      // Variety of autumn leaf emojis and colors
      var leafTypes = [
        { emoji: '🍂', color: '#cd853f' },
        { emoji: '🍁', color: '#d2691e' },
        { emoji: '🍂', color: '#b8894a' },
        { emoji: '🍁', color: '#c04000' },
        { emoji: '🍂', color: '#e6b66d' }
      ];
      var selectedLeaf = leafTypes[Math.floor(Math.random() * leafTypes.length)];

      var startX = Math.random() * 100;
      var duration = 8 + Math.random() * 8; // Slower, gentler fall
      var size = 20 + Math.random() * 25;
      var rotation = Math.random() * 360;
      var drift = (Math.random() - 0.5) * 150; // Gentle side-to-side drift

      leaf.innerHTML = selectedLeaf.emoji;
      leaf.style.cssText = 'position:absolute;font-size:' + size + 'px;top:-50px;left:' + startX + '%;animation:leafFall' + Math.floor(Math.random() * 1000) + ' ' + duration + 's ease-in-out;pointer-events:none;z-index:16;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.2));transform:rotate(' + rotation + 'deg);';

      // Create unique falling animation with swaying
      var animId = 'leafFall' + Date.now() + Math.random();
      var style = document.createElement('style');
      style.textContent = `
        @keyframes ${animId} {
          0% {
            transform: translateY(0) translateX(0) rotate(${rotation}deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          50% {
            transform: translateY(50vh) translateX(${drift * 0.5}px) rotate(${rotation + 180}deg);
          }
          90% { opacity: 1; }
          100% {
            transform: translateY(calc(100vh + 50px)) translateX(${drift}px) rotate(${rotation + 360}deg);
            opacity: 0;
          }
        }
      `;
      leaf.style.animation = `${animId} ${duration}s ease-in-out`;
      document.head.appendChild(style);

      section.appendChild(leaf);
      setTimeout(function(){
        leaf.remove();
        style.remove();
      }, duration * 1000);
    }

    // Create gentle falling acorns
    function createAcorn() {
      var acorn = document.createElement('div');
      var startX = Math.random() * 100;
      var duration = 5 + Math.random() * 4;
      var size = 15 + Math.random() * 10;
      var rotation = Math.random() * 360;

      acorn.innerHTML = '🌰';
      acorn.style.cssText = 'position:absolute;font-size:' + size + 'px;top:-30px;left:' + startX + '%;animation:acornDrop ' + duration + 's ease-in;pointer-events:none;z-index:16;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25));transform:rotate(' + rotation + 'deg);';

      section.appendChild(acorn);
      setTimeout(function(){ acorn.remove(); }, duration * 1000);
    }

    // Create floating wheat stalks
    function createWheat() {
      var wheat = document.createElement('div');
      var startY = 20 + Math.random() * 60;
      var duration = 15 + Math.random() * 10;
      var size = 25 + Math.random() * 15;

      wheat.innerHTML = '🌾';
      wheat.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-50px;animation:wheatFloat ' + duration + 's linear;pointer-events:none;z-index:16;filter:drop-shadow(0 2px 6px rgba(212,162,89,0.4));';

      section.appendChild(wheat);
      setTimeout(function(){ wheat.remove(); }, duration * 1000);
    }

    // Create gentle floating feathers
    function createFeather() {
      var feather = document.createElement('div');
      var startX = Math.random() * 100;
      var duration = 10 + Math.random() * 8;
      var size = 18 + Math.random() * 12;
      var drift = (Math.random() - 0.5) * 200;

      feather.innerHTML = '🪶';
      feather.style.cssText = 'position:absolute;font-size:' + size + 'px;top:-40px;left:' + startX + '%;pointer-events:none;z-index:16;opacity:0.7;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.15));';

      var animId = 'featherFloat' + Date.now() + Math.random();
      var style = document.createElement('style');
      style.textContent = `
        @keyframes ${animId} {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.7; }
          25% {
            transform: translateY(25vh) translateX(${drift * 0.25}px) rotate(45deg);
          }
          50% {
            transform: translateY(50vh) translateX(${drift * 0.5}px) rotate(-30deg);
          }
          75% {
            transform: translateY(75vh) translateX(${drift * 0.75}px) rotate(60deg);
          }
          90% { opacity: 0.7; }
          100% {
            transform: translateY(calc(100vh + 40px)) translateX(${drift}px) rotate(-45deg);
            opacity: 0;
          }
        }
      `;
      feather.style.animation = `${animId} ${duration}s ease-in-out`;
      document.head.appendChild(style);

      section.appendChild(feather);
      setTimeout(function(){
        feather.remove();
        style.remove();
      }, duration * 1000);
    }

    // Create occasional turkey
    function createTurkey() {
      var turkey = document.createElement('div');
      var startY = 40 + Math.random() * 30;
      var duration = 20 + Math.random() * 10;
      var size = 30 + Math.random() * 15;

      turkey.innerHTML = '🦃';
      turkey.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:turkeyWalk ' + duration + 's linear;pointer-events:none;z-index:16;filter:drop-shadow(2px 4px 6px rgba(0,0,0,0.3));';

      section.appendChild(turkey);
      setTimeout(function(){ turkey.remove(); }, duration * 1000);
    }

    // Add all animation styles
    var style = document.createElement('style');
    style.textContent = `
      @keyframes acornDrop {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% {
          transform: translateY(calc(100vh + 30px)) rotate(720deg);
          opacity: 0;
        }
      }

      @keyframes wheatFloat {
        0% {
          transform: translateX(0) translateY(0) rotate(0deg);
          opacity: 0;
        }
        5% { opacity: 0.8; }
        25% {
          transform: translateX(20vw) translateY(-15px) rotate(5deg);
        }
        50% {
          transform: translateX(50vw) translateY(10px) rotate(-5deg);
        }
        75% {
          transform: translateX(80vw) translateY(-10px) rotate(3deg);
        }
        95% { opacity: 0.8; }
        100% {
          transform: translateX(105vw) translateY(0) rotate(0deg);
          opacity: 0;
        }
      }

      @keyframes turkeyWalk {
        0% {
          transform: translateX(0) translateY(0) scaleX(1);
          opacity: 0;
        }
        5% { opacity: 1; }
        20% {
          transform: translateX(15vw) translateY(-20px) scaleX(1);
        }
        21% {
          transform: translateX(15vw) translateY(-20px) scaleX(-1);
        }
        40% {
          transform: translateX(30vw) translateY(0) scaleX(-1);
        }
        41% {
          transform: translateX(30vw) translateY(0) scaleX(1);
        }
        60% {
          transform: translateX(55vw) translateY(-15px) scaleX(1);
        }
        80% {
          transform: translateX(85vw) translateY(0) scaleX(1);
        }
        95% { opacity: 1; }
        100% {
          transform: translateX(105vw) translateY(0) scaleX(1);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Set intervals for each decoration type (more frequent than Halloween for cozy feel)
    setInterval(createFallingLeaf, 1200); // Lots of falling leaves
    setInterval(createFeather, 4000); // Regular feathers
    setInterval(createAcorn, 3500); // Regular acorns
    setInterval(createWheat, 10000); // Occasional wheat
    setInterval(createTurkey, 25000); // Rare turkey appearance

    // Initial decorations
    setTimeout(createFallingLeaf, 500);
    setTimeout(createFallingLeaf, 1000);
    setTimeout(createFallingLeaf, 1500);
    setTimeout(createFeather, 2000);
    setTimeout(createAcorn, 2500);
    setTimeout(createWheat, 3000);
    setTimeout(createTurkey, 5000);

    console.log('[CARPOOL] Thanksgiving decorations initialized');
  }

  // Run when DOM is ready
  onReady(function(){
    console.log('[CARPOOL] DOM ready - creating Thanksgiving effects');
    createGoldenGlow();
    initThanksgivingDecorations();
  });

})();

console.log('[CARPOOL] ========== THANKSGIVING SCRIPT SETUP COMPLETE ==========');
