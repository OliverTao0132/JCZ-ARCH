$(document).ready(function() {
    var isMobile = window.matchMedia("(max-width: 800px)").matches;

    // Function to toggle the sidebar and adjust content width
    function toggleSidebar() {
        $('#sidebar').toggleClass('active');
        $('.content-container').toggleClass('sidebar-active');
        adjustContentWidth();
    }

    // Event listener for the collapse button
    $('#collapse').click(function() {
        toggleSidebar();
    });

    // Function to adjust the content width based on the sidebar state and device width
    function adjustContentWidth() {
        if (isMobile) {
            if ($('#sidebar').hasClass('active')) {
                $('.content-container').css('width', 'calc(100% - 50px)');
            } else {
                $('.content-container').css('width', 'calc(100% - 150px)');
            }
        } else {
            if ($('#sidebar').hasClass('active')) {
                $('.content-container').css('width', 'calc(100% - 50px)');
            } else {
                $('.content-container').css('width', 'calc(100% - 250px)');
            }
        }
    }

    // Event listener for window resize to update the device width and adjust content width
    $(window).resize(function() {
        isMobile = window.matchMedia("(max-width: 800px)").matches;
        adjustContentWidth();
    });
});