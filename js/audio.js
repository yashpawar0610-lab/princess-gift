/**
 * Romantic Ambient Audio Engine & Magical Sound Effects
 * Generates an ethereal, romantic ambient piano & celestial chime melody using Web Audio API.
 * Also supports optional external MP3 (assets/music.mp3) and interactive sparkle sound FX.
 */

class RomanticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.volume = 0.35;
    this.notes = [
      // Romantic key of F major / D minor warm chords (frequencies in Hz)
      [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F, A, C, E)
      [146.83, 220.00, 261.63, 349.23], // Dm7 (D, A, C, F)
      [130.81, 196.00, 261.63, 329.63], // Cmaj (C, G, C, E)
      [116.54, 174.61, 220.00, 261.63], // Bbmaj7 (Bb, F, A, C)
    ];
    this.chordIndex = 0;
    this.audioElement = null;
    this.initAudioElement();
    this.setupListeners();
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initAudioElement() {
    // Check if custom romantic track exists
    const audio = new Audio();
    audio.src = 'assets/music.mp3';
    audio.loop = true;
    audio.volume = this.volume;

    audio.addEventListener('canplaythrough', () => {
      this.audioElement = audio;
    });

    audio.addEventListener('error', () => {
      // Gracefully fall back to Web Audio synth if no custom mp3 file is provided
      this.audioElement = null;
    });
  }

  playTone(freq, time, duration, type = 'sine', gainVal = 0.15) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    // Warm envelope
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(gainVal * this.volume, time + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playPianoNote(freq, time, duration = 3.5) {
    // Fundamental tone
    this.playTone(freq, time, duration, 'sine', 0.18);
    // Soft harmonic overtone for warmth
    this.playTone(freq * 2, time + 0.02, duration * 0.7, 'triangle', 0.06);
    // Gentle sparkle chime overtone
    this.playTone(freq * 3, time + 0.04, duration * 0.4, 'sine', 0.02);
  }

  playChordArpeggio() {
    if (!this.ctx || !this.isPlaying) return;
    const chord = this.notes[this.chordIndex % this.notes.length];
    this.chordIndex++;

    const now = this.ctx.currentTime;
    // Play warm bass note
    this.playPianoNote(chord[0] / 2, now, 4.8);

    // Arpeggiate chord notes with dreamlike delay
    chord.forEach((note, index) => {
      const delay = index * 0.45;
      this.playPianoNote(note, now + delay, 3.8);
      // High sparkle echo
      if (index === 2 || index === 3) {
        this.playPianoNote(note * 2, now + delay + 0.25, 2.0);
      }
    });
  }

  /* ----------------------------------------------------
     Magical Sound Effects
     ---------------------------------------------------- */
  playSparkleSound() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Ethereal pentatonic cascade (C6, D6, E6, G6, A6, C7)
    const chimes = [1046.50, 1174.66, 1318.51, 1567.98, 1760.00, 2093.00];
    chimes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.0001, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.08, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.5);
    });
  }

  playWaxSealSound() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Resonant golden bell chord (F4, A4, C5, E5)
    [349.23, 440.00, 523.25, 659.25, 1046.50].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.12 / (idx + 1), now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.9);
    });
  }

  playHeartSound() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Sweet warm dual pulse
    [523.25, 659.25].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.1);

      gain.gain.setValueAtTime(0.0001, now + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.09, now + i * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.1);
      osc.stop(now + i * 0.1 + 0.4);
    });
  }

  toggle() {
    this.initContext();
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  start() {
    this.initContext();
    this.isPlaying = true;

    if (this.audioElement) {
      this.audioElement.play().catch(() => {
        // Fallback to synth if audio element playback is blocked
        this.playChordArpeggio();
        this.intervalId = setInterval(() => {
          if (this.isPlaying) this.playChordArpeggio();
        }, 3800);
      });
    } else {
      this.playChordArpeggio();
      this.intervalId = setInterval(() => {
        if (this.isPlaying) {
          this.playChordArpeggio();
        }
      }, 3800);
    }

    this.updateVisualizer(true);
  }

  stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.updateVisualizer(false);
  }

  updateVisualizer(playing) {
    const btn = document.getElementById('musicToggleBtn');
    const visualizer = document.querySelector('.audio-bars');
    const label = document.getElementById('musicStatusText');
    if (btn) {
      if (playing) {
        btn.classList.add('playing');
        if (visualizer) visualizer.classList.add('active');
        if (label) label.textContent = 'Melody Playing 🎵';
      } else {
        btn.classList.remove('playing');
        if (visualizer) visualizer.classList.remove('active');
        if (label) label.textContent = 'Play Perfect 🎵';
      }
    }
  }

  setupListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('musicToggleBtn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggle();
        });
      }
    });
  }
}

window.romanticAudio = new RomanticAudio();
