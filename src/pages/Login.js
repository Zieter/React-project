import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';//轉址功能


export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [loginState, setLoginState] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data, [name]: value}) //name屬性,value的值
    }

    const submit = async (e) => {
        try {
            const res = await axios.post('/v2/admin/signin', data);
            const { token, expired } = res.data;
            console.log(res.data)
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
            // 儲存 Token
            if (res.data.success) {//登入成功後就進行轉址
                navigate('/admin/products')
            }
        } catch (error) {
            console.log(error)
            setLoginState(error.response.data)//由後端回傳，可以從error裡面找到失敗訊息
        }
        
    
    }

    return (
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>登入帳號</h2>
            <div className={`alert alert-danger ${loginState.message ? 'd-block' : 'd-none'}`} role="alert">
                錯誤訊息
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label w-100">
                Email
                <input id="email" className="form-control" name="username" type="email" placeholder="Email Address" onChange={handleChange} />
                </label>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label w-100">
                密碼
                <input type="password" className="form-control"  name="password" id="password" placeholder="name@example.com" onChange={handleChange} />
                </label>
            </div>
            <button type="button" className="btn btn-primary" onClick={submit} >登入</button>
            </div>
        </div>
    </div>
    )
}