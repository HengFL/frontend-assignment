const loading = {
    show: (isShow = true) => {
        if (isShow) {
            document.querySelector(".loading")?.classList?.add('show');
        }
    },
    hide: (isShow = true) => {
        if (isShow) {
            document.querySelector(".loading")?.classList?.remove('show');
        }
    }
}

const scrollToSection = (selector, yOffset = 0) => {
    if (selector) {
        const element = document.querySelector(selector);
        if (element) {
            const el = document.querySelector(selector);
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
};

const layout = {
    loading: loading,
    scrollToSection: scrollToSection,
}

export default layout;
