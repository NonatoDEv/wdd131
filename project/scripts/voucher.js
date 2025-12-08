const coupon = document.getElementById('coupon');
        const msg = document.getElementById('copy-msg');

        coupon.addEventListener('click', () => {
            navigator.clipboard.writeText(coupon.innerText).then(() => {
                coupon.style.backgroundColor = "#333";
                coupon.style.color = "#fff";
                msg.textContent = "Code copied to clipboard! ✅";
                
                setTimeout(() => {
                    coupon.style.backgroundColor = "#fce4ec";
                    coupon.style.color = "#d63384";
                    msg.textContent = "Click the code to copy!";
                }, 2000);
            });
        });