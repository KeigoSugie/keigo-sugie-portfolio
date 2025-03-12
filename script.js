/*背景の切り替え設定*/
const targetElement = document.getElementById("white-bg-add");
const whiteBgElement = document.querySelector(".white-bg");
const additionalOffset = 750;

const handleScroll = () => {
    if (targetElement && whiteBgElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        const triggerPoint = scrollPosition + window.innerHeight - additionalOffset;

        if (triggerPoint > targetPosition) {
            whiteBgElement.classList.add("active");
        } else {
            whiteBgElement.classList.remove("active");
        }
    }
};

window.addEventListener("scroll", handleScroll);

/*CSS:186 スマホメニューをクリックで表示、さらに要素のCSS変更*/
document.getElementById('phone-menu-btn').addEventListener('click', function() {
  const phoneMenu = document.querySelector('.phone-menu');
  const button = this;
  const body = document.body;

  phoneMenu.classList.toggle('active');

  // ボタンのテキストとスタイルを切り替え
  if (phoneMenu.classList.contains('active')) {
    button.textContent = 'Close';
    button.style.color = '#fff';
    body.style.overflow = 'hidden';
  } else {
    button.textContent = 'Menu';
    button.style.color = '#585656';
    body.style.overflow = 'scroll';
  }
});

/*CSS:186 メニューの要素をクリックで、メニューを閉じる*/
const phoneMenu = document.querySelector('.phone-menu');
if (phoneMenu) {
  const phoneMenuItems = phoneMenu.querySelectorAll('*');

  phoneMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      phoneMenu.classList.remove('active');
    });
  });
}

/*CSS:657 .other-worksの設定*/
document.querySelectorAll('.owi').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const newText = this.getAttribute('data-text');
        const dynamicTextElement = document.querySelector('.other-works-text .dynamic-text');
        if (dynamicTextElement) {
            dynamicTextElement.textContent = newText;
        }
    });

    item.addEventListener('mouseleave', function () {
        const dynamicTextElement = document.querySelector('.other-works-text .dynamic-text');
        if (dynamicTextElement) {
            dynamicTextElement.textContent = '・・・';
        }
    });
});

/*.js-scrollが画面内に入ると.is-animatedを付与、スクロールアニメーションを一括で管理*/
let targets = document.querySelectorAll('.js-scroll');

function applyAnimation() {
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  for (let target of targets) {
    const targetPos = target.getBoundingClientRect().top + scroll;
    if (!target.classList.contains('is-animated') && scroll > targetPos - windowHeight) {
      target.classList.add('is-animated');
    }
  }
}

window.addEventListener('scroll', applyAnimation);
window.addEventListener('DOMContentLoaded', applyAnimation);