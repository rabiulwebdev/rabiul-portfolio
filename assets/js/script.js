document.addEventListener("DOMContentLoaded", function () {

    // Sticky header
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            document.body.classList.add("sticky");
        } else {
            document.body.classList.remove("sticky");
        }
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const menuPanels = document.querySelectorAll('.menu-panel');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (mobileBtn) {
        mobileBtn.addEventListener("click", () => {
            document.body.classList.toggle("menu-open");
        });
    }

    if (overlay) {
        overlay.addEventListener("click", () => {
            document.body.classList.remove("menu-open");
        });
    }

    // open subpanels
    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const openPanel = btn.dataset.open;
            const targetPanel = document.getElementById(openPanel);

            if (!targetPanel) return;

            menuPanels.forEach(p => p.classList.remove("active"));
            targetPanel.classList.add("active");
        });
    });

    // back buttons
    document.querySelectorAll("[data-back]").forEach(btn => {
        btn.addEventListener("click", () => {
            menuPanels.forEach(p => p.classList.remove("active"));
            const mainPanel = document.getElementById("panel-main");
            if (mainPanel) mainPanel.classList.add("active");
        });
    });

});

// --------- Dynamic Value Change
(function(){
      var words = [
          'Web Desginer',
          'Web App Developer',
          'Website Tester',
          'Php Developer',
          'Frontend Engineer'
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();

//   ------- Counter -----------------
let counters = document.querySelectorAll(".run_count");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        let item = entry.target;
        let startnumber = 0;
        let endnumber = parseInt(item.dataset.number);
        let speed = 50;

        let stop = setInterval(() => {
          startnumber++;
          item.innerHTML = startnumber;

          if (startnumber >= endnumber) {
            clearInterval(stop);
            item.innerHTML = endnumber;
          }
        }, speed);

        observer.unobserve(item); // run only once
      }
    });
  },
  {
    threshold: 0.5 // 50% visible
  }
);

counters.forEach(counter => {
  observer.observe(counter);
});
