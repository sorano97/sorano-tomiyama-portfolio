import morillionImage from '../pictures/morillion.webp'
import hefeiImage from '../pictures/hefei-web.jpg'
import hyakuninImage from '../pictures/百人一首事業.png'
import hanabiImage from '../pictures/Hanabi.png'
import designFesImage from '../pictures/design-fes.jpg'
import techImage from '../pictures/tech-works.jpg'
import creativeImage from '../pictures/creative.png'

export const profile = {
  introduction: [
    '神山まるごと高専で学びながら、プログラミングやデザイン、事業づくりなど、興味を持ったさまざまな分野に挑戦しています。',
    '好奇心をそのままにせず、実際に形にしてみることを大切にしています。',
  ],
  interests: ['Programming', 'Business', 'Creative', 'Design'],
  socials: [
    { label: 'GitHub', url: 'https://github.com/sorano97' },
    { label: 'Instagram', url: 'https://www.instagram.com/sorano_28?igsh=MWp1a3hibnd0MW5oYQ%3D%3D&utm_source=qr' },
    { label: 'note', url: 'https://note.com/sorano_28' },
    { label: 'Facebook', url: 'https://www.facebook.com/share/19JGMqfQXP/?mibextid=wwXIfr' },
    { label: 'Mail', url: 'mailto:tsorano.0528@gmail.com' },
  ],
}

const placeholderCopy = {
  morillion: ['Morillion Web Design', 'Morillion Product', 'Morillion Activity', 'Morillion Research'],
  'hyakunin-cosme': ['Brand Visual', 'Package Design', 'Hyakunin Isshu × Cosmetics', 'Design Process'],
  hanabi: ['Robot', 'Team Activity', 'Competition', 'Making Process'],
  'design-fes': ['Exhibition View', 'Exhibited Work', 'Making Process', 'Venue'],
}

const baseWorks = [
  ['morillion', '防犯事業 モリリオン', 'MORILLION', 'BUSINESS / DESIGN', '防犯事業を象徴する画像'],
  ['hyakunin-cosme', '百人一首コスメブランド', 'HYAKUNIN COSME', 'BUSINESS / DESIGN', 'コスメブランドビジュアル'],
  ['hanabi', 'FRC / Hanabi', 'FRC / HANABI', 'ROBOTICS / PROJECT', 'ロボットまたは活動写真'],
  ['hefei-ambassador', '久留米市 合肥友好大使', 'HEFEI FRIENDSHIP AMBASSADOR', 'INTERNATIONAL / COMMUNITY', '久留米市・合肥市との\n国際交流活動が分かる写真'],
  ['design-fes', '神山デザインフェス出展', 'KAMIYAMA DESIGN FES', 'DESIGN / EVENT', '展示会場または作品写真'],
  ['tech', 'TECH WORKS', 'TECH WORKS', 'TECHNOLOGY', 'プログラミング作品'],
  ['creative', 'CREATIVE WORKS', 'CREATIVE WORKS', 'CREATIVE', '創作作品'],
]

const workImages = {
  'hefei-ambassador': hefeiImage,
  morillion: morillionImage,
  'hyakunin-cosme': hyakuninImage,
  hanabi: hanabiImage,
  'design-fes': designFesImage,
  tech: techImage,
  creative: creativeImage,
}

const workDescriptions = {
  morillion: '防犯をもっと身近にすることを目指し、調査からサービス設計まで取り組む防犯プロジェクト。',
  'hyakunin-cosme': '百人一首の文化とコスメを組み合わせ、日本文化を新しい形で届けるブランドプロジェクト。',
  hanabi: '国際ロボット競技FRCに挑戦するチームで、企画やアウトリーチ活動に取り組んでいます。',
  'hefei-ambassador': '久留米市と中国・合肥市の友好交流に関わり、異なる文化や地域をつなぐ活動に参加しています。',
  'design-fes': '神山デザインフェスに作品を出展し、制作から展示までを経験したプロジェクト。',
  tech: 'Web制作、電子工作、AI、ゲームなど、興味から生まれたさまざまな技術作品。',
  creative: 'イラスト、絵画、グラフィックデザインなど、これまで制作してきた創作作品の記録。',
}

const projectContent = {
  morillion: {
    lead: '防犯を、特別なものではなく日常の中にあるものへ。身近な不安や防犯に関する課題を調べ、ユーザーへのヒアリングからサービス・プロダクトの形を考えている防犯プロジェクトです。',
    sections: [
      { number:'01', label:'OVERVIEW', title:'防犯をもっと身近にする', paragraphs:['モリリオンは、防犯に関する身近な課題から始まったプロジェクトです。','防犯というと、防犯カメラや警備サービスなど大きな仕組みを想像しがちですが、実際には「夜道を歩くのが怖い」「どんな防犯対策をすればいいのか分からない」といった、日常の小さな不安も多く存在します。','そこで、防犯を一部の人だけが考えるものではなく、誰もが日常の中で自然に取り入れられるものにできないかと考えました。'] },
      { number:'02', label:'BACKGROUND', title:'身近な不安から、事業を考える', paragraphs:['最初から作りたいサービスや商品が決まっていたわけではありません。','まずは、防犯についてどのような課題があるのかを知るところから始めました。','実際に身近な人へ話を聞いたり、防犯に関するサービスや警察・自治体の取り組みを調べたりしながら、「本当に困っていることは何か」を探しています。','アイデアから先に考えるのではなく、課題を理解したうえで必要なものを作ることを大切にしています。'] },
      { number:'03', label:'RESEARCH', title:'作る前に、知る', paragraphs:['モリリオンでは、Webサイトやプロダクトを制作することだけを目的にしていません。','ユーザーへのヒアリング、防犯サービスの調査、既存商品の分析などを行いながら、防犯に対するニーズを整理しています。','調査を通して得た情報をもとに、次の視点から考えています。'], bullets:['どんな人が困っているのか','どんな場面で不安を感じるのか','現在のサービスでは何が足りないのか','どのような形なら日常的に利用してもらえるのか'] },
      { number:'04', label:'WHAT I DO', title:'企画からデザインまで', paragraphs:['このプロジェクトでは、課題調査だけでなく、サービスの企画やWebサイト、ブランドの見せ方など幅広い部分に関わっています。','一つの専門分野だけで考えるのではなく、Business × Design × Technologyを組み合わせながら、実際に使ってもらえる形へ近づけていくことを目指しています。'] },
      { number:'05', label:'PROCESS', title:'考えて、作って、また考える', paragraphs:['調査をして終わるのではなく、得られた情報をもとに試作品を作り、そこからまた改善することを繰り返しています。','完璧なものを最初から作ろうとするのではなく、小さく形にして検証することを意識しています。'] },
      { number:'06', label:'NOW', title:'現在も進行中', paragraphs:['モリリオンは完成した作品ではなく、現在も形を変えながら進んでいるプロジェクトです。','ユーザーにとって本当に必要な防犯サービスとは何かを考えながら、事業として継続できる形を目指しています。'] },
      { number:'07', label:'LEARNING', title:'「作りたいもの」より「必要なもの」', paragraphs:['このプロジェクトを通して、良いアイデアを思いつくだけではサービスにならないことを学びました。','まず相手を知り、課題を理解し、そのうえで必要なものを考える。','制作だけではなく、調査・企画・事業まで含めて考える経験になっています。'], quote:'「作りたいもの」ではなく、「必要なもの」から考える。' },
    ],
    images:[['MORILLION MAIN VISUAL','防犯事業を象徴する写真'],['USER RESEARCH','ヒアリング・調査の様子'],['WEB / DESIGN','Webサイトまたはデザイン'],['PROTOTYPE','制作した試作品'],['ACTIVITY','活動中の写真']],
  },
  'hyakunin-cosme': {
    lead: '百人一首という1000年以上受け継がれてきた文化と、現代のコスメを組み合わせる。日本文化を「学ぶもの」だけではなく、新しい形で楽しめるブランドを目指して取り組んでいるプロジェクトです。',
    sections: [
      { number:'01', label:'OVERVIEW', title:'百人一首を、現代のブランドへ', paragraphs:['このプロジェクトでは、百人一首とコスメを組み合わせたブランドづくりに取り組んでいます。','百人一首には、恋愛や季節、自然、人との別れなど、現代にも通じるさまざまな感情が詠まれています。','その世界観をコスメの色やデザインへ落とし込むことで、百人一首に触れたことがない人にも興味を持ってもらえるブランドを作れないかと考えました。'] },
      { number:'02', label:'BACKGROUND', title:'伝統文化との新しい出会い方', paragraphs:['伝統文化は、学校の授業や歴史の中で触れることが多く、若い世代にとって少し遠い存在になってしまうことがあります。','しかし、百人一首を一首ずつ知っていくと、それぞれに物語や感情があり、現代と大きく変わらない部分もあります。','そこで、文化そのものを変えるのではなく、入口を変えることで新しい人に届けられないかと考えました。'] },
      { number:'03', label:'CONCEPT', title:'一首から、一色へ', paragraphs:['和歌に登場する風景や季節、感情などから色や質感を考え、それを商品やブランドの世界観へ落とし込むことを目指しています。','単純に「和風のデザイン」にするのではなく、その歌が持つ背景や意味まで理解したうえでデザインにつなげることを大切にしています。'], quote:'一首から、一色へ。' },
      { number:'04', label:'WHAT I DO', title:'文化・デザイン・ビジネスをつなぐ', paragraphs:['このプロジェクトでは、ブランドづくり全体に取り組んでいます。'], bullets:['百人一首について学ぶ','ブランドコンセプトを考える','商品アイデアを考える','パッケージやビジュアルを制作する','どのように販売するかを考える'], after:'デザインだけで終わらせず、実際にブランドとして届けられるところまで考えることを目標にしています。' },
      { number:'05', label:'PROCESS', title:'知ることからデザインする', paragraphs:['最初にビジュアルを決めるのではなく、まず百人一首そのものについて学ぶところから進めています。','歌の意味や作者、時代背景などを知り、その中からデザインに使える要素を探します。','そのうえで現代的なコスメブランドとして成立するように、色・文字・パッケージなどへ落とし込んでいきます。'] },
      { number:'06', label:'VISION', title:'昔の文化を、今の体験へ', paragraphs:['目指しているのは、百人一首を知っている人だけのブランドではありません。','コスメやデザインをきっかけに商品を手に取り、その先で「この歌にはどんな意味があるんだろう」と興味を持ってもらえるような体験を作りたいと考えています。'] },
      { number:'07', label:'LEARNING', title:'新しくすることと、残すこと', paragraphs:['伝統文化を現代的に見せるだけでは、その文化が持つ魅力を失ってしまう可能性があります。','大切な部分を理解したうえで、新しい表現へ変換する。','このプロジェクトを通して、リサーチとデザインをつなげることの重要性を学んでいます。'] },
    ],
    images:[['BRAND VISUAL','ブランド全体を象徴する画像'],['HYAKUNIN ISSHU','百人一首に関する写真'],['PRODUCT DESIGN','商品・パッケージデザイン'],['DESIGN PROCESS','制作途中'],['BRAND APPLICATION','実際のブランド展開イメージ']],
  },
  hanabi: {
    lead: '世界規模のロボット競技 FIRST Robotics Competition に挑戦するチーム「Hanabi」。ロボットだけではなく、人にものづくりの楽しさを届けるアウトリーチや企画にも取り組んでいます。',
    sections: [
      { number:'01', label:'OVERVIEW', title:'ロボットから広がる挑戦', paragraphs:['Hanabiは、FIRST Robotics Competition（FRC）への出場を目指して活動するロボットチームです。','FRCでは、ロボットを作る技術だけでなく、チーム運営、資金調達、地域との関わり、STEM教育など、さまざまな活動が求められます。','一つのロボットを中心に、多くの分野へ活動が広がっていることがFRCの特徴です。'] },
      { number:'02', label:'MY ROLE', title:'アウトリーチと企画', paragraphs:['Hanabiでは主にアウトリーチ活動や企画に関わっています。','アウトリーチでは、チームだけで活動を完結させるのではなく、子どもたちや地域の人たちにも、ものづくりやSTEMの楽しさを伝えることを目指しています。','イベントを考え、実際に参加してもらうところまで形にすることに取り組んでいます。'] },
      { number:'03', label:'OUTREACH', title:'ものづくりの火種を届ける', paragraphs:['Hanabiでは、子どもたちがプログラミングやロボット、ものづくりに触れられる企画を考えています。','ただ技術を教えるだけではなく、「やってみたい」「自分でも作れそう」と思える体験を作ることを大切にしています。'], quote:'ものづくりの火種を届ける。' },
      { number:'04', label:'PLANNING', title:'アイデアをイベントにする', paragraphs:['イベント企画では、次のことまで考えます。'], bullets:['誰に参加してもらうか','何を体験してもらうか','どんな順番なら楽しめるか','必要なメンバーや道具は何か','実施後に何を持ち帰ってほしいか'], after:'思いついた企画を、実際に実施できる形まで具体化していく経験になっています。' },
      { number:'05', label:'TEAM', title:'一人では作れないもの', paragraphs:['FRCでは、ロボット制作、広報、企画、アウトリーチなど、異なる役割を持ったメンバーが協力します。','自分だけで完結する制作とは異なり、チーム全体の目標を考えながら動く必要があります。','自分とは異なる得意分野を持った人と一緒に活動することも、このプロジェクトの大きな学びです。'] },
      { number:'06', label:'LEARNING', title:'技術だけではないものづくり', paragraphs:['Hanabiで活動する中で、ものづくりは「ものを作ること」だけではないと感じています。','その技術を誰に届けるのか、どうやって仲間を増やすのか、どんな文化を残したいのか。','ロボットを中心に、技術と人のつながりについて考える経験になっています。'] },
    ],
    images:[['HANABI / FRC','チームまたはロボット写真'],['ROBOT','制作したロボット'],['TEAM ACTIVITY','チーム活動'],['OUTREACH','子ども向けイベント'],['PLANNING','企画中の様子']],
  },
  'hefei-ambassador': {
    lead: '久留米市と中国・合肥市をつなぐ友好交流活動。普段の制作活動とは異なる国際交流という分野に飛び込み、異なる文化や価値観に触れています。',
    sections: [
      { number:'01', label:'OVERVIEW', title:'地域と地域をつなぐ', paragraphs:['久留米市と中国・合肥市との友好交流に関わる活動に、友好大使として参加しています。','プログラミングやデザイン、事業づくりとは異なる分野ですが、興味を持ったことをきっかけに国際交流という新しい活動にも挑戦しました。'] },
      { number:'02', label:'WHY', title:'知らない世界へ', paragraphs:['普段過ごしている環境だけでは、自分とは異なる文化や考え方に触れる機会は限られています。','知らない場所へ行き、知らない人と話し、自分とは違う価値観を知ることも、新しいものを考えるうえで大切な経験だと考えています。','この活動は、自分の興味の範囲をさらに広げる機会の一つになっています。'] },
      { number:'03', label:'EXPERIENCE', title:'交流から知る', paragraphs:['友好大使として参加した交流活動について紹介します。具体的な活動内容や写真は今後追加予定です。'] },
      { number:'04', label:'DISCOVERY', title:'違いを見ることで、自分を知る', paragraphs:['異なる文化に触れることは、相手について知るだけではなく、自分が当たり前だと思っていたことを考え直すきっかけにもなります。','新しい環境へ飛び込むことで、これまでとは違う視点を持てるようになることを期待しています。'] },
      { number:'05', label:'LEARNING', title:'好奇心の範囲を広げる', paragraphs:['この活動をポートフォリオに掲載する理由は、国際交流そのものだけではありません。','事業、技術、デザイン、創作と分野を限定せず、興味を持ったことに挑戦するという自分の姿勢を表す活動の一つだからです。','「好奇心のままに。」というこのポートフォリオのテーマを、別の角度から表す実績として紹介します。'], quote:'知らない世界へ、好奇心のままに。' },
    ],
    images:[['FRIENDSHIP AMBASSADOR','友好大使活動を象徴する写真'],['KURUME × HEFEI','久留米市・合肥市交流活動'],['CULTURAL EXCHANGE','文化交流の様子'],['GROUP PHOTO','参加メンバーとの写真']],
  },
  'design-fes': {
    lead: '作るだけではなく、誰かに見てもらうところまでデザインする。神山デザインフェスへの出展を通して、作品制作と展示の両方に取り組みました。',
    sections: [
      { number:'01', label:'OVERVIEW', title:'作品を「展示する」ということ', paragraphs:['神山デザインフェスへの出展では、自分の制作物を実際の空間で人に見てもらう経験をしました。','普段、PCや自分の手元だけで完成していた制作物も、展示するとなると、作品そのものだけではなく「どう見てもらうか」まで考える必要があります。'] },
      { number:'02', label:'BACKGROUND', title:'見る人がいる制作へ', paragraphs:['制作していると、自分自身が理解できることを基準にデザインしてしまうことがあります。','しかし展示では、作品について何も知らない人が初めて目にします。','説明がなくても興味を持ってもらえるのか。どこから見ればいいのか。何を感じてもらいたいのか。','見る人の立場から作品を考える経験になりました。'] },
      { number:'03', label:'WORK', title:'出展作品', paragraphs:['神山デザインフェスで展示した作品について紹介します。作品名・コンセプト・制作背景などの詳細は今後追加予定です。'] },
      { number:'04', label:'EXHIBITION', title:'作品から展示へ', paragraphs:['展示では、作品単体の完成度だけではなく、次のような部分も作品体験に影響します。'], bullets:['どこに配置するか','どのくらいの大きさで見せるか','説明をどこまで付けるか','周囲の空間とどう組み合わせるか'], after:'制作と展示を別々に考えるのではなく、一つの体験として考えることを意識しました。' },
      { number:'05', label:'EXPERIENCE', title:'人に見てもらって初めて分かること', paragraphs:['実際に作品を人に見てもらうことで、自分が想定していた見方とは違う反応が生まれることがあります。','制作して終わるのではなく、人に届けたところまで含めてデザインすることの大切さを感じる経験になりました。'] },
      { number:'06', label:'LEARNING', title:'作品の外側まで考える', paragraphs:['この出展を通して、デザインは作品そのものだけでは完結しないことを学びました。','見る場所、周囲の空間、伝え方など、作品の外側にあるものまで含めて体験が作られます。','制作物を「人に届ける」という視点を意識するきっかけになった活動です。'], quote:'作るだけではなく、届けるところまでデザインする。' },
    ],
    images:[['DESIGN FES','展示全体の写真'],['EXHIBITION WORK','神山デザインフェスで\n実際に展示した作品の写真'],['DISPLAY','展示方法が分かる写真'],['MAKING','制作途中'],['VENUE','会場の様子']],
  },
}

export const works = baseWorks.map(([slug, title, imageTitle, category, imageDescription]) => ({
  slug, title, imageTitle, category, imageDescription,
  image: workImages[slug] || null,
  description: workDescriptions[slug],
  year: slug === 'hefei-ambassador' ? 'XXXX' : '2026',
  role: slug === 'hefei-ambassador' ? 'Friendship Ambassador' : slug === 'hanabi' ? 'Project Member' : 'Planning / Design',
  tools: slug === 'hefei-ambassador' ? '-' : slug === 'hanabi' ? 'CAD / Engineering' : 'Figma / Illustrator',
  team: slug === 'hefei-ambassador' ? 'Community / Group' : 'Team Project',
  status: slug === 'hefei-ambassador' ? 'XXXX' : 'Ongoing',
  summary: projectContent[slug]?.lead || workDescriptions[slug],
  sections: projectContent[slug]?.sections || [],
  detailImages: projectContent[slug]?.images || [],
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
