/* assets/animation-timeline.js */
document.addEventListener('DOMContentLoaded', () => {
  // ---- Configuration ----
  const animations = [
    'ease-fade-in',
    'ease-slide-up',
    'ease-bounce',
    'ease-hover-grow',
    // Add more animation class names as needed
  ];

  // ---- DOM Elements ----
  const selector = document.getElementById('anim-selector');
  const preview = document.getElementById('anim-preview');
  const timeline = document.querySelector('.timeline');
  const delaySegment = document.createElement('div');
  const playhead = document.createElement('div');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const restartBtn = document.getElementById('restart-btn');
  const speedRange = document.getElementById('speed-range');
  const codeBox = document.getElementById('code-snippet');

  // Populate selector
  animations.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    selector.appendChild(opt);
  });

  // Helper to update preview and timeline
  function updateVisualization() {
    const animClass = selector.value;
    preview.className = ''; // reset
    preview.classList.add(animClass);
    // Compute duration & delay from computed style
    const style = getComputedStyle(preview);
    const rawDur = style.animationDuration || '0s';
    const rawDel = style.animationDelay || '0s';
    const dur = parseFloat(rawDur) * (rawDur.includes('ms') ? 1 : 1000);
    const del = parseFloat(rawDel) * (rawDel.includes('ms') ? 1 : 1000);
    const total = dur + del;
    // Build timeline elements
    timeline.innerHTML = '';
    const delayDiv = delaySegment.cloneNode();
    delayDiv.className = 'delay-segment';
    delayDiv.style.width = total ? `${(del / total) * 100}%` : '0%';
    timeline.appendChild(delayDiv);
    const activeDiv = document.createElement('div');
    activeDiv.style.flex = '1';
    activeDiv.style.background = 'var(--ease-color-primary, #7c3aed)';
    activeDiv.style.height = '100%';
    timeline.appendChild(activeDiv);
    const head = playhead.cloneNode();
    head.className = 'playhead';
    head.style.left = total ? `${(del / total) * 100}%` : '0%';
    timeline.appendChild(head);
    // Generate code snippet
    const snippet = `<div class="${animClass}"></div>`;
    codeBox.textContent = snippet;
    // Reset playback state
    preview.style.animationPlayState = 'running';
    playheadPos = 0;
    startTime = null;
    requestAnimationFrame(step);
  }

  // ---- Playback Controls ----
  let animationFrameId = null;
  let startTime = null;
  let playheadPos = 0; // in ms
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const speed = parseFloat(speedRange.value) || 1;
    const current = elapsed * speed;
    const totalDur = parseFloat(getComputedStyle(preview).animationDuration) * (getComputedStyle(preview).animationDuration.includes('ms') ? 1 : 1000) +
                     parseFloat(getComputedStyle(preview).animationDelay) * (getComputedStyle(preview).animationDelay.includes('ms') ? 1 : 1000);
    const percent = Math.min(current / totalDur, 1);
    const head = timeline.querySelector('.playhead');
    if (head) {
      head.style.left = `${percent * 100}%`;
    }
    if (percent < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      preview.style.animationPlayState = 'paused';
    }
  }

  function startPlayback() {
    cancelAnimationFrame(animationFrameId);
    startTime = null;
    preview.style.animationPlayState = 'running';
    animationFrameId = requestAnimationFrame(step);
  }

  function pausePlayback() {
    cancelAnimationFrame(animationFrameId);
    preview.style.animationPlayState = 'paused';
  }

  function restartPlayback() {
    cancelAnimationFrame(animationFrameId);
    preview.style.animationPlayState = 'running';
    // reset animation by reflow trick
    preview.style.animation = 'none';
    // force reflow
    void preview.offsetWidth;
    preview.style.animation = '';
    startTime = null;
    animationFrameId = requestAnimationFrame(step);
  }

  // Event Listeners
  selector.addEventListener('change', updateVisualization);
  playBtn.addEventListener('click', startPlayback);
  pauseBtn.addEventListener('click', pausePlayback);
  restartBtn.addEventListener('click', restartPlayback);
  speedRange.addEventListener('input', () => {
    // Adjust speed by modifying animation-duration multiplier
    const factor = parseFloat(speedRange.value);
    preview.style.animationDuration = `calc(${preview.style.animationDuration || '1s'} * ${factor})`;
    // Restart to apply new speed
    restartPlayback();
  });

  // Initialise with first animation
  updateVisualization();
});
