import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';  
import MessageToast from '../../components/MessageToast';
import ScrollToTop from '../../components/ScrollToTop';

function FrontLayout() {
    const[cartData, setCartData] = useState({});
    
    const getCart = async () => {
        try {
            const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`, ) ;
            console.log('購物車內容',res)
            setCartData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
        
    useEffect(() => {
        getCart();
    }, [])
    return (<>
        <Navbar cartData={cartData}/>
        <MessageToast />
        <Outlet context={{ getCart, cartData }}></Outlet>
        <ScrollToTop></ScrollToTop>
        <Footer></Footer>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
    </>
    )
}

export default FrontLayout;