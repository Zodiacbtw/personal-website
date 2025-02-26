import { useLanguage } from '../context/LanguageContext';
import './footer.css'
import React from 'react'

export function Footer () {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='footer'>
            <h2 className='footer-title'>{translations[language].footer_desc}</h2>
            <div className='footer-link-container'>
                <div className='footer-link-container-child-left'>
                    <a href="#" className='footer-left'>
                        <i className='fa-solid fa-angles-right'></i>{translations[language].email}
                    </a>
                </div>
                <div className='footer-link-container-child-right'>
                    <a href="#" className='footer-link-container-child-right-inner footer-right-first'>{translations[language].personal_blog}</a>
                    <a href="#" className='footer-link-container-child-right-inner footer-right-second'>{translations[language].github}</a>
                    <a href="#" className='footer-link-container-child-right-inner footer-right-last'>{translations[language].linkedin}</a>
                </div>
            </div>
        </div>
    );
};