export const projects = [
  {id:1,title:'DevTrack — Async standup',desc:'Replace boring standups with 90-second async video check-ins across timezones.',emoji:'📹',color:'#1C1040',feedbacks:142,reactions:38,author:'Maya R',av:'MR',avColor:'linear-gradient(135deg,#6C63FF,#FF6B6B)',tags:['Web App','Open Source'],time:'3d ago'},
  {id:2,title:'OpenAPI Studio',desc:'Visual editor to build, test, and document REST APIs without writing YAML by hand.',emoji:'⚡',color:'#0D1A2A',feedbacks:87,reactions:22,author:'James T',av:'JT',avColor:'linear-gradient(135deg,#00D4AA,#0B8)',tags:['Dev Tool','API'],time:'5d ago'},
  {id:3,title:'Habit tracker PWA',desc:'Minimal progressive web app for tracking atomic habits with streak visualization.',emoji:'🔥',color:'#1A1210',feedbacks:64,reactions:19,author:'Sara L',av:'SL',avColor:'linear-gradient(135deg,#F59E0B,#FF6B6B)',tags:['PWA','Mobile'],time:'1w ago'},
  {id:4,title:'AI Cover Letter Writer',desc:'Paste a job description and get a tailored cover letter in 10 seconds. No more blank page anxiety.',emoji:'✍️',color:'#0D1A14',feedbacks:211,reactions:56,author:'Priya K',av:'PK',avColor:'linear-gradient(135deg,#6C63FF,#00D4AA)',tags:['AI/ML','Web App'],time:'2d ago'},
  {id:5,title:'TeamPulse Dashboard',desc:'Real-time mood tracking for remote engineering teams. Anonymous, weekly, visual.',emoji:'💛',color:'#1A180D',feedbacks:93,reactions:31,author:'Chen W',av:'CW',avColor:'linear-gradient(135deg,#F59E0B,#6C63FF)',tags:['SaaS','Analytics'],time:'4d ago'},
  {id:6,title:'DraftBoard',desc:'Kanban for writers. Drag cards from outline → draft → edit → publish with AI suggestions.',emoji:'📝',color:'#111A1A',feedbacks:48,reactions:14,author:'Alex K',av:'AK',avColor:'linear-gradient(135deg,#6C63FF,#A855F7)',tags:['Productivity','AI/ML'],time:'6d ago'},
];

export const categories = [
  {label:'UI/UX issues',count:52,pct:37,color:'var(--indigo)'},
  {label:'Feature requests',count:41,pct:29,color:'var(--mint)'},
  {label:'Positive highlights',count:31,pct:22,color:'var(--amber)'},
  {label:'Bug / technical',count:18,pct:13,color:'var(--coral)'},
];

export const sentimentData = [
  {w:'W1',pos:40,neu:35,neg:25},{w:'W2',pos:45,neu:30,neg:25},
  {w:'W3',pos:52,neu:28,neg:20},{w:'W4',pos:55,neu:32,neg:13},
  {w:'W5',pos:60,neu:25,neg:15},{w:'W6',pos:58,neu:27,neg:15},
  {w:'W7',pos:65,neu:22,neg:13},
];

export const comments = [
  {author:'James T',av:'JT',avColor:'linear-gradient(135deg,#00D4AA,#0B8)',time:'2h ago',text:'The async concept is brilliant. My main friction: finding last week\'s check-ins is a scavenger hunt. A proper search bar would change everything.',tag:'suggestion',tagStyle:'tag-indigo'},
  {author:'Priya K',av:'PK',avColor:'linear-gradient(135deg,#6C63FF,#00D4AA)',time:'5h ago',text:'Tried it with my team — love the 90-second limit. Forces people to be concise. The transcription feature is surprisingly accurate too. Ship it!',tag:'praise',tagStyle:'tag-mint'},
  {author:'Chen W',av:'CW',avColor:'linear-gradient(135deg,#F59E0B,#6C63FF)',time:'1d ago',text:'Video upload fails silently on slow connections. No error message, no retry. Found this on a 3G network — easy win to fix.',tag:'bug',tagStyle:'tag-coral'},
];

export const reactions = [
  {emoji:'🔥',label:'Fire',count:16,active:false},
  {emoji:'💡',label:'Insightful',count:9,active:true},
  {emoji:'❤️',label:'Love',count:7,active:false},
  {emoji:'👏',label:'Props',count:4,active:false},
  {emoji:'🤔',label:'Needs work',count:2,active:false},
];

export const matches = [
  {name:'Sara Lin',av:'SL',avColor:'linear-gradient(135deg,#F59E0B,#FF6B6B)',role:'UI/UX Designer',score:94,why:'Sara has shipped 3 SaaS onboarding flows and specifically mentioned wanting to review async tools.',skills:['Figma','User research','Motion design'],help:'Review your onboarding & navigation UX',collabType:'UI/UX review · ~2 hours'},
  {name:'David Oh',av:'DO',avColor:'linear-gradient(135deg,#00D4AA,#6C63FF)',role:'Backend Engineer',score:88,why:'David is strong in video infrastructure (WebRTC, CDN) — exactly what async video recording needs.',skills:['Node.js','WebRTC','AWS'],help:'Architect your video upload & streaming pipeline',collabType:'Technical review · ~1 hour'},
  {name:'Nadia B',av:'NB',avColor:'linear-gradient(135deg,#A855F7,#FF6B6B)',role:'Growth mentor',score:81,why:'Nadia scaled 2 async collaboration tools to 10k+ users and can spot distribution blind spots.',skills:['Growth','PLG','Analytics'],help:'Review your go-to-market and activation funnel',collabType:'Strategy call · 45 min'},
];

export const quickCollabs = [
  {emoji:'🎨',label:'Review the onboarding UI',time:'~30 min'},
  {emoji:'🐛',label:'Find edge case bugs',time:'~20 min'},
  {emoji:'💡',label:'Give honest first impression',time:'~10 min'},
  {emoji:'📝',label:'Suggest copy improvements',time:'~15 min'},
];

export const profileProjects = [
  {title:'DraftBoard',feedbacks:48,reactions:14,emoji:'📝',sentiment:'+72%'},
  {title:'OpenAPI Utils',feedbacks:112,reactions:29,emoji:'⚡',sentiment:'+88%'},
  {title:'TeamPulse',feedbacks:93,reactions:31,emoji:'💛',sentiment:'+79%'},
];

export const skillProfile = [
  {label:'Frontend (React)',pct:85,color:'var(--indigo)'},
  {label:'Backend / APIs',pct:70,color:'var(--mint)'},
  {label:'UI/UX design',pct:40,color:'var(--amber)'},
  {label:'DevOps / Cloud',pct:65,color:'var(--coral)'},
];

export const profileCats = [
  {l:'Suggestions',pct:45,c:'var(--indigo)'},
  {l:'Bug reports',pct:28,c:'var(--coral)'},
  {l:'Praise',pct:27,c:'var(--mint)'},
];

export const builderScores = [
  {l:'Feedback quality',v:9.2,c:'var(--mint)'},
  {l:'Response rate',v:8.8,c:'var(--indigo)'},
  {l:'Collab reliability',v:9.5,c:'var(--amber)'},
];

export const whatYouNeed = [
  {title:'UI/UX review',desc:'Expert eye on onboarding flow'},
  {title:'Backend help',desc:'API rate limiting advice'},
  {title:'Growth mentor',desc:'Distribution strategy'},
];

export const feedbackTypes = [
  {emoji:'🎨',label:'UI/UX',active:true},
  {emoji:'🐛',label:'Bug hunting',active:false},
  {emoji:'💡',label:'Feature ideas',active:false},
  {emoji:'📈',label:'Growth',active:false},
  {emoji:'🏗️',label:'Architecture',active:false},
  {emoji:'✍️',label:'Copy / content',active:false},
];

export const filterPills = ['All','Web Apps','Mobile','Design','APIs','AI / ML','Open Source'];

export const platformStats = [
  {label:'Projects',value:'2.4k',color:'var(--indigo)'},
  {label:'Feedbacks',value:'18k',color:'var(--mint)'},
  {label:'Builders',value:'847',color:'var(--coral)'},
  {label:'Collabs',value:'312',color:'var(--amber)'},
];