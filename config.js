var config = {
    style: 'mapbox://styles/omarchen1/cka6amkwo0dmm1imoom0ed0l6',
    accessToken: 'pk.eyJ1Ijoib21hcmNoZW4xIiwiYSI6ImNrYTY5dXM0NTA0cGwyd3Mwb2k3cTZweDUifQ.zQl5IoVzs7iwg8FNZMPLUQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '五里桥滨江党性教育现场教学点',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'l',
            title: '概述',
            image: '',
            description: '  2017年底，黄浦江从杨浦大桥至徐浦大桥45公里岸线的公共空间贯通开放。其中，黄浦滨江8.3公里率先于2017年7月全面贯通。<br>  为响应区委深入开展滨江党建的号召，2018年起，五里桥街道在滨江五里段沿线推出了世博会博物馆、远望一号测量船、紫荆居民区三会苑等12个社区党校党性教育现场教学点。在这短短近2公里长的滨江岸线沿线上，形成一条飘扬在黄浦滨江的“红色彩带”，成为社区党员群众开展党性教育的又一生动课堂。',
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
            image: './1.jpg',
            description: '江南造船厂是我国近代船舶工业发展的一个重要里程碑，是上海工人阶级的摇篮，也是我国现代造船工业发展的重要基地。因举办上海世博会的需要，造船基地迁往长兴岛。现如今在具有一百多年历史的江南造船厂的旧址上，建立了中国船舶馆，该展馆对江南造船厂原址的一个厂房进行了重新优化设计和改造，改造后的展馆呈长方形结构，增添了弧线构架，形似船的龙骨，突出船舶馆的企业形象；又形似龙的脊梁，借喻中国民族工业坚强的精神。',
            location: {
                center: [121.48871, 31.19794],
                zoom: 18.16,
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
            image: './2.jpg',
            description: '在这里，走出了最早一批睁眼看世界的中国人,现今“元素周期表”中化学元素的中文译名也在这里诞生。徐寿采用音译的方法，取原文第一音节而造新字，凡金属元素一律加"金"傍，如将"Mg"译为"镁"，"Ca"译为钙。这一译法为我国化学界沿用至今，并被日本化学界借用。<br>  百年前，一个江南制造局翻译馆让我们开始睁眼看世界。百年后，在一带一路的倡议下，我们架起一座看不见的桥梁，把中国人的智慧和成果通过这座桥梁，为构建新型国家关系和人类命运共同体而尽一份力。',
            location: {
                center: [  121.48701, 31.19829 ],
                zoom: 18.9,
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
                zoom: 17.84,
                pitch: 60.00,
                bearing: 67.20
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            title: '打浦路隧道',
            image: './4.jpg',
            description: '作为黄浦江上的第一条越江隧道，也是新中国第一条水底公路隧道。隧道开工初期，我国国内处于一穷二白的年代，能够参照的只有当时苏联专家那乌莫夫的一本隧道书。甚至一些外国专家还预言：在上海修水底隧道“不可能”。专家和工程技术人员白手起家“撸起袖子加油干”，经过无数次的尝试和付出，终于将隧道建成，极大缩短了往来浦江两岸的通行时间。',
            location: {
                center: [121.47179,  31.19108],
                zoom: 15.13,
                pitch: 60,
                bearing: -60.43
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
