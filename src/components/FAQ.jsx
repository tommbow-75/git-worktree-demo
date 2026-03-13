import { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq" id="faq" aria-label="常見問題">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">FAQ</span>
                    <h2 className="section-header__title">常見問題解答</h2>
                    <p className="section-header__desc">
                        找不到您的問題？歡迎透過線上客服或 Email 聯絡我們，我們會在 24 小時內回覆。
                    </p>
                </div>

                <div className="faq__list" role="list">
                    {FAQ_DATA.map((item, index) => {
                        const isOpen = activeIndex === index;
                        const answerId = `faq-answer-${item.id}`;
                        const questionId = `faq-question-${item.id}`;

                        return (
                            <div
                                key={item.id}
                                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                                role="listitem"
                            >
                                <button
                                    id={questionId}
                                    className="faq__question"
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                >
                                    <span className="faq__question-text">{item.question}</span>
                                    <span className="faq__icon" aria-hidden="true">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    id={answerId}
                                    role="region"
                                    aria-labelledby={questionId}
                                    className="faq__answer-wrapper"
                                    style={{ maxHeight: isOpen ? '600px' : '0' }}
                                >
                                    <div className="faq__answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="faq__footer">
                    <p className="faq__footer-text">還有其他問題？</p>
                    <a href="#demo" className="btn btn--outline">
                        聯絡我們的專家
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
