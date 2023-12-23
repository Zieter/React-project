import '../css/footer.css';

function Footer() {
    return (<>
    <div className="bg-dark position-relative">
            <div className="container">
                <div className="text-white py-4 text-center">
                    <div className='icon-container fs-5 mb-3'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter-x"></i>
                    </div>
                    <p className="mb-0">© 2024 LOGO All Rights Reserved.</p>
                    <ul className="d-flex list-unstyled mb-0 h4">
                        {/* <li><link href="#" className="text-white mx-3"><i className="fab fa-facebook"></i></link></li>
                        <li><link href="#" className="text-white mx-3"><i className="fab fa-instagram"></i></link></li>
                        <li><link href="#" className="text-white ms-3"><i className="fab fa-line"></i></link></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;