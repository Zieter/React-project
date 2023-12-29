import Googlemap from '../../components/Googlemap';
import '../../css/business.css';
import FadeInOnScroll from '../../components/FadeInOnScroll';

function Business() {
    return (<>
        <div className="container mt-md-5 mt-3 mb-7">
        <FadeInOnScroll>
            <div className='row'>
                <div className="col-lg-4">
                    <h2>Service</h2>
                    <hr />
                    <div className='row mb-3'>
                        <div className="col-3">Base：</div>
                        <div className="col-9">No. 45, Section 4, Zhongxiao East Road, Da'an District, Taipei City 106</div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col-3">Hours：</div>
                        <div className="col-9">
                            Mon to Thu 11:00 - 21:30<br />
                            Fri to Sat 11:00 - 22:00<br />
                            Sun 11:00 - 21:30
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className="col-3">Number：</div>
                        <div className="col-9">(02) 542-9248</div>
                    </div>
                </div>
                <div className="col-lg-8 bg-light bg-transparent">
                    <div id="map">
                        <Googlemap> </Googlemap>
                    </div>
                </div>
            </div>
            </FadeInOnScroll>
        </div>
    </>
    )
}
export default Business;