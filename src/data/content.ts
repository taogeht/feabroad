import { LanguageContent } from '../types/language';

export const content: Record<'en' | 'zh', LanguageContent> = {
  en: {
    header: {
      title: 'FEA Frontline Education Abroad',
      subtitle: 'Vancouver Study Abroad Experts',
      home: 'Home',
      ubc: 'UBC Summer Camp',
      bodwell: 'Bodwell School',
      media: 'Photos & Videos',
    },
    hero: {
      title: "Experience an Unforgettable Summer at UBC, Canada!",
      subtitle: "Join Taiwanese students for an incredible journey of learning, adventure, and friendship at one of Canada's top universities.",
      enrollButton: "Enroll Now",
      learnMoreButton: "Learn More",
      dates: "July 4 - August 2",
      ages: "Ages 9-17",
      location: "Vancouver, BC"
    },
    programOverview: {
      title: "Why Choose Our Summer Camp?",
      subtitle: "Our program combines world-class education with unforgettable experiences, creating the perfect environment for personal growth and lifelong memories.",
      highlights: {
        academics: { title: "Engaging Academics", description: "15 hours of English classes per week with certified instructors" },
        adventures: { title: "Outdoor Adventures", description: "Explore British Columbia's stunning natural landscapes" },
        cultural: { title: "Cultural Immersion", description: "Experience authentic Canadian culture with fellow Taiwanese students" },
        supervision: { title: "24/7 Supervision", description: "Professional staff ensuring safety and support around the clock" },
        schedule: { title: "Structured Schedule", description: "Perfect balance of learning, activities, and free time" },
        university: { title: "University Experience", description: "Live and learn on one of Canada's most beautiful campuses" }
      },
      details: {
        dates: { title: "Camp Dates", date: "July 4 - August 2, 2026", duration: "30 incredible days" },
        ages: { title: "Age Range", range: "Ages 9-17", note: "All skill levels welcome" },
        location: { title: "Location", place: "UBC Campus, Vancouver", region: "Beautiful British Columbia" }
      }
    },
    curriculum: {
      title: "Academic Excellence & Adventure",
      subtitle: "Our program combines structured English learning with exciting Canadian experiences, creating the perfect balance of education and adventure.",
      features: {
        classes: { title: "Interactive English Classes", description: "15 hours per week of engaging English instruction with certified teachers" },
        classSize: { title: "Small Class Sizes", description: "Maximum 15 students per class for personalized attention" },
        projects: { title: "Project-Based Learning", description: "Create presentations, videos, and portfolios to showcase your progress" }
      },
      scheduleTitle: "Sample Weekly Schedule",
      excursionsTitle: "Amazing Excursions",
      excursions: {
        whistler: { title: "Whistler Adventure", description: "Scenic mountain resort with outdoor activities and stunning views" },
        vancouver: { title: "Vancouver Highlights", description: "Explore downtown, Chinatown, and famous Granville Island Market" },
        capilano: { title: "Capilano Suspension Bridge", description: "Walk among the treetops on this thrilling suspension bridge" },
        cultural: { title: "Cultural Experiences", description: "Attend local festivals, concerts, and cultural events" }
      },
      schedule: {
        monday: { morning: "English Classes", afternoon: "Campus Tour & Orientation", evening: "Welcome Party" },
        tuesday: { morning: "English Classes", afternoon: "Vancouver City Tour", evening: "Movie Night" },
        wednesday: { morning: "English Classes", afternoon: "Science World Visit", evening: "Talent Show Prep" },
        thursday: { morning: "English Classes", afternoon: "Sports & Recreation", evening: "Cultural Exchange" },
        friday: { morning: "English Classes", afternoon: "Granville Island", evening: "Game Night" },
        saturday: { morning: "Whistler Day Trip", afternoon: "Mountain Activities", evening: "Campfire Stories" },
        sunday: { morning: "Free Time", afternoon: "Stanley Park Visit", evening: "Reflection & Journaling" }
      }
    },
    pricing: {
      title: "Investment in Your Future",
      subtitle: "Our comprehensive program provides exceptional value with everything included for an unforgettable Canadian summer experience.",
      programTitle: "30 Days @ UBC University",
      dates: "July 4 - August 2, 2026",
      earlyBird: "Early Bird: Save $500 - Register before March 1st!",
      included: "What's Included",
      notIncluded: "Not Included",
      flightAssistance: { title: "Flight Assistance", description: "We can help arrange group flights at discounted rates!" },
      secureSpot: "Secure Your Spot Today",
      deposit: "$500 deposit to reserve your place • Full payment due 60 days before departure",
      paymentOptions: "Flexible Payment Options",
      earlyBirdSpecial: { title: "Early Bird Special", register: "Register before March 1st" },
      paymentPlan: { title: "Payment Plan", installments: "$500 deposit + 2 payments" },
      siblingDiscount: { title: "Sibling Discount", discount: "Second child and beyond" },
      inclusions: [
        "15 hours English classes per week",
        "University dormitory accommodation",
        "Three nutritious meals daily",
        "All excursions and activities",
        "Local transportation",
        "Medical insurance coverage",
        "24/7 professional supervision",
        "Canada visa support",
        "Airport transfers",
        "Certificate of completion",
        "Photo memories package",
        "Emergency contact support"
      ],
      exclusions: [
        "International airfare",
        "Personal spending money",
        "Laundry services",
        "Optional activities"
      ]
    },
    gallery: {
      title: "Memories That Last Forever",
      subtitle: "See the joy, excitement, and growth our Taiwanese students experience during their incredible summer at UBC. Every moment is a new adventure!",
      testimonialTitle: "What Our Taiwanese Students Say",
      captions: [
        "Taiwanese students exploring Vancouver's beautiful downtown",
        "Interactive English classes on UBC campus",
        "Adventure activities in beautiful British Columbia",
        "Making lifelong friendships with fellow Taiwanese students",
        "Cultural activities and talent shows",
        "Stunning natural landscapes and outdoor adventures"
      ]
    },
    contact: {
      title: "Ready to Start Your Adventure?",
      subtitle: "Take the first step towards an unforgettable summer experience. Our friendly team is here to answer all your questions and help you join our amazing Taiwanese community.",
      stats: {
        students: "Happy Students",
        experience: "Years Experience",
        countries: "From Taiwan"
      },
      formTitle: "Get Your Free Information Package",
      form: {
        parentName: "Parent/Guardian Name *",
        studentAge: "Student Age *",
        email: "Email Address *",
        phone: "Phone Number",
        message: "Questions or Special Requirements",
        submit: "Send My Request",
        selectAge: "Select age",
        messagePlaceholder: "Tell us about any questions you have or special requirements for your child..."
      },
      contactTitle: "Get in Touch",
      contactInfo: {
        email: { title: "Email Us", description: "Get detailed information about our program" },
        phone: { title: "Call Us", description: "Speak directly with our admissions team" },
        whatsapp: { title: "WhatsApp", description: "Quick questions and instant responses" },
        visit: { title: "Visit Us", description: "Schedule a campus tour and meeting" }
      },
      ctaCard: {
        title: "Limited Spots Available!",
        description: "Our summer program fills up quickly. Secure your child's spot today and give them the opportunity of a lifetime to grow, learn, and make friends with fellow Taiwanese students.",
        button: "Reserve Your Spot Now"
      }
    },
    footer: {
      title: 'FEA Education',
      subtitle: 'Vancouver Study Experts',
      description: "Creating unforgettable summer experiences for Taiwanese students at one of Canada's most prestigious universities for over 15 years.",
      contactTitle: "Contact Information",
      email: "info@feabroad.com",
      qrCode: "line_code.png",
      qrCodeTitle: 'Scan QR Code to Contact Us',
    }
  },
  zh: {
    header: {
      title: 'FEA 頂尖海外教育',
      subtitle: '溫哥華留學專家',
      home: '首頁',
      ubc: 'UBC夏令營',
      bodwell: 'Bodwell學校',
      media: '照片影片',
    },
    hero: {
      title: "在加拿大UBC度過難忘的夏天！",
      subtitle: "與來自台灣的學生一起，在加拿大頂尖大學展開學習、冒險和友誼的精彩旅程。",
      enrollButton: "立即報名",
      learnMoreButton: "了解更多",
      dates: "7月4日 - 8月2日",
      ages: "9-17歲",
      location: "溫哥華，卑詩省"
    },
    programOverview: {
      title: "為什麼選擇我們的夏令營？",
      subtitle: "我們的課程結合世界級教育與難忘體驗，為個人成長和終生回憶創造完美環境。",
      highlights: {
        academics: { title: "精彩學術課程", description: "每週15小時由認證教師授課的英語課程" },
        adventures: { title: "戶外冒險", description: "探索卑詩省令人驚嘆的自然景觀" },
        cultural: { title: "文化沉浸", description: "與台灣同學一起體驗真正的加拿大文化" },
        supervision: { title: "24小時監護", description: "專業工作人員全天候確保安全和支持" },
        schedule: { title: "結構化時間表", description: "學習、活動和自由時間的完美平衡" },
        university: { title: "大學體驗", description: "在加拿大最美麗的校園之一生活和學習" }
      },
      details: {
        dates: { title: "營隊日期", date: "2026年7月4日 - 8月2日", duration: "精彩的30天" },
        ages: { title: "年齡範圍", range: "9-17歲", note: "歡迎所有程度學生" },
        location: { title: "地點", place: "UBC校園，溫哥華", region: "美麗的卑詩省" }
      }
    },
    curriculum: {
      title: "學術卓越與冒險",
      subtitle: "我們的課程結合結構化英語學習與令人興奮的加拿大體驗，創造教育與冒險的完美平衡。",
      features: {
        classes: { title: "互動英語課程", description: "每週15小時由認證教師進行的精彩英語教學" },
        classSize: { title: "小班制教學", description: "每班最多15名學生，提供個人化關注" },
        projects: { title: "專案導向學習", description: "創作簡報、影片和作品集來展示你的進步" }
      },
      scheduleTitle: "每週課程範例",
      excursionsTitle: "精彩遊覽",
      excursions: {
        whistler: { title: "惠斯勒冒險", description: "風景優美的山區度假村，有戶外活動和壯麗景色" },
        vancouver: { title: "溫哥華亮點", description: "探索市中心、中國城和著名的格蘭維爾島市場" },
        capilano: { title: "卡皮拉諾吊橋", description: "在這座刺激的吊橋上漫步樹梢間" },
        cultural: { title: "文化體驗", description: "參加當地節慶、音樂會和文化活動" }
      },
      schedule: {
        monday: { morning: "英語課程", afternoon: "校園導覽與迎新", evening: "歡迎派對" },
        tuesday: { morning: "英語課程", afternoon: "溫哥華市區遊覽", evening: "電影之夜" },
        wednesday: { morning: "英語課程", afternoon: "科學世界參觀", evening: "才藝表演準備" },
        thursday: { morning: "英語課程", afternoon: "運動與娛樂", evening: "文化交流" },
        friday: { morning: "英語課程", afternoon: "格蘭維爾島", evening: "遊戲之夜" },
        saturday: { morning: "惠斯勒一日遊", afternoon: "山區活動", evening: "營火故事" },
        sunday: { morning: "自由時間", afternoon: "史丹利公園參觀", evening: "反思與日記" }
      }
    },
    pricing: {
      title: "對未來的投資",
      subtitle: "我們的綜合課程提供卓越價值，包含難忘加拿大夏季體驗的所有內容。",
      programTitle: "UBC大學30天課程",
      dates: "2026年7月4日 - 8月2日",
      earlyBird: "早鳥優惠：3月1日前報名可省$500！",
      included: "包含項目",
      notIncluded: "不包含項目",
      flightAssistance: { title: "航班協助", description: "我們可以協助安排團體機票優惠價格！" },
      secureSpot: "立即確保您的名額",
      deposit: "$500訂金預留名額 • 出發前60天需付清全額",
      paymentOptions: "彈性付款選項",
      earlyBirdSpecial: { title: "早鳥特惠", register: "3月1日前報名" },
      paymentPlan: { title: "分期付款", installments: "$500訂金 + 2期付款" },
      siblingDiscount: { title: "兄弟姊妹折扣", discount: "第二個孩子起" },
      inclusions: [
        "每週15小時英語課程",
        "大學宿舍住宿",
        "每日三餐營養餐點",
        "所有遊覽和活動",
        "當地交通",
        "醫療保險",
        "24小時專業監護",
        "加拿大簽證支援",
        "機場接送",
        "結業證書",
        "照片回憶套組",
        "緊急聯絡支援"
      ],
      exclusions: [
        "國際機票",
        "個人零用錢",
        "洗衣服務",
        "自選活動"
      ]
    },
    gallery: {
      title: "永恆的回憶",
      subtitle: "看看我們台灣學生在UBC度過精彩夏天時的喜悅、興奮和成長。每一刻都是新的冒險！",
      testimonialTitle: "台灣學生怎麼說",
      captions: [
        "台灣學生探索溫哥華美麗的市中心",
        "UBC校園的互動英語課程",
        "在美麗卑詩省的冒險活動",
        "與台灣同學建立終生友誼",
        "文化活動和才藝表演",
        "壯麗的自然景觀和戶外冒險"
      ]
    },
    contact: {
      title: "準備開始你的冒險了嗎？",
      subtitle: "踏出難忘夏季體驗的第一步。我們友善的團隊在此回答您的所有問題，並幫助您加入我們精彩的台灣社群。",
      stats: {
        students: "快樂學生",
        experience: "年經驗",
        countries: "來自台灣"
      },
      formTitle: "獲取免費資訊包",
      form: {
        parentName: "家長/監護人姓名 *",
        studentAge: "學生年齡 *",
        email: "電子郵件地址 *",
        phone: "電話號碼",
        message: "問題或特殊需求",
        submit: "發送我的請求",
        selectAge: "選擇年齡",
        messagePlaceholder: "告訴我們您有任何問題或對孩子的特殊需求..."
      },
      contactTitle: "聯絡我們",
      contactInfo: {
        email: { title: "電子郵件", description: "獲取我們課程的詳細資訊" },
        phone: { title: "電話聯絡", description: "直接與我們的招生團隊對話" },
        whatsapp: { title: "WhatsApp", description: "快速問題和即時回應" },
        visit: { title: "拜訪我們", description: "安排校園參觀和會面" }
      },
      ctaCard: {
        title: "名額有限！",
        description: "我們的夏令營很快就會額滿。今天就為您的孩子確保名額，給他們一生一次的機會成長、學習，並與台灣同學交朋友。",
        button: "立即預約名額"
      }
    },
    footer: {
      title: 'FEA 頂尖海外教育',
      subtitle: '溫哥華留學專家',
      description: "15年來為台灣學生在加拿大最負盛名的大學之一創造難忘的夏季體驗。",
      contactTitle: "聯絡資訊",
      email: "info@feabroad.com",
      qrCode: "line_code.png",
      qrCodeTitle: '掃描QR Code聯絡我們',
    }
  }
};
