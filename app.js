// main.js

// ----------------------------
// DOM取得
const Btn = document.querySelector("#showOverlayBtn");
const p = document.querySelector(".text p");
const overLay = document.querySelector(".overLay");
const span = document.querySelector(".text h2 span");
const link = document.querySelectorAll(".nav-link");
const h2 = document.querySelector("h2");
const btn1 = document.querySelector(".form-btn");
const btn = document.querySelector(".btn");
const navCollapse = document.getElementById("navbarNav");

Btn.addEventListener("click", () => {
  // オーバーレイ表示
  h2.classList.add('active');
  p.classList.add('active1');
  span.classList.add("active2");
  overLay.classList.add('active');

  // ナビゲーションを閉じる
  const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) 
                  || new bootstrap.Collapse(navCollapse, { toggle: false });
  bsCollapse.hide();
});

gsap.fromTo(
  ".item",
  {
    opacity: 0,
    y: 20,       // 下に20pxずらしてスタート
    scale: 0.9   // 少し小さくスタート
  },
  {
    opacity: 1,
    y: 0,        // 元の位置に戻す
    scale: 1,    // 元のサイズに戻す
    stagger: 0.25,
    duration: 0.6, // アニメーション時間
    ease: "power2.out" // ふわっと自然な動き
  }
);

document.addEventListener("mousemove", (e) => {
  const mousex = e.clientX;
  const mousey = e.clientY;

  gsap.to(".circle",
    {
      x: mousex,
      y: mousey,
      stagger: -0.05
    }
  )
})
// クリックイベント（オーバーレイ表示）
Btn.addEventListener("click", () => {
  // クラス追加
  h2.classList.add('active');
  p.classList.add('active1');
  span.classList.add("active2");

  // オーバーレイ表示
  overLay.classList.add('active');

  // 他リンクの active を削除
  link.forEach(a => a.classList.remove('active'));
})


// ----------------------------
// 1. ロード時アニメーション
gsap.fromTo(".counter",
  { textContent: 0 },
  { textContent: 350, delay: 1, snap: { textContent: 1 }, ease: "power1.inOut", duration: 2 }
);

gsap.fromTo('.form-inner',
  { x: "1000px", opacity: 0 },
  { x: 0, opacity: 1, ease: "power1.inOut", stagger: 0.1 }
);

gsap.fromTo('h1', { opacity: 0 }, { opacity: 1, delay: 0.8 });
gsap.fromTo('p', { opacity: 0 }, { opacity: 1, delay: 0.8 });
gsap.fromTo('h3', { opacity: 0 }, { opacity: 1, delay: 0.8 });
gsap.fromTo('h2', { opacity: 0, y:50}, { opacity: 1,y:0, delay: 0.3 });
gsap.fromTo("h1 span",
  { opacity: 0, y: "30px" },
  { opacity: 1, y: "0px", stagger: 0.08,delay:0.8 }
);

// ----------------------------
// 2. ホバーアニメーション
const hoverButtons = [btn, btn1];
hoverButtons.forEach(button => {
  button.addEventListener("mouseenter", () => { gsap.to(button, { scale: 1.1 }); });
  button.addEventListener("mouseleave", () => { gsap.to(button, { scale: 1 }); });
});

// ----------------------------
// 3. クリックイベント（オーバーレイ表示）
Btn.addEventListener("click", () => {
  // 関連要素のクラス追加
  h2.classList.add('active');
  p.classList.add('active1');
  span.classList.add("active2");

})

