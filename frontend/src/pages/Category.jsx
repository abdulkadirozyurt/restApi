import { useEffect, useState } from "react";
import axios from "axios";



export default function Category() {
    const [categories, setCategories] = useState([])
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const baseUrl = "http://localhost:8000/";

    useEffect(() => {
        getCategories()
    }, [])

    const getObject = () => {
        return { id: parseInt(id), name: name }
    }

    const getCategories = async () => {
        const url = baseUrl + "categories"
        const data = await axios.get(url).then(res => res.data)
        setCategories(data)
    }

    const addCategory = async (category) => {
        const url = baseUrl + "categories"
        await axios.post(url, category).then(res => res.data)
    }

    const updateCategory = async (category) => {
        const url = `${baseUrl}categories/${category.id}`
        const data = await axios.put(url, category).then(res => res.data)
    }

    const deleteCategory = async (categoryId) => {
        const url = `${baseUrl}categories/${categoryId}`
        const data = await axios.delete(url).then(res => res.data)
        alert(data.message)
    }



    return (
        <div>
            <h1 className="header">Category İşlemleri</h1>
            <div className="flex-center">

                <div className="width-10">
                    <div className="inputs">
                        <div className="label">Id:</div>
                        <input onInput={e => setId(e.target.value)} type="text" id="id" name="id" />
                    </div>

                    <div className="inputs">
                        <div className="label">name:</div>
                        <input onInput={e => setName(e.target.value)} type="text" id="name" name="name" />
                    </div>


                </div>
            </div>

            <div className="buttonList">
                <div onClick={() => addCategory(getObject())} className="button">Ekle</div>
                <div onClick={() => updateCategory(getObject())} className="button">Güncelle</div>
                <div onClick={() => deleteCategory(id)} className="button">Sil</div>
                <div onClick={getCategories} className="button">Getir</div>
            </div>
            <h2>Categories</h2>
            {categories.map((category,index)=>{
                return (
                    <div key={index}>
                        <div>id:{category.id}</div>
                        <div>name:{category.name}</div>
                        <div>---</div>
                    </div>
                )
            })}

        </div>
    );
}