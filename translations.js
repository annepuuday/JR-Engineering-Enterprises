document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");

    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        changeLanguage(selectedLanguage);
    });

    function changeLanguage(lang) {
        const translations = {
            en: {
                // Navigation
                home: "Home",
                about: "About Us",
                services: "Services",
                enquiry: "Enquiry",
                contact: "Contact Us",

                // Home Section
                welcome: "Welcome to JR Engineering Enterprises",
                description: "Your trusted partner in manpower supply, recruitment, and engineering services.",
                explore: "Explore Services",
            },
            hi: {
                // Navigation
                home: "होम",
                about: "हमारे बारे में",
                services: "सेवाएँ",
                enquiry: "जांच",
                contact: "संपर्क करें",

                // Home Section
                welcome: "जेआर इंजीनियरिंग एंटरप्राइजेज में आपका स्वागत है",
                description: "जनशक्ति आपूर्ति, भर्ती और इंजीनियरिंग सेवाओं में आपका विश्वसनीय साथी।",
                explore: "सेवाएँ देखें",
            },
            ta: {
                // Navigation
                home: "முகப்பு",
                about: "எங்களைப் பற்றி",
                services: "சேவைகள்",
                enquiry: "விசாரணை",
                contact: "தொடர்பு கொள்ள",

                // Home Section
                welcome: "JR பொறியியல் நிறுவனத்திற்கு வரவேற்கிறோம்",
                description: "மனிதவள வழங்கல், ஆட்சேர்ப்பு மற்றும் பொறியியல் சேவைகளில் உங்கள் நம்பகமான கூட்டாளி.",
                explore: "சேவைகளை ஆராய",

            },
            te: {
                // Navigation
                home: "హోమ్",
                about: "మా గురించి",
                services: "సేవలు",
                enquiry: "విచారణ",
                contact: "సంప్రదించండి",

                // Home Section
                welcome: "JR ఇంజనీరింగ్ ఎంటర్‌ప్రైజెస్‌కి స్వాగతం",
                description: "మానవ వనరుల సరఫరా, నియామకం మరియు ఇంజనీరింగ్ సేవలలో మీ విశ్వసనీయ భాగస్వామి.",
                explore: "సేవలను అన్వేషించండి",

            }
        };

        // Update Navigation Links
        document.querySelector("nav .nav-links li:nth-child(1) a").innerHTML = `<i class="fas fa-home"></i> ${translations[lang].home}`;
        document.querySelector("nav .nav-links li:nth-child(2) a").innerHTML = `<i class="fas fa-building"></i> ${translations[lang].about}`;
        document.querySelector("nav .nav-links li:nth-child(3) a").innerHTML = `<i class="fas fa-cogs"></i> ${translations[lang].services}`;
        document.querySelector("nav .nav-links li:nth-child(4) a").innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].enquiry}`;
        document.querySelector("nav .nav-links li:nth-child(5) a").innerHTML = `<i class="fas fa-phone-alt"></i> ${translations[lang].contact}`;

        // Update Home Section
        document.querySelector("#home h1").textContent = translations[lang].welcome;
        document.querySelector("#home p").textContent = translations[lang].description;
        document.querySelector("#home .btn").textContent = translations[lang].explore;

    }
});


