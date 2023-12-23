import { useEffect, useState } from 'react';
import axios from 'axios';

function OrderModal({ closeModal, getCoupons, type, tempCoupon }) {//傳入fn
    const [tempData, setTempData] = useState({
        title: "",
        is_enabled: 1,
        percent: 80,
        due_date: 1555459200,
        code: "testCode"
    });
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log(type, tempCoupon);
        if (type === 'edit') {
            setTempData(tempCoupon)
            // console.log(type, tempCoupon);
            setDate(new Date(tempCoupon.due_date));
        }
    }, [type, tempCoupon]);

    const handleChange = (e) => {
        console.log(e);
        const { value, name } = e.target;
        if (['price', 'origin_price'].includes(name)) {//name裡面有包含price或origin_price時使用數字型別
            setTempData({
                ...tempData,
                [name]:Number(value),
            })
        } else if (name === 'is_enabled') {
            setTempData({
                ...tempData,
                [name]: +e.target.checked, //原會顯示boolean， 在前面使用+號會變數字
            })
        } else {
            setTempData({
                ...tempData,
                [name]:value,
            })
        }
    }

    const submit = async () => {
        try {
            let api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon`; //新增type提交時使用預設api
            let method = 'post';
            if (type ==='edit') {//編輯type提交時使用其他api
                api = `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${tempCoupon.id}`;
                method = 'put';
            }
            const res =  await axios[method](
                api, 
                {
                    data: {
                        ...tempData,
                        due_date: date.getTime(),// 轉換成 unix timestamp
                    },
                },
            );
            console.log(res)
            closeModal();
            getCoupons();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            className='modal fade'
            tabIndex='-1'
            id='orderModal'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h1 className='modal-title fs-5' id='exampleModalLabel'>
                            {`編輯 ${tempData.id}`}
                        </h1>
                        <button
                            type='button'
                            className='btn-close'
                            aria-label='Close'
                            // onClick={closeProductModal}
                        />
                    </div>
                    <div className='modal-body'>
                        <div className='mb-3 row'>
                            <span className='col-sm-2 col-form-label'>Email</span>
                            <div className='col-sm-10'>
                                <input
                                    type='email'
                                    readOnly
                                    className='form-control-plaintext'
                                    id='staticEmail'
                                    // defaultValue={tempOrder?.user?.email}
                                />
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <span className='col-sm-2 col-form-label'>訂購者</span>
                            <div className='col-sm-10'>
                                <input
                                    type='text'
                                    readOnly
                                    className='form-control-plaintext'
                                    id='staticEmail'
                                    // defaultValue={tempOrder?.user?.name}
                                />
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <span className='col-sm-2 col-form-label'>外送地址</span>
                            <div className='col-sm-10'>
                                <input
                                    type='text'
                                    readOnly
                                    className='form-control-plaintext'
                                    // defaultValue={tempOrder?.user?.address}
                                />
                            </div>
                        </div>
                        <div className='mb-3 row'>
                            <span className='col-sm-2 col-form-label'>留言</span>
                            <div className='col-sm-10'>
                                <textarea
                                    name=''
                                    id=''
                                    cols='30'
                                    readOnly
                                    className='form-control-plaintext'
                                    // defaultValue={tempOrder.message}
                                />
                            </div>
                        </div>
                        {/* {tempOrder.products && ( */}
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>品項名稱</th>
                                        <th>數量</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {Object.values(tempOrder.products).map((cart) => (
                                        <tr key={cart.id}>
                                            <td>{cart.product.title}</td>
                                            <td>{cart.qty}</td>
                                        </tr>
                                    ))} */}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className='border-0 text-end'>總金額</td>
                                        {/* <td className='border-0'>${tempOrder.total}</td> */}
                                    </tr>
                                </tfoot>
                            </table>
                        {/* )} */}

                        <div>
                            <h5 className='mt-4'>修改訂單狀態</h5>
                            <div className='form-check mb-4'>
                                <label className='form-check-label' htmlFor='is_paid'>
                                    <input
                                        className='form-check-input'
                                        type='checkbox'
                                        name='is_paid'
                                        id='is_paid'
                                        checked={!!tempData.is_paid}
                                        onChange={handleChange}
                                        // disabled={isLoading}
                                    />
                                    付款狀態 ({tempData.is_paid ? '已付款' : '未付款'})
                                </label>
                            </div>
                            <div className='mb-4'>
                                <span className='col-sm-2 col-form-label d-block'>
                                    外送進度
                                </span>
                                <select
                                    className='form-select'
                                    name='status'
                                    value={tempData.status}
                                    onChange={handleChange}
                                    // disabled={isLoading}
                                >
                                    <option value={0}>未確認</option>
                                    <option value={1}>已確認</option>
                                    <option value={2}>外送中</option>
                                    <option value={3}>已送達</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={closeModal}
                        >
                            關閉
                        </button>
                        <button type='button' className='btn btn-primary' onClick={submit}>
                            儲存
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderModal;