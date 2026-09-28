import React, { useState, useEffect } from 'react';
import {
  PlusCircle,
  Eye,
  Edit3,
  Check,
  Image as ImageIcon,
  Globe,
  FileText,
  Calendar,
  Smartphone,
  Monitor,
  Sparkles,
  Copy,
  RotateCcw,
  Trash2,
  ArrowUp,
  ArrowDown,
  Heading,
  AlignLeft,
  LayoutGrid,
  LayoutList,
} from 'lucide-react';

const DRAFT_STORAGE_KEY = 'yens_journey_admin_draft_v5';

// 預設初始資料
const defaultForm = {
  slug: 'bangkok-3-day-getaway',
  alpha2: 'th',
  city: 'Bangkok • Thailand',
  category: 'Thailand',
  title: '曼谷週末快閃計畫：3天2夜不請假的泰國慢旅提案',
  excerpt:
    '給上班族的週末充電指南。不用請長假，利用五六日三天，在曼谷享受設計旅店、泰式按摩、街頭美食與塞納河畔的落日。',
  image:
    'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
  date: new Date().toISOString().split('T')[0],
  published: true,
  layoutType: 'latest',
  contentBlocks: [
    {
      id: '1',
      type: 'paragraph',
      text: '有時候，我們需要的不是一趟長途旅行，而是一個能暫時切換生活場景的週末。曼谷就是這樣一個完美的去處：航程不長、班機密集、美食遍地，而且物價友善。',
    },
    { id: '2', type: 'heading', text: 'Day 1: 感受城市脈動與高空夜景' },
    {
      id: '3',
      type: 'paragraph',
      text: '抵達後先前往市區飯店安頓，下午安排參觀當地的創意市集，感受曼谷年輕人的設計能量。傍晚則選擇一間高空酒吧，俯瞰整座城市的璀璨夜景。',
    },
    { id: '4', type: 'heading', text: 'Day 2: 文化經典與極致按摩放鬆' },
    {
      id: '5',
      type: 'paragraph',
      text: '上午走訪經典的鄭王廟，搭乘交通船感受昭披耶河的微風。下午則是專屬的 SPA 按摩時光，讓累積的辦公室疲勞徹底釋放。',
    },
  ],
};

export default function TravelAdmin() {
  // ── 密碼鎖 ──────────────────────────────────────
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const ADMIN_PASSWORD = 'yen2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('密碼錯誤，請重新輸入！');
    }
  };

  // ── 狀態控制 ────────────────────────────────────
  const [articleType, setArticleType] = useState('travel');
  const [previewDevice, setDevice] = useState('desktop');
  const [previewTab, setPreviewTab] = useState('card');
  const [activeTab, setActiveTab] = useState('edit'); // 用於手機版切換 'edit' | 'preview'
  const [copied, setCopied] = useState(false);

  // 延遲初始化讀取草稿，並具備自動相容與修復舊格式功能
  const [formData, setFormData] = useState(() => {
    const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        // 安全防護：如果舊草稿沒有 contentBlocks，自動幫其補上，避免當機
        if (!parsed.contentBlocks || !Array.isArray(parsed.contentBlocks)) {
          parsed.contentBlocks = defaultForm.contentBlocks;
        }
        return parsed;
      } catch (e) {
        return defaultForm;
      }
    }
    return defaultForm;
  });

  // 自動存草稿
  useEffect(() => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  // ── 動態區塊編輯邏輯 ──────────────────────────────
  const addBlock = (type) => {
    const newBlock = {
      id: Date.now().toString(),
      type: type,
      text: '',
    };
    const currentBlocks = formData.contentBlocks || [];
    setFormData((prev) => ({
      ...prev,
      contentBlocks: [...currentBlocks, newBlock],
    }));
  };

  const updateBlockText = (id, text) => {
    const currentBlocks = formData.contentBlocks || [];
    setFormData((prev) => ({
      ...prev,
      contentBlocks: currentBlocks.map((b) =>
        b.id === id ? { ...b, text } : b,
      ),
    }));
  };

  const deleteBlock = (id) => {
    const currentBlocks = formData.contentBlocks || [];
    setFormData((prev) => ({
      ...prev,
      contentBlocks: currentBlocks.filter((b) => b.id !== id),
    }));
  };

  const moveBlock = (index, direction) => {
    const currentBlocks = formData.contentBlocks || [];
    const blocks = [...currentBlocks];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= blocks.length) return;

    const temp = blocks[index];
    blocks[index] = blocks[targetIndex];
    blocks[targetIndex] = temp;

    setFormData((prev) => ({ ...prev, contentBlocks: blocks }));
  };

  const handleReset = () => {
    if (
      window.confirm(
        '確定要重設表單嗎？這會清除你目前輸入的所有內容並恢復預設範本。',
      )
    ) {
      setFormData(defaultForm);
    }
  };

  // ── 產生 JS 程式碼 ──────────────────────────────
  const generateCode = () => {
    const currentBlocks = formData.contentBlocks || [];
    const blocksCode = currentBlocks
      .map((b) => {
        return `      {
      type: '${b.type}',
      text: '${(b.text || '').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'
    }`;
      })
      .join(',\n');

    if (articleType === 'destination') {
      return `  {
  slug: '${formData.slug}',
  alpha2: '${(formData.alpha2 || 'th').toLowerCase()}',
  city: '${formData.city}',
  title: '${formData.title}',
  excerpt: '${formData.excerpt}',
  image: '${formData.image}',
  date: '${formData.date}',
  published: ${formData.published}
},`;
    } else {
      return `  {
  slug: '${formData.slug}',
  title: '${formData.title}',
  category: '${formData.category}',
  type: '${formData.layoutType || 'latest'}',
  date: '${formData.date}',
  excerpt: '${formData.excerpt}',
  readingTime: '${Math.max(1, Math.ceil(currentBlocks.length * 0.8))} min read',
  tags: ['${formData.category}', 'Slow Travel'],
  relatedRouteIds: [],
  heroLabel: 'Latest Story',
  image: '${formData.image}',
  content: [
\n${blocksCode}
  ]
},`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-[80vh] flex items-center justify-center bg-[#faf8f5]'>
        <div className='bg-white p-10 rounded-2xl shadow-sm border border-[#ebe2d6] w-full max-w-sm text-center'>
          <h2 className='text-2xl font-bold text-[#37473b] mb-2'>管理員登入</h2>
          <p className='text-sm text-[#6b7c6e] mb-6'>
            請輸入密碼以開啟 Yen's Journey 編輯後台
          </p>
          <form onSubmit={handleLogin} className='space-y-4'>
            <input
              type='password'
              placeholder='請輸入後台密碼'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2.5 rounded-xl border border-[#ebe2d6] text-sm focus:outline-none focus:ring-2 focus:ring-[#37473b]/20 text-center'
            />
            {errorMsg && <p className='text-xs text-red-500'>{errorMsg}</p>}
            <button
              type='submit'
              className='w-full bg-[#37473b] text-[#faf8f5] py-2.5 rounded-xl font-bold hover:bg-[#1e2b21] transition-all'
            >
              確認登入
            </button>
          </form>
        </div>
      </div>
    );
  }

  const safeBlocks = formData.contentBlocks || [];

  return (
    <div className='min-h-screen bg-[#faf8f5] text-[#1e2b21] font-sans pb-12'>
      {/* 頂部導覽列 */}
      <header className='bg-[#37473b] text-[#faf8f5] py-4 px-6 sticky top-0 z-50 shadow-md'>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-3'>
            <div className='bg-[#faf8f5] text-[#37473b] p-2 rounded-lg'>
              <Sparkles className='w-6 h-6' />
            </div>
            <div>
              <h1 className='text-xl font-bold tracking-wide'>
                Yen's Journey 視覺發布後台
              </h1>
              <p className='text-xs text-[#faf8f5]/70'>
                黃金工作流：視覺化編輯 ➔ 一鍵複製 ➔ Git 永久發布
              </p>
            </div>
          </div>

          {/* 類型切換 */}
          <div className='flex bg-[#1e2b21] p-1 rounded-xl border border-[#faf8f5]/20'>
            <button
              onClick={() => setArticleType('destination')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${articleType === 'destination' ? 'bg-[#37473b] text-[#faf8f5]' : 'text-[#faf8f5]/60 hover:text-[#faf8f5]'}`}
            >
              <Globe className='w-3.5 h-3.5' />
              國家攻略 (Map)
            </button>
            <button
              onClick={() => setArticleType('travel')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${articleType === 'travel' ? 'bg-[#37473b] text-[#faf8f5]' : 'text-[#faf8f5]/60 hover:text-[#faf8f5]'}`}
            >
              <FileText className='w-3.5 h-3.5' />
              一般旅遊文章
            </button>
          </div>
        </div>
      </header>

      {/* 手機版 編輯/預覽 頁籤切換 */}
      <div className='sm:hidden flex border-b border-[#ebe2d6] bg-white sticky top-[72px] z-40'>
        <button
          onClick={() => setActiveTab('edit')}
          className={`flex-1 py-3 text-center text-sm font-semibold flex justify-center items-center gap-2 ${activeTab === 'edit' ? 'border-b-2 border-[#37473b] text-[#37473b]' : 'text-[#6b7c6e]'}`}
        >
          <Edit3 className='w-4 h-4' />
          編輯內容
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-3 text-center text-sm font-semibold flex justify-center items-center gap-2 ${activeTab === 'preview' ? 'border-b-2 border-[#37473b] text-[#37473b]' : 'text-[#6b7c6e]'}`}
        >
          <Eye className='w-4 h-4' />
          即時預覽
        </button>
      </div>

      {/* 主內容區 */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* 左側編輯區 */}
          <div
            className={`lg:col-span-6 bg-white border border-[#ebe2d6] rounded-2xl p-6 shadow-sm space-y-6 ${activeTab === 'edit' ? 'block' : 'hidden sm:block'}`}
          >
            <div className='flex justify-between items-center border-b border-[#ebe2d6] pb-4'>
              <h2 className='text-lg font-bold flex items-center gap-2 text-[#37473b]'>
                <Edit3 className='w-5 h-5' />
                編輯文章內容
              </h2>
              <button
                onClick={handleReset}
                className='text-xs text-red-500 hover:bg-red-50 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all border border-red-200'
              >
                <RotateCcw className='w-3.5 h-3.5' />
                強制重設快取
              </button>
            </div>

            {/* 基本欄位 */}
            <div className='space-y-4'>
              {/* 樣式選擇 (僅一般文章) */}
              {articleType === 'travel' && (
                <div>
                  <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1.5'>
                    1. 選擇前台版面樣式 (Layout Style)
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    <button
                      type='button'
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          layoutType: 'latest',
                        }))
                      }
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${formData.layoutType === 'latest' ? 'border-[#37473b] bg-[#37473b]/5 text-[#37473b]' : 'border-[#ebe2d6] text-gray-500 hover:bg-gray-50'}`}
                    >
                      <LayoutList className='w-4 h-4' />
                      最新文章列表樣式
                    </button>
                    <button
                      type='button'
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          layoutType: 'featured',
                        }))
                      }
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${formData.layoutType === 'featured' ? 'border-[#37473b] bg-[#37473b]/5 text-[#37473b]' : 'border-[#ebe2d6] text-gray-500 hover:bg-gray-50'}`}
                    >
                      <LayoutGrid className='w-4 h-4' />
                      精選大卡片樣式
                    </button>
                  </div>
                </div>
              )}

              {/* Slug */}
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                  Slug (網址路徑)
                </label>
                <input
                  type='text'
                  name='slug'
                  value={formData.slug || ''}
                  onChange={handleInputChange}
                  placeholder='例如: bangkok-3-day-getaway'
                  className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm focus:outline-none focus:border-[#37473b]'
                />
              </div>

              {/* 分類 / 國家 */}
              {articleType === 'travel' ? (
                <div>
                  <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                    文章分類 (Category)
                  </label>
                  <input
                    type='text'
                    name='category'
                    value={formData.category || ''}
                    onChange={handleInputChange}
                    placeholder='例如: Thailand, Japan'
                    className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm focus:outline-none focus:border-[#37473b]'
                  />
                </div>
              ) : (
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                      ISO 代碼
                    </label>
                    <input
                      type='text'
                      name='alpha2'
                      value={formData.alpha2 || ''}
                      onChange={handleInputChange}
                      placeholder='例如: th'
                      maxLength={2}
                      className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm uppercase focus:outline-none'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                      城市 / 副標題
                    </label>
                    <input
                      type='text'
                      name='city'
                      value={formData.city || ''}
                      onChange={handleInputChange}
                      placeholder='例如: Bangkok'
                      className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm focus:outline-none'
                    />
                  </div>
                </div>
              )}

              {/* 標題 */}
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                  文章標題
                </label>
                <input
                  type='text'
                  name='title'
                  value={formData.title || ''}
                  onChange={handleInputChange}
                  placeholder='輸入文章標題'
                  className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm font-medium focus:outline-none'
                />
              </div>

              {/* 摘要 */}
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1'>
                  文章摘要 (Excerpt)
                </label>
                <textarea
                  name='excerpt'
                  value={formData.excerpt || ''}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder='顯示在卡片上的簡短介紹...'
                  className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm resize-none focus:outline-none'
                />
              </div>

              {/* 圖片 */}
              <div>
                <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b] mb-1 flex items-center gap-1'>
                  <ImageIcon className='w-3.5 h-3.5' /> 封面圖片網址
                </label>
                <input
                  type='text'
                  name='image'
                  value={formData.image || ''}
                  onChange={handleInputChange}
                  placeholder='https://images.unsplash.com/...'
                  className='w-full px-4 py-2 rounded-xl border border-[#ebe2d6] text-sm focus:outline-none'
                />
              </div>
            </div>

            {/* 動態區塊編輯器 */}
            {articleType === 'travel' && (
              <div className='pt-4 border-t border-[#ebe2d6] space-y-4'>
                <div className='flex justify-between items-center'>
                  <label className='block text-xs font-bold uppercase tracking-wider text-[#37473b]'>
                    2. 文章段落與行程規劃 ({safeBlocks.length})
                  </label>
                  <div className='flex gap-2'>
                    <button
                      type='button'
                      onClick={() => addBlock('heading')}
                      className='flex items-center gap-1 bg-[#37473b]/10 hover:bg-[#37473b]/20 text-[#37473b] text-xs font-bold px-2.5 py-1.5 rounded-lg transition-all'
                    >
                      <Heading className='w-3 h-3' /> + 新增標題
                    </button>
                    <button
                      type='button'
                      onClick={() => addBlock('paragraph')}
                      className='flex items-center gap-1 bg-[#37473b]/10 hover:bg-[#37473b]/20 text-[#37473b] text-xs font-bold px-2.5 py-1.5 rounded-lg transition-all'
                    >
                      <AlignLeft className='w-3 h-3' /> + 新增段落
                    </button>
                  </div>
                </div>

                {/* 區塊列表 */}
                <div className='space-y-3 max-h-[400px] overflow-y-auto pr-1 border border-dashed border-[#ebe2d6] p-4 rounded-xl bg-[#faf8f5]'>
                  {safeBlocks.length === 0 ? (
                    <p className='text-xs text-gray-400 text-center py-8'>
                      點擊上方按鈕，開始堆疊你的文章行程！
                    </p>
                  ) : (
                    safeBlocks.map((block, index) => (
                      <div
                        key={block.id}
                        className={`p-3 rounded-xl border bg-white shadow-sm flex gap-3 items-start transition-all ${block.type === 'heading' ? 'border-l-4 border-l-[#f59e0b]' : 'border-l-4 border-l-[#37473b]'}`}
                      >
                        {/* 區塊類型標籤 */}
                        <div className='flex-shrink-0 mt-1'>
                          {block.type === 'heading' ? (
                            <span className='text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded'>
                              標題
                            </span>
                          ) : (
                            <span className='text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded'>
                              段落
                            </span>
                          )}
                        </div>

                        {/* 內容輸入框 */}
                        <div className='flex-1'>
                          {block.type === 'heading' ? (
                            <input
                              type='text'
                              value={block.text || ''}
                              onChange={(e) =>
                                updateBlockText(block.id, e.target.value)
                              }
                              placeholder='例如: Day 1: 抵達曼谷與高空酒吧'
                              className='w-full border-b border-gray-100 focus:border-[#37473b] focus:outline-none text-sm font-bold py-0.5'
                            />
                          ) : (
                            <textarea
                              value={block.text || ''}
                              onChange={(e) =>
                                updateBlockText(block.id, e.target.value)
                              }
                              placeholder='輸入段落敘述內容...'
                              rows={2}
                              className='w-full border-b border-gray-100 focus:border-[#37473b] focus:outline-none text-xs leading-relaxed py-0.5 resize-none'
                            />
                          )}
                        </div>

                        {/* 控制按鈕 */}
                        <div className='flex items-center gap-1 flex-shrink-0'>
                          <button
                            type='button'
                            onClick={() => moveBlock(index, -1)}
                            className='p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-700'
                            title='上移'
                          >
                            <ArrowUp className='w-3.5 h-3.5' />
                          </button>
                          <button
                            type='button'
                            onClick={() => moveBlock(index, 1)}
                            className='p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-700'
                            title='下移'
                          >
                            <ArrowDown className='w-3.5 h-3.5' />
                          </button>
                          <button
                            type='button'
                            onClick={() => deleteBlock(block.id)}
                            className='p-1 hover:bg-red-50 rounded text-gray-400 hover:text-red-500'
                            title='刪除'
                          >
                            <Trash2 className='w-3.5 h-3.5' />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 右側預覽與程式碼產生區 */}
          <div
            className={`lg:col-span-6 space-y-6 ${activeTab === 'preview' ? 'block' : 'hidden sm:block'}`}
          >
            {/* 預覽控制列 */}
            <div className='bg-white border border-[#ebe2d6] rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-sm'>
              {/* 預覽分頁切換 */}
              <div className='flex bg-[#f0ece5] p-1 rounded-lg w-full sm:w-auto'>
                <button
                  onClick={() => setPreviewTab('card')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-xs font-bold transition-all ${previewTab === 'card' ? 'bg-white text-[#37473b] shadow-sm' : 'text-[#6b7c6e]'}`}
                >
                  卡片樣式預覽
                </button>
                <button
                  onClick={() => setPreviewTab('full')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-xs font-bold transition-all ${previewTab === 'full' ? 'bg-white text-[#37473b] shadow-sm' : 'text-[#6b7c6e]'}`}
                >
                  完整文章內頁預覽
                </button>
              </div>

              {/* 裝置切換 */}
              <div className='flex bg-[#f0ece5] p-1 rounded-lg'>
                <button
                  onClick={() => setDevice('desktop')}
                  className={`p-1.5 rounded ${previewDevice === 'desktop' ? 'bg-white text-[#37473b] shadow-sm' : 'text-[#6b7c6e]'}`}
                >
                  <Monitor className='w-4 h-4' />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`p-1.5 rounded ${previewDevice === 'mobile' ? 'bg-white text-[#37473b] shadow-sm' : 'text-[#6b7c6e]'}`}
                >
                  <Smartphone className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* 預覽視窗 */}
            <div className='flex justify-center w-full'>
              <div
                className={`w-full transition-all duration-300 ${previewDevice === 'mobile' ? 'max-w-[375px] border-x-8 border-t-8 border-b-[24px] border-[#37473b] rounded-[32px] overflow-hidden shadow-2xl bg-[#faf8f5]' : ''}`}
              >
                <div className='bg-[#faf8f5] p-6 rounded-2xl border border-[#ebe2d6] shadow-sm min-h-[400px] flex flex-col justify-between overflow-y-auto max-h-[500px]'>
                  {previewTab === 'card' ? (
                    // ── 1. 卡片樣式預覽 ──
                    <div className='space-y-6'>
                      {formData.layoutType === 'featured' ? (
                        <div>
                          <div className='text-xs font-bold text-[#37473b] mb-3 uppercase tracking-wider'>
                            📰 精選文章大卡片 (Featured Grid)
                          </div>
                          <div className='bg-white border border-[#ebe2d6] rounded-2xl p-6 shadow-sm'>
                            <span className='text-[10px] font-bold text-[#37473b] tracking-widest uppercase block mb-2'>
                              {formData.category || 'CATEGORY'}
                            </span>
                            <h3 className='font-serif text-lg font-medium text-[#1e2b21] mb-2 leading-snug'>
                              {formData.title || '請輸入標題'}
                            </h3>
                            <p className='text-xs text-[#6b7c6e] leading-relaxed'>
                              {formData.excerpt || '請輸入摘要內容...'}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className='text-xs font-bold text-[#37473b] mb-3 uppercase tracking-wider'>
                            📋 最新文章列表 (List Item)
                          </div>
                          <div className='bg-white p-3 rounded-xl border border-[#ebe2d6] flex items-center gap-4'>
                            <div
                              className='w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0 bg-gray-100'
                              style={{
                                backgroundImage: `url('${formData.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'}')`,
                              }}
                            />
                            <div className='flex-1 min-w-0'>
                              <span className='text-[9px] font-bold text-[#37473b] tracking-wider uppercase block'>
                                {formData.category || 'CATEGORY'}
                              </span>
                              <h4 className='font-serif text-sm font-bold text-[#1e2b21] truncate mt-0.5'>
                                {formData.title || '請輸入標題'}
                              </h4>
                              <p className='text-[11px] text-[#6b7c6e] truncate mt-0.5'>
                                {formData.excerpt || '請輸入摘要內容...'}
                              </p>
                              <span className='text-[10px] text-[#a3ab9f] block mt-1'>
                                {formData.date}
                              </span>
                            </div>
                            <span className='text-[#37473b] font-bold text-sm pr-1'>
                              →
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // ── 2. 完整文章內頁預覽 ──
                    <div className='space-y-4 text-left'>
                      <div className='text-xs font-bold text-[#37473b] mb-3 uppercase tracking-wider border-b pb-2'>
                        📖 完整文章內頁預覽
                      </div>

                      {/* 文章大圖 */}
                      <div
                        className='h-40 w-full rounded-xl bg-cover bg-center'
                        style={{
                          backgroundImage: `url('${formData.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'}')`,
                        }}
                      />

                      {/* 分類與日期 */}
                      <div className='flex justify-between items-center text-[10px] text-[#6b7c6e]'>
                        <span className='font-bold uppercase tracking-wider text-[#37473b]'>
                          {formData.category}
                        </span>
                        <span>{formData.date}</span>
                      </div>

                      {/* 標題 */}
                      <h1 className='font-serif text-xl font-bold text-[#1e2b21] leading-tight'>
                        {formData.title || '請輸入標題'}
                      </h1>

                      {/* 導覽內容渲染 */}
                      <div className='space-y-4 pt-2 border-t border-gray-100'>
                        {safeBlocks.map((block) => (
                          <div key={block.id}>
                            {block.type === 'heading' ? (
                              <h2 className='font-serif text-sm font-bold text-[#37473b] mt-4 mb-2 flex items-center gap-1.5 border-l-2 border-l-[#37473b] pl-2'>
                                {block.text || '（空白標題）'}
                              </h2>
                            ) : (
                              <p className='text-xs text-[#6b7c6e] leading-relaxed whitespace-pre-line'>
                                {block.text || '（空白段落）'}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 程式碼輸出面板 */}
            <div className='bg-[#1e2b21] text-[#faf8f5] rounded-2xl p-6 shadow-lg border border-[#37473b]'>
              <div className='flex justify-between items-center mb-4'>
                <div>
                  <h3 className='text-sm font-bold tracking-wider text-[#faf8f5]/90'>
                    程式碼生成器 (JSON/JS Object)
                  </h3>
                  <p className='text-[11px] text-[#faf8f5]/60 mt-0.5'>
                    請複製並貼到 src/data/travelArticles.js 中
                  </p>
                </div>
                <button
                  onClick={handleCopy}
                  className='flex items-center gap-1.5 bg-[#37473b] hover:bg-[#37473b]/80 text-[#faf8f5] text-xs font-semibold px-3 py-1.5 rounded-lg transition-all border border-[#faf8f5]/10'
                >
                  {copied ? (
                    <>
                      <Check className='w-3.5 h-3.5 text-green-400' />
                      已複製！
                    </>
                  ) : (
                    <>
                      <Copy className='w-3.5 h-3.5' />
                      複製程式碼
                    </>
                  )}
                </button>
              </div>

              <pre className='bg-[#0f172a] text-xs p-4 rounded-xl overflow-x-auto font-mono text-green-400 border border-gray-800 leading-relaxed max-h-48 overflow-y-auto'>
                {generateCode()}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
