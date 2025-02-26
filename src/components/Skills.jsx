import { useLanguage } from '../context/LanguageContext';
import './skills.css'
import React from 'react'

export function Skills () {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='skills'>
            <h2 className='skills-title'>{translations[language].skills}</h2>
            <div className='skills-container'>
                <div className='skills-container-child'>
                    <h4>{translations[language].python}</h4>
                    <p>{translations[language].skills_desc}</p>
                </div>
                <div className='skills-container-child'>
                    <h4>{translations[language].ms_sql}</h4>
                    <p>{translations[language].skills_desc}</p>
                </div>
                <div className='skills-container-child'>
                    <h4>{translations[language].machine_learning}</h4>
                    <p>{translations[language].skills_desc}</p>
                </div>
                <div className='skills-container-child'>
                    <h4>{translations[language].javascript}</h4>
                    <p>{translations[language].skills_desc}</p>
                </div>
            </div>
            <div className='skills-bottom-line'></div>
        </div>
    );
};