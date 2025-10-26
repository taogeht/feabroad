import React from 'react';
import { MapPin, Calendar, Users, ArrowRight, School, Clock, Star, Check, X, Plane, DollarSign, Utensils, Shield, Home, Wifi, Bath } from 'lucide-react';
import { Language } from '../types/language';

interface BodwellPageProps {
  language: Language;
}

const BodwellPage: React.FC<BodwellPageProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "Bodwell High School Summer Program",
        subtitle: "Experience premium boarding school education on Vancouver's beautiful waterfront with state-of-the-art facilities and personalized care.",
        dates: "July 12 - August 2, 2026",
        ages: "Ages 9-17",
        location: "North Vancouver Waterfront"
      },
      overview: {
        title: "Why Choose Bodwell High School?",
        subtitle: "Bodwell High School offers a unique boarding school experience with modern facilities, personalized care, and an ideal waterfront location.",
        highlights: [
          { title: "Waterfront Campus", description: "Beautiful campus located on North Vancouver's scenic waterfront" },
          { title: "Small Class Sizes", description: "Maximum 15 students per class for personalized attention" },
          { title: "24/7 Supervision", description: "Professional staff providing round-the-clock care and support" },
          { title: "Modern Facilities", description: "State-of-the-art classrooms, dormitories, and recreational facilities" },
          { title: "Nutritious Meals", description: "Three healthy meals daily prepared by professional chefs" },
          { title: "Safe Environment", description: "Secure campus with comprehensive safety measures" }
        ]
      },
      programs: {
        title: "Program Options",
        classic: {
          title: "Classic Program",
          description: "Conversational English for all levels with fun activities and cultural experiences",
          features: ["Conversational English", "Cultural Activities", "Local Excursions", "Sports & Recreation"]
        },
        academy: {
          title: "Academy Program", 
          description: "Academic English program designed for higher-level students (Age 12+)",
          features: ["Academic English", "University Preparation", "Advanced Projects", "Leadership Activities"]
        }
      },
      schedule: {
        title: "Weekly Activities",
        description: "15 hours of academics, 12 hours of teacher/instructor led activities plus 5 off-campus activities and 1 big event each week!"
      },
      accommodation: {
        title: "Accommodation & Living",
        subtitle: "Bodwell School provides a safe and comfortable living environment for students, ensuring everyone can focus on learning and growth.",
        sections: [
          {
            title: "Security & Safety",
            description: "How is security organized in dormitories?",
            details: "Access to dormitories is limited to authorized personnel and students with keys. Counselors are present overnight in dormitories to address emergencies. Camp Managers are also on duty during evenings and weekends for emergency response and to assist with other concerns. Bodwell is equipped with a comprehensive camera system and alarms for security. Between the hours of 10:00 pm and 8:30 am, an alarm will sound if any student attempts to leave their hall, and no student is allowed to leave school premises without the presence of staff at any time."
          },
          {
            title: "Room Assignments",
            description: "Can students choose their type of dormitory room?",
            details: "The dormitory room assignments are arranged by several factors including gender, age category and mixed nationalities. Furthermore, Counselors require a room nearby their student group. As such, students will not be able to submit requests for room selections or allocations; Bodwell is unable to accommodate these requests. Students will be placed 2-4 students/room."
          },
          {
            title: "Meals & Dining",
            description: "Where do students eat and where can they buy food?",
            details: "Students are provided three meals usually from Bodwell cafeteria and an evening snack every day. Packed lunches or dinners will be provided on some outings. There are also BBQs and special dinners provided as part of program itineraries. If students wish to purchase snacks outside of meals times, there are stores, restaurants and vending machines nearby. Students are not permitted to visit these locations without supervision of their Counsellor, but are able to order via meal delivery apps during designated hours if they have the means to."
          },
          {
            title: "Laundry Services",
            description: "How do students do their laundry?",
            details: "Laundry machines are available in each boarding hall. Students will be provided with laundry detergent and assisted by their Counsellors in doing their laundry on a regular basis."
          },
          {
            title: "Personal Items",
            description: "What personal living items will be provided for students by Bodwell?",
            details: "Bodwell will provide students with bedding for their dormitory room that will be cleaned regularly. All students are expected to bring their own towels and toiletries for the program. In the event that an item is lost or forgotten, Counselors can help students purchase such an item on one of their off-campus outings, or from Bodwell's store."
          },
        ]
      },
      pricing: {
        title: "Program Pricing",
        subtitle: "",
        options: [
          { duration: "3 Weeks", dates: "July 12 - August 02", price: "NTD $140,000" },
        ],
        included: "What's Included",
        inclusions: [
          "15 hours English classes per week",
          "Boarding school accommodation", 
          "Three nutritious meals daily",
          "All activities and excursions",
          "Local transportation",
          "24/7 professional supervision",
          "Medical insurance coverage",
          "Airport transfers",
          "Certificate of completion"
        ],
        notIncluded: "Not Included",
        exclusions: [
          "International airfare",
          "Personal spending money",
          "Laundry services",
          "Optional activities"
        ]
      }
    },
    zh: {
      hero: {
        title: "Bodwell高中夏季課程",
        subtitle: "在溫哥華美麗的海濱體驗優質寄宿學校教育，擁有最先進的設施和個人化照護。",
        dates: "2026年7月14日 - 8月2日",
        ages: "9-17歲",
        location: "北溫哥華海濱"
      },
      overview: {
        title: "為什麼選擇Bodwell高中？",
        subtitle: "Bodwell高中提供獨特的寄宿學校體驗，擁有現代化設施、個人化照護和理想的海濱位置。",
        highlights: [
          { title: "海濱校園", description: "位於北溫哥華風景優美海濱的美麗校園" },
          { title: "小班制教學", description: "每班最多15名學生，提供個人化關注" },
          { title: "24小時監護", description: "專業工作人員提供全天候照護和支持" },
          { title: "現代化設施", description: "最先進的教室、宿舍和娛樂設施" },
          { title: "營養餐點", description: "專業廚師每日準備三餐健康餐點" },
          { title: "安全環境", description: "安全校園，配備全面安全措施" }
        ]
      },
      programs: {
        title: "課程選擇",
        classic: {
          title: "經典課程",
          description: "適合所有程度的會話英語，包含有趣活動和文化體驗",
          features: ["會話英語", "文化活動", "當地遊覽", "運動娛樂"]
        },
        academy: {
          title: "學院課程",
          description: "為高程度學生設計的學術英語課程（12歲以上）",
          features: ["學術英語", "大學預備", "進階專案", "領導活動"]
        }
      },
      schedule: {
        title: "每週活動",
        description: "15小時學術課程，12小時教師/指導員帶領活動，加上每週5次校外活動和1次大型活動！"
      },
      accommodation: {
        title: "住宿與生活",
        subtitle: "博德威爾學校為學生提供安全、舒適的住宿環境，確保每位學生都能專注於學習和成長。",
        sections: [
          {
            title: "安全與安保",
            description: "宿舍的安全如何組織？",
            details: "宿舍進入僅限授權人員和持有鑰匙的學生。輔導員在宿舍過夜以處理緊急情況。營地經理在晚上和週末值班以應對緊急情況並協助處理其他問題。博德威爾配備綜合監控系統和警報以確保安全。在晚上10:00至早上8:30之間，如果任何學生試圖離開他們的樓層，警報將會響起，任何學生不得在沒有工作人員在場的情況下離開校園。"
          },
          {
            title: "房間分配",
            description: "學生可以選擇他們的宿舍類型嗎？",
            details: "宿舍房間分配由多種因素安排，包括性別、年齡類別和混合國籍。此外，輔導員需要在學生群組附近有房間。因此，學生將無法提交房間選擇或分配請求；博德威爾無法滿足這些請求。學生將被安排2-4人/房間。"
          },
          {
            title: "餐飲安排",
            description: "學生在哪裡吃飯，可以在哪裡買食物？",
            details: "學生通常從博德威爾餐廳提供三餐，每天還有一次晚上點心。在某些外出活動時將提供打包午餐或晚餐。還有作為行程一部分提供的燒烤和特殊晚餐。如果學生希望在用餐時間外購買零食，附近有商店、餐廳和自動售貨機。學生未經輔導員監督不得訪問這些地點，但如果他們有條件，可以在指定時間內通過餐飲外送應用程式下單。"
          },
          {
            title: "洗衣服務",
            description: "學生如何洗衣？",
            details: "每個宿舍樓都有洗衣機。學生將獲得洗衣粉，並由輔導員定期協助洗衣。"
          },
          {
            title: "個人物品",
            description: "博德威爾會為學生提供哪些個人生活用品？",
            details: "博德威爾將為學生提供宿舍床上用品，並定期清潔。所有學生都需為課程攜帶自己的毛巾和洗漱用品。如果有物品遺失或忘記，輔導員可以幫助學生在他們的校外活動之一購買此類物品，或從博德威爾的商店購買。"
          },
          {
            title: "課程商品",
            description: "會為學生提供課程T恤嗎？",
            details: "參與者將獲得課程T恤、連帽衫和水瓶。在擁擠空間的活動中，學生必須穿著博德威爾T恤，以便於識別我們的學生。"
          }
        ]
      },
      pricing: {
        title: "課程價格",
        subtitle: "",
        options: [
          { duration: "3週", dates: "7月14日 - 8月2日", price: "NTD $140,000" },
        ],
        included: "包含項目",
        inclusions: [
          "每週15小時英語課程",
          "寄宿學校住宿",
          "每日三餐營養餐點",
          "所有活動和遊覽",
          "當地交通",
          "24小時專業監護",
          "醫療保險",
          "機場接送",
          "結業證書"
        ],
        notIncluded: "不包含項目",
        exclusions: [
          "國際機票",
          "個人零用錢",
          "洗衣服務",
          "自選活動"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Bodwell High School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-red-800/80 to-blue-900/90"></div>
        </div>

        <div className="absolute top-24 right-8 z-10 opacity-20">
          <img 
            src="/FEA.png" 
            alt="FEA Logo" 
            className="h-32 w-32 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/FEA.png" 
              alt="FEA Logo" 
              className="h-16 w-16 rounded-full"
            />
            <div className="text-white">
              <h2 className="text-xl font-bold">
                {language === 'zh' ? 'FEA 頂尖海外教育' : 'FEA Frontline Education Abroad'}
              </h2>
              <p className="text-sm opacity-90">
                {language === 'zh' ? '呈現' : 'Presents'}
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.dates}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.ages}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">{t.hero.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.overview.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.overview.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.overview.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation & Living Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.accommodation.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.accommodation.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="/bodwell_accomodation.jpeg" 
                alt="Bodwell Accommodation"
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              {t.accommodation.sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    {section.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{section.description}</p>
                  <p className="text-gray-700 leading-relaxed">{section.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '每日活動安排' : 'Daily Activity Schedule'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh' 
                ? '學生將享受充實的日常活動，包括英語課程、體育活動、文化體驗和專業監護。'
                : 'Students will enjoy a full day of activities including English classes, sports, cultural experiences, and professional supervision.'
              }
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Morning Routine */}
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '早晨例行活動' : 'Morning Routine'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        7:00 – 8:00 am
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '學生起床準備上課' : 'Students wake up get ready for class'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        8:00 – 8:50 am
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '早餐' : 'Breakfast'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        8:50 – 9:00 am
                      </div>
                      <div className="flex items-center gap-2">
                        <School className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '輔導員帶學生去上課' : 'Counsellors take students to class'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* School Activities */}
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '學校活動' : 'School Activities'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        9:00 am – 12:00 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <School className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '英語課程' : 'English Class'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        12:00 – 1:00 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '午餐' : 'Lunch'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Afternoon Activities */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '下午活動' : 'Afternoon Activities'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        1:00 – 3:30 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <School className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '與教師一起活動' : 'Activities with Teachers'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        3:40 – 5:30 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '輔導員帶學生' : 'Teachers take students to Counsellors'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evening Activities */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '晚上活動' : 'Evening Activities'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        5:30 – 6:30 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '外出與活動' : 'Outings & Events with Counsellors'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        6:30 – 9:00 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '晚餐' : 'Dinner'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evening Routine */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '晚上例行活動' : 'Evening Routine'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        9:00 – 10:00 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-indigo-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '團隊時間與晚點心' : 'Team Time & Evening Snack'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        10:00 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '兒童就寢（10-12歲）' : 'Children go to bed (10 – 12)'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teen Supervision */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white text-center py-3 rounded-xl font-bold text-lg mb-4">
                    {language === 'zh' ? '青少年監護' : 'Teen Supervision'}
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        10:30 pm
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '青少年就寢（13-17歲）' : 'Teens go to bed (13 – 17)'}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="bg-blue-100 text-blue-800 text-center py-2 rounded-lg font-semibold text-sm mb-2">
                        10:30 pm – 7:00 am
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-700 font-medium">
                          {language === 'zh' ? '輔導員夜間監護' : 'Counsellors on overnight supervision'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-blue-600 to-red-600">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 px-8 py-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Star className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">
                    {language === 'zh' ? 'Bodwell高中夏季課程' : 'Bodwell High School Summer Program'}
                  </h3>
                  <Star className="w-8 h-8" />
                </div>
              </div>
              
              <div className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-semibold text-gray-700">
                      {language === 'zh' ? '2026年7月14日 - 8月2日' : 'July 14 - August 2, 2026'}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">NTD $140,000</span>
                    <span className="text-xl text-gray-600">/ {language === 'zh' ? '人' : 'person'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      {t.pricing.included}
                    </h4>
                    <div className="space-y-3">
                      {t.pricing.inclusions.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      {t.pricing.notIncluded}
                    </h4>
                    <div className="space-y-3">
                      {t.pricing.exclusions.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-red-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodwellPage;
