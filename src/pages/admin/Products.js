// import { products } from "@/data";
import { deleteProduct, getProducts } from "@/api/product";
import { useEffect, useState } from "@/utilities";
import axios from "axios";


const AdminProductsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                setData(await getProducts());
            } catch (error) {
                console.log(error);
            }
            
        })()
        
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns){
            btn.addEventListener("click",async function(){
                const id = this.dataset.id;
                const confirm = window.confirm("Bạn có muốn xóa không?");
                if(confirm){
                    try {
                        await deleteProduct(id);
                        const newProducts = data.filter((product) => product.id !== +id);
                        setData(newProducts);
                    } catch (error) {
                        console.log(error);
                    }
                    
                      
                }
                
            });
        }
    });
  return `<div class="container">
        <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên dự án</th>
                <th>Tác giả</th>
                <th>Mô tả</th>
                <th>Công nghệ</th>
                <th>Link Github</th>
                <th>Hình ảnh</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        ${data.map((product, index) => `
            <tr>
                <td>${index +1}</td>
                <td>${product.name}</td>
                <td>${product.author}</td>
                <td>${product.desc}</td>
                <td>${product.tech}</td>
                <td>${product.link}</td>
                <td><img src = "${product.img}" width="150"></td>
                <td>
                    <button data-id="${product.id}" class="btn btn-danger btn-remove">Xóa</button>
                    <a href="/admin/products/${product.id}/edit">Sửa</a>
                </td>
            </tr>
            `
            ).join("")}
        </tbody>
        
        </table><a href="/admin/products/add" type="button" class="btn btn-primary">Thêm</a>
        <a href="/" type="button" class="btn btn-success">Quay lại trang user</a>
    </div>`
}

export default AdminProductsPage;