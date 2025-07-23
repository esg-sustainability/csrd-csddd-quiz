// Quiz Application Logic
class SustainabilityQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.timeBonus = 0;
        this.startTime = null;
        this.endTime = null;
        this.userAnswers = [];
        this.timer = null;
        this.elapsedTime = 0;
        
        this.initializeElements();
        this.bindEvents();
        this.showWelcomeScreen();
    }
    
    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
        // Welcome screen elements
        this.startButton = document.getElementById('start-quiz');
        
        // Quiz screen elements
        this.progressFill = document.getElementById('progress-fill');
        this.questionCounter = document.getElementById('question-counter');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.answersContainer = document.getElementById('answers-container');
        this.nextButton = document.getElementById('next-question');
        
        // Results screen elements
        this.finalScore = document.getElementById('final-score');
        this.performanceTitle = document.getElementById('performance-title');
        this.performanceDescription = document.getElementById('performance-description');
        this.correctAnswers = document.getElementById('correct-answers');
        this.timeBonusDisplay = document.getElementById('time-bonus');
        this.totalTimeDisplay = document.getElementById('total-time');
        this.shareLinkedInButton = document.getElementById('share-linkedin');
        this.restartButton = document.getElementById('restart-quiz');
        this.reviewButton = document.getElementById('review-answers');
        
        // Review screen elements
        this.backToResultsButton = document.getElementById('back-to-results');
        this.reviewContent = document.getElementById('review-content');
        
        // Modal elements
        this.feedbackModal = document.getElementById('feedback-modal');
        this.feedbackIcon = document.getElementById('feedback-icon');
        this.feedbackTitle = document.getElementById('feedback-title');
        this.feedbackExplanation = document.getElementById('feedback-explanation');
        this.closeFeedbackButton = document.getElementById('close-feedback');
    }
    
    bindEvents() {
        this.startButton.addEventListener('click', () => this.startQuiz());
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.restartButton.addEventListener('click', () => this.restartQuiz());
        this.shareLinkedInButton.addEventListener('click', () => this.shareOnLinkedIn());
        this.reviewButton.addEventListener('click', () => this.showReviewScreen());
        this.backToResultsButton.addEventListener('click', () => this.showResultsScreen());
        this.closeFeedbackButton.addEventListener('click', () => this.closeFeedback());
        
        // Close modal when clicking outside
        this.feedbackModal.addEventListener('click', (e) => {
            if (e.target === this.feedbackModal) {
                this.closeFeedback();
            }
        });
    }
    
    showWelcomeScreen() {
        this.hideAllScreens();
        this.welcomeScreen.classList.add('active');
    }
    
    showQuizScreen() {
        this.hideAllScreens();
        this.quizScreen.classList.add('active');
    }
    
    showResultsScreen() {
        this.hideAllScreens();
        this.resultsScreen.classList.add('active');
    }
    
    showReviewScreen() {
        this.hideAllScreens();
        this.reviewScreen.classList.add('active');
        this.generateReviewContent();
    }
    
    hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
    }
    
    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.timeBonus = 0;
        this.userAnswers = [];
        this.startTime = Date.now();
        this.elapsedTime = 0;
        
        this.showQuizScreen();
        this.startTimer();
        this.displayQuestion();
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            this.updateTimerDisplay();
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.endTime = Date.now();
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.elapsedTime / 60);
        const seconds = this.elapsedTime % 60;
        this.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    displayQuestion() {
        const question = quizData[this.currentQuestion];
        
        // Update progress
        const progress = ((this.currentQuestion + 1) / quizData.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionCounter.textContent = `${this.currentQuestion + 1} / ${quizData.length}`;
        
        // Display question
        this.questionText.textContent = question.question;
        
        // Clear previous answers
        this.answersContainer.innerHTML = '';
        
        // Create answer options
        question.options.forEach((option, index) => {
            const answerElement = this.createAnswerElement(option, index);
            this.answersContainer.appendChild(answerElement);
        });
        
        // Reset next button
        this.nextButton.disabled = true;
        this.nextButton.textContent = this.currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question';
    }
    
    createAnswerElement(option, index) {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.dataset.index = index;
        
        const optionLetter = document.createElement('span');
        optionLetter.className = 'option-letter';
        optionLetter.textContent = String.fromCharCode(65 + index); // A, B, C, D
        
        const optionText = document.createElement('span');
        optionText.textContent = option;
        
        answerDiv.appendChild(optionLetter);
        answerDiv.appendChild(optionText);
        
        answerDiv.addEventListener('click', () => this.selectAnswer(index));
        
        return answerDiv;
    }
    
    selectAnswer(selectedIndex) {
        // Remove previous selections
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Mark selected answer
        const selectedOption = document.querySelector(`[data-index="${selectedIndex}"]`);
        selectedOption.classList.add('selected');
        
        // Store user answer
        this.userAnswers[this.currentQuestion] = selectedIndex;
        
        // Enable next button
        this.nextButton.disabled = false;
    }
    
    nextQuestion() {
        const question = quizData[this.currentQuestion];
        const userAnswer = this.userAnswers[this.currentQuestion];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            this.score++;
        }
        
        // Show feedback
        this.showFeedback(isCorrect, question);
    }
    
    showFeedback(isCorrect, question) {
        this.feedbackIcon.textContent = isCorrect ? '✅' : '❌';
        this.feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Not quite right';
        this.feedbackExplanation.textContent = question.explanation;
        
        this.feedbackModal.classList.add('active');
        
        // Update answer options to show correct/incorrect
        this.highlightAnswers(question);
    }
    
    highlightAnswers(question) {
        const answerOptions = document.querySelectorAll('.answer-option');
        const userAnswer = this.userAnswers[this.currentQuestion];
        
        answerOptions.forEach((option, index) => {
            option.classList.add('disabled');
            
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === userAnswer && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
    }
    
    closeFeedback() {
        this.feedbackModal.classList.remove('active');
        
        if (this.currentQuestion < quizData.length - 1) {
            this.currentQuestion++;
            setTimeout(() => this.displayQuestion(), 300);
        } else {
            this.finishQuiz();
        }
    }
    
    finishQuiz() {
        this.stopTimer();
        this.calculateTimeBonus();
        this.showResults();
    }
    
    calculateTimeBonus() {
        const totalTime = this.elapsedTime;
        const averageTimePerQuestion = 20; // 20 seconds per question is good
        const idealTime = quizData.length * averageTimePerQuestion;
        
        if (totalTime <= idealTime) {
            this.timeBonus = Math.min(4, Math.floor((idealTime - totalTime) / 30));
        } else {
            this.timeBonus = 0;
        }
    }
    
    showResults() {
        this.showResultsScreen();
        
        const totalScore = this.score + this.timeBonus;
        const performance = this.getPerformanceLevel(totalScore);
        
        // Animate score reveal
        this.animateScore(totalScore);
        
        // Update performance info
        this.performanceTitle.textContent = `${performance.emoji} ${performance.title}`;
        this.performanceDescription.textContent = performance.description;
        
        // Update score breakdown
        this.correctAnswers.textContent = `${this.score}/${quizData.length}`;
        this.timeBonusDisplay.textContent = `+${this.timeBonus}`;
        
        const minutes = Math.floor(this.elapsedTime / 60);
        const seconds = this.elapsedTime % 60;
        this.totalTimeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    animateScore(targetScore) {
        let currentScore = 0;
        const increment = targetScore / 30; // Animate over 30 frames
        
        const animation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(animation);
            }
            this.finalScore.textContent = Math.floor(currentScore);
        }, 50);
    }
    
    getPerformanceLevel(score) {
        return performanceLevels.find(level => 
            score >= level.minScore && score <= level.maxScore
        ) || performanceLevels[performanceLevels.length - 1];
    }
    
    shareOnLinkedIn() {
        const totalScore = this.score + this.timeBonus;
        const performance = this.getPerformanceLevel(totalScore);
        
        const shareText = `I just completed the CSRD vs CSDD Sustainability Directive Challenge and scored ${totalScore}/20! ${performance.emoji} ${performance.title}
        
Test your knowledge of European sustainability directives that are shaping corporate responsibility. 

#Sustainability #CSRD #CSDD #ESG #CorporateResponsibility #Compliance`;
        
        const shareUrl = encodeURIComponent(window.location.href);
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&text=${encodeURIComponent(shareText)}`;
        
        window.open(linkedInUrl, '_blank', 'width=600,height=400');
    }
    
    generateReviewContent() {
        this.reviewContent.innerHTML = '';
        
        quizData.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answers">
                    <div class="review-answer ${isCorrect ? 'user-correct' : 'user-answer'}">
                        <strong>Your answer:</strong> ${question.options[userAnswer] || 'Not answered'}
                        ${isCorrect ? '✅' : '❌'}
                    </div>
                    ${!isCorrect ? `
                        <div class="review-answer correct-answer">
                            <strong>Correct answer:</strong> ${question.options[question.correct]} ✅
                        </div>
                    ` : ''}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            
            this.reviewContent.appendChild(reviewItem);
        });
    }
    
    restartQuiz() {
        this.startQuiz();
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SustainabilityQuiz();
});

