let myImage=document.querySelector('img');
myImage.onclick=function(){
  let imgSrc=myImage.getAttribute('src');
  if(imgSrc=='images/firefox-icon.png'){
      myImage.setAttribute('src','images/firefox2.png');
  }else{
      myImage.setAttribute('src','images/firefox-icon.png');
  }

};

let myButton=document.querySelector('button');
myButton.addEventListener('click',setUserName);
function setUserName(){

    let name=prompt('请输入姓名');
    if(!name){
        setUserName();
    }else{
        localStorage.setItem('name',name);
        document.querySelector('h1').textContent='欢迎您！'+name;
    }
}

window.addEventListener('load',()=>{
    let name=localStorage.getItem('name');

    if(name!=''){
        document.querySelector('h1').textContent='欢迎您！'+ name;
    }
});



