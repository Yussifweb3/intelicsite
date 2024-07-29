document.getElementById('toggle-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});

function loadTopic(topic) {
    let topicText = '';
    let videoSrc = '';
    switch (topic) {
        case 'topic1':
            topicText = 'This is the content for Topic 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            videoSrc = 'video1.mp4';
            break;
        case 'topic2':
            topicText = 'This is the content for Topic 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            videoSrc = 'video2.mp4';
            break;
        case 'topic3':
            topicText = 'This is the content for Topic 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
            videoSrc = 'video3.mp4';
            break;
        default:
            topicText = 'Select a topic to learn about.';
            videoSrc = '';
    }
    document.getElementById('topic-text').textContent = topicText;
    document.getElementById('topic-video').src = videoSrc;
}

document.getElementById('next-video').addEventListener('click', function() {
    let currentVideoSrc = document.getElementById('topic-video').src;
    let nextVideoSrc = '';
    switch (currentVideoSrc) {
        case 'video1.mp4':
            nextVideoSrc = 'video2.mp4';
            break;
        case 'video2.mp4':
            nextVideoSrc = 'video3.mp4';
            break;
        case 'video3.mp4':
            nextVideoSrc = 'video1.mp4';
            break;
        default:
            nextVideoSrc = 'video1.mp4';
    }
    document.getElementById('topic-video').src = nextVideoSrc;
});

function openAISearch() {
    document.getElementById('ai-search').classList.remove('hidden');
}

function closeAISearch() {
    document.getElementById('ai-search').classList.add('hidden');
}

function toggleLanguageMenu() {
    document.getElementById('language-menu').classList.toggle('hidden');
}

let currentLanguage = 'en';

function setLanguage(language) {
    currentLanguage = language;
    document.getElementById('language-menu').classList.add('hidden');
}

async function searchSURFERY() {
    let query = document.getElementById('ai-search-input').value;

    // Replace 'YOUR_API_KEY' with your actual OpenAI API key
    const apiKey = 'YOUR_API_KEY';

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: `Translate this into ${currentLanguage}: ${query}`,
            max_tokens: 150
        })
    });

    const data = await response.json();
    const results = data.choices[0].text.trim();

    const resultContainer = document.createElement('div');
    resultContainer.classList.add('ai-result');
    resultContainer.textContent = results;

    document.getElementById('ai-search-results').appendChild(resultContainer);
}
