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
            //image: './timg.jpg',
            description: '2017年底，黄浦江从杨浦大桥至徐浦大桥45公里岸线的公共空间贯通开放。其中，黄浦滨江8.3公里率先于2017年7月全面贯通。从上海景点的地标外滩沿着黄浦江往南，一直穿过卢浦大桥下方，这8.3公里原本坐落着许多厂房和码头，是一条生产岸线。如今，断点续接，滨江空间重新规划，这段宝贵的亲水岸线将成为人们未来活动和休闲的去处。为响应区委深入开展滨江党建的号召，2018年起，五里桥街道在滨江五里段沿线推出了世博会博物馆、远望一号测量船、紫荆居民区三会苑等12个社区党校党性教育现场教学点。在这短短近2公里长的滨江岸线沿线上，形成一条飘扬在黄浦滨江的“红色彩带”，成为社区党员群众开展党性教育的又一生动课堂。此后，街道又对现场教学点进行了重新梳理，并以“民族振兴”“国家富强”“人民幸福”三条主线，依托信息化手段，将导览和党性教育内容融入微信公众号。党员、群众只需添加“五里益空间”微信，点击“情景党课”栏目，就可在游览滨江的同时，全面了解教学点的详细知识，接受一次党性教育。下面就为大家简单讲述这12个教学点的故事。',
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
            title: '流放汉北',
            image: '',
            description: '前314年，屈原因上官大夫之谗而见疏，被罢黜左徒之官，任三闾大夫之职。随后，屈原流放汉北。公元前304年，屈原因其政见（抗秦派）再度流放汉北（汉江以上，今河南南阳西峡、淅川一带）。',
            location: {
                center: [121.48872,31.19794],
                zoom: 8,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'quyuan',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '3',
            title: '放逐江南',
            image: '',
            description: '公元前299年，曲原此时已从汉北的流放地返回。楚怀王轻信秦国， 欲入秦，屈原力劝怀王不要赴会，说：“秦，虎狼之国，不可信，不如无行。怀王不听，入秦随即成人质。3年后，死于秦国。秦、楚绝交。屈原被免去三闾大夫之职，再次流放，放逐江南。他从郢都出发，先到鄂渚，然后入洞庭。最后在溆浦（今湖南怀化市溆浦县）住下来。 “入溆浦余值佃兮，迷不知吾之所如” ',
            location: {
                center: [ 121.48872,31.19794],
                zoom: 18.48,
                pitch: 60.00,
                bearing: -7.10
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            title: '自投汨罗',
            image: './4.jpg',
            description: '公元前278年，顷襄王二十一年，秦将白起攻陷郢都时，顷襄王带领残兵 败将退保陈城。屈原沿长江顺流而下东逃至鄂渚。后又辗转来到湘水支流汩罗江一带。在极度苦闷、完全绝望的心情下，屈原于农历五月五日投汨罗江自尽，享年62岁。',
            location: {
                center: [113.183935,28.79475],
                zoom: 9,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            title: '最后的最后',
            image: './rice-dumpling-1440871_640.jpg',
            description: '屈原老先生虽离我们有千百年之远，但世世代代的人们仍通过各种方式纪念怀思，粽子便是最常见的一种～ 文字来源：百度百科-屈原词条；图片来源：百度百科-屈原词条；制作类似项目欢迎查看Mapbox github网站。',
            location: {
                center: [110.183935,28.79475],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
