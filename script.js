// Digit Selection
document.querySelectorAll('.digit-box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.digit-box').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        const digit = this.getAttribute('data-digit');
        updatePayouts(digit);
        showNotification(`Digit ${digit} selected`);
    });
});

// Number Pad
document.querySelectorAll('.pad-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const number = this.textContent;
        handleNumberInput(number);
    });
});

// Over/Under Buttons
document.querySelector('.btn-over').addEventListener('click', function() {
    placeTrade('Over');
});

document.querySelector('.btn-under').addEventListener('click', function() {
    placeTrade('Under');
});

// Keyboard Support
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        handleNumberInput(event.key);
    } else if (event.key === 'Enter') {
        const selected = document.querySelector('.digit-box.selected');
        if (selected) {
            placeTrade('Enter');
        }
    }
});

// Asset Header - Dropdown functionality
document.querySelector('.asset-header').addEventListener('click', function() {
    showNotification('Asset selector opened');
});

// Navigation Items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const sectionName = this.querySelector('span:last-child').textContent;
        showNotification(`Opened: ${sectionName}`);
    });
});

// Deposit Button
document.querySelector('.deposit-btn').addEventListener('click', function() {
    showNotification('Deposit page opened');
});

// Arrows Navigation
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const direction = this.classList.contains('left') ? 'Left' : 'Right';
        showNotification(`Scrolling ${direction}`);
    });
});

// AI Assistant
document.querySelector('.ai-assistant').addEventListener('click', function() {
    showNotification('AI Assistant opened');
});

// Helper Functions
function handleNumberInput(number) {
    const padBtn = Array.from(document.querySelectorAll('.pad-btn')).find(
        btn => btn.textContent === number
    );
    
    if (padBtn) {
        document.querySelectorAll('.pad-btn').forEach(btn => btn.classList.remove('selected'));
        padBtn.classList.add('selected');
    }
    
    selectDigit(number);
}

function selectDigit(digit) {
    const boxes = document.querySelectorAll('.digit-box');
    boxes.forEach(box => box.classList.remove('selected'));
    
    const selectedBox = document.querySelector(`[data-digit="${digit}"]`);
    if (selectedBox) {
        selectedBox.classList.add('selected');
        updatePayouts(digit);
    }
}

function updatePayouts(digit) {
    // Simulate payout calculation
    const baseOverPayout = 22.62;
    const baseUnderPayout = 18.45;
    
    const randomFactor = (Math.random() * 0.1) + 0.95;
    const newOverPayout = (baseOverPayout * randomFactor).toFixed(2);
    const newUnderPayout = (baseUnderPayout * randomFactor).toFixed(2);
    
    document.querySelector('.btn-over .payout-amount').textContent = `${newOverPayout} USD`;
    document.querySelector('.btn-under .payout-amount').textContent = `${newUnderPayout} USD`;
}

function placeTrade(direction) {
    const selectedDigit = document.querySelector('.digit-box.selected');
    const selectedNumber = document.querySelector('.pad-btn.selected');
    
    if (selectedDigit && selectedNumber) {
        const digit = selectedDigit.getAttribute('data-digit');
        const number = selectedNumber.textContent;
        const stake = document.querySelector('.amount').textContent;
        
        showNotification(`Trade placed: ${direction} on Digit ${digit} | Stake: ${stake}`);
        
        // Reset selections
        setTimeout(() => {
            document.querySelectorAll('.digit-box').forEach(b => b.classList.remove('selected'));
            document.querySelectorAll('.pad-btn').forEach(b => b.classList.remove('selected'));
            document.querySelector('.digit-box').classList.add('selected');
            document.querySelector('.pad-btn:nth-child(5)').classList.add('selected');
        }, 2000);
    } else {
        showNotification('Please select a digit and number');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #1ebea5, #0ea59a);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(30, 190, 165, 0.4);
        animation: slideDown 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showNotification('Welcome to Deriv Trading Platform');
});