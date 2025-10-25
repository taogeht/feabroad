import React from 'react';
import { MapPin, Calendar, Users, ArrowRight, School, Clock, Star, Check, X, Plane, DollarSign } from 'lucide-react';
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
        dates: "July 6 - August 2, 2025",
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
      pricing: {
        title: "Program Pricing",
        subtitle: "Flexible duration options to fit your schedule and budget",
        options: [
          { duration: "2 Weeks", dates: "July 6 - July 19", price: "CAD $4,550" },
          { duration: "2 Weeks", dates: "July 20 - August 2", price: "CAD $4,550" },
          { duration: "3 Weeks", dates: "July 6 - July 26", price: "CAD $5,750" },
          { duration: "4 Weeks", dates: "July 6 - August 2", price: "CAD $6,950" },
          { duration: "4 Weeks Plus", dates: "July 6 - August 2", price: "CAD $7,550" }
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
        dates: "2025年7月6日 - 8月2日",
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
      pricing: {
        title: "課程價格",
        subtitle: "彈性的課程長度選擇，符合您的時間安排和預算",
        options: [
          { duration: "2週", dates: "7月6日 - 7月19日", price: "CAD $4,550" },
          { duration: "2週", dates: "7月20日 - 8月2日", price: "CAD $4,550" },
          { duration: "3週", dates: "7月6日 - 7月26日", price: "CAD $5,750" },
          { duration: "4週", dates: "7月6日 - 8月2日", price: "CAD $6,950" },
          { duration: "4週加強版", dates: "7月6日 - 8月2日", price: "CAD $7,550" }
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
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-blue-500/70 to-green-800/80"></div>
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.programs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.programs.classic.title}</h3>
              <p className="text-gray-600 mb-6">{t.programs.classic.description}</p>
              <div className="space-y-3">
                {t.programs.classic.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.programs.academy.title}</h3>
              <p className="text-gray-600 mb-6">{t.programs.academy.description}</p>
              <div className="space-y-3">
                {t.programs.academy.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.schedule.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.schedule.description}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <img 
              src="/bodwell-schedule.png" 
              alt="Bodwell Weekly Schedule"
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.pricing.options.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.duration}</h3>
                <p className="text-gray-600 mb-3">{option.dates}</p>
                <p className="text-2xl font-bold text-green-600">{option.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
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
      </section>
    </div>
  );
};

export default BodwellPage;