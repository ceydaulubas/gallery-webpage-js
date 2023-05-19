import React from 'react';
import './Discover.css';
import aileZiyaretIcon from '../../images/aileZiyaretIcon.png';
import arastirmaIcinZiyaret from '../../images/arastirmaIcinZiyaret.png';
import engelinizeGoreZiyaret from '../../images/engelinizeGoreZiyaret.png';
import grupOlarakZiyaret from '../../images/grupOlarakZiyaret.png';
import kurumsalEgitimIcinZiyaret from '../../images/kurumsalEgitimIcinZiyaret.png';
import SponsorOlmakicinZiyaret from '../../images/SponsorOlmakicinZiyaret.png';

function Discover() {
    return (
        <div className="containerx">
            <div className="left-column">
                <h1 className="title">Ziyaret biçimini seç</h1>
                <p className="subtitle">Bu muhteşem müzeyi nasıl keşfetmek istersin?</p>
            </div>
            <div className="right-column">
                <div className="row">
                    <div className="col">
                        <img src={`${aileZiyaretIcon}`} alt="aileZiyaretIcon" className="icon" />
                        <p className="option">Aile ile ziyaret</p>
                        <span className="arrow1">&gt;</span>
                    </div>
                    <div className="col">
                        <img src={`${engelinizeGoreZiyaret}`} alt="engelinizeGoreZiyaret" className="icon" />
                        <p className="option">Engelinize göre ziyaret</p>
                        <span className="arrow2">&gt;</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={`${grupOlarakZiyaret}`} alt="grupOlarakZiyaret" className="icon" />
                        <p className="option">Grup Olarak ziyaret</p>
                        <span className="arrow3">&gt;</span>
                    </div>
                    <div className="col">
                        <img src={`${kurumsalEgitimIcinZiyaret}`} alt="kurumsalEgitimIcinZiyaret" className="icon" />
                        <p className="option">Kurumsal eğitim için ziyaret</p>
                        <span className="arrow4">&gt;</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={`${arastirmaIcinZiyaret}`} alt="arastirmaIcinZiyaret" className="icon" />
                        <p className="option">Araştırma için ziyaret</p>
                        <span className="arrow5">&gt;</span>
                    </div>
                    <div className="col">
                        <img src={`${SponsorOlmakicinZiyaret}`} alt="SponsorOlmakicinZiyaret" className="icon" />
                        <p className="option">Sponsor olmak için ziyaret</p>
                        <span className="arrow6">&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discover;
