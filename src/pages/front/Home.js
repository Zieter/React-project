import { NavLink } from 'react-router-dom';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import '../../css/home.css';

function Home() {
    return(<>
    <div className='w-100'>
            <div className='banner_video w-100' style={{position:'fixed', top:0, zIndex:0}}>
                <video src={process.env.PUBLIC_URL + '/background/bg_home.mp4'} muted autoPlay loop />
                <div className='banner_text px-3'>
                    <h1 className='mb-5'>
                        Inheriting Classic <br/> Craftsmanship
                    </h1>
                    <h5 className=''>
                        After years of hardening, fine <br/> gears are made by old craftsmen.
                    </h5>
                </div>
                
            </div>
            <div className='main' style={{ marginTop:'100vh' , zIndex:10}}>
                {/* Area1 */}
                <FadeInOnScroll>
                <article className='p-2 d-flex'>
                    <div className='m-auto'>
                        <h4>
                        Originated in Germany in the 1920s, it was quenched and made by <br/> old Ugl craftsmen. The craftsmanship has been passed down for <br/> several generations.
                        </h4>
                        <div className='row row-cols-3 text-center'>
                            <span className='col'>German Origin</span>
                            <span className='col'>Quality Control</span>
                            <span className='col'>Founded In 1920</span>
                        </div>
                    
                    </div>
                </article>
                </FadeInOnScroll>

                {/* Area2 */}
                <FadeInOnScroll>
                <div className='row row-cols-2' style={{ height:'100vh' }}>
                    <div className='col m-auto d-flex'>
                        <img src={process.env.PUBLIC_URL + '/img/home_img.png'} alt=""  className='img_anime_zoom m-auto' width={'50%'} style={{minWidth:'15rem'}} />
                    </div>
                    <div className='col d-flex'>
                        <div className='my-auto'>
                            <h1 className='mb-5'>
                                Solar Power Generation, <br /> Battery-Free, Waterproof
                            </h1>
                            <p style={{maxWidth:'35rem'}}>
                                Through internal photovoltaic panels, these watches convert natural light into energy, making them durable and environmentally friendly.
                            </p>
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>

                {/* Area3 */}
                <FadeInOnScroll>
                <div className='row row-cols-2' style={{ height:'100vh' }}>
                    <div className='col d-flex'>
                        <div className='m-auto ps-3'>
                            <h1 className='mb-5'>
                            Movement's The Life Of The Watch
                            </h1>
                            <p style={{maxWidth:'35rem'}}>
                            These movements carry the manufacturer's ingenuity and rigorous pursuit of time, and undergo unremitting research and innovation to ensure the accuracy and long-term operation of the watch.
                            </p>
                        </div>
                    </div>
                    <div className='col m-auto d-flex'>
                        <img src={process.env.PUBLIC_URL + '/img/home_img2.jpg'} alt=""  className='img_anime_zoom m-auto rounded-circle' width={'40%'} style={{minWidth:'11rem'}} />
                    </div>
                </div>
                </FadeInOnScroll>

                {/* Area4 */}
                <FadeInOnScroll>
                <div className='row GreekGods_area' style={{ minHeight:'100vh' }}>
                    <div className='col-12 col-md-3 col-sm-6 d-flex'>
                        <div className='m-auto text-center'>
                            <img src={process.env.PUBLIC_URL + '/img/home_img_sm1.jpg'} className="img_anime_zoom rounded-3 img_10rem" alt="..." />
                            <h2 className='mt-3'>Zeus</h2>
                            <p className='text_height_4'>Has the ability to rule and power.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-6 d-flex'>
                        <div className='m-auto text-center'>
                            <img src={process.env.PUBLIC_URL + '/img/home_img_sm2.jpg'} className="img_anime_zoom rounded-3 img_10rem" alt="..." />
                            <h2 className='mt-3'>Athena</h2>
                            <p className='text_height_4'>Goddess of Wisdom and War</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-6 d-flex'>
                        <div className='m-auto text-center'>
                            <img src={process.env.PUBLIC_URL + '/img/home_img_sm3.jpg'} className="img_anime_zoom rounded-3 img_10rem" alt="..." />
                            <h2 className='mt-3'>Poseidon</h2>
                            <p className='text_height_4'>Ruler of the oceans and marine life</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-6 d-flex'>
                        <div className='m-auto text-center'>
                            <img src={process.env.PUBLIC_URL + '/img/home_img_sm4.jpg'} className="img_anime_zoom rounded-3 img_10rem" alt="..." />
                            <h2 className='mt-3'>Hera</h2>
                            <p className='text_height_4'>Goddess of Marriage and Family</p>
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>

                {/* Area5 */}
                <FadeInOnScroll>
                <div className='row row-cols-2' style={{ height:'100vh' }}>
                    <div className='col d-flex'>
                        <div className='m-auto ps-3'>
                            <h1 className='mb-5'>
                            Retro Style
                            </h1>
                            <p style={{maxWidth:'35rem'}}>
                            They are like a time machine, allowing people to travel back to the past, while showing their unique taste and personality.
                            </p>
                        </div>
                    </div>
                    <div className='col m-auto d-flex p-0 pe-3
                    '>
                        <img src={process.env.PUBLIC_URL + '/img/home_img3.jpg'} alt=""  className='img_anime_zoom m-auto'  style={{minWidth:'11rem', maxWidth:'30rem'}} />
                    </div>
                </div>
                </FadeInOnScroll>

                {/* Area6 */}
                <FadeInOnScroll>
                <div className='row row-cols-2' style={{ height:'100vh' }}>
                    <div className='col m-auto d-flex ps-3
                    '>
                        <img src={process.env.PUBLIC_URL + '/img/home_img4.jpg'} alt=""  className='img_anime_zoom m-auto'  style={{minWidth:'11rem', maxWidth:'30rem'}} />
                    </div>
                    <div className='col d-flex'>
                        <div className='m-auto'>
                            <h1 className='mb-5'>
                            Classic Large Round Mirror
                            </h1>
                            <p style={{maxWidth:'35rem'}}>
                            Its clear scale and pointer design make the time clear at a glance, while giving the wearer a sense of elegance and gentlemanly demeanor.
                            </p>
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>

                {/* Area7 */}
                <FadeInOnScroll>
                <article className='p-2 d-flex'>
                    <div className='m-auto'>
                        <h3 className='m-0'>
                            Ready to choose the right watch?
                        </h3>
                        <div className='d-flex justify-content-end'>
                            <NavLink className='nav-link text-light' to='/products' style={{ width:'2.5rem' }}>
                                <i className="bi bi-arrow-right fs-2"></i>
                            </NavLink>
                        </div>
                    </div>
                </article>
                </FadeInOnScroll>
            </div>
    </div>
            
    </>

    )
}



export default Home;