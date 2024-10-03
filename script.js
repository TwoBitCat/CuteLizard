document.getElementById('lizard').addEventListener('click', function() {
    const lizard = document.getElementById('lizard');
    const message = document.getElementById('message');
    const heartsContainer = document.getElementById('hearts-container');
    
    lizard.classList.add('animate');
    message.textContent = 'I love you!';
    message.classList.add('show');
    
    // Create hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    // Create sparkles
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        heartsContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
    
    setTimeout(() => {
        lizard.classList.remove('animate');
        message.classList.remove('show');
    }, 1000);
});
