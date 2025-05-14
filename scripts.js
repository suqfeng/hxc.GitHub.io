// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // 移动端菜单点击后关闭
            const navbar = document.getElementById('navbar');
            const navLinks = document.querySelector('.nav-links');
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// 技能条动画
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// 当技能部分进入视口时触发动画
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

observer.observe(skillsSection);

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 这里可以添加表单验证逻辑
        
        // 模拟表单提交
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        console.log('表单数据:', formValues);
        
        // 显示成功消息
        alert('感谢您的留言！我会尽快回复您。');
        this.reset();
    });
}

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 延迟加载可能会影响性能的元素
    setTimeout(() => {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        lazyElements.forEach(el => {
            // 这里可以添加懒加载逻辑
        });
    }, 500);
});