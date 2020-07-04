var config = {
    //style: 'mapbox://styles/mapbox/satellite-streets-v11?optimize=true',
    accessToken: 'pk.eyJ1Ijoib21hcmNoZW4xIiwiYSI6ImNrYTY5dXM0NTA0cGwyd3Mwb2k3cTZweDUifQ.zQl5IoVzs7iwg8FNZMPLUQ',
       style: {
        "version": 8,
        "sources": {
            "raster-tiles": {
                "type": "raster",
                "tiles": ['http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=a7677ff5620ed13810c92d9ef7f528ea'],
                "tileSize": 256,
            }, 
            "cia-tiles": {
                "type": "raster",
                "tiles": ['http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=a7677ff5620ed13810c92d9ef7f528ea'],
                "tileSize": 256,
            }
        },
                       
        "layers": [{
            "id": "tdt-img-tiles",
            "type": "raster",
            "source": "raster-tiles",
            "minzoom": 0,
            "maxzoom": 19
        }]
     
    },




    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '[四史教育]五里桥街道滨江党性教育现场教学点',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'l',
            title: '概述',
            image: '',
            description: '随着“四史”教育的深入开展，五里桥街道社区党群服务中心梳理了原有社区党校滨江党性教育现场教学点相关资源素材，整理了线上导览线路，请各位观众跟随我们一起了解。',
            location: {
                center: [121.48080, 31.19562],
                zoom: 14.94,
                pitch: 60.00,
                bearing: -31.10
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            title: '中国船舶馆',
            image: './image/1.jpg',
            description: '江南造船厂是我国近代船舶工业发展的一个重要里程碑，是上海工人阶级的摇篮，也是我国现代造船工业发展的重要基地。因举办上海世博会的需要，造船基地迁往长兴岛。现如今在具有一百多年历史的江南造船厂的旧址上，建立了中国船舶馆，该展馆对江南造船厂原址的一个厂房进行了重新优化设计和改造，改造后的展馆呈长方形结构，增添了弧线构架，形似船的龙骨，突出船舶馆的企业形象；又形似龙的脊梁，借喻中国民族工业坚强的精神。',
            location: {
                center: [121.48871, 31.19794],
                zoom: 17.05,
                pitch: 60,
                bearing: 32.1
            },
            onChapterEnter: [
            /*    {
                    layer: 'quyuan',
                    opacity: 1
                }*/
            ],
            onChapterExit: []
        },
        {
            id: '3',
            title: '江南制造局翻译馆',
            image: './image/2.jpg',
            description: '在这里，走出了最早一批睁眼看世界的中国人,现今“元素周期表”中化学元素的中文译名也在这里诞生。徐寿采用音译的方法，取原文第一音节而造新字，凡金属元素一律加"金"傍，如将"Mg"译为"镁"，"Ca"译为钙。这一译法为我国化学界沿用至今，并被日本化学界借用。<br>  百年前，一个江南制造局翻译馆让我们开始睁眼看世界。百年后，在一带一路的倡议下，我们架起一座看不见的桥梁，把中国人的智慧和成果通过这座桥梁，为构建新型国家关系和人类命运共同体而尽一份力。',
            location: {
                center: [  121.48701, 31.19829 ],
                zoom: 17.09,
                pitch: 60.00,
                bearing: -41.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            title: '远望一号',
            image: './image/3.jpg',
            description: '  作为中国第一代科学测量船，远望一号被誉为中国航天功勋船。船头有毛泽东同志的手书，该船1977年下水，到退役，已安全航行2600多天、44万海里，航海里程几乎可以绕地球20圈，享有“海上科学城”的美誉，为国家和民族作出了巨大的贡献。2003年10月，该船携三艘远望号测控船横扫三大洋，成功“牵引”航天英雄杨利伟凯旋归来。',
            location: {
                center: [121.48477, 31.19625],
                zoom: 17.04,
                pitch: 60.00,
                bearing: 67.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            title: '打浦路隧道',
            image: './image/4.jpg',
            description: '作为黄浦江上的第一条越江隧道，也是新中国第一条水底公路隧道。隧道开工初期，我国国内处于一穷二白的年代，能够参照的只有当时苏联专家那乌莫夫的一本隧道书。甚至一些外国专家还预言：在上海修水底隧道“不可能”。专家和工程技术人员白手起家“撸起袖子加油干”，经过无数次的尝试和付出，终于将隧道建成，极大缩短了往来浦江两岸的通行时间。',
            location: {
                center: [121.47179,  31.19108],
                zoom: 15.13,
                pitch: 60,
                bearing: -60.43
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            title: '卢浦大桥',
            image: './image/5.jpg',
            description: '卢浦大桥是第四座横跨在黄浦江上的大桥，2003年建成，是当时世界上跨径最大的钢箱拱桥，完全采用焊接工艺连接而成，现场焊接焊缝总长度达4万多米，上海建工的焊工用“绣花”一般的手法“熔和”钢铁，使每两个硕大钢拱肋之间的对接焊缝错边偏差都小于1毫米。<br>它的设计师是中国工程院林元培院士，在此之前，他已成功在黄浦江上设计并建成了南浦、杨浦、徐浦三座斜拉桥，把中国的造桥技术带入了世界先进水平，面对卢浦大桥的设计，他义无反顾地超越历史，超越了过去，超越了自己。',
            location: {
                center: [ 121.47577, 31.19039 ],
                zoom: 16.42,
                pitch: 16.5,
                bearing: 51.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            title: '南园滨江绿地公园',
            image: './image/6.jpg',
            description: '南园滨江绿地公园是一座有着深厚历史背景的公园，该处1923年由旅沪闽南籍同乡会购用，习称南园，并于1927年开办了泉漳中学。当时的上海反帝组织、左联、社联、青年文艺联合会等革命团体经常就在此集会，南园也逐渐变成革命活动的重要据点。1929年中共江苏省第二次代表大会在这里举行，周恩来、陈云等，到此参加会议。2009年，南园开始扩建为南园滨江绿地，沿江眺望，就是浦东“一轴四馆”的世博园区。',
            location: {
                center: [ 121.47126, 31.19377 ],
                zoom: 15.99,
                pitch: 7,
                bearing: -24.0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            title: '世博会博物馆',
            image: './image/7.jpg',
            description: '世博会博物馆是迄今世界范围内唯一一个以世博会为主题的博物馆，，位于上海市中心黄浦江畔原上海世博会浦西园区，占地4公顷，总建筑面积为46550平方米，共有8个常展厅，分别展示世博会历史、成功、精彩、难忘的上海世博会，以及2010年之后的不断延续的未来世博会的精彩内容等。它是世博会过去的延续和未来的开篇。',
            location: {
                center: [121.47872, 31.19683  ],
                zoom: 17.03,
                pitch: 60,
                bearing: -99.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            title: '国际乒联博物馆和中国乒乓球博物馆（简称“乒博馆”）',
            image: './image/8.jpg',
            description: '国际乒联博物馆于2003年在瑞士洛桑成立，2013年5月国际乒联正式宣布将位于瑞士洛桑的国际乒联博物馆迁往中国上海，将国际乒联博物馆和原定计划建设的中国乒乓球博物馆进行“两馆合一建设”。新落成的“乒博馆”位于上海市黄浦区世博园地块，占地面积5000平方米，总建筑面积10389平方米。馆内设置陈列展览区、公众服务区、体验互动区、藏品技术区、教育研究区等区域，共有藏品12000余件，并配有先进的VR互动体验区、多媒体互动区和3D影院。是第一个引入中国的国际级体育类专业博物馆和国际体育组织所属博物馆在异地建设发展的项目。',
            location: {
                center: [ 121.47717, 31.19447 ],
                zoom: 17,
                pitch: 58.5,
                bearing: -12
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            title: '社区文化活动中心',
            image: './image/9.jpg',
            description: '五里桥社区文化活动中心位于龙华东路600号，建筑面积5530㎡，共四层，其中地下一层，地上三层，于2015年9月正式启用。每年举办各种活动400余场，每年约30余万人次参与中心组织的各种文体活动。先后被评为上海市先进社会组织”、“上海市平安示范单位”、“上海市巾帼文明岗”、“黄浦区青年文明号”、 “最受欢迎的社区文化活动中心”等荣誉称号。',
            location: {
                center: [ 121.47168,  31.19578  ],
                zoom: 16.58,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            title: '三会苑',
            image: '',
            description: ' 上世纪90年代末，五里桥街道率先在全市探索“三会”制度：即在基层党组织领导下，对居民们普遍关心的热点、难点问题，由居委会主持召集听证会、协调会和评议会，进行协商、讨论和监督，有效提升了基层民主自治水平。此后，运用该制度最为成熟的紫荆居民区设立了“三会苑”，并将其作为每次听证会、协调会和评议会的场所，使“三会”制度有了不断的传承与发展。它的实施，强化了党组织在社区治理中的领导核心，培育了多方参与的协商平台，规范了民主协商的议事程序，建立了综合透明的评价体系，实现了自上而下与自下而上社区协商的有机结合。2017年，“三会”制度被写入《上海市居民委员会工作条例》。2018年，五里桥街道“三会”制度获凭上海改革开放标志性首创案例。',
            location: {
                center: [ 121.47405,31.19525 ],
                zoom: 16.58,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            title: '后记',
            image: '',
            description: ' 人民对美好生活的向往就是我们的奋斗目标。五里桥街道各级党组织及广大党员将从此次“四史”学习中汲取力量、智慧和立场，要把人民的主体地位、发展要求、作用发挥贯穿于城市工作的全过程和各领域，把“人民城市人民建，人民城市为人民”重要理念体现在人民的共同实践和切身感受中。',
            location: {
                center: [121.47745, 31.20306 ],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
