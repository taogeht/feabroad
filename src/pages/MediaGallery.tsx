import React, { useMemo, useState } from 'react';
import { Folder, X, Play, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types/language';

interface MediaGalleryProps {
  language: Language;
}

interface MediaAsset {
  url: string;
  fileName: string;
}

interface PhotoFolder {
  id: number;
  label: string;
  description: string;
  detail: string;
  photos: MediaAsset[];
}

interface VideoItem {
  id: number;
  title: string;
  helper: string;
  source: string;
  fileName: string;
}

const mapAssets = (modules: Record<string, { default: string }>): MediaAsset[] =>
  Object.entries(modules)
    .map(([path, mod]) => ({
      url: mod.default,
      fileName: path.split('/').pop() ?? 'media'
    }))
    .sort((a, b) => a.fileName.localeCompare(b.fileName));

const photos2023 = mapAssets(
  import.meta.glob<{ default: string }>('../../media/photos/2023/*.{jpg,JPG,jpeg,JPEG}', {
    eager: true
  })
);

const photos2024 = mapAssets(
  import.meta.glob<{ default: string }>('../../media/photos/2024/*.{jpg,JPG,jpeg,JPEG}', {
    eager: true
  })
);

const videoAssets = mapAssets(
  import.meta.glob<{ default: string }>('../../media/videos/*.{mp4,MP4}', {
    eager: true
  })
);

const cleanFileName = (fileName: string): string =>
  fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const translateCanada = (text: string, language: Language): string => {
  if (language !== 'zh') return text;
  return text.replace(/Canada/gi, '加拿大');
};

const formatVideoTitle = (fileName: string, language: Language): string => {
  const base = cleanFileName(fileName);
  if (!base) {
    return language === 'zh' ? '影片' : 'Video';
  }
  if (language === 'zh') {
    const withYear =
      base.replace(/(20\d{2})/g, (match) => `${match} 年`).replace(/\s年/g, ' 年');
    const translated = translateCanada(withYear, language);
    return translated;
  }
  return base;
};

const formatVideoHelper = (language: Language): string =>
  language === 'zh' ? '點擊播放影片' : 'Click to play the video';

const formatPhotoAlt = (fileName: string, language: Language, year?: string): string => {
  const descriptor = cleanFileName(fileName) || 'photo';
  if (language === 'zh') {
    return `${year ? `${year} ` : ''}照片 - ${descriptor}`;
  }
  return `${year ? `${year} ` : ''}photo - ${descriptor}`;
};

const formatPhotoCount = (count: number, language: Language): string =>
  language === 'zh' ? `${count} 張照片` : `${count} photos`;

const formatViewAllLabel = (language: Language): string =>
  language === 'zh' ? '點擊查看完整相簿' : 'Open full album';

const MediaGallery: React.FC<MediaGalleryProps> = ({ language }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<PhotoFolder | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const photoFolders = useMemo<PhotoFolder[]>(() => {
    const baseFolders: Array<{ year: '2023' | '2024'; assets: MediaAsset[] }> = [
      { year: '2023', assets: photos2023 },
      { year: '2024', assets: photos2024 }
    ];

    return baseFolders.map(({ year, assets }, index) => ({
      id: index + 1,
      label: language === 'zh' ? `${year} 年照片集` : `${year} Gallery`,
      description:
        language === 'zh'
          ? year === '2023'
            ? '去年夏季課程的精彩瞬間'
            : '最新一期項目的第一手照片'
          : year === '2023'
          ? 'Highlights from last summer’s program.'
          : 'Fresh photos from this year’s cohort.',
      detail:
        language === 'zh'
          ? year === '2023'
            ? '包含校園活動、寄宿生活與週末行程的全紀錄。'
            : '不斷更新中的教學、文化體驗與城市探索照片。'
          : year === '2023'
          ? 'A complete look at campus activities, boarding life, and weekend adventures.'
          : 'Continuously updated teaching, cultural, and city exploration photos.',
      photos: assets
    }));
  }, [language]);

  const videos = useMemo<VideoItem[]>(() => {
    return videoAssets.map((asset, index) => ({
      id: index + 1,
      title: formatVideoTitle(asset.fileName, language),
      helper: formatVideoHelper(language),
      source: asset.url,
      fileName: asset.fileName
    }));
  }, [language]);

  const openFolder = (folder: PhotoFolder) => {
    setSelectedFolder(folder);
    setActivePhotoIndex(0);
  };

  const closeFolder = () => {
    setSelectedFolder(null);
    setActivePhotoIndex(0);
  };

  const gotoPreviousPhoto = () => {
    if (!selectedFolder || selectedFolder.photos.length === 0) return;
    setActivePhotoIndex((prev) =>
      prev === 0 ? selectedFolder.photos.length - 1 : prev - 1
    );
  };

  const gotoNextPhoto = () => {
    if (!selectedFolder || selectedFolder.photos.length === 0) return;
    setActivePhotoIndex((prev) =>
      prev === selectedFolder.photos.length - 1 ? 0 : prev + 1
    );
  };

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

        {/* Photo Folders */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              {language === 'zh' ? '照片集錦' : 'Photo Gallery'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoFolders.map((folder) => (
              <div
                key={folder.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => openFolder(folder)}
              >
                <div className="relative h-64 bg-gray-200">
                  {folder.photos.length > 0 ? (
                    <img
                      src={folder.photos[0].url}
                      alt={formatPhotoAlt(folder.photos[0].fileName, language, folder.label)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-green-400 flex flex-col items-center justify-center text-white">
                      <Folder className="w-16 h-16 mb-3" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <Folder className="w-10 h-10 mb-2" />
                    <p className="text-2xl font-semibold">{folder.label}</p>
                    <p className="text-white/80 text-sm">{formatViewAllLabel(language)}</p>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-lg font-semibold text-gray-900">{folder.description}</p>
                  <p className="text-gray-600 leading-relaxed">{folder.detail}</p>
                  <p className="text-sm font-medium text-blue-600">
                    {formatPhotoCount(folder.photos.length, language)}
                  </p>
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
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative h-64 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 flex flex-col items-center justify-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-xl font-semibold px-6 text-center">{video.title}</p>
                  <p className="text-white/70 text-sm mt-2 px-6 text-center">{video.helper}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Folder Modal */}
        {selectedFolder && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
              <button
                onClick={closeFolder}
                className="absolute right-6 top-6 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={language === 'zh' ? '關閉視窗' : 'Close window'}
              >
                <X className="w-7 h-7" />
              </button>
              <div className="flex flex-col gap-6 p-6 md:p-10 h-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold">
                      {language === 'zh' ? '相簿名稱' : 'Album'}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedFolder.label}</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    {formatPhotoCount(selectedFolder.photos.length, language)}
                  </p>
                </div>

                {selectedFolder.photos.length > 0 ? (
                  <>
                    <div className="relative flex-1 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
                      <img
                        src={selectedFolder.photos[activePhotoIndex].url}
                        alt={formatPhotoAlt(
                          selectedFolder.photos[activePhotoIndex].fileName,
                          language
                        )}
                        className="max-h-[60vh] w-auto object-contain"
                      />
                      {selectedFolder.photos.length > 1 && (
                        <>
                          <button
                            onClick={gotoPreviousPhoto}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-colors"
                            aria-label={language === 'zh' ? '上一張照片' : 'Previous photo'}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={gotoNextPhoto}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-colors"
                            aria-label={language === 'zh' ? '下一張照片' : 'Next photo'}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>
                    {selectedFolder.photos.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedFolder.photos.map((photo, index) => (
                          <button
                            key={photo.url}
                            onClick={() => setActivePhotoIndex(index)}
                            className={`flex-shrink-0 h-20 w-28 rounded-lg overflow-hidden border-2 transition-colors ${
                              index === activePhotoIndex ? 'border-blue-500' : 'border-transparent'
                            }`}
                            aria-label={
                              language === 'zh'
                                ? `選擇第 ${index + 1} 張照片`
                                : `Select photo ${index + 1}`
                            }
                          >
                            <img
                              src={photo.url}
                              alt={formatPhotoAlt(photo.fileName, language)}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl text-center p-10 text-gray-500">
                    <Folder className="w-16 h-16 mb-4" />
                    <p className="text-lg font-semibold">
                      {language === 'zh' ? '目前沒有照片' : 'No photos available yet.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-gray-900 rounded-lg p-6 md:p-8">
                <video
                  src={selectedVideo.source}
                  controls
                  className="w-full h-auto rounded-lg"
                  preload="metadata"
                >
                  {language === 'zh'
                    ? '您的瀏覽器不支援影片播放。'
                    : 'Your browser does not support the video tag.'}
                </video>
                <div className="mt-4 text-center">
                  <p className="text-white text-lg font-semibold mb-1">{selectedVideo.title}</p>
                  <p className="text-gray-400 text-sm">{selectedVideo.fileName}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
