document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const moodForm = document.getElementById('mood-form');
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    const tasksDiv = document.getElementById('tasks');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginPage.style.display = 'none';
        homePage.style.display = 'block';
    });

    moodForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const mood = document.getElementById('mood').value;
        let tasks = '';

        switch(mood) {
            case 'happy':
                tasks = '<p>Enjoy your day! Spread happiness around.</p>';
                break;
            case 'sad':
                tasks = '<p>Take a walk outside and get some fresh air.</p>';
                break;
            case 'anxious':
                tasks = '<p>Take deep breaths. Practice mindfulness or meditation.</p>';
                break;
            case 'angry':
                tasks = '<p>Try to calm down by listening to some soothing music.</p>';
                break;
            case 'tired':
                tasks = '<p>Get some rest or take a short nap if possible.</p>';
                break;
            default:
                tasks = '<p>Take care!</p>';
                break;
        }

        tasksDiv.innerHTML = tasks;
    });
});
