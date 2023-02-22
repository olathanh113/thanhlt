

const Contact= () => {
  return`
  <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Liên hệ</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Nếu bạn muốn liên hệ với tôi xin vui lòng điền vào form sau hoặc trực tiếp nhắn cho tôi thông qua các mạng xã hội
          </span>
        </h2>
        <div class="contact__form-container">
          <form action="#" class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Tên của bạn</label>
              <input
                required
                placeholder="Vui lòng điền tên của bạn"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Vui lòng nhập email của bạn"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Nội dung, lý do bạn muốn liên lạc với tôi</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Vui lòng nhập nội dung"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </section>
  
  `
}

export default Contact;
