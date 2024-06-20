let btn=document.getElementById("btn");
let input=document.getElementById("inp");
let boxes=document.querySelectorAll(".box");
let drag=null;
btn.onclick=function(){
    if(input.value!==''){
        boxes[0].innerHTML+="<p class='item' draggable='true'>"+input.value+"</p>"//هنا عملنا دراجبل علشان نفعل خاصية السحب وعلامة زائد علشان يضيف كل شوية زي ابيند
        input.value='';
    }
    dragitem();
}
function dragitem() {
    let items=document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){//اول ما تبدي السحب
            drag=item;
            item.style.opacity='0.5'

        })
        item.addEventListener('dragend',function(){//هنا اما ترجعوا مكانوا تاني 
            drag=null;
            item.style.opacity='1'


        })
        boxes.forEach(box=>{
            box.addEventListener('dragover',function(e){//طول ما الموس محطوط علي الصندوق وانت بتعمل سحب
                e.preventDefault()
                this.style.background='#090';
                this.style.color='#fff';



            })
            box.addEventListener('dragleave',function(){//اول ما تسيب البوكس عكس الي دراج اوفر
                this.style.background='#fff';
                this.style.color='#000';
                


            })
            box.addEventListener('drop',function(){//هنا اما يقع في صندوق
                this.append(drag);
                this.style.background='#fff';
                this.style.color='#000';
                
                
                


            })
        })

    })
}