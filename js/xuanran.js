var obj = [{
        id: 1,
        src: '../images/lsz/top-02.png',
        //热度
        deidu: '9919',
        //商品名称
        mane: '恒洁Q9智能一体机',
        //商品编号
        uname: 'HCE900A01',
    },
    {
        id: 2,
        src: '../images/lsz/top1_1.png',
        //热度
        deidu: '1300',
        //商品名称
        mane: '恒洁Q8智能一体机',
        //商品编号
        uname: 'HCE800A01',
    },
    {
        id: 3,
        src: '../images/lsz/351x630hbt101005n-120.png',
        //热度
        deidu: '7110',
        //商品名称
        mane: '简奢系列浴室柜',
        //商品编号
        uname: 'HBT101005N-120',
    },
    {
        id: 4,
        src: '../images/lsz/pc-浴室柜.png',
        //热度
        deidu: '1572',
        //商品名称
        mane: '美式质朴系列浴室柜',
        //商品编号
        uname: 'BC6017-100',
    }, {
        id: 5,
        src: '../images/lsz/top-09.png',
        //热度
        deidu: '6024',
        //商品名称
        mane: '超旋风节水坐便器',
        //商品编号
        uname: 'HC0168DT',
    },
    {
        id: 6,
        src: '../images/lsz/hmf115-333a.png',
        //热度
        deidu: '77',
        //商品名称
        mane: '恒洁新翼T10大花洒',
        //商品编号
        uname: 'HMF115-333A',
    },
    {
        id: 7,
        src: '../images/lsz/pc-花洒-副本.png',
        //热度
        deidu: '255',
        //商品名称
        mane: '恒洁新翼T2大花洒',
        //商品编号
        uname: 'HMF112-333',
    },
    {
        id: 8,
        src: '../images/lsz/pc-马桶副本.png',
        //热度
        deidu: '195',
        //商品名称
        mane: '超薄水箱系列坐便器',
        //商品编号
        uname: 'HC0169PT',
    },
    {
        id: 9,
        src: '../images/lsz/61-pc副本.png',
        //热度
        deidu: '1190',
        //商品名称
        mane: '易至免等待淋浴房',
        //商品编号
        uname: '易至HLG61系列',
    },
    {
        id: 10,
        src: '../images/lsz/top-08.png',
        //热度
        deidu: '766',
        //商品名称
        mane: '恒洁HLB663系列按摩缸',
        //商品编号
        uname: 'HCE900A01',
    },
];
for (var i = 0; i < obj.length; i++) {
    var YSrc = obj[i].src;
    console.log(YSrc);
    var yyds = obj[i].id;
    console.log(yyds);
    //热度
    var deidu = obj[i].deidu;
    //商品名称
    var mane = obj[i].mane;
    //商品编号
    var uname = obj[i].uname;
    //图片
    var YConent = '<img class="img-responsive" src="' + YSrc + '" alt="' + mane + '">';
    $('.salable-image').eq(i).append(YConent);
    //a跳转
    $('.salable-item-info').eq(i).append('<a class="read-more" href="shwqcr.html?id=' + yyds + '" target="_blank ">了解详情</a>');
    //商品热度
    $('.rank-like').eq(i).append(" <small>" + deidu + "</small>&nbsp;赞");
    //编号
    $('.model').eq(i).append(uname);
    //名称
    $('.salable-item-info-mark ').eq(i).append("<h3>" + mane + "</h3>");
};
//点赞
$('.popularity').one('click', function() {
    var ter = parseFloat($(this).find('small').html());
    console.log(ter);
    $(this).find('small').html(ter + 1);
});
//返回顶部	
$(window).scroll(function() {
    var scroTop = $(window).scrollTop();
    if (scroTop > 100) {
        $('.footerf').fadeIn(500);
    } else {
        $('.footerf').fadeOut(500);
    }
});

//为返回顶部元素添加点击事件
$('.footerf').click(function() {
    //将当前窗口的内容区滚动高度改为0，即顶部
    $("html,body").animate({ scrollTop: 0 }, "fast");
});