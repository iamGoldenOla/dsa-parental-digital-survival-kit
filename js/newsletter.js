document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            try {
                // In a real application, this would be an API endpoint
                // For now, we'll simulate a successful subscription
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Clear the form
                emailInput.value = '';
                
                // Show success message
                showMessage('Thank you for subscribing to our newsletter!', 'success');

                // Store the subscription in localStorage
                const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
                subscriptions.push({
                    email: email,
                    date: new Date().toISOString()
                });
                localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));

            } catch (error) {
                showMessage('Sorry, there was an error processing your subscription. Please try again.', 'error');
            }
        });
    }

    function showMessage(message, type) {
        if (newsletterMessage) {
            newsletterMessage.textContent = message;
            newsletterMessage.className = `newsletter-message ${type}`;

            // Add styles for message types
            const messageStyles = document.createElement('style');
            messageStyles.textContent = `
                .newsletter-message {
                    margin-top: 1rem;
                    padding: 0.75rem;
                    border-radius: 5px;
                    font-weight: 500;
                }

                .newsletter-message.success {
                    background-color: #d4edda;
                    color: #155724;
                    border: 1px solid #c3e6cb;
                }

                .newsletter-message.error {
                    background-color: #f8d7da;
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                }
            `;
            document.head.appendChild(messageStyles);

            // Clear message after 5 seconds
            setTimeout(() => {
                newsletterMessage.textContent = '';
                newsletterMessage.className = 'newsletter-message';
            }, 5000);
        }
    }

    // Check if email is already subscribed
    function isSubscribed(email) {
        const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
        return subscriptions.some(sub => sub.email === email);
    }

    // Add input validation styles
    const inputStyles = document.createElement('style');
    inputStyles.textContent = `
        .newsletter-form input:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--primary-color);
        }

        .newsletter-form input.error {
            border-color: #dc3545;
            box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
        }

        .subscribe-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(inputStyles);
}); 