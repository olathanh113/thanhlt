import { addProduct } from "@/api/product";
import { useEffect, router } from "@/utilities";
import axios from "axios";

const AdminProductAddPage = () => {

    useEffect(() => {
        const form = document.getElementById("form-add");
        const productName = document.getElementById("product-name");
        // const productPrice = document.getElementById("product-price");
        const productImages = document.getElementById("product-images");
        const productAuthor = document.getElementById("product-author");
        const productDesc = document.getElementById("product-desc");
        const productTech = document.getElementById("product-tech");
        const productLink = document.getElementById("product-link");


        form.addEventListener("submit", async function(e){
            e.preventDefault();
            const urls = await uploadFiles(productImages.files);
            try {
                await  addProduct({
                    name: productName.value,               
                    author: productAuthor.value,
                    tech: productTech.value,
                    link: productLink.value,
                    desc: productDesc.value,
                    img: urls,

                });
                router.navigate("/admin/products");
            } catch (error) {
                console.log(error);
            }
                                
        })
    });

    const uploadFiles = async (files) => {
        if(files){
            const CLOUD_NAME = "dvcuij8nq";
            const PRESET_NAME = "upload";
            const FLODER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;


            const formData = new FormData();
            formData.append("upload_preset",PRESET_NAME);
            formData.append("floder",FLODER_NAME);

            for(const file of files){
                formData.append("file",file);

                const  response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "mulipart/form-data",
                    },
                })
                urls.push(response.data.secure_url);
                console.log(urls);
                
            }
            return urls;
        }
        
    } 

    return `<div class="container pt-5">
    <form action="" id="form-add">
        <div class="form-group">
            <label for="" class="form-label">Tên Dự án</label>
            <input type="text" class="form-control" id="product-name" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Tác giả</label>
            <input type="text" class="form-control" id="product-author" />
        </div>
        <div class="form-group">
        <label for="" class="form-label">Mô tả</label>
        <input type="text" class="form-control" id="product-desc" />
    </div>
        <div class="form-group">
            <label for="" class="form-label">Công nghệ</label>
            <input type="text" class="form-control" id="product-tech" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Link Github</label>
            <input type="text" class="form-control" id="product-link" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Hình ảnh</label>
            <input type="file" multiple class="form-control" id="product-images" />
        </div>
        
        <button class="btn btn-primary">Thêm dự án</button>
    </form>
    </div>`

}

export default AdminProductAddPage;