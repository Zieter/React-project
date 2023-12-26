import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import '../../css/products.css';
import Dropdown from '../../components/Dropdown';

function Products() {
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({});
    const [isLoading, setLoading] = useState(false);

    const getProducts = async (page = 1) => {
        setLoading(true)
        const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
        console.log(productRes)
        setProducts(productRes.data.products);
        setPagination(productRes.data.pagination);
        setLoading(false)
    }

    useEffect(() => {
        getProducts(1);
    }, [])

    return (<>
        <div className="area_products container-fluid mt-md-5 mt-3 mb-7">
            <Loading isLoading={isLoading}/>
            <div>

            </div>
            <div className='row mb-5'>
                <div className='col-12 col-lg-2'>
                    <Dropdown />
                </div>
                
                <div className='col-12 col-lg-10'>
                    <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-3" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                <div className="card border-0 mb-4 position-relative position-relative bg-transparent">
                                <div
                                    className='product_anime img_area_square'
                                >
                                        <img src={product.imageUrl} className="effect_img_slop card-img-top rounded-0 object-cover" height={300} alt="..." />
                                        <img className='effect_img_float d-none d-lg-block' src={process.env.PUBLIC_URL + '/img/float_img.png'} alt="Second_Image" />
                                    </div>
                                    <div className="card-body d-flex">
                                        <span className="mb-0">{product.title}</span>
                                        <span className="ms-auto">NT$ {product.price}</span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            // <div className="col-md-3" key={product.id}>
                            //     <div className="card border-0 mb-4 position-relative position-relative">
                            //         <img src={product.imageUrl} className="card-img-top rounded-0 object-cover" height={300} alt="..." />
                            //         <div className="card-body p-0">
                            //             <h4 className="mb-0 mt-2"><Link to={`/product/${product.id}`}>{product.title}</Link></h4>
                            //             <p className="text-muted mt-1">NT$ {product.price}</p>
                            //         </div>
                            //     </div>
                            // </div>
                        )
                    })}
                    </div>
                        <nav className="d-flex justify-content-center">
                        <Pagination 
                            pagination= {pagination}
                            changePage={getProducts} />
                    </nav>
                </div> 
            </div>
            
        </div>
    </>
    )
}
export default Products;