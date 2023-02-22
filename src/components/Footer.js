

const Footer = () => {
  return `
  <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Mạng xã hội</span>
            </h2>
            <div class="main-footer__social-cont">
              
              <a target="https://github.com/olathanh113" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="https://twitter.com/Thanh_Domino" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/png/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="https://www.facebook.com/olathanh.domino" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/png/facebook-ico.png"
                  alt="icon"
                />
              </a>
              <a target="https://www.instagram.com/ltt.dg/" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Lý Trường Thành</h4>
            <p class="main-footer__short-desc">
              Một Fresher Frontend Web Developer
            </p>
          </div>
        </div>

       <button type="submit" id="edit" style="background-color: grey
       ; clear: both;"><a href="/admin/products">_</a></button>
      </div>
    </footer>
  `
}

export default Footer;
