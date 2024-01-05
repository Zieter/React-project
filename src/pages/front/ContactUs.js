import Googlemap from '../../components/Googlemap';
import '../../css/contactUs.css';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import { useState } from 'react';

function ContactUs() {
    const [ contactData, setContactData ] = useState({
            'questionCategory': '',
            'gender': '',
            'name': '',
            'tel': '',
            'phone': '',
            'email': '',
            'msg': ''
            
    })

    const reset = () => {
        setContactData({
            'questionCategory': '',
            'gender': '',
            'name': '',
            'tel': '',
            'phone': '',
            'email': '',
            'msg': ''
        })
    }

    const handleChange = (e) => {
        const { value, name, type } = e.target;
        if(type === 'radio') {
            if (e.target.checked) {
                setContactData({
                ...contactData,
                [name]: value,
                });
                console.log(contactData)
            }
            
        } else {
            if (name === 'tel' || name === 'phone') {
                const numericInput = /^[0-9]+$/.test(value);
                if (numericInput || value === '') {
                    setContactData({
                        ...contactData,
                        [name]: value,
                        });
                }
            } else if (name === 'email') {
                const isValidEmail = /^[a-zA-Z0-9.@-]+$/;
                if (isValidEmail.test(value) || value === '') {
                    setContactData({
                        ...contactData,
                        [name]: value,
                    });
                }
            } else {
                setContactData({
                ...contactData,
                [name]: value,
                });
            }
        }
    }


    const submit = (e) => {
        e.preventDefault();
        if (!contactData.name || !contactData.email || !contactData.email || !contactData.msg) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log(contactData)
    }

    return (<>
        <div className="container mt-md-5 mt-3 mb-7">
            <h2>Contact Us</h2>
            <hr />
            <FadeInOnScroll>
            <div className='row g-5'>
                <div className='col-lg-7'>
                    <p>If you have any questions, please contact us through the form and we will contact you as soon as possible. You are also welcome to leave your product experience and feedback.</p>
                    <form action="">
                        <div className='d-flex mb-3'>
                            <label htmlFor="Question" className='me-3'>Question Category</label>
                            <select name="questionCategory" id="questionCategory" className='form-select1 rounded' onChange={handleChange}>
                                <option value="cosmeticDefects">Cosmetic defects</option>
                                <option value="abnormalFunction">Abnormal function</option>
                                <option value="feedback">Feedback</option>
                                <option value="purchaseQuestions">Purchase questions</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='d-flex mb-3'>
                            <label htmlFor="male" className='me-1'>Male</label>
                            <input
                                name="gender"
                                type="radio"
                                value="male"
                                id="male"
                                onChange={handleChange}
                            />
                            <label htmlFor="female" className='ms-3 me-1'>Female</label>
                            <input
                                name="gender"
                                type="radio"
                                value="female"
                                id="female"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='row g-3 mb-3'>
                            <div className='col-12 col-md-6'>
                                <label htmlFor="name" className='label_style'>Name *</label>
                                <input type="text" id="name" name='name' className='input_style' value={contactData.name} onChange={handleChange} required/>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label htmlFor="Tel" className='label_style'>Tel</label>
                                <input type="tel" id="tel" name='tel' className='input_style' value={contactData.tel} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <label htmlFor="phone" className='label_style'>Phone</label>
                                <input type="tel" id="phone" name='phone' className='input_style' value={contactData.phone} onChange={handleChange} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <label htmlFor="email" className='label_style'>Email *</label>
                                <input type="email" id="email" name='email' className='input_style' value={contactData.email} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="msg" className='label_style'>Message *</label>
                            <textarea name="msg" id="msg" cols="" rows="10" className='textarea_style w-100' value={contactData.msg} onChange={handleChange} required>
                            </textarea>
                        </div>
                    </form>
                    <div className='text-end text-md-center '>
                        <button className='btn btn-dark bg-transparent me-2' onClick={reset} >Reset</button>
                        <button className='btn btn-light' onClick={submit}>Submit</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-light bg-transparent mb-3">
                        <div id="map">
                            {/* <Googlemap> </Googlemap> */}
                        </div>
                    </div>
                    <div>
                        <div className='row mb-3'>
                            <div className="col-1"><i className="bi bi-geo-alt"></i></div>
                            <div className="col-11">No. 45, Section 4, Zhongxiao East Road, Da'an District, Taipei City 106</div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-1"><i className="bi bi-clock"></i></div>
                            <div className="col-11">
                                Mon to Thu 11:00 - 21:30<br />
                                Fri to Sat 11:00 - 22:00<br />
                                Sun 11:00 - 21:30
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-1"><i className="bi bi-telephone"></i></div>
                            <div className="col-11">(02) 542-9248</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </FadeInOnScroll>
        </div>
    </>
    )
}
export default ContactUs;