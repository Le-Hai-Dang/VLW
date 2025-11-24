// Page Navigation
function showCreatePage() {
    document.getElementById('page-create').classList.add('active');
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('breadcrumb-subtitle').textContent = 'Tạo mới';
}

function showDetailPage() {
    document.getElementById('page-create').classList.remove('active');
    document.getElementById('page-detail').classList.add('active');
    document.getElementById('breadcrumb-subtitle').textContent = '692faca3-4b23-4207-985d-1070689703a6';
}

// Stop Points Management
let stopPointCounter = 0;

function addStopPoint() {
    stopPointCounter++;
    const container = document.getElementById('stop-points-container');
    
    const stopPointDiv = document.createElement('div');
    stopPointDiv.className = 'stop-point-item';
    stopPointDiv.id = `stop-point-${stopPointCounter}`;
    
    stopPointDiv.innerHTML = `
        <div class="stop-point-number">${stopPointCounter}</div>
        <input type="text" class="form-input stop-point-input" placeholder="Nhập điểm dừng ${stopPointCounter}">
        <button type="button" class="btn-remove-stop" onclick="removeStopPoint(${stopPointCounter})">
            <span>×</span>
        </button>
    `;
    
    container.appendChild(stopPointDiv);
}

function removeStopPoint(id) {
    const element = document.getElementById(`stop-point-${id}`);
    if (element) {
        element.remove();
        updateStopPointNumbers();
    }
}

function updateStopPointNumbers() {
    const stopPoints = document.querySelectorAll('.stop-point-item');
    stopPoints.forEach((item, index) => {
        const numberElement = item.querySelector('.stop-point-number');
        const input = item.querySelector('.stop-point-input');
        if (numberElement) {
            numberElement.textContent = index + 1;
        }
        if (input) {
            input.placeholder = `Nhập điểm dừng ${index + 1}`;
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Default to create page
    showCreatePage();
    
    // Add event listeners for form interactions
    const inputs = document.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderBottomColor = '#71639e';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderBottomColor = 'rgba(0, 0, 0, 0.42)';
            }
        });
    });
});

