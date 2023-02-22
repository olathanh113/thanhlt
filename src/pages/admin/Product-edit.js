import { getProduct, updateProduct } from "@/api/product";
import { useEffect, router, useState } from "@/utilities";
import axios from "axios";

const AdminProductEditPage = ({id}) => {
    
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async() =>{
            try {
                setProduct(await getProduct(id));
            } catch (error) {
                console.log(error);
            }
        })();
        axios.get(`http://localhost:3000/products/${id}`).then(({data}) => setProduct(data))
    
    }, [])

    useEffect(() => {
        const form = document.getElementById("form-add");
        const productName = document.getElementById("product-name");
        const productImages = document.getElementById("product-images");
        const productAuthor = document.getElementById("product-author");
        const productDesc = document.getElementById("product-desc");
        const productTech = document.getElementById("product-tech");
        const productLink = document.getElementById("product-link");

        form.addEventListener("submit", async function(e){
            e.preventDefault();
            const urls = await uploadFiles(productImages.files);
            try {
                await updateProduct({
                    id,
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
                    // 
                }
                return urls;
            }
            
        } 
    });
    
    return `<div>
    <div class="container pt-5">
    <h1>Sửa dự án</h1>
        <form action="" id="form-edit">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="product-name" value="${product.name}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class="form-control" id="product-author" value="${product.author}" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="product-desc" value="${product.desc}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Công nghệ</label>
                <input type="text" class="form-control" id="product-tech" value="${product.tech}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="product-link" value="${product.link}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Hình ảnh</label>
                <input type="file" multiple class="form-control" id="product-images" value="${product.img}"/>
            </div>
            
            <button class="btn btn-primary">Cập nhật</button>
            <a href="/admin/products">Hủy</a>
        </form>
        </div>
</div>`

}

export default AdminProductEditPage;