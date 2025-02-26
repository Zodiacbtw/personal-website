import './profile.css'
import React from 'react';
import { useLanguage } from '../context/LanguageContext'

export function Profile() {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='profile'>
            <h2 className='profile-title'>{translations[language].profile}</h2>
            <div className='profile-container'>
                <div className='profile-info'>
                    <h4>{translations[language].profile}</h4>
                    <ul>
                        <li><strong>{translations[language].birth_date}</strong>{translations[language].birth_date_info}</li>
                        <li><strong>{translations[language].city}</strong>{translations[language].city_info}</li>
                        <li><strong>{translations[language].education}</strong>{translations[language].education_info}</li>
                        <li><strong>{translations[language].degree}</strong>{translations[language].degree_info}</li>
                        <li><strong>{translations[language].preferred_role}</strong>{translations[language].preferred_role_info}</li>
                    </ul>
                </div>

                <div className='profile-about-me'>
                    <h4>{translations[language].about_me}</h4>
                    <p>
                        {translations[language].about_me_desc}
                    </p>
                    <p>
                        {translations[language].about_me_desc}
                    </p>
                </div>
            </div>
            <div className='profile-bottom-line'></div>
        </div>
    );
};