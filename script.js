// Variables globales
let gameActive = false;
let gameScore = 0;
let gameTime = 10;
let gameInterval;

// Iniciar la celebración (pantalla de inicio)
function startCelebration() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    // Crear explosión de efectos
    createMassiveConfetti();
    createFireworks(window.innerWidth / 2, window.innerHeight / 2);
    
    // Transición
    setTimeout(() => {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Iniciar efectos automáticos
        startAutoEffects();
    }, 1000);
}

// Crear confeti
function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1', '#ffd93d'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Crear confeti masivo
function createMassiveConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1', '#ffd93d'];
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = '0s';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 20);
    }
}

// Crear globos
function createBalloons() {
    const balloons = ['🎈', '🎉', '🎊', '🎁', '✨', '🌟', '💝'];
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloons';
        balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), 6000);
    }
}

// Crear fuegos artificiales
function createFireworks(x, y) {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1'];
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 50 + Math.random() * 50;
        firework.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
        firework.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
        
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
}

// Crear destellos
function createSparkles() {
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
}

// Función de celebración
function celebrate() {
    createConfetti();
    createBalloons();
    createSparkles();
    
    // Fuegos artificiales aleatorios
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFireworks(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 200);
    }
}

// Mega celebración final
function megaCelebration() {
    // Explosión masiva de efectos
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createMassiveConfetti();
            createBalloons();
            createSparkles();
        }, i * 300);
    }
    
    // Múltiples fuegos artificiales
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFireworks(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 150);
    }
}

// Abrir sobre y mostrar carta en modal
function openEnvelope() {
    const modal = document.getElementById('letter-modal');
    
    // Efectos visuales
    createSparkles();
    createFireworks(window.innerWidth / 2, window.innerHeight / 2);
    
    // Mostrar modal con carta
    modal.classList.remove('hidden');
}

// Cerrar carta
function closeLetter() {
    const modal = document.getElementById('letter-modal');
    modal.classList.add('hidden');
}

// Abrir regalo
function openGift(giftNumber) {
    const gift = document.getElementById('gift-' + giftNumber);
    const closed = gift.querySelector('.gift-closed');
    const opened = gift.querySelector('.gift-opened');
    
    if (!opened.classList.contains('hidden')) {
        return; // Ya está abierto
    }
    
    closed.classList.add('hidden');
    opened.classList.remove('hidden');
    
    // Efectos al abrir
    createFireworks(
        gift.getBoundingClientRect().left + gift.offsetWidth / 2,
        gift.getBoundingClientRect().top + gift.offsetHeight / 2
    );
    createSparkles();
}

// Voltear tarjeta de foto
function flipCard(cardNumber) {
    const card = document.getElementById('card-' + cardNumber);
    const wasFlipped = card.classList.contains('flipped');
    
    card.classList.toggle('flipped');
    
    // Si es la tarjeta de video y se está volteando hacia el frente
    if (cardNumber === 4 && !wasFlipped) {
        setTimeout(() => {
            const video = document.getElementById('preview-video-4');
            if (video) {
                video.play().catch(e => console.log('Autoplay prevented:', e));
            }
        }, 400); // Esperar a que termine la animación de volteo
    } else if (cardNumber === 4 && wasFlipped) {
        // Si se voltea de regreso, pausar el video
        const video = document.getElementById('preview-video-4');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
    
    // Efecto al voltear
    createSparkles();
}

// Mostrar foto/video en modal
function showPhoto(photoNumber, mediaSrc, mediaType) {
    const modal = document.getElementById('photo-modal');
    const modalPhoto = document.getElementById('modal-photo');
    
    if (mediaType === 'video') {
        // Crear video en el modal con controles y audio fuerte
        modalPhoto.innerHTML = `
            <video id="modal-video" controls autoplay playsinline preload="auto">
                <source src="${mediaSrc}" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `;
        
        // Configurar volumen al máximo inmediatamente
        setTimeout(() => {
            const modalVideo = document.getElementById('modal-video');
            if (modalVideo) {
                modalVideo.volume = 1.0; // Volumen al 100%
                
                // Asegurar que el audio esté habilitado
                modalVideo.muted = false;
                
                // Pausar el video de preview si existe
                const previewVideo = document.getElementById('preview-video-4');
                if (previewVideo) {
                    previewVideo.pause();
                }
                
                // Intentar reproducir con audio
                const playPromise = modalVideo.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('Video reproduciéndose con audio al máximo');
                    }).catch(e => {
                        console.log('Error de autoplay, el usuario debe iniciar manualmente:', e);
                        // El usuario tendrá que dar play manualmente
                    });
                }
            }
        }, 100);
    } else {
        // Crear imagen en el modal
        modalPhoto.innerHTML = `<img src="${mediaSrc}" alt="Foto ${photoNumber}">`;
    }
    
    modal.classList.remove('hidden');
    createSparkles();
    createFireworks(window.innerWidth / 2, window.innerHeight / 2);
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('photo-modal');
    const modalPhoto = document.getElementById('modal-photo');
    
    // Si hay un video, pausarlo antes de cerrar
    const video = modalPhoto.querySelector('video');
    if (video) {
        video.pause();
    }
    
    modal.classList.add('hidden');
}

// Mini-juego: Apagar velas
function startGame() {
    if (gameActive) return;
    
    gameActive = true;
    gameScore = 0;
    gameTime = 10;
    
    const button = document.getElementById('game-button');
    const result = document.getElementById('game-result');
    const candlesContainer = document.getElementById('candles-container');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    
    button.disabled = true;
    button.textContent = '¡Juego en curso! 🔥';
    result.classList.add('hidden');
    
    // Actualizar displays
    scoreDisplay.textContent = '0';
    timerDisplay.textContent = '10';
    
    // Crear velas
    candlesContainer.innerHTML = '';
    for (let i = 0; i < 15; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle';
        candle.textContent = '🕯️';
        candle.onclick = function() { blowCandle(this); };
        candlesContainer.appendChild(candle);
    }
    
    // Temporizador
    gameInterval = setInterval(() => {
        gameTime--;
        timerDisplay.textContent = gameTime;
        
        if (gameTime <= 0) {
            endGame();
        }
    }, 1000);
}

function blowCandle(candle) {
    if (!gameActive || candle.classList.contains('blown')) return;
    
    candle.classList.add('blown');
    candle.textContent = '💨';
    gameScore++;
    
    document.getElementById('score').textContent = gameScore;
    
    // Efecto visual
    createSparkles();
}

function endGame() {
    gameActive = false;
    clearInterval(gameInterval);
    
    const button = document.getElementById('game-button');
    const result = document.getElementById('game-result');
    
    button.disabled = false;
    button.textContent = '¡Jugar de nuevo! 🎯';
    
    // Mostrar resultado
    let message = '';
    if (gameScore >= 15) {
        message = '<h4>🏆 ¡PERFECTO! 🏆</h4><p>¡Apagaste todas las velas! ¡Eres increíble!</p>';
        megaCelebration();
    } else if (gameScore >= 10) {
        message = '<h4>🌟 ¡Excelente! 🌟</h4><p>¡Apagaste ' + gameScore + ' velas! ¡Muy bien!</p>';
        celebrate();
    } else if (gameScore >= 5) {
        message = '<h4>👏 ¡Bien hecho! 👏</h4><p>Apagaste ' + gameScore + ' velas. ¡Intenta de nuevo!</p>';
        createConfetti();
    } else {
        message = '<h4>💪 ¡Sigue intentando! 💪</h4><p>Apagaste ' + gameScore + ' velas. ¡Puedes hacerlo mejor!</p>';
    }
    
    result.innerHTML = message;
    result.classList.remove('hidden');
}

// Efectos automáticos
function startAutoEffects() {
    setInterval(createConfetti, 4000);
    setInterval(createBalloons, 5000);
    setInterval(createSparkles, 6000);
}

// Iniciar con confeti y globos
window.addEventListener('load', () => {
    // Efectos iniciales en la pantalla de inicio
    createConfetti();
    createBalloons();
});