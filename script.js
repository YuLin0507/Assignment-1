

    document.addEventListener('DOMContentLoaded', function () {
        var scrollContainer = document.getElementById('scrollContainer');
        var scrollTriggerArea = document.getElementById('scrollTriggerArea');

        // Add click event listener to the trigger area
        scrollTriggerArea.addEventListener('click', function () {
            // Adjust the scroll behavior and distance as needed
            scrollContainer.scrollBy({
                left: 200, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        });
    });


