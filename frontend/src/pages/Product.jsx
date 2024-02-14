import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const baseUrl = "http://localhost:8000/";

    useEffect(() => {
        getProducts();
    }, [])

    const getObject = () => {
        return {id:parseInt(id),name:name,categoryId:parseInt(categoryId)}
    }

    const getProducts = async () => {
        const url = baseUrl + "products";
        const data = await axios.get(url).then(res => res.data);
        setProducts(data);
    }

    const addProduct = async (product) => {
        const url = baseUrl + "products";
        await axios.post(url,product).then(res => res.data);
    }

    const updateProduct = async (product) => {
        const url = `${baseUrl}products/${product.id}`;
        const data = await axios.put(url,product).then(res => res.data);
    }

    const deleteProduct = async(productId) => {
        const url = `${baseUrl}products/${productId}`;
        const data = await axios.delete(url).then(res => res.data);
        alert(data.message);
    }

    return (
        <div>
            <h1 className="header">Product İşlemleri</h1>
            <div className="flex-center">
                <div className="width-10 ">
                    <div className="inputs">
                        <div className="label">Id:</div>
                        <input onInput={e=>setId(e.target.value)} type="text" id="id" name="id" />
                    </div>
                    <div className="inputs">
                        <div className="label">name:</div>
                        <input onInput={e=>setName(e.target.value)} type="text" id="name" name="name" />
                    </div>
                    <div className="inputs">
                        <div className="label">categoryId:</div>
                        <input onInput={e=>setCategoryId(e.target.value)} type="text" id="categoryId" name="categoryId" />
                    </div>
                </div>
            </div>
            <div className="buttonList">
                <div onClick={()=>addProduct(getObject())} className="button">Ekle</div>
                <div onClick={()=>updateProduct(getObject())} className="button">Güncelle</div>
                <div onClick={()=>deleteProduct(id)} className="button">Sil</div>
                <div onClick={getProducts} className="button">Getir</div>
            </div>
            <h2>Products</h2>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <div>id:{product.id}</div>
                        <div>id:{product.name}</div>
                        <div>id:{product.categoryId}</div>
                        <div>---</div>
                    </div>
                );
            })}
        </div>
    );
}