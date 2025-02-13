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

                // About Section
                aboutUs: "About Us",
                whoWeAre: "Who We Are",
                whoWeAreContent: "Welcome to JR Engineering Enterprises! We are a trusted manpower supplier and engineering service provider, catering to industries like construction, manufacturing, and industrial plant maintenance.",
                ourServices: "Our Services",
                ourServicesContent: "We offer electrical, instrumentation, industrial process, and maintenance services, ensuring operational excellence. From contractor services to manpower supply, we provide skilled professionals for erection works, industrial projects, and engineering solutions.",
                whyChooseUs: "Why Choose Us?",
                whyChooseList: [
                    "Expertise in manpower recruitment & industrial solutions",
                    "Commitment to quality, safety, and efficiency",
                    "Serving major industries with skilled workforce solutions"
                ],

                // Services Section
                servicesTitle: "Our Services | WorkForce",
                services: {
                    manpower: {
                        title: "Manpower Supply",
                        description: "We provide skilled & unskilled manpower for industries, including construction, manufacturing, and plant maintenance.",
                        button: "Know More"
                    },
                    contractor: {
                        title: "Contractor Services",
                        description: "We undertake contracts for engineering, industrial projects, and on-site workforce management.",
                        button: "Know More"
                    },
                    engineering: {
                        title: "Engineering Services",
                        description: "Providing expert engineering solutions for industries with high-quality standards.",
                        button: "Know More"
                    },
                    electrical: {
                        title: "Electrical Services",
                        description: "We provide complete electrical solutions, including industrial wiring, maintenance, and power system installations.",
                        button: "Know More"
                    },
                    instrumentation: {
                        title: "Instrumentation Services",
                        description: "Offering precision instrumentation solutions for industrial automation and control systems.",
                        button: "Know More"
                    },
                    maintenance: {
                        title: "Industrial Process & Maintenance",
                        description: "Comprehensive maintenance services for industrial plants and manufacturing units.",
                        button: "Know More"
                    },
                    erection: {
                        title: "Erection Works",
                        description: "We handle industrial erection projects, including machinery installation and steel structures.",
                        button: "Know More"
                    },
                },

                // Enquiry Section
                enquiry: {
                    title: "Send a Enquiry to Know More",
                    lookingFor: "Looking for",
                    manpower: "Manpower",
                    labours: "Labours",
                    suppliers: "Suppliers",
                    labourContractors: "Labour Contractors",
                    freeService: "It's Free",
                    noCharges: "No Registration Charges",
                    contactButton: "Contact Now",
                    agencyTitle: "Are You Agency | Labour Contractor | Manpower Supplier | and Looking for Leads | Projects?",
                    registerText: "Register with Us. We will provide you Multiple Opportunities in all over India."
                },

                // Contact Section
                contact: {
                    title: "Contact Us",
                    email: "Email",
                    phone: "Phone",
                    address: "Address",
                    addressText: "Door No: 4-29 BALARAMPURAM, LINGALAVALASA Village, TEKKALI Mandal, Srikakulam District, Pincode - 532201",
                    footerCopyright: "© 2025 JR Engineering Enterprise. All rights reserved."
                }
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

                // About Section
                aboutUs: "हमारे बारे में",
                whoWeAre: "हम कौन हैं",
                whoWeAreContent: "जेआर इंजीनियरिंग एंटरप्राइजेज में आपका स्वागत है! हम एक विश्वसनीय जनशक्ति आपूर्तिकर्ता और इंजीनियरिंग सेवा प्रदाता हैं, जो निर्माण, विनिर्माण और औद्योगिक संयंत्र रखरखाव जैसे उद्योगों की सेवा करते हैं।",
                ourServices: "हमारी सेवाएं",
                ourServicesContent: "हम विद्युत, इंस्ट्रूमेंटेशन, औद्योगिक प्रक्रिया और रखरखाव सेवाएं प्रदान करते हैं। ठेकेदार सेवाओं से लेकर जनशक्ति आपूर्ति तक, हम निर्माण कार्यों, औद्योगिक परियोजनाओं और इंजीनियरिंग समाधानों के लिए कुशल पेशेवर प्रदान करते हैं।",
                whyChooseUs: "हमें क्यों चुनें?",
                whyChooseList: [
                    "जनशक्ति भर्ती और औद्योगिक समाधानों में विशेषज्ञता",
                    "गुणवत्ता, सुरक्षा और दक्षता के प्रति प्रतिबद्धता",
                    "कुशल कार्यबल समाधानों के साथ प्रमुख उद्योगों की सेवा"
                ],

                // Services Section
                servicesTitle: "हमारी सेवाएं | कार्यबल",
                services: {
                    manpower: {
                        title: "जनशक्ति आपूर्ति",
                        description: "हम उद्योगों के लिए कुशल और अकुशल जनशक्ति प्रदान करते हैं, जिसमें निर्माण, विनिर्माण और संयंत्र रखरखाव शामिल हैं।",
                        button: "और जानें"
                    },
                    contractor: {
                        title: "ठेकेदार सेवाएं",
                        description: "हम इंजीनियरिंग, औद्योगिक परियोजनाओं और साइट पर कार्यबल प्रबंधन के लिए ठेके लेते हैं।",
                        button: "और जानें"
                    },
                    engineering: {
                        title: "इंजीनियरिंग सेवाएं",
                        description: "उच्च गुणवत्ता मानकों के साथ उद्योगों के लिए विशेषज्ञ इंजीनियरिंग समाधान प्रदान करना।",
                        button: "और जानें"
                    },
                    electrical: {
                        title: "विद्युत सेवाएं",
                        description: "हम पूर्ण विद्युत समाधान प्रदान करते हैं, जिसमें औद्योगिक वायरिंग, रखरखाव और पावर सिस्टम स्थापना शामिल हैं।",
                        button: "और जानें"
                    },
                    instrumentation: {
                        title: "इंस्ट्रूमेंटेशन सेवाएं",
                        description: "औद्योगिक स्वचालन और नियंत्रण प्रणालियों के लिए सटीक इंस्ट्रूमेंटेशन समाधान प्रदान करना।",
                        button: "और जानें"
                    },
                    maintenance: {
                        title: "औद्योगिक प्रक्रिया और रखरखाव",
                        description: "औद्योगिक संयंत्रों और विनिर्माण इकाइयों के लिए व्यापक रखरखाव सेवाएं।",
                        button: "और जानें"
                    },
                    erection: {
                        title: "निर्माण कार्य",
                        description: "हम मशीनरी स्थापना और स्टील संरचनाओं सहित औद्योगिक निर्माण परियोजनाओं को संभालते हैं।",
                        button: "और जानें"
                    }
                },

                // Enquiry Section
                enquiry: {
                    title: "अधिक जानकारी के लिए पूछताछ करें",
                    lookingFor: "की तलाश में",
                    manpower: "जनशक्ति",
                    labours: "श्रमिक",
                    suppliers: "आपूर्तिकर्ता",
                    labourContractors: "श्रम ठेकेदार",
                    freeService: "यह मुफ्त है",
                    noCharges: "कोई पंजीकरण शुल्क नहीं",
                    contactButton: "अभी संपर्क करें",
                    agencyTitle: "क्या आप एजेंसी | श्रम ठेकेदार | जनशक्ति आपूर्तिकर्ता हैं | और लीड्स | प्रोजेक्ट्स की तलाश में हैं?",
                    registerText: "हमारे साथ पंजीकरण करें। हम आपको पूरे भारत में कई अवसर प्रदान करेंगे।"
                },

                // Contact Section
                contact: {
                    title: "संपर्क करें",
                    email: "ईमेल",
                    phone: "फोन",
                    address: "पता",
                    addressText: "दरवाजा नंबर: 4-29 बालारामपुरम, लिंगलवलसा गाँव, टेक्कली मंडल, श्रीकाकुलम जिला, पिनकोड - 532201",
                    footerCopyright: "© 2025 जेआर इंजीनियरिंग एंटरप्राइज. सर्वाधिकार सुरक्षित."
                }
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

                // About Section
                aboutUs: "எங்களைப் பற்றி",
                whoWeAre: "நாங்கள் யார்",
                whoWeAreContent: "JR பொறியியல் நிறுவனங்களுக்கு வரவேற்கிறோம்! நாங்கள் கட்டுமானம், உற்பத்தி மற்றும் தொழில்துறை ஆலை பராமரிப்பு போன்ற தொழில்களுக்கு சேவை செய்யும் நம்பகமான மனிதவள வழங்குநர் மற்றும் பொறியியல் சேவை வழங்குநர் ஆவோம்.",
                ourServices: "எங்கள் சேவைகள்",
                ourServicesContent: "மின்சார, கருவி, தொழில்துறை செயல்முறை மற்றும் பராமரிப்பு சேவைகளை வழங்குகிறோம். ஒப்பந்த சேவைகள் முதல் மனிதவள வழங்கல் வரை, நிறுவுதல் பணிகள், தொழில்துறை திட்டங்கள் மற்றும் பொறியியல் தீர்வுகளுக்கான திறமையான தொழில்முறை வல்லுநர்களை வழங்குகிறோம்.",
                whyChooseUs: "எங்களை ஏன் தேர்வு செய்ய வேண்டும்?",
                whyChooseList: [
                    "மனிதவள ஆட்சேர்ப்பு & தொழில்துறை தீர்வுகளில் நிபுணத்துவம்",
                    "தரம், பாதுகாப்பு மற்றும் செயல்திறனுக்கான அர்ப்பணிப்பு",
                    "திறமையான பணியாளர் தீர்வுகளுடன் முக்கிய தொழில்களுக்கு சேவை"
                ],

                // Services Section
                servicesTitle: "எங்கள் சேவைகள் | பணியாளர்கள்",
                services: {
                    manpower: {
                        title: "மனிதவள வழங்கல்",
                        description: "கட்டுமானம், உற்பத்தி மற்றும் ஆலை பராமரிப்பு உள்ளிட்ட தொழில்களுக்கு திறமையான மற்றும் திறமையற்ற மனிதவளத்தை வழங்குகிறோம்.",
                        button: "மேலும் அறிக"
                    },
                    contractor: {
                        title: "ஒப்பந்ததாரர் சேவைகள்",
                        description: "பொறியியல், தொழில்துறை திட்டங்கள் மற்றும் தள பணியாளர் மேலாண்மைக்கான ஒப்பந்தங்களை மேற்கொள்கிறோம்.",
                        button: "மேலும் அறிக"
                    },
                    engineering: {
                        title: "பொறியியல் சேவைகள்",
                        description: "உயர்தர தரநிலைகளுடன் தொழில்களுக்கு நிபுணத்துவ பொறியியல் தீர்வுகளை வழங்குதல்.",
                        button: "மேலும் அறிக"
                    },
                    electrical: {
                        title: "மின்சார சேவைகள்",
                        description: "தொழில்துறை வயரிங், பராமரிப்பு மற்றும் மின்சக்தி அமைப்பு நிறுவல்கள் உள்ளிட்ட முழுமையான மின்சார தீர்வுகளை வழங்குகிறோம்.",
                        button: "மேலும் அறிக"
                    },
                    instrumentation: {
                        title: "கருவியியல் சேவைகள்",
                        description: "தொழில்துறை தானியங்கி மற்றும் கட்டுப்பாட்டு அமைப்புகளுக்கான துல்லியமான கருவியியல் தீர்வுகளை வழங்குதல்.",
                        button: "மேலும் அறிக"
                    },
                    maintenance: {
                        title: "தொழில்துறை செயல்முறை & பராமரிப்பு",
                        description: "தொழில்துறை ஆலைகள் மற்றும் உற்பத்தி அலகுகளுக்கான விரிவான பராமரிப்பு சேவைகள்.",
                        button: "மேலும் அறிக"
                    },
                    erection: {
                        title: "நிறுவுதல் பணிகள்",
                        description: "இயந்திர நிறுவல் மற்றும் எஃகு கட்டமைப்புகள் உள்ளிட்ட தொழில்துறை நிறுவல் திட்டங்களை கையாளுகிறோம்.",
                        button: "மேலும் அறிக"
                    },
                },

                // Enquiry Section
                enquiry: {
                    title: "மேலும் அறிய விசாரணை அனுப்பவும்",
                    lookingFor: "தேடுகிறீர்களா",
                    manpower: "மனிதவளம்",
                    labours: "தொழிலாளர்கள்",
                    suppliers: "சப்ளையர்கள்",
                    labourContractors: "தொழிலாளர் ஒப்பந்ததாரர்கள்",
                    freeService: "இது இலவசம்",
                    noCharges: "பதிவு கட்டணம் இல்லை",
                    contactButton: "இப்போதே தொடர்பு கொள்ளவும்",
                    agencyTitle: "நீங்கள் ஏஜென்சி | தொழிலாளர் ஒப்பந்ததாரர் | மனிதவள சப்ளையர் | மற்றும் லீட்ஸ் | திட்டங்களைத் தேடுகிறீர்களா?",
                    registerText: "எங்களுடன் பதிவு செய்யுங்கள். இந்தியா முழுவதும் பல வாய்ப்புகளை வழங்குவோம்."
                },

                // Contact Section
                contact: {
                    title: "தொடர்பு கொள்ளவும்",
                    email: "மின்னஞ்சல்",
                    phone: "தொலைபேசி",
                    address: "முகவரி",
                    addressText: "கதவு எண்: 4-29 பாலாராம்புரம், லிங்கலவலாசா கிராமம், டெக்கலி மண்டலம், ஸ்ரீகாகுலம் மாவட்டம், அஞ்சல் குறியீடு - 532201",
                    footerCopyright: "© 2025 ஜேஆர் இன்ஜினியரிங் எண்டர்பிரைஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
                }
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

                // About Section
                aboutUs: "మా గురించి",
                whoWeAre: "మేము ఎవరు",
                whoWeAreContent: "JR ఇంజనీరింగ్ ఎంటర్‌ప్రైజెస్‌కి స్వాగతం! మేము నిర్మాణం, తయారీ మరియు పారిశ్రామిక ప్లాంట్ నిర్వహణ వంటి పరిశ్రమలకు సేవలందించే విశ్వసనీయ మానవ వనరుల సరఫరాదారు మరియు ఇంజనీరింగ్ సేవల ప్రదాత.",
                ourServices: "మా సేవలు",
                ourServicesContent: "మేము విద్యుత్, ఇన్‌స్ట్రుమెంటేషన్, పారిశ్రామిక ప్రక్రియ మరియు నిర్వహణ సేవలను అందిస్తాము. కాంట్రాక్టర్ సేవల నుండి మానవ వనరుల సరఫరా వరకు, నిర్మాణ పనులు, పారిశ్రామిక ప్రాజెక్టులు మరియు ఇంజనీరింగ్ పరిష్కారాలకు నైపుణ్యం కలిగిన వృత్తి నిపుణులను అందిస్తాము.",
                whyChooseUs: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
                whyChooseList: [
                    "మానవ వనరుల నియామకం & పారిశ్రామిక పరిష్కారాలలో నిపుణత",
                    "నాణ్యత, భద్రత మరియు సామర్థ్యంపై నిబద్ధత",
                    "నైపుణ్యం కలిగిన కార్మిక శక్తి పరిష్కారాలతో ప్రధాన పరిశ్రమలకు సేవ"
                ],

                // Services Section
                servicesTitle: "మా సేవలు | కార్మికశక్తి",
                services: {
                    manpower: {
                        title: "మానవ వనరుల సరఫరా",
                        description: "నిర్మాణం, తయారీ మరియు ప్లాంట్ నిర్వహణతో సహా పరిశ్రమలకు నైపుణ్యం కలిగిన & నైపుణ్యం లేని మానవ వనరులను అందిస్తాము.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    contractor: {
                        title: "కాంట్రాక్టర్ సేవలు",
                        description: "ఇంజనీరింగ్, పారిశ్రామిక ప్రాజెక్టులు మరియు సైట్‌లో కార్మికశక్తి నిర్వహణ కోసం కాంట్రాక్టులు చేపడతాము.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    engineering: {
                        title: "ఇంజనీరింగ్ సేవలు",
                        description: "అధిక నాణ్యతా ప్రమాణాలతో పరిశ్రమలకు నిపుణ ఇంజనీరింగ్ పరిష్కారాలను అందించడం.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    electrical: {
                        title: "విద్యుత్ సేవలు",
                        description: "పారిశ్రామిక వైరింగ్, నిర్వహణ మరియు విద్యుత్ వ్యవస్థ ఇన్‌స్టాలేషన్‌లతో సహా సంపూర్ణ విద్యుత్ పరిష్కారాలను అందిస్తాము.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    instrumentation: {
                        title: "ఇన్‌స్ట్రుమెంటేషన్ సేవలు",
                        description: "పారిశ్రామిక ఆటోమేషన్ మరియు నియంత్రణ వ్యవస్థల కోసం ఖచ్చితమైన ఇన్‌స్ట్రుమెంటేషన్ పరిష్కారాలను అందించడం.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    maintenance: {
                        title: "పారిశ్రామిక ప్రక్రియ & నిర్వహణ",
                        description: "పారిశ్రామిక ప్లాంట్‌లు మరియు తయారీ యూనిట్ల కోసం సమగ్ర నిర్వహణ సేవలు.",
                        button: "మరింత తెలుసుకోండి"
                    },
                    erection: {
                        title: "నిర్మాణ పనులు",
                        description: "యంత్ర స్థాపన మరియు స్టీల్ నిర్మాణాలతో సహా పారిశ్రామిక నిర్మాణ ప్రాజెక్టులను నిర్వహిస్తాము.",
                        button: "మరింత తెలుసుకోండి"
                    }
                },

                // Enquiry Section
                enquiry: {
                    title: "మరింత తెలుసుకోవడానికి ఎంక్వైరీ పంపండి",
                    lookingFor: "వెతుకుతున్నారా",
                    manpower: "మానవ వనరులు",
                    labours: "కార్మికులు",
                    suppliers: "సప్లయర్లు",
                    labourContractors: "లేబర్ కాంట్రాక్టర్లు",
                    freeService: "ఇది ఉచితం",
                    noCharges: "రిజిస్ట్రేషన్ ఛార్జీలు లేవు",
                    contactButton: "ఇప్పుడే సంప్రదించండి",
                    agencyTitle: "మీరు ఏజెన్సీ | లేబర్ కాంట్రాక్టర్ | మానవ వనరుల సప్లయర్ | మరియు లీడ్స్ | ప్రాజెక్ట్స్ కోసం చూస్తున్నారా?",
                    registerText: "మాతో రిజిస్టర్ చేసుకోండి. భారతదేశం అంతటా అనేక అవకాశాలను అందిస్తాము."
                },

                // Contact Section
                contact: {
                    title: "సంప్రదించండి",
                    email: "ఇమెయిల్",
                    phone: "ఫోన్",
                    address: "చిరునామా",
                    addressText: "తలుపు నెం: 4-29 బాలారాంపురం, లింగలవలస గ్రామం, టెక్కలి మండలం, శ్రీకాకుళం జిల్లా, పిన్ కోడ్ - 532201",
                    footerCopyright: "© 2025 జేఆర్ ఇంజనీరింగ్ ఎంటర్‌ప్రైజ్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
                }
            },
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

        // Update About Section
        document.querySelector("#company h2").textContent = translations[lang].aboutUs;
        document.querySelector("#company .company-info h3:nth-child(1)").innerHTML = `<i class="fas fa-industry"></i> ${translations[lang].whoWeAre}`;
        document.querySelector("#company .company-info p:nth-child(2)").textContent = translations[lang].whoWeAreContent;
        
        document.querySelector("#company .company-info h3:nth-child(3)").innerHTML = `<i class="fas fa-tools"></i> ${translations[lang].ourServices}`;
        document.querySelector("#company .company-info p:nth-child(4)").textContent = translations[lang].ourServicesContent;
        
        document.querySelector("#company .company-info h3:nth-child(5)").innerHTML = `<i class="fas fa-users"></i> ${translations[lang].whyChooseUs}`;
        
        // Update Why Choose Us list
        const whyChooseList = document.querySelector("#company .company-info ul");
        whyChooseList.innerHTML = translations[lang].whyChooseList
            .map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`)
            .join('');
            
        // Update Services Section - Fixed selector
        const servicesTitle = document.querySelector("#services h2");
        if (servicesTitle) {
            servicesTitle.innerHTML = translations[lang].servicesTitle;
        }

        // Log for debugging
        console.log("Updating services title to:", translations[lang].servicesTitle);
        console.log("Services title element:", servicesTitle);

        // Update each service card
        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach((card, index) => {
            const serviceTypes = ['manpower', 'contractor', 'engineering', 'electrical', 'instrumentation', 'maintenance', 'erection'];
            const serviceType = serviceTypes[index];
            
            if (translations[lang].services[serviceType]) {
                const service = translations[lang].services[serviceType];
                const titleElement = card.querySelector("h3");
                const descriptionElement = card.querySelector("p");
                const buttonElement = card.querySelector("button");

                if (titleElement) titleElement.textContent = service.title;
                if (descriptionElement) descriptionElement.textContent = service.description;
                if (buttonElement) buttonElement.textContent = service.button;
            }
        });

        // Update Enquiry Section
        // Main title
        const enquiryTitle = document.querySelector("#enquiry h1");
        if (enquiryTitle) {
            enquiryTitle.textContent = translations[lang].enquiry.title;
        }

        // First enquiry container
        const lookingForTitle = document.querySelector("#enquiry .enquiry-content h2");
        if (lookingForTitle) {
            lookingForTitle.innerHTML = `${translations[lang].enquiry.lookingFor} <span class="highlight">${translations[lang].enquiry.manpower}</span> | <span class="highlight">${translations[lang].enquiry.labours}</span> | <span class="highlight">${translations[lang].enquiry.suppliers}</span> | <span class="highlight">${translations[lang].enquiry.labourContractors}</span>?`;
        }

        // Free & No Charges info
        const freeServiceText = document.querySelector("#enquiry .enquiry-info p:first-child strong");
        const noChargesText = document.querySelector("#enquiry .enquiry-info p:last-child strong");
        if (freeServiceText) {
            freeServiceText.textContent = translations[lang].enquiry.freeService;
        }
        if (noChargesText) {
            noChargesText.textContent = translations[lang].enquiry.noCharges;
        }

        // Contact buttons
        const contactButtons = document.querySelectorAll("#enquiry .enquiry-btn");
        contactButtons.forEach(button => {
            button.textContent = translations[lang].enquiry.contactButton;
        });

        // Second enquiry container
        const agencyTitle = document.querySelector("#enquiry .enquiry-container:last-child .enquiry-content h2");
        if (agencyTitle) {
            agencyTitle.textContent = translations[lang].enquiry.agencyTitle;
        }

        const registerText = document.querySelector("#enquiry .enquiry-container:last-child .cta-text");
        if (registerText) {
            registerText.textContent = translations[lang].enquiry.registerText;
        }

        // Update Contact Section
        // Main title
        const contactTitle = document.querySelector("#contact h2");
        if (contactTitle) {
            contactTitle.textContent = translations[lang].contact.title;
        }

        // Contact cards
        const contactCards = document.querySelectorAll(".contact-card");
        contactCards.forEach(card => {
            const text = card.querySelector("p");
            if (text) {
                if (text.textContent.includes("Email")) {
                    text.innerHTML = `${translations[lang].contact.email}: <a href="mailto:j.panchadi52@gmail.com">j.panchadi52@gmail.com</a>`;
                } else if (text.textContent.includes("Phone")) {
                    text.innerHTML = `${translations[lang].contact.phone}: <a href="tel:+917978707278">+91 7978707278</a>, <a href="tel:+918985828976">+91 8985828976</a>`;
                } else if (text.textContent.includes("Address")) {
                    text.innerHTML = `${translations[lang].contact.address}: ${translations[lang].contact.addressText}`;
                }
            }
        });

        // Footer copyright
        const footerCopyright = document.querySelector("footer p");
        if (footerCopyright) {
            footerCopyright.textContent = translations[lang].contact.footerCopyright;
        }
    }
});

