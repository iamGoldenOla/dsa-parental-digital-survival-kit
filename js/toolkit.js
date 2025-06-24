console.log('toolkit.js loaded');
// Age-specific resources tabs
document.addEventListener('DOMContentLoaded', function() {
    const ageTabs = document.querySelectorAll('.age-tab');
    const agePanels = document.querySelectorAll('.age-panel');

    ageTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            ageTabs.forEach(t => t.classList.remove('active'));
            agePanels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding panel
            const age = tab.dataset.age;
            document.getElementById(age).classList.add('active');
        });
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Interactive tools
    const toolButtons = document.querySelectorAll('.tool-btn');

    toolButtons.forEach(button => {
        button.addEventListener('click', () => {
            const toolType = button.parentElement.querySelector('h3').textContent.toLowerCase();
            openTool(toolType);
        });
    });
});

// Tool functions
function openTool(toolType) {
    switch (toolType) {
        case 'screen-time':
            openScreenTimeCalculator();
            break;
        case 'conversation':
            openConversationStarters();
            break;
        case 'quiz':
            openSafetyQuiz();
            break;
        default:
            console.log('Tool not implemented:', toolType);
    }
}

function openScreenTimeCalculator() {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Screen Time Calculator</h2>
            <form id="screenTimeForm">
                <div class="form-group">
                    <label for="age">Child's Age:</label>
                    <select id="age" required>
                        <option value="">Select age</option>
                        <option value="2-5">2-5 years</option>
                        <option value="6-12">6-12 years</option>
                        <option value="13-17">13-17 years</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="activities">Daily Activities:</label>
                    <div class="activity-list">
                        <label>
                            <input type="checkbox" name="activities" value="school"> School work
                        </label>
                        <label>
                            <input type="checkbox" name="activities" value="homework"> Homework
                        </label>
                        <label>
                            <input type="checkbox" name="activities" value="entertainment"> Entertainment
                        </label>
                        <label>
                            <input type="checkbox" name="activities" value="social"> Social media
                        </label>
                    </div>
                </div>
                <button type="submit" class="calculate-btn">Calculate</button>
            </form>
            <div id="screenTimeResult" class="result-container"></div>
        </div>
    `;

    // Add modal to page
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };

    // Handle form submission
    const form = modal.querySelector('#screenTimeForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        calculateScreenTime(form);
    };
}

function calculateScreenTime(form) {
    const age = form.querySelector('#age').value;
    const activities = Array.from(form.querySelectorAll('input[name="activities"]:checked'))
        .map(input => input.value);

    let recommendedTime = 0;
    let recommendations = [];

    // Age-based recommendations
    switch (age) {
        case '2-5':
            recommendedTime = 60; // 1 hour
            recommendations = [
                'Limit screen time to 1 hour per day',
                'Focus on educational content',
                'Watch together with your child',
                'Avoid screens before bedtime'
            ];
            break;
        case '6-12':
            recommendedTime = 120; // 2 hours
            recommendations = [
                'Limit recreational screen time to 2 hours per day',
                'Balance with physical activity',
                'Set clear rules for device use',
                'Monitor content and online activities'
            ];
            break;
        case '13-17':
            recommendedTime = 180; // 3 hours
            recommendations = [
                'Set reasonable limits based on activities',
                'Encourage responsible device use',
                'Discuss online safety regularly',
                'Balance screen time with other activities'
            ];
            break;
    }

    // Activity-based adjustments
    if (activities.includes('school') || activities.includes('homework')) {
        recommendedTime += 60; // Add 1 hour for educational use
    }

    // Display results
    const resultContainer = form.parentElement.querySelector('#screenTimeResult');
    resultContainer.innerHTML = `
        <h3>Recommended Screen Time: ${recommendedTime} minutes per day</h3>
        <div class="recommendations">
            <h4>Recommendations:</h4>
            <ul>
                ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    `;
}

function openConversationStarters() {
    const conversationTopics = {
        'young': [
            'What was your favorite thing to do online today?',
            'Did you see anything that made you feel happy or sad?',
            'Who did you talk to online today?',
            'What would you do if someone you don\'t know tries to talk to you?'
        ],
        'tween': [
            'What apps or games are popular with your friends?',
            'How do you decide what to share online?',
            'Have you ever seen something online that made you uncomfortable?',
            'What do you think about privacy settings?'
        ],
        'teen': [
            'How do you manage your digital footprint?',
            'What are your thoughts on social media pressure?',
            'How do you handle online disagreements?',
            'What are your strategies for balancing screen time?'
        ]
    };

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Conversation Starters</h2>
            <div class="age-selector">
                <button class="age-btn active" data-age="young">Young Children</button>
                <button class="age-btn" data-age="tween">Tweens</button>
                <button class="age-btn" data-age="teen">Teens</button>
            </div>
            <div class="topics-container">
                <div class="topic-list" id="young-topics">
                    ${conversationTopics.young.map(topic => `
                        <div class="topic-card">
                            <p>${topic}</p>
                            <button class="copy-btn" data-topic="${topic}">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };

    // Age selection
    const ageButtons = modal.querySelectorAll('.age-btn');
    ageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            ageButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTopics(btn.dataset.age);
        });
    });

    // Copy topic functionality
    modal.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.dataset.topic;
            navigator.clipboard.writeText(topic).then(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            });
        });
    });

    function updateTopics(age) {
        const container = modal.querySelector('.topics-container');
        container.innerHTML = `
            <div class="topic-list">
                ${conversationTopics[age].map(topic => `
                    <div class="topic-card">
                        <p>${topic}</p>
                        <button class="copy-btn" data-topic="${topic}">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        // Reattach copy functionality
        container.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const topic = btn.dataset.topic;
                navigator.clipboard.writeText(topic).then(() => {
                    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    }, 2000);
                });
            });
        });
    }
}

function openSafetyQuiz() {
    const quizQuestions = [
        {
            question: 'What should you do if your child receives a friend request from someone they don\'t know?',
            options: [
                'Accept the request and monitor their interactions',
                'Decline the request and discuss online safety',
                'Ask your child to accept and report any suspicious behavior',
                'Ignore the request'
            ],
            correct: 1
        },
        {
            question: 'Which of these is NOT a good practice for managing screen time?',
            options: [
                'Setting specific time limits for different activities',
                'Using parental control apps',
                'Allowing unlimited screen time on weekends',
                'Creating a family media plan'
            ],
            correct: 2
        },
        {
            question: 'What\'s the best way to protect your child\'s privacy online?',
            options: [
                'Share their achievements on social media',
                'Use their real name in usernames',
                'Enable privacy settings and discuss what information to keep private',
                'Allow them to share their location with friends'
            ],
            correct: 2
        }
    ];

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Digital Safety Quiz</h2>
            <div class="quiz-container">
                <div class="quiz-progress">
                    Question <span id="currentQuestion">1</span> of ${quizQuestions.length}
                </div>
                <div id="quizContent"></div>
                <div class="quiz-navigation">
                    <button id="prevBtn" disabled>Previous</button>
                    <button id="nextBtn">Next</button>
                </div>
            </div>
            <div id="quizResults" class="results-container" style="display: none;"></div>
        </div>
    `;

    // Add modal to page
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };

    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizQuestions.length).fill(null);

    function displayQuestion(index) {
        const question = quizQuestions[index];
        const quizContent = modal.querySelector('#quizContent');
        const currentQuestionSpan = modal.querySelector('#currentQuestion');
        const prevBtn = modal.querySelector('#prevBtn');
        const nextBtn = modal.querySelector('#nextBtn');

        currentQuestionSpan.textContent = index + 1;
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === quizQuestions.length - 1 ? 'Finish' : 'Next';

        quizContent.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, i) => `
                        <label class="option">
                            <input type="radio" name="answer" value="${i}" 
                                ${userAnswers[index] === i ? 'checked' : ''}>
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;

        // Handle answer selection
        quizContent.querySelectorAll('input[name="answer"]').forEach(input => {
            input.addEventListener('change', (e) => {
                userAnswers[index] = parseInt(e.target.value);
            });
        });
    }

    // Navigation buttons
    const prevBtn = modal.querySelector('#prevBtn');
    const nextBtn = modal.querySelector('#nextBtn');

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    });

    function showResults() {
        const results = userAnswers.map((answer, index) => ({
            correct: answer === quizQuestions[index].correct,
            question: quizQuestions[index].question,
            userAnswer: quizQuestions[index].options[answer],
            correctAnswer: quizQuestions[index].options[quizQuestions[index].correct]
        }));

        const score = results.filter(r => r.correct).length;
        const percentage = (score / quizQuestions.length) * 100;

        const resultsContainer = modal.querySelector('#quizResults');
        resultsContainer.innerHTML = `
            <h3>Quiz Results</h3>
            <div class="score">
                <p>Your score: ${score}/${quizQuestions.length} (${percentage}%)</p>
            </div>
            <div class="answers-review">
                ${results.map((result, index) => `
                    <div class="answer-item ${result.correct ? 'correct' : 'incorrect'}">
                        <h4>Question ${index + 1}</h4>
                        <p>${result.question}</p>
                        <p>Your answer: ${result.userAnswer}</p>
                        ${!result.correct ? `<p>Correct answer: ${result.correctAnswer}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            <button class="retry-btn" onclick="openSafetyQuiz()">Try Again</button>
        `;

        modal.querySelector('.quiz-container').style.display = 'none';
        resultsContainer.style.display = 'block';
    }

    // Display first question
    displayQuestion(0);
}

// Add styles for the modal
const style = document.createElement('style');
style.textContent = `
    .tool-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
    }

    .form-group select,
    .form-group input[type="text"] {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .activity-list {
        display: grid;
        gap: 0.5rem;
    }

    .calculate-btn,
    .retry-btn {
        background-color: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1rem;
    }

    .result-container {
        margin-top: 1rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 5px;
    }

    .recommendations ul {
        list-style: none;
        padding: 0;
    }

    .recommendations li {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
    }

    .recommendations li:before {
        content: "•";
        color: var(--primary-color);
        position: absolute;
        left: 0;
    }

    .age-selector {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .age-btn {
        padding: 0.5rem 1rem;
        border: 2px solid var(--primary-color);
        background: none;
        color: var(--primary-color);
        border-radius: 5px;
        cursor: pointer;
    }

    .age-btn.active {
        background: var(--primary-color);
        color: white;
    }

    .topic-card {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copy-btn {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;
    }

    .quiz-progress {
        margin-bottom: 1rem;
        color: #666;
    }

    .question {
        margin-bottom: 1rem;
    }

    .options {
        display: grid;
        gap: 0.5rem;
    }

    .option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
    }

    .option:hover {
        background: #f8f9fa;
    }

    .quiz-navigation {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    .quiz-navigation button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .quiz-navigation button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .quiz-navigation button:not(:disabled) {
        background: var(--primary-color);
        color: white;
    }

    .results-container {
        text-align: center;
    }

    .score {
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    .answer-item {
        text-align: left;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
    }

    .answer-item.correct {
        background: #e8f5e9;
        border: 1px solid #81c784;
    }

    .answer-item.incorrect {
        background: #ffebee;
        border: 1px solid #e57373;
    }
`;

document.head.appendChild(style); 