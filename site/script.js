const translations = {
    en: {
        nav_home: 'Home',
        nav_portfolio: 'Portfolio',
        nav_cases: 'Cases',
        home_title: 'AI Solutions for Business and Life',
        home_intro: 'We integrate artificial intelligence into enterprises and everyday life to make processes smarter and more efficient.',
        portfolio_title: 'Our Works',
        project1_title: 'Project One',
        project1_desc: 'Description of project one.',
        project2_title: 'Project Two',
        project2_desc: 'Description of project two.',
        contact_me: 'Contact via Telegram',
        cases_title: 'Success Stories',
        case1_title: 'Case One',
        case1_desc: 'How our solution helped improve efficiency.',
        case2_title: 'Case Two',
        case2_desc: 'How our solution improved people\'s lives.'
    },
    ru: {
        nav_home: 'Главная',
        nav_portfolio: 'Портфолио',
        nav_cases: 'Кейсы',
        home_title: 'ИИ решения для бизнеса и жизни',
        home_intro: 'Мы внедряем искусственный интеллект в предприятия и повседневную жизнь, делая процессы умнее и эффективнее.',
        portfolio_title: 'Наши работы',
        project1_title: 'Проект Один',
        project1_desc: 'Описание проекта один.',
        project2_title: 'Проект Два',
        project2_desc: 'Описание проекта два.',
        contact_me: 'Связаться в Telegram',
        cases_title: 'Успешные кейсы',
        case1_title: 'Кейс Один',
        case1_desc: 'Как наше решение помогло повысить эффективность.',
        case2_title: 'Кейс Два',
        case2_desc: 'Как наше решение улучшило жизнь людей.'
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
}

function applyTranslations() {
    const lang = localStorage.getItem('lang') || 'en';
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', applyTranslations);
