export const profile = {
  introduction: [
    '神山まるごと高専で学びながら、プログラミングやデザイン、事業づくりなど、興味を持ったさまざまな分野に挑戦しています。',
    '好奇心をそのままにせず、実際に形にしてみることを大切にしています。',
  ],
  interests: ['Programming', 'Business', 'Creative', 'Design'],
  socials: [
    { label: 'GitHub', url: '#' }, { label: 'Instagram', url: '#' },
    { label: 'note', url: '#' }, { label: 'Facebook', url: '#' },
    { label: 'Mail', url: 'mailto:example@example.com' },
  ],
}

const placeholderCopy = {
  morillion: ['Morillion Web Design', 'Morillion Product', 'Morillion Activity', 'Morillion Research'],
  'hyakunin-cosme': ['Brand Visual', 'Package Design', 'Hyakunin Isshu × Cosmetics', 'Design Process'],
  hanabi: ['Robot', 'Team Activity', 'Competition', 'Making Process'],
  'design-fes': ['Exhibition View', 'Exhibited Work', 'Making Process', 'Venue'],
}

const baseWorks = [
  ['morillion', '防犯事業 モリリオン', 'MORILLION', 'BUSINESS', '防犯事業を象徴する画像'],
  ['hyakunin-cosme', '百人一首コスメブランド', 'HYAKUNIN COSME', 'BUSINESS / DESIGN', 'コスメブランドビジュアル'],
  ['hanabi', 'FRC / Hanabi', 'FRC / HANABI', 'ROBOTICS / PROJECT', 'ロボットまたは活動写真'],
  ['design-fes', '神山デザインフェス出展', 'KAMIYAMA DESIGN FES', 'DESIGN / EVENT', '展示会場または作品写真'],
  ['tech', 'TECH WORKS', 'TECH WORKS', 'TECHNOLOGY', 'プログラミング作品'],
  ['creative', 'CREATIVE WORKS', 'CREATIVE WORKS', 'CREATIVE', '創作作品'],
]

export const works = baseWorks.map(([slug, title, imageTitle, category, imageDescription], index) => ({
  slug, title, imageTitle, category, imageDescription, year: '2026',
  role: index === 2 ? 'Project Member' : 'Planning / Design',
  tools: index === 2 ? 'CAD / Engineering' : 'Figma / Illustrator',
  team: 'Team Project', status: 'Ongoing',
  summary: 'ここにプロジェクトの短い概要が入ります。',
  sections: [
    ['01', 'OVERVIEW', 'ここにプロジェクト概要が入ります。どのような活動で、何を目指したプロジェクトなのかを紹介します。'],
    ['02', 'BACKGROUND', 'ここにプロジェクトを始めた背景が入ります。興味を持ったきっかけや、活動を始めるまでの経緯を紹介します。'],
    ['03', 'CHALLENGE', 'ここにプロジェクトで向き合った課題が入ります。解決したかったことや、制作時に考えた問いを紹介します。'],
    ['04', 'WHAT I DID', 'ここに自分が担当した内容が入ります。企画・デザイン・制作など、具体的に取り組んだことを紹介します。'],
    ['05', 'PROCESS', 'ここに制作や活動の過程が入ります。試行錯誤やチームでの取り組みを、写真とともに紹介します。'],
    ['06', 'RESULT', 'ここに活動の成果が入ります。完成したものや、活動を通して生まれた変化を紹介します。'],
    ['07', 'LEARNING', 'ここにプロジェクトから学んだことが入ります。次の挑戦につながる発見や気づきを紹介します。'],
  ],
  gallery: placeholderCopy[slug] || [],
}))

export const techWorks = [
  ['PORTFOLIO WEBSITE', 'Webサイトスクリーンショット', 'HTML / CSS / JavaScript', '別のポートフォリオサイト。設計から実装まで取り組んだ作品です。'],
  ['ELECTRONICS', '電子工作写真', 'C / Electronics', 'センサーやマイコンを使い、アイデアを形にした電子工作です。'],
  ['APPLE AI', 'りんご判別AI画面', 'Python / Machine Learning', '画像からりんごを判別するAIのプロトタイプです。'],
  ['MINI GAME', 'ゲーム画面', 'Programming', 'プログラミングを学ぶ中で制作した小さなゲームです。'],
]

export const creativeWorks = [
  ['ILLUSTRATION', 'イラスト作品', 'portrait'], ['ILLUSTRATION', 'イラスト作品', 'landscape'],
  ['PAINTING', '絵画作品', 'landscape'], ['PAINTING', '絵画作品', 'portrait'],
  ['GRAPHIC DESIGN', 'グラフィックデザイン作品', 'wide'], ['GRAPHIC DESIGN', 'グラフィックデザイン作品', 'portrait'],
  ['ILLUSTRATION', 'イラスト作品', 'landscape'], ['GRAPHIC DESIGN', 'グラフィックデザイン作品', 'landscape'],
]
