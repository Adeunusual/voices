import '../assets/css/popUpModal.css';

const PopUpModal = (props) => {
    return (props.trigger) ? (
        < div className='popUp' >
            <div className="popUpInner">
                <button className='popUp-close' onClick={() => props.setTrigger(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#FFF" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
                </button>
                <div className="heading">
                    <h3>Customize Card</h3>
                    <p>Enter the fields on the below form to personalize your card.</p>
                </div>
                <form action="" className='popUp-form'>
                    <div className="block">
                        <label htmlFor="inputTag" className='imageLabel'>
                            <p>JPG, PNG, WEBP, Max 1Mb.</p>
                            <span className='upload-btn'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="upload-icon"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                                </span>
                                <span className='upload-txt'>Upload Picture</span>
                            </span>
                            <input
                                id='inputTag'
                                type='file'
                                className="img-input"
                                onChange={props.handleCardImgChange}
                            />
                        </label>
                    </div>
                    <div className='form-block-flex'>
                        <div className='form-block'>
                            <label className='labelStyle' htmlFor="nameInput">Your name</label>
                            <input className='inputStyle' type="text" name='nameInput' placeholder='e.g Abayomi' />
                        </div>
                        <div className='form-block'>
                            <label className='labelStyle' htmlFor="twitter">Twitter handle</label>
                            <input className='inputStyle' type="text" name='twitter' placeholder='e.g @yomiblaze' />
                        </div>
                    </div>
                    <div className='form-block'>
                        <label className='labelStyle' htmlFor="email">Email address</label>
                        <input className='inputStyle' type="email" name='email' placeholder='Enter your email address' />
                    </div>
                    <div className="form-block">
                        <label
                            className='labelStyle'
                            htmlFor="candidates">
                            Why are you supporting
                        </label>

                        <select
                            name="candidates"
                            className='inputStyle'
                        >
                            <option value="">-- Please select --</option>
                            <option value="red">Tinubu #BAT2023</option>
                            <option value="orange">PeterObi #OBI2023</option>
                            <option value="yellow">Atiku #Atiku2023</option>
                        </select>
                    </div>
                    <div className="form-block">
                        <legend className='labelStyle'>Why are you supporting Tinubu?</legend>
                        <textarea
                            className='textAreaStyle'
                            placeholder="e.g He is the only person that can fix the current situation in the country"
                            name="message"
                        />
                    </div>
                </form>
                {props.children}
            </div>

        </div >
    ) : '';
}

export default PopUpModal;