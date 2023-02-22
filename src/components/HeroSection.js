const HeroSection = () => {
    return `
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Xin chào, tôi là Lý Trường Thành </h1>
        <div class="home-hero__info">
          <p class="text-content">
            Là một fresher front-end developer. Xin hãy để chúng ta có cơ hội làm việc cùng nhau
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">Dự án của tôi</a>
        </div>
      </div>
      <div class="home-hero__socials">
        
        <div class="home-hero__social">
          <a href="https://github.com/olathanh113" class="home-hero__social-icon-link">
            <img
              src="./assets/png/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://twitter.com/Thanh_Domino" class="home-hero__social-icon-link">
            <img
              src="./assets/png/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://www.facebook.com/olathanh.domino" class="home-hero__social-icon-link">
            <img
              src="./assets/png/facebook-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://www.instagram.com/ltt.dg/"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="./assets/png/insta-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
    `
};

export default HeroSection;