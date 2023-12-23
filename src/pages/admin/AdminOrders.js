import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import OrderModal from '../../components/OrderModal';
import DeleteModal from '../../components/DeleteModal';
import Pagination from '../../components/Pagination';
import { Modal } from 'bootstrap';


function AdnminOrders() {
    const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({});
    // type: 決定modal展開的用途
    const [type, setType] = useState('creat');//edit  用來切換"編輯"還是"新增"的狀態
    const [tempOrder, setTempOrder] =useState({}); // 依編輯或新增按鈕，用來切換modal內輸入框顯示的狀態內容

    const orderModal = useRef(null);
    const deleteModal = useRef(null);
    useEffect(() => {
        orderModal.current = new Modal('#orderModal', {
            backdrop: 'static', // 點擊視窗以外不會關閉
        });

        getOrders();
    }, []);

    const getOrders = async (page = 1) => {
        const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/orders?page=${page}`);
            console.log(res)
            setOrders(res.data.orders);
            setPagination(res.data.pagination);
    }

    const openOrderModal = (type, item) => {
        setType(type);
        setTempOrder(item);
        orderModal.current.show();
    }

    const closeModal = () => {
        orderModal.current.hide();
    }
    
    // const openDeleteModal = (product) => {
    //     setTempCoupon(product);
    //     deleteModal.current.show();
    // }

    // const closeDeleteModal = () => {
    //     deleteModal.current.hide();
    // }

    // const deleteCoupon = async (id) => {
    //     try {
    //         const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`)
    //         console.log(res)
    //         if (res.data.success) {
    //             getCoupons()
    //             deleteModal.current.hide();
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className='p-3'>
            <OrderModal 
                closeModal={closeModal}
                getCoupons={getOrders}
                tempCoupon={tempOrder}
                type={type}
            />
            <DeleteModal 
                // close={closeDeleteModal}
                text={tempOrder.title}
                // handleDelete={deleteCoupon}
                id={tempOrder.id}
                />
            <h3>優惠券列表</h3>
            <hr />
            {/* <div className='text-end'>
                <button type='button' className='btn btn-primary btn-sm' onClick={() => openCouponModal('create', {})}>
                    建立新優惠券
                </button>
            </div> */}
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>訂單ID</th>
                        <th scope='col'>購買用戶</th>
                        <th scope='col'>訂單金額</th>
                        <th scope='col'>付款狀態</th>
                        <th scope='col'>付款日期</th>
                        <th scope='col'>留言訊息</th>
                        <th scope='col'>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.percent}</td>
                                <td>{new Date(product.due_date).toDateString()}</td>
                                <td>{product.code}</td>
                                <td>{product.is_enabled ? '啟用': '未啟用'}</td>
                                <td>
                                    <button type='button' className='btn btn-primary btn-sm' onClick={() => openOrderModal('edit',product)}>
                                        編輯
                                    </button>
                                    {/* <button
                                        type='button'
                                        className='btn btn-outline-danger btn-sm ms-2'
                                        onClick={() => openDeleteModal(product)}
                                    >
                                        刪除
                                    </button> */}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
                    <Pagination 
                    pagination= {pagination}
                    changePage={getOrders} />
            
        </div>
    );
}

export default AdnminOrders;