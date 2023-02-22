const Header = () => {
    return `<header class="header">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <div class="header__content">
      <div class="header__logo-container">
        <div class="header__logo-img-cont">
          <img
            src="./img/portfolio-removebg-preview.png"
            alt="Ram Maheshwari Logo Image"
            class="header__logo-img"
          />
        </div>
        <span class="header__logo-sub">Lý Trường Thành</span>
      </div>
      <div class="header__main">
        <ul class="header__links">
          <li class="header__link-wrapper">
            <a href="/" class="header__link"> Trang chủ </a>
          </li>
          <li class="header__link-wrapper">
            <a href="#about" class="header__link">Giới thiệu </a>
          </li>
          <li class="header__link-wrapper">
            <a href="#projects" class="header__link">
              Dự án
            </a>
          </li>
          <li class="header__link-wrapper">
            <a href="#contact" class="header__link"> Liên hệ </a>
          </li>
        </ul>
        <div class="header__main-ham-menu-cont">
          <img
            src="./assets/svg/ham-menu.svg"
            alt="hamburger menu"
            class="header__main-ham-menu"
          />
          <img
            src="./assets/svg/ham-menu-close.svg"
            alt="hamburger menu close"
            class="header__main-ham-menu-close d-none"
          />
        </div>
      </div>
    </div>
    <div class="header__sm-menu">
      <div class="header__sm-menu-content">
        <ul class="header__sm-menu-links">
          <li class="header__sm-menu-link">
            <a href="./index.html"> Trang chủ </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#about"> Giới thiệu </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#projects"> Dự án </a>
          </li>

          <li class="header__sm-menu-link">
            <a href="./index.html#contact"> Liên hệ </a>
          </li>
        </ul>
      </div>
    </div>
  </header>`;
}

export default Header;