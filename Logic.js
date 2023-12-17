
let Inputvalue=document.getElementById('input22');
let Description=document.querySelector('.dec');
let Submit=document.querySelector('.smt');
let Itemcontainer=document.querySelector('.boxItemContainer');
let BtnClose=document.getElementsByClassName('closeitem');
 

 

let Submitbtnvalue=()=>{
     let input_data=Inputvalue.value;
     let decs_input=Description.value;
     
     

    //  inputvalue empty get after data 
     Inputvalue.value="";
     Description.value="";
// item container box 
if(input_data=="" || decs_input==""){
    alert("Input data Empty");
}else{

    Itemcontainer.innerHTML+=
    `
    <div class="itembox">
    <span class="item text11"id="text112">${input_data}</span>
    <span class="item decitem">${decs_input}</span>
    <span class="item closeitem">x</span>
</div>
    `

}
CloseFun();
 
 
 
}

let CloseFun=()=>{
    for(let i=0;i<BtnClose.length;i++){
        BtnClose[i].onclick=function(){
            let d12=this.parentElement;
            d12.style.display="none";
        }
    }
}



Submit.addEventListener('click',Submitbtnvalue);



 

  
 


 


 

 





