var listArr=[{
	id:1,
	img:"../images/list_img01.jpg",
	title:"卓新思创重装出发",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:2,
	img:"../images/list_img02.jpg",
	title:"小鸟掌学开通国外渠道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:3,
	img:"../images/list_img03.jpg",
	title:"卓新思创天气app上线",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:4,
	img:"../images/list_img04.jpg",
	title:"国外报道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:5,
	img:"../images/list_img04.jpg",
	title:"国外报道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:6,
	img:"../images/list_img03.jpg",
	title:"卓新思创天气app上线",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:7,
	img:"../images/list_img01.jpg",
	title:"卓新思创重装出发",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:8,
	img:"../images/list_img02.jpg",
	title:"小鸟掌学开通国外渠道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:9,
	img:"../images/list_img03.jpg",
	title:"卓新思创天气app上线",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:10,
	img:"../images/list_img04.jpg",
	title:"国外报道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:11,
	img:"../images/list_img04.jpg",
	title:"国外报道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:12,
	img:"../images/list_img03.jpg",
	title:"卓新思创天气app上线",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:13,
	img:"../images/list_img01.jpg",
	title:"卓新思创重装出发",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:14,
	img:"../images/list_img02.jpg",
	title:"小鸟掌学开通国外渠道",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
},{
	id:15,
	img:"../images/list_img03.jpg",
	title:"卓新思创天气app上线",
	content1:"2016-02-03",
	content2:"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台"
}]

console.log(listArr.length)

var oListContent=document.getElementById("articelist")
var oListMore=document.getElementById("listmore")
var oListNoMore=document.getElementById("listnomore")

var newListArr=[]

function moreFn(){
	var str="";
	var newList=listArr.splice(0,6)
	console.log(newList)
	newListArr=newListArr.concat(newList)
	console.log(newListArr)
	for(var i=0;i<newListArr.length;i++){
		str+='<div class="content_one" id="articelist">'+'<div class="imglist">'+'<img src='+newListArr[i].img+'/>'+
			'</div>'+'<div class="content_text">'+'<div>'+newListArr[i].title+'</div>'+'<div>'+newListArr[i].content1+'</div>'+'<p>'+newListArr[i].content2+'</p>'+'</div>'+'</div>'
	}
	oListContent.innerHTML=str
}


//图片没有换成没有更多得图片
moreFn()

oListMore.onclick=function(){
	moreFn()
	if(listArr.length==0){
		oListNoMore.src="../images/list_gomore_bg_nomore.jpg"
	}
}