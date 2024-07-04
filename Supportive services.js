// Function to handle click events on services
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('click', () => {
            const serviceName = service.querySelector('h2').textContent;
            const serviceDescription = service.querySelector('p').textContent;

            const serviceDetails = document.getElementById('service-details');
            serviceDetails.innerHTML = `
                <h2>Service Details</h2>
                <h3>${serviceName}</h3>
                <p>${serviceDescription}</p>
            `;
        });
    });
});

