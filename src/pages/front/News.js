import React from 'react';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import '../../css/news.css';

function News() {
    return(<>
    <div className="container-lg mt-md-5 mt-3 mb-7">
            <h2>News</h2>
            <hr />
            <div className='news_out_block'>
                <FadeInOnScroll>
                <div className='news_in_block'>
                    <div className='position-relative news_el_imgbox_left'>
                        <div className='news_el_img_left'>
                            <img src="https://cdn.pixabay.com/photo/2020/07/10/01/17/time-5389154_1280.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mews_el_left'>
                        <div className='mews_el_content_left'>
                            <div className="border_left_style w-100">
                                <div className='px-3'>
                                    <h3 className=''>Collection series coming soon</h3>
                                    <p>We are about to launch a new range of watches covering a variety of styles and functions. These watches are not only stylish and beautiful, but also equipped with a variety of smart functions to meet your daily needs. Keep an eye on our website and store for more information on this exciting collection</p>
                                </div> 
                                <button className='btn btn-light float-end'>More</button>  
                            </div>
                            <div className="bg-light1 d-flex position-relative">
                                {/* <div className='m-auto'>
                                    <p className='letter_space_5'>2024/1/1</p>
                                </div> */}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                <div className='news_in_block'>
                    <div className='mews_el_right'>
                        <div className='mews_el_content_right'>
                            <div className="border_right_style w-100">
                                <div className='px-3'>
                                    <h3 className=''>Collection series coming soon</h3>
                                    <p>We are about to launch a new range of watches covering a variety of styles and functions. These watches are not only stylish and beautiful, but also equipped with a variety of smart functions to meet your daily needs. Keep an eye on our website and store for more information on this exciting collection</p>
                                </div> 
                                <button className='btn btn-light'>More</button>  
                            </div>
                            <div className="bg-light1 d-flex position-relative">
                                {/* <div className='m-auto'>
                                    <p className='letter_space_5'>2024/1/1</p>
                                </div> */}
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className='position-relative news_el_imgbox_right'>
                        <div className='news_el_img_right'>
                            <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg" alt="" />
                        </div>
                    </div>
                </div>
                </FadeInOnScroll>
            </div>
    </div>
        
    </>)
}

export default News;