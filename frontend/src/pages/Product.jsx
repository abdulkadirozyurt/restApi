import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
    const [products, setProducts] = useState([]);
    const baseUrl = "http://localhost:8000/";

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const url = baseUrl + "products";
        const data = await axios.get(url).then(res => res.data);
        setProducts(data);
    }


    return (
        <div>
            <h1 className="header">Product İşlemleri</h1>
            <div className="flex-center">
                <div className="width-10 ">
                    <div className="inputs">
                        <div className="label">Id:</div>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="inputs">
                        <div className="label">name:</div>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="inputs">
                        <div className="label">categoryId:</div>
                        <input type="text" id="fname" name="fname" />
                    </div>
                </div>
            </div>
            <div className="buttonList">
                <div className="button">Ekle</div>
                <div className="button">Güncelle</div>
                <div className="button">Sil</div>
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