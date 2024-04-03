document.getElementById('search-form').addEventListener('submit', function(event){

    event.preventDefault(); // Prevent form submission

    // Get values from form inputs
    var location = document.getElementById('lication').value;
    var checkin = document.getElementNyId('checkin').value;
    var checkout = document.getElementById('checkout').value;

    // Perform search based on input values

    console.log('Location:', location);
    console.log('Check-in date:', checki);
    console.log('Check-out date:', checkout);
});

    document.querySelectorAll('.propert-card a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var propertyUrl = this.getAttribute('href');

            window.location.href = prpertyUrl;

        
        });
});
