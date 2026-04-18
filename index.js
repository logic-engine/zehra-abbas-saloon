       lucide.createIcons();

        // Preloader
        window.addEventListener('load', () => {
            document.getElementById('preloader').style.opacity = '0';
            setTimeout(() => document.getElementById('preloader').style.display = 'none', 500);
        });

        // Sticky Nav & Reveal
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');

            document.querySelectorAll('.reveal').forEach(el => {
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < window.innerHeight - 100) el.classList.add('visible');
            });
        });

        // Advisor Tool
        const data = {
            aging: "RETINOL PROTOCOL 4.0 + INFRARED LIFT RECOMMENDED.",
            acne: "PLASMA PURIFICATION + BLUE WAVE RADIANCE RECOMMENDED.",
            repair: "LIPID BONDING + SCALP BIO-ANALYSIS RECOMMENDED.",
            glow: "NANO-VITAMIN INFUSION + OXYGEN JET RECOMMENDED."
        };

        function selectAdvisor(btn, type) {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            const resultDiv = document.getElementById('advisor-result');
            resultDiv.style.opacity = '0';
            setTimeout(() => {
                resultDiv.innerText = data[type];
                resultDiv.style.opacity = '1';
                resultDiv.style.transition = '0.5s';
            }, 200);
        }

        // Ritual Cycle
        const steps = document.querySelectorAll('.ritual-step');
        let idx = 0;
        setInterval(() => {
            steps.forEach(s => s.classList.remove('active'));
            idx = (idx + 1) % steps.length;
            steps[idx].classList.add('active');
        }, 3000);

        // Form Submit
        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none';
                document.getElementById('booking-success').style.display = 'block';
                lucide.createIcons();
            }, 500);
        });
