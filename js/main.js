document.addEventListener('DOMContentLoaded', () => {
    // ===== Menu Logic =====
    const overlay = document.getElementById('overlay');
    const offcanvas = document.getElementById('offcanvas');

    // Only run if elements exist
    if (overlay && offcanvas) {
        window.openMenu = () => {
            overlay.classList.add('active');
            offcanvas.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        };

        window.closeMenu = () => {
            overlay.classList.remove('active');
            offcanvas.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        };

        // Close menu when clicking the overlay
        overlay.addEventListener('click', closeMenu);
    }

    // ===== Scroll Animation (Lazy Sections) =====
    const sections = document.querySelectorAll(".lazy-section");

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});


$('.faq-question').click(function () {
    const parent = $(this).parent();

    if (parent.hasClass('active')) {
        parent.removeClass('active');
        parent.find('.faq-answer').slideUp();
    } else {
        $('.faq-item').removeClass('active');
        $('.faq-answer').slideUp();

        parent.addClass('active');
        parent.find('.faq-answer').slideDown();
    }
});


// modal
$(document).ready(function() {
    
    // Trigger modal from ANY report button
    $('.report-score-btn').on('click', function() {
        // You could also grab data from the specific match card here if needed
        $('.modal-overlay').css('display', 'flex').hide().fadeIn(300);
    });

    // Close logic (remains the same)
    $('.close-btn').on('click', function() {
        $('.modal-overlay').fadeOut(300);
    });

    // Close when clicking background
    $(window).on('click', function(event) {
        if ($(event.target).is('.modal-overlay')) {
            $('.modal-overlay').fadeOut(300);
        }
    });

    // Selection Logic for buttons inside the modal
    $('.square-btn').on('click', function() {
        $(this).closest('.button-group').find('.square-btn').removeClass('active');
        $(this).addClass('active');
    });
});