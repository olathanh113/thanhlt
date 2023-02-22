import { useEffect, useState } from "@/utilities";
import { deleteProduct, getProducts } from "@/api/product";
import axios from "axios";


const Portfolio = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        (async () => {
            try {
                setProducts(await getProducts());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

return `<section id="projects" class="projects sec-pad">
<div class="main-container">
  <h2 class="heading heading-sec heading-sec__mb-bg">
    <span class="heading-sec__main">Dự án của tôi</span>
    <span class="heading-sec__sub">
      Dưới đây là những dự án mà tôi đã thực hiện trong thời gian vừa qua
    </span>
  </h2>
    ${products
        .map((product,index) => {
            return `
            <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="${product.img}"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">${product.name}</h3>
              <p class="projects__row-content-desc">
                Tác giả: ${product.author}
              </p>
              <p class="projects__row-content-desc">
                Mô tả: ${product.desc}
              </p>
              <p class="projects__row-content-desc">
                Công nghệ sử dụng: ${product.tech}
              </p>
              <a
                href="${product.link}"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Tìm hiểu thêm</a
              >
            </div>
          </div>
            `;
        }).join("")}
    
  
    
</div>
</section>`
};

export default Portfolio;