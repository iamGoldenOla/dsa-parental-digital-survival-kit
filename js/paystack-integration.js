// Paystack Integration for DSA Parent Toolkit
class PaystackPayment {
    constructor() {
        this.publicKey = 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Replace with your Paystack public key
        this.baseURL = 'https://api.paystack.co';
        this.initializePaystack();
    }

    initializePaystack() {
        // Load Paystack script if not already loaded
        if (!window.PaystackPop) {
            const script = document.createElement('script');
            script.src = 'https://js.paystack.co/v1/inline.js';
            document.head.appendChild(script);
        }
    }

    // Initialize payment for premium subscription
    async initializePayment(plan, email, amount) {
        try {
            const handler = PaystackPop.setup({
                key: this.publicKey,
                email: email,
                amount: amount * 100, // Paystack expects amount in kobo
                currency: 'NGN',
                ref: 'DSA_' + Math.floor((Math.random() * 1000000000) + 1),
                callback: (response) => {
                    this.handlePaymentSuccess(response, plan);
                },
                onClose: () => {
                    this.handlePaymentClose();
                }
            });
            handler.openIframe();
        } catch (error) {
            console.error('Payment initialization failed:', error);
            this.showNotification('Payment initialization failed. Please try again.', 'error');
        }
    }

    // Handle successful payment
    async handlePaymentSuccess(response, plan) {
        try {
            // Store user subscription data
            this.storeSubscriptionData(plan, response.reference);
            
            // Show success message
            this.showNotification('Payment successful! Welcome to Premium!', 'success');
            
            // Redirect to premium content
            setTimeout(() => {
                window.location.href = '/premium-dashboard.html';
            }, 2000);
        } catch (error) {
            console.error('Payment verification failed:', error);
            this.showNotification('Payment verification failed. Please contact support.', 'error');
        }
    }

    // Store subscription data in localStorage (for demo purposes)
    storeSubscriptionData(plan, reference) {
        const subscriptionData = {
            plan: plan,
            reference: reference,
            startDate: new Date().toISOString(),
            endDate: this.calculateEndDate(plan),
            status: 'active'
        };
        
        localStorage.setItem('dsa_subscription', JSON.stringify(subscriptionData));
        localStorage.setItem('dsa_premium_user', 'true');
    }

    // Calculate subscription end date
    calculateEndDate(plan) {
        const now = new Date();
        if (plan === 'monthly') {
            return new Date(now.setMonth(now.getMonth() + 1)).toISOString();
        } else if (plan === 'yearly') {
            return new Date(now.setFullYear(now.getFullYear() + 1)).toISOString();
        }
        return now.toISOString();
    }

    // Handle payment close
    handlePaymentClose() {
        this.showNotification('Payment cancelled. You can try again anytime.', 'info');
    }

    // Check if user has active subscription
    checkSubscriptionStatus() {
        const subscription = localStorage.getItem('dsa_subscription');
        if (!subscription) return false;

        const subData = JSON.parse(subscription);
        const now = new Date();
        const endDate = new Date(subData.endDate);

        return subData.status === 'active' && endDate > now;
    }

    // Get subscription details
    getSubscriptionDetails() {
        const subscription = localStorage.getItem('dsa_subscription');
        return subscription ? JSON.parse(subscription) : null;
    }

    // Logout user
    logout() {
        localStorage.removeItem('dsa_subscription');
        localStorage.removeItem('dsa_premium_user');
        window.location.href = '/';
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Premium Content Manager
class PremiumContentManager {
    constructor() {
        this.paystack = new PaystackPayment();
        this.initializePremiumFeatures();
    }

    initializePremiumFeatures() {
        // Check subscription status on page load
        this.checkAccess();
        
        // Add premium content overlays
        this.addPremiumOverlays();
        
        // Initialize payment buttons
        this.initializePaymentButtons();
    }

    // Check if user has access to premium content
    checkAccess() {
        const hasAccess = this.paystack.checkSubscriptionStatus();
        
        if (hasAccess) {
            this.showPremiumContent();
        } else {
            this.hidePremiumContent();
        }
    }

    // Show premium content
    showPremiumContent() {
        const premiumElements = document.querySelectorAll('.premium-content');
        premiumElements.forEach(element => {
            element.style.display = 'block';
        });

        const premiumOverlays = document.querySelectorAll('.premium-overlay');
        premiumOverlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
    }

    // Hide premium content
    hidePremiumContent() {
        const premiumElements = document.querySelectorAll('.premium-content');
        premiumElements.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Add premium overlays to content
    addPremiumOverlays() {
        const premiumElements = document.querySelectorAll('.premium-content');
        
        premiumElements.forEach(element => {
            if (!element.querySelector('.premium-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'premium-overlay';
                overlay.innerHTML = `
                    <div class="premium-lock">
                        <i class="fas fa-lock"></i>
                        <h3>Premium Content</h3>
                        <p>Upgrade to access this exclusive content</p>
                        <button class="upgrade-btn" onclick="premiumManager.showUpgradeModal()">
                            Upgrade Now
                        </button>
                    </div>
                `;
                element.appendChild(overlay);
            }
        });
    }

    // Initialize payment buttons
    initializePaymentButtons() {
        const paymentButtons = document.querySelectorAll('.payment-btn');
        
        paymentButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const plan = button.getAttribute('data-plan');
                const amount = button.getAttribute('data-amount');
                this.showPaymentModal(plan, amount);
            });
        });
    }

    // Show payment modal
    showPaymentModal(plan, amount) {
        const modal = document.createElement('div');
        modal.className = 'payment-modal';
        modal.innerHTML = `
            <div class="payment-modal-content">
                <span class="close">&times;</span>
                <h2>Upgrade to Premium</h2>
                <p>Get access to exclusive content and tools</p>
                
                <form id="payment-form">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" required>
                    </div>
                    
                    <div class="plan-details">
                        <h3>${plan === 'monthly' ? 'Monthly Plan' : 'Yearly Plan'}</h3>
                        <p class="price">₦${amount}</p>
                        <ul>
                            <li>✓ Exclusive articles and guides</li>
                            <li>✓ Full toolkit access</li>
                            <li>✓ Expert Q&A sessions</li>
                            <li>✓ Community access</li>
                            <li>✓ Downloadable resources</li>
                        </ul>
                    </div>
                    
                    <button type="submit" class="pay-btn">
                        Pay ₦${amount}
                    </button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => {
            document.body.removeChild(modal);
        };
        
        // Handle form submission
        const form = modal.querySelector('#payment-form');
        form.onsubmit = (e) => {
            e.preventDefault();
            const email = form.querySelector('#email').value;
            this.paystack.initializePayment(plan, email, amount);
            document.body.removeChild(modal);
        };
    }

    // Show upgrade modal
    showUpgradeModal() {
        this.showPaymentModal('monthly', '2999');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.premiumManager = new PremiumContentManager();
}); 