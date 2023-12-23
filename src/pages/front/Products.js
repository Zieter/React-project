import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import '../../css/products.css';

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
        <div className="container mt-md-5 mt-3 mb-7">
            <Loading isLoading={isLoading}/>
            <div>

            </div>
            <div className='row mb-5'>
                <div className='col-12 col-lg-2'>
                    <div className='dropdown'>
                        <div className='dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                            MEN
                            <ul className='dropdown-menu dropdown-menu-dark'>
                                <li><a className="dropdown-item active" href="#">Automatic</a></li>
                                <li><a className="dropdown-item" href="#">Manual</a></li>
                                <li><a className="dropdown-item" href="#">Diving</a></li>
                                <li><a className="dropdown-item" href="#">Smart</a></li>
                                <li><a className="dropdown-item" href="#">Luxury</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <ul className='list_series list-unstyled'>
                        <li>MEN</li>
                        
                        <li>LADY</li>
                        <li>NEUTRAL</li>
                        <li>COUPLE</li>
                        
                    </ul>
                </div>
                
                <div className='col-12 col-lg-10'>
                    <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-3" key={product.id}>
                                <div className="card border-0 mb-4 position-relative position-relative">
                                    <img src={product.imageUrl} className="card-img-top rounded-0 object-cover" height={300} alt="..." />
                                    <div className="card-body p-0">
                                        <h4 className="mb-0 mt-2"><Link to={`/product/${product.id}`}>{product.title}</Link></h4>
                                        <p className="text-muted mt-1">NT$ {product.price}</p>
                                    </div>
                                </div>
                            </div>
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