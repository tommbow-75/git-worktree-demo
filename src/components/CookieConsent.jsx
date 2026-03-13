import { useState, useEffect } from 'react';

function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // 延遲 0.5s 後顯示，讓頁面先載入
            const timer = setTimeout(() => setVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (accepted) => {
        localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'rejected');
        setHiding(true);
        setTimeout(() => setVisible(false), 350);
    };

    if (!visible) return null;

    return (
        <div
            className={`cookie-consent ${hiding ? 'cookie-consent--hiding' : ''}`}
            role="dialog"
            aria-live="polite"
            aria-label="Cookie 同意通知"
        >
            <div className="cookie-consent__inner">
                <div className="cookie-consent__content">
                    <div className="cookie-consent__icon" aria-hidden="true">🍪</div>
                    <div className="cookie-consent__text">
                        <p className="cookie-consent__title">我們使用 Cookie</p>
                        <p className="cookie-consent__desc">
                            我們使用 Cookie 來改善您的瀏覽體驗、分析網站流量及提供個人化內容。
                            點擊「接受」即表示您同意我們的{' '}
                            <a href="/privacy" className="cookie-consent__link">隱私政策</a>。
                        </p>
                    </div>
                </div>
                <div className="cookie-consent__actions">
                    <button
                        className="btn btn--outline btn--sm cookie-consent__reject"
                        onClick={() => handleConsent(false)}
                        aria-label="僅接受必要 Cookie"
                    >
                        僅限必要
                    </button>
                    <button
                        className="btn btn--primary btn--sm"
                        onClick={() => handleConsent(true)}
                        aria-label="接受所有 Cookie"
                    >
                        接受所有 Cookie
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
