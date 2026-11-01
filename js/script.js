/**
 * Main Interactive Engine for Manjiri & Yash Tribute Website
 * Ultra-luxury digital scrapbook, interactive polaroids, milestones,
 * love whispers jar, wax seal envelope, and forever counter.
 */

// Gallery Data with Real Photos & Heartfelt Memories
const memoriesData = [
  {
    id: 1,
    title: "The 11:11 Birthday Wish",
    date: "August 31, 2026",
    location: "A Dream Come True",
    category: "milestones",
    image: "assets/images/manjiri_pink_dress.jpg",
    tapeType: "washi-rose",
    rotation: -2,
    caption: "Seeing you in that breathtaking pink dress... Wishing you right at midnight (12:00 AM) and spending the entire day in your warmth. For me, you were my 11:11 wish stepping into reality."
  },
  {
    id: 2,
    title: "Royal Traditional Grace",
    date: "A Day in Purple & Gold",
    location: "Pure Elegance",
    category: "traditional",
    image: "assets/images/manjiri_saree_purple.jpg",
    tapeType: "pin-bronze",
    rotation: 3,
    caption: "The world pauses whenever you drape a saree. The traditional jhumkas, that captivating smile, and the grace with which you carry yourself—you truly are my royalty."
  },
  {
    id: 3,
    title: "Golden Hour Serenity",
    date: "Sun-Kissed Radiance",
    location: "Everyday Magic",
    category: "traditional",
    image: "assets/images/manjiri_yellow_saree.jpg",
    tapeType: "washi-gold",
    rotation: -1.5,
    caption: "Golden light touching the face of an angel. An effortless 11/10 in every single frame, captivating my soul over and over again without even trying."
  },
  {
    id: 4,
    title: "The First Sight Spark",
    date: "October 22, 2025",
    location: "First Day of Diwali",
    category: "milestones",
    image: "assets/images/manjiri_green_kurti.jpg",
    tapeType: "pin-bronze",
    rotation: 2.5,
    caption: "The Diwali evening that altered my destiny. The exact instant I saw you in this radiant grace, fireworks went off inside my heart. I fell in love on the spot."
  },
  {
    id: 5,
    title: "Sweet Mischief & Laughter",
    date: "Car Rides & Smiles",
    location: "Our Joyful Escapes",
    category: "candid",
    image: "assets/images/manjiri_car_cute.jpg",
    tapeType: "washi-rose",
    rotation: -3,
    caption: "That playful scrunched nose and mischievous look! You are the cutest, most adorable person to ever exist, and this face can melt away any worry in my life."
  },
  {
    id: 6,
    title: "Car Rides & Secret Glances",
    date: "Treasured Moments",
    location: "Beside My Princess",
    category: "candid",
    image: "assets/images/manjiri_car_sweet.jpg",
    tapeType: "washi-gold",
    rotation: 1.8,
    caption: "Sitting beside you during our rides, stealing quiet glances at you. Even when I am nervous, just your gentle smile beside me makes me feel on top of the world."
  },
  {
    id: 7,
    title: "The Little Princess",
    date: "Childhood Wonder",
    location: "Born To Be A Queen",
    category: "candid",
    image: "assets/images/manjiri_childhood.jpg",
    tapeType: "tape-vintage",
    rotation: -2.2,
    caption: "Look at this little princess! The same sweet, innocent charm and beautiful eyes that one day would grow up to capture my heart completely."
  },
  {
    id: 8,
    title: "Vintage Nostalgia",
    date: "Timeless Frame",
    location: "Warm Memories",
    category: "candid",
    image: "assets/images/manjiri_vintage.jpg",
    tapeType: "washi-rose",
    rotation: 2,
    caption: "Like a classic romantic film captured on vintage film. Every picture of you feels like poetry written just for my eyes."
  },
  {
    id: 9,
    title: "Classic Monochrome Soul",
    date: "Breathtaking Portrait",
    location: "Beyond Words",
    category: "traditional",
    image: "assets/images/manjiri_bw_portrait.jpg",
    tapeType: "pin-bronze",
    rotation: -1,
    caption: "Stripped of all colors, your natural beauty shines even brighter. Deep, expressive eyes that hold my entire universe and every dream I have for our future."
  }
];

// Little Whispers / Love Jar Notes
const loveWhispers = [
  "From the moment I first saw you on Diwali (22nd Oct 2025), you stole every beat of my heart.",
  "Bringing up Sanchita's topic was just my clumsy excuse... I was secretly desperate just to talk to you every day!",
  "When we were together at Dadar, my knees were shaking. You looked like an absolute 11/10 princess walking beside me.",
  "Seeing you in that pink dress on 31st August felt like all my 11:11 wishes stepped into reality.",
  "6th September 2026: Proposing to you was the scariest leap of my life, and your sweet 'YES' made me the happiest man alive.",
  "I don't just want to love you during our youth; I want to hold your wrinkly hand when we're 90 and gray.",
  "You make ordinary car rides feel like the most magical scenes in a classic movie.",
  "Your smile scrunches your nose in the cutest way, and it effortlessly melts away all my worries.",
  "I promise to always be your safe haven, your number one cheerleader, and your forever protector.",
  "You're not just my girl; you're the answered prayer I whisper every time the clock strikes 11:11.",
  "Holding your hand is my favorite feeling in the world. I promise never to let go till my last breath.",
  "Even on stressful days, just one look at your sweet face reminds me why life is so overwhelmingly beautiful.",
  "I fell in love with you at first sight, but every single day since, I fall in love with you all over again.",
  "Marrying you, building a home with you, and raising the cutest babies with you is my ultimate dream."
];

// Current Lightbox State
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlideshow();
  initPolaroidGallery();
  initTiltEffects();
  initLightbox();
  initTimelineScroll();
  initDreamBucketList();
  initLoveEnvelope();
  initLoveCounter();
  initLoveWhispers();
  initLetterKeepsake();
  initSmoothScroll();
});

/* ==========================================================
   1. HERO SLIDESHOW
   ========================================================== */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  const slideInterval = 5500;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
    });
  });

  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, slideInterval);
}

/* ==========================================================
   2. POLAROID GALLERY & FILTERING
   ========================================================== */
function initPolaroidGallery() {
  const container = document.getElementById('polaroidGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderGallery(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? memoriesData 
      : memoriesData.filter(m => m.category === filter);

    filtered.forEach((memory) => {
      const card = document.createElement('div');
      card.className = `polaroid-card tilt-item ${memory.tapeType}`;
      card.style.setProperty('--rot', `${memory.rotation}deg`);
      card.dataset.index = memory.id - 1;

      card.innerHTML = `
        <div class="polaroid-pin-tape"></div>
        <div class="polaroid-image-wrap">
          <img src="${memory.image}" alt="${memory.title}" loading="lazy" />
          <div class="polaroid-overlay">
            <span class="expand-icon"><i class="fa-solid fa-expand"></i> Tap to View</span>
          </div>
        </div>
        <div class="polaroid-caption">
          <h3 class="polaroid-title">${memory.title}</h3>
          <p class="polaroid-date"><i class="fa-regular fa-calendar-heart"></i> ${memory.date}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(memory.id - 1);
        if (window.romanticAudio) {
          window.romanticAudio.playSparkleSound();
        }
      });

      container.appendChild(card);
    });

    initTiltEffects();
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery('all');
}

/* ==========================================================
   3. 3D TILT EFFECT
   ========================================================== */
function initTiltEffects() {
  const tiltItems = document.querySelectorAll('.tilt-item');

  tiltItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      item.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });
}

/* ==========================================================
   4. LIGHTBOX MODAL WITH TOUCH SWIPE & SOUND
   ========================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const heartBtn = document.getElementById('lightboxHeartBtn');

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          navigateLightbox(1); // Swipe left = next
        } else {
          navigateLightbox(-1); // Swipe right = prev
        }
      }
    }
  }, { passive: true });

  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      heartBtn.classList.add('liked');
      if (window.romanticAudio) {
        window.romanticAudio.playHeartSound();
      }
      if (window.romanticParticles) {
        const rect = heartBtn.getBoundingClientRect();
        window.romanticParticles.createBurst(rect.left + rect.width / 2, rect.top, 20);
      }
    });
  }
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + memoriesData.length) % memoriesData.length;
  updateLightboxContent();
  if (window.romanticAudio) {
    window.romanticAudio.playSparkleSound();
  }
}

function updateLightboxContent() {
  const memory = memoriesData[currentLightboxIndex];
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const date = document.getElementById('lightboxDate');
  const loc = document.getElementById('lightboxLocation');
  const caption = document.getElementById('lightboxCaption');
  const count = document.getElementById('lightboxCounter');
  const heartBtn = document.getElementById('lightboxHeartBtn');

  if (heartBtn) heartBtn.classList.remove('liked');

  img.src = memory.image;
  img.alt = memory.title;
  title.textContent = memory.title;
  date.textContent = memory.date;
  loc.textContent = memory.location;
  caption.textContent = memory.caption;
  count.textContent = `${currentLightboxIndex + 1} / ${memoriesData.length}`;
}

/* ==========================================================
   5. TIMELINE SCROLL OBSERVER
   ========================================================== */
function initTimelineScroll() {
  const milestoneCards = document.querySelectorAll('.milestone-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.25
  });

  milestoneCards.forEach(card => observer.observe(card));
}

/* ==========================================================
   6. FOREVER BUCKET LIST & 3D FLIP CARDS
   ========================================================== */
function initDreamBucketList() {
  const stampButtons = document.querySelectorAll('.stamp-promise-btn');

  stampButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isStamped = btn.classList.toggle('stamped');

      if (isStamped) {
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Promised to You! ❤️</span>';
        if (window.romanticAudio) {
          window.romanticAudio.playHeartSound();
        }
        if (window.romanticParticles) {
          const rect = btn.getBoundingClientRect();
          window.romanticParticles.createBurst(rect.left + rect.width / 2, rect.top, 20);
        }
      } else {
        btn.innerHTML = '<i class="fa-regular fa-heart"></i> <span>Seal Our Promise</span>';
      }
    });
  });

  // "Reasons Why I Love You" 3D Flip Cards
  const flipCards = document.querySelectorAll('.reason-flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (window.romanticAudio) {
        window.romanticAudio.playSparkleSound();
      }
      if (window.romanticParticles) {
        const rect = card.getBoundingClientRect();
        window.romanticParticles.createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 10);
      }
    });
  });
}

/* ==========================================================
   7. INTERACTIVE LOVE ENVELOPE
   ========================================================== */
function initLoveEnvelope() {
  const envelope = document.getElementById('romanticEnvelope');
  const seal = document.getElementById('waxSeal');
  const openPrompt = document.getElementById('envelopePrompt');

  if (!envelope || !seal) return;

  function toggleEnvelope() {
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
      if (openPrompt) openPrompt.textContent = "Click again to fold our letter safely ❤️";
      if (window.romanticAudio) {
        window.romanticAudio.playWaxSealSound();
      }
      if (window.romanticParticles) {
        const rect = envelope.getBoundingClientRect();
        window.romanticParticles.createBurst(rect.left + rect.width / 2, rect.top + 60, 25);
      }
    } else {
      if (openPrompt) openPrompt.textContent = "Click wax seal to unfold Yash's heart letter ✨";
    }
  }

  seal.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleEnvelope();
  });

  envelope.addEventListener('click', (e) => {
    if (!e.target.closest('.letter-paper')) {
      toggleEnvelope();
    }
  });
}

/* ==========================================================
   8. LIVE LOVE COUNTER (Together Since 6th September 2026)
   ========================================================== */
function initLoveCounter() {
  // Officially together since proposal day: 6th September 2026
  const togetherStartDate = new Date('2026-09-06T00:00:00');

  function updateTicker() {
    const now = new Date();
    const diff = Math.max(0, now - togetherStartDate);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');
    const heroCounterEl = document.getElementById('heroDaysCounter');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    if (heroCounterEl) heroCounterEl.textContent = `${days} Days Together & Counting`;
  }

  updateTicker();
  setInterval(updateTicker, 1000);

  // Send heart reaction button in footer
  const sendHeartBtn = document.getElementById('sendHeartBtn');
  if (sendHeartBtn) {
    sendHeartBtn.addEventListener('click', () => {
      const heartCountEl = document.getElementById('heartsSentCount');
      if (heartCountEl) {
        let current = parseInt(heartCountEl.textContent || '1000');
        heartCountEl.textContent = current + 1;
      }
      sendHeartBtn.classList.add('pulse-anim');
      setTimeout(() => sendHeartBtn.classList.remove('pulse-anim'), 400);

      if (window.romanticAudio) {
        window.romanticAudio.playHeartSound();
      }

      if (window.romanticParticles) {
        window.romanticParticles.triggerLoveShower();
      }
    });
  }
}

/* ==========================================================
   9. INTERACTIVE LOVE WHISPERS JAR
   ========================================================== */
function initLoveWhispers() {
  const pickBtn = document.getElementById('pickWhisperBtn');
  const textEl = document.getElementById('whisperQuoteText');
  const countEl = document.getElementById('whisperIndexTag');
  const jarEl = document.getElementById('loveJarGraphic');

  if (!pickBtn || !textEl) return;

  let lastIndex = -1;

  function pickRandomWhisper() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * loveWhispers.length);
    } while (newIndex === lastIndex && loveWhispers.length > 1);

    lastIndex = newIndex;

    // Animation transition
    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(10px)';

    if (jarEl) {
      jarEl.classList.add('jar-shake');
      setTimeout(() => jarEl.classList.remove('jar-shake'), 600);
    }

    if (window.romanticAudio) {
      window.romanticAudio.playSparkleSound();
    }

    if (window.romanticParticles) {
      const rect = pickBtn.getBoundingClientRect();
      window.romanticParticles.createBurst(rect.left + rect.width / 2, rect.top, 18);
    }

    setTimeout(() => {
      textEl.textContent = `"${loveWhispers[newIndex]}"`;
      if (countEl) countEl.textContent = `Whisper #${newIndex + 1} of ${loveWhispers.length}`;
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
    }, 250);
  }

  pickBtn.addEventListener('click', pickRandomWhisper);
  if (jarEl) jarEl.addEventListener('click', pickRandomWhisper);
}

/* ==========================================================
   10. KEEPSAKE LETTER PRINT / SAVE
   ========================================================== */
function initLetterKeepsake() {
  const printBtn = document.getElementById('downloadLetterBtn');
  if (printBtn) {
    printBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.print();
    });
  }
}

/* ==========================================================
   11. SMOOTH SCROLLING & ACTIVE NAV LINKS (INCLUDING HEADER)
   ========================================================== */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Track scroll position for active pill indicator (includes header)
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('header[id], section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
      }
    });
  });
}
