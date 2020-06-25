var config = {
    style: 'mapbox://styles/jiaqishi187/ckbp5o8800bd51iqfvnw3wcm2',
    accessToken: 'pk.eyJ1IjoiamlhcWlzaGkxODciLCJhIjoiY2thdnI5cjRrMGh1bjJ6a3kwY2l2YWM0aiJ9.BOGjg2QBv1lFFcg4e6RYKA',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'l',
            title: '出生',
            image: './timg.jpg',
            description: '屈原，约公元前340出生于楚国丹阳秭归（今湖北宜昌）。芈姓，屈氏，名平，字原；又自云名正则，字灵均。楚武王熊通之子屈瑕的后代。',
            location: {
                center: [111.293, 30.747],
                zoom: 8.6,
                pitch: 0.00,
                bearing: 0.00
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
                center: [111.649,33.115],
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
                center: [110.599823,27.913453],
                zoom: 11.15,
                pitch: 60.00,
                bearing: -16.80
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
