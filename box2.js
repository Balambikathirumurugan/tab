document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll('.tab');
    let contents = document.querySelectorAll('.content');

    // Set default active tab
    tabs[0].classList.add('active');
    contents[0].classList.add('active');

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            contents[index].classList.add('active');
        });
    });
});