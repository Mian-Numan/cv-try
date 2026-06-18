/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
      // Form Submit Event
        document.getElementById("contactForm").addEventListener("submit", function(e){

            e.preventDefault();

            alert("Your form has been submitted successfully!");

            // Reset Form
            this.reset();

            // Close Modal
            let modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();

        });

        const projects = {
            1: {
                title: "E-Commerce Platform",
                image: "https://picsum.photos/id/1015/1200/800"
            },
            2: {
                title: "AI Dashboard",
                image: "https://picsum.photos/id/201/1200/800"
            },
            3: {
                title: "Mobile Banking App",
                image: "https://picsum.photos/id/237/1200/800"
            }
        };
        
        function showProjectModal(id) {
            const project = projects[id];
            if (!project) return;
            
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalImage').src = project.image;
            
            const modal = new bootstrap.Modal(document.getElementById('projectModal'));
            modal.show();
        }
        
        // Optional: Keyboard support (ESC already handled by Bootstrap)
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") {
                const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
                if (modal) modal.hide();
            }
        });
