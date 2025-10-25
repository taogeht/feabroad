import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Image as ImageIcon, Video } from 'lucide-react';
import { Language } from '../types/language';

interface MediaGalleryProps {
  language: Language;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', name: language === 'zh' ? '全部' : 'All' },
    { id: 'ubc', name: language === 'zh' ? 'UBC校園' : 'UBC Campus' },
    { id: 'bodwell', name: language === 'zh' ? 'Bodwell學校' : 'Bodwell School' },
    { id: 'vancouver', name: language === 'zh' ? '溫哥華景點' : 'Vancouver Attractions' },
    { id: 'activities', name: language === 'zh' ? '活動體驗' : 'Activities' }
  ];

  const photos = [
    {
      id: 1,
      category: 'ubc',
      url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "UBC校園美景" : "Beautiful UBC Campus"
    },
    {
      id: 2,
      category: 'ubc',
      url: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "UBC英語課程" : "UBC English Classes"
    },
    {
      id: 3,
      category: 'activities',
      url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "戶外活動樂趣" : "Outdoor activity fun"
    },
    {
      id: 4,
      category: 'vancouver',
      url: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "溫哥華市中心" : "Downtown Vancouver"
    },
    {
      id: 5,
      category: 'bodwell',
      url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "Bodwell學校生活" : "Bodwell School Life"
    },
    {
      id: 6,
      category: 'activities',
      url: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: language === 'zh' ? "學生互動時光" : "Student interaction time"
    }
  ];

  const videos = [
    {
      id: 1,
      category: 'ubc',
      thumbnail: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: language === 'zh' ? "UBC校園導覽" : "UBC Campus Tour",
      duration: "3:45"
    },
    {
      id: 2,
      category: 'bodwell',
      thumbnail: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: language === 'zh' ? "Bodwell學生生活" : "Bodwell Student Life",
      duration: "2:30"
    },
    {
      id: 3,
      category: 'vancouver',
      thumbnail: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: language === 'zh' ? "溫哥華城市探索" : "Vancouver City Exploration",
      duration: "4:12"
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {language === 'zh' ? '精彩回憶' : 'Memorable Moments'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'zh' 
              ? '瀏覽我們學生在溫哥華學習期間的精彩照片和影片，感受他們的成長與快樂時光。'
              : 'Browse through amazing photos and videos of our students during their study experience in Vancouver, witnessing their growth and joyful moments.'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'zh' ? '照片集錦' : 'Photo Gallery'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMedia(photo)}
              >
                <div className="relative">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'zh' ? '影片分享' : 'Video Gallery'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMedia(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{video.title}</p>
                    <p className="text-white/80 text-sm">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              {selectedMedia.url ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.caption}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="bg-gray-900 rounded-lg p-8 text-center">
                  <Play className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-white text-lg">{selectedMedia.title}</p>
                  <p className="text-gray-300">{language === 'zh' ? '影片播放功能即將推出' : 'Video playback coming soon'}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;