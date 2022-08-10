import { useState, useRef } from 'react';
import '../assets/css/card.css';
import { FaCheckCircle, FaEllipsisH } from 'react-icons/fa';
import data from './CardData.jsx';
import html2canvas from "html2canvas";
import avatar from '../../../assets/images/avatar.jpg';
import PopUpModal from './PopUpModal';
import RenderPopUp from './RenderPopUp';

const Card = () => {
    // state
    const [checkCardId, setCheckCardId] = useState(-1)

    //handle Card click
    const handleCardClick = (id) => {
        setCardImg(avatar);
        setCheckCardId(id);
    }

    //Handle PopUp Modal 
    const [popUpBtn, setPopUpBtn] = useState(false);
    // Handling DetailspopUp trigger
    const [usePopUpBtn, setusePopUpBtn] = useState(false);

    //handle ImageChange
    //Handle setImg
    const [cardImg, setCardImg] = useState(avatar);

    const handleCardImgChange = (event) => {
        setCardImg(URL.createObjectURL(event.target.files[0]));
    }

    //function shareCard
    function shareCard(canvas) {
        canvas.toBlob((blob) => {
            const files = [new File([blob], 'imgFile.png',
                {
                    type: 'image/jpeg',
                    lastModified: new Date().getTime()
                })];
            let shareObj = { files: files };
            navigator.share(shareObj);
        }, 'image/jpg')
    }
    // download card
    function downloadCard(data) {
        const link = document.createElement('a');
        // ---
        link.href = data;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    //render card
    const [renderCardImg, setRenderCardImg] = useState("");

    //Handle card Download & share
    const printRef = useRef();

    const handleCard = async (option) => {
        // ---
        const digitalCard = printRef.current;
        digitalCard.style.borderRadius = '0';
        digitalCard.style.border = '0';
        const canvas = await html2canvas(digitalCard);
        const data = canvas.toDataURL('image/jpg');
        // ---
        switch (option) {
            case 'share': return shareCard(canvas);
            case 'render':
                setusePopUpBtn(true)
                setRenderCardImg(data);
                break;
            default: return downloadCard(data)
        }
        // ---

    };
    return (
        <div className="cardComponent">
            {data.map((dataGotten, id) => (
                <div
                    className={`card-border ${dataGotten.className}`}
                    onClick={() => handleCardClick(dataGotten.cardId)}
                    key={dataGotten.cardId}
                >
                    <div className="candidateDetails">
                        <div>
                            <div className="candidate-imgWrapper">
                                <img className='candidate-imgWrapper-img' src={dataGotten.candidateImg} alt="candidateImg" />
                                <FaCheckCircle className='icon' />
                            </div>
                            <p className='candidate-name'>{dataGotten.candidateName}</p>
                        </div>
                        <div className='icon-w'>
                            <FaEllipsisH className='icon' />
                        </div>
                    </div>

                    <div id='card'
                        className="card"
                        onClick={() => setPopUpBtn(true)}
                        ref={id === checkCardId ? printRef : null}>
                        <div className="partyLogo">
                            <img className='partyLogo-img' src={dataGotten.partyLogo} alt="" />
                        </div>
                        <div className="card-details">
                            <div className="cardImg">
                                {id === checkCardId ? <img src={cardImg} alt="" /> : <img src={avatar} alt="" />}
                            </div>
                            <p className="cardTxt">{dataGotten.cardTxt}</p>
                            <p className="midTxt">{dataGotten.midTxt}</p>
                            <p className="BtmCardTxt">{dataGotten.bottomCardTxt}</p>
                            <p className="BtmCardTxt2">{dataGotten.bottomCardTxt2}</p>
                            <p className="BtmCardTxt3">{dataGotten.bottomCardTxt3}</p>
                            <p className='smallTxt'>{dataGotten.smallTxt} </p>
                        </div>
                    </div>
                </div >
            ))
            }

            {/* PopUp Modal */}
            <PopUpModal trigger={popUpBtn} setTrigger={setPopUpBtn} handleCardImgChange={handleCardImgChange} imgSrc={cardImg} renderCard={handleCard} />

            <RenderPopUp trigger={usePopUpBtn} setTrigger={setusePopUpBtn} handleCard={handleCard} cardSrc={renderCardImg}>
            </RenderPopUp>
        </div >
    )
}

export default Card;