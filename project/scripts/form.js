document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('contact-form');
    const container = document.getElementById('form-container');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text')

    const showSuccessMessage = (name) =>{
        container.innerHTML = '';
        
        const successDiv = document.createElement('div')
        successDiv.className = 'success-message'

        successDiv.innerHTML = `
            <span class='success-icon'></span>
            <h2>thanks, ${name}!</h2>
            <p>We've received your message. i'll answer you coming soon.</p>
            <button class="btn-cta-products" onclick="location.reload()">Send new</button>`;

            container.appendChild(successDiv)
    };
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const name = document.getElementById('client-name').value;
        const email = document.getElementById('client-email').value;

        submitBtn.disabled = true;
        submitBtn.classList.add('btn-loading')
        btnText.textContent = "Sending...";
        setTimeout(() =>{ 
            console.log(`Data Sending: ${name}, ${email}`);

            showSuccessMessage(name);

    },1500);
    });
});
