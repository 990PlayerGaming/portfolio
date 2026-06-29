const translations = {
    it: {
        title: "Ciao, sono Daniel",
        subtitle: "Backend Developer — Portfolio in costruzione",
        contact: `Contattami: <a href="mailto:luca@daniel-iosipescu.dev">luca@daniel-iosipescu.dev</a>`
    },
    en: {
        title: "Hi, I'm Daniel",
        subtitle: "Backend Developer — Portfolio under construction",
        contact: `Contact me: <a href="mailto:luca@daniel-iosipescu.dev">luca@daniel-iosipescu.dev</a>`
    },
    ro: {
        title: "Salut, sunt Daniel",
        subtitle: "Dezvoltator Backend — Portofoliu în construcție",
        contact: `Contactează-mă: <a href="mailto:luca@daniel-iosipescu.dev">luca@daniel-iosipescu.dev</a>`
    }
};

const switcher = document.getElementById("languageSwitcher");

switcher.addEventListener("change", () => {
    const lang = switcher.value;
    document.getElementById("title").innerHTML = translations[lang].title;
    document.getElementById("subtitle").innerHTML = translations[lang].subtitle;
    document.getElementById("contact").innerHTML = translations[lang].contact;
});
