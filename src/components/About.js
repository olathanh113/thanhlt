
function calculate_age() { 
  var diff_ms = Date.now()
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear()-2003);
};
const age = (calculate_age(new Date(2003, 1, 21)));
const About = () => {
    return`
    <section id="about" class="about sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-med">
        <span class="heading-sec__main">Giới thiệu</span>
        <span class="heading-sec__sub">
          Dưới đây là một chút thông tin về bản thân cũng như để chúng ta hiểu nhau hơn
        </span>
      </h2>
      <div class="about__content">
        <div class="about__content-main">
          <h3 class="about__content-title">Thông tin về tôi</h3>
          <div class="about__content-details">
            <p class="about__content-details-para">
              Xin chào tôi là
              <strong>Thành</strong>
               là một <strong> Fresher Frontend Web Developer </strong> hiện đang sống tại Hà Nội. Tôi đã hoàn thành
              <strong> một số </strong>
              dự án trong thời gian 1 năm vừa qua cụ thể vui lòng xem chi tiết bên dưới.
              
            </p>
            <p class="about__content-details-para">
              Một số thông tin cá nhân khác mà bạn có thể quan tâm:
              <strong><ul class="about__content-details-para">
                <li> Tên đầy đủ: Lý Trường Thành</li>
                <li>Tuổi: 
                  ${age}
                </li>
                <li>SĐT: 0944227230</li>
                <li>Sở thích: Xem phim, Chơi game, Đọc truyện, Nghe nhạc.</li>
                <li>Nơi ở hiện tại: Mỹ Đình - Hà Nội.</li>
                <li>Trình độ học vấn: Cao đẳng (Hiện đang trong quá trình học tại trường cao đẳng FPT Polytechnic).</li>
              </ul></strong>
              
            </p>
          </div>
          <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
            >Liên hệ</a
          >
        </div>
        <div class="about__content-skills">
          <h3 class="about__content-title">Các kỹ năng của tôi</h3>
          <div class="skills">
            <div class="skills__skill">HTML</div>
            <div class="skills__skill">CSS</div>
            <div class="skills__skill">JavaScript</div>
            <div class="skills__skill">PHP</div>
            <div class="skills__skill">GIT</div>
        
            <div class="skills__skill">Wordpress</div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
    `
  }
  
  export default About;
  