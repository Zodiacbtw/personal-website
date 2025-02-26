import './projects.css'
import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Projects () {
    const { translations, language } = useLanguage();

    if (!translations[language]) return null;

    return (
        <div className='projects'>
            <h2 className='projects-title'>{translations[language].projects}</h2>
            <div className='projects-container'>
                <div className='projects-container-child'>
                <img className='projects-img' src="https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aTscBQhc8FOHuUPW2qMar3teAtt1oMq7545BlZgGOMt-ot5AlnOBVy8vUOrFKTsjR0oQvPdx6m1ZrvgBEjW7~R1MCEcVMy~XuWc-QkIiyl-xE9efxNeo2MiLnD-GdjWmFimxNFkbhQzQ411ZS1uX-IE~I-N22vC9ChWJi-rj1CpAiXIRqIgVrDl1fmuIXPdPOq8CuiFyVAG0mY6kRA3f4mN07QrsDrbCXeYejmsqIspL0oEvRTkqxbeD7xC9bP7o2Gp4yBI1r8MRaElRcdxz0mfB5YwnMXnMOqY0-BYNqVyQQcvNx94PcabJDi3Uu~fOdn0WsXZ56jrJOvZW84e6sQ__" alt="Project" />
                    <h4>{translations[language].tourism_feedback_system}</h4>
                    <p>
                        {translations[language].project_desc}
                    </p>
                    <div className='projects-tech-container'>
                        <a href="#" className='projects-tech-container-child'>{translations[language].python}</a>
                        <a href="#" className='projects-tech-container-child'>{translations[language].ms_sql_short}</a>
                    </div>
                    <div className='projects-source-container'>
                        <a href="#" className='projects-source-container-child'>{translations[language].github}</a>
                        <a href="#" className='projects-source-container-child'>{translations[language].view_site}</a>
                    </div>
                </div>
                <div className='projects-container-child'>
                <img className='projects-img' src="https://s3-alpha-sig.figma.com/img/64b8/0612/2ad18b91bc83b5e0c2524ee319ac4a12?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rdkQcKglL1bUbOWGBJqYUiX-A8VKHLyLKOK05G3DEVSdXmN7gWWUByz9PfydVU8rSK2SNH-c-Rxivcs6LD87TaznPi15XREZE8d-3vV2vMZdugTVTbLOCYOr3mHR1R0tpnl2vrK-vjDc3NMoYIlTgnmoL7LKUWooo1gSC-k8U9Ho02TsCdyhTV7jCnG0ywDmpnJpZJna9Kyv9KkU1xbUbkFB-ITjnJs73Tt30yUrzd4BOgdnUfPjZ9Y-UHHi8nDo8AoNhNpl11HGhQzCn~GJbm6GjbHy89taZn4N3FBxcEWgYMyjF69SnCi019Io4HUmVplbhklFyYZqLwUiSqaAEA__" alt="Project" />
                    <h4>{translations[language].tourism_reservation_automation}</h4>
                    <p>
                        {translations[language].project_desc}
                    </p>
                    <div className='projects-tech-container'>
                        <a href="#" className='projects-tech-container-child'>{translations[language].python}</a>
                        <a href="#" className='projects-tech-container-child'>{translations[language].ms_sql_short}</a>
                    </div>
                    <div className='projects-source-container'>
                        <a href="#" className='projects-source-container-child'>{translations[language].github}</a>
                        <a href="#" className='projects-source-container-child'>{translations[language].view_site}</a>
                    </div>
                </div>
                <div className='projects-container-child'>
                <img className='projects-img' src="https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t69aN2-FL2J2vFFKtZVXV5B-1LjBchrQYojhI9ryI2NhGYSLoBP0dbel5on0MsI2Zao0iZst0TaKxU0cceRYzFgKklq7Mxa~cDIvaUAMcH5-MHq6KIWfuzvI~tnc1hp9Yr5PXISijcwnBTvy8RN~TbCC65gYOfz2EMUlbmLEu8Xjt8E35UZcy3GA49QzqfKYxceg9Za1NufHDaZAy-wBan2EJTAHcngjZAj804JhvLIXTPE1WJB92arMAdzqu6A8A6fyd0kBgp5j9Xd7RYaiLJp~jppPmp9LghFQzp~yqiNdF6AKH9hKlgx4XlqjAC5FmUr60pViuk79th1bCJueOw__" alt="Project" />
                    <h4>{translations[language].anime_dataset_analysis}</h4>
                    <p>
                        {translations[language].project_desc}
                    </p>
                    <div className='projects-tech-container'>
                        <a href="#" className='projects-tech-container-child'>{translations[language].python}</a>
                        <a href="#" className='projects-tech-container-child'>{translations[language].machine_learning}</a>
                        <a href="#" className='projects-tech-container-child'>{translations[language].neural_networks}</a>
                    </div>
                    <div className='projects-source-container'>
                        <a href="#" className='projects-source-container-child'>{translations[language].github}</a>
                        <a href="#" className='projects-source-container-child'>{translations[language].view_site}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};