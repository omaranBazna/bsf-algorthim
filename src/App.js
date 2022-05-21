
import './App.css';

function App() {
  class Node {
    constructor(val,name){
      this.val=val;
      this.name=name;
      this.left=null;
      this.right=null;
    }
   }
   
   
   let a=document.getElementById("a");
   let b=document.getElementById("b");
   let c=document.getElementById("c");
   let d=document.getElementById("d");
   let e=document.getElementById("e");
   let f=document.getElementById("f");
   let g=document.getElementById("g");
   let queue=document.getElementById("queue");
   let array=document.getElementById("array");
   
   let aNode=new Node(a,"a");
   let bNode=new Node(b,"b");
   let cNode=new Node(c,"c");
   let dNode=new Node(d,"d");
   let eNode=new Node(e,"e");
   let fNode=new Node(f,"f");
   let gNode=new Node(g,"g");
   aNode.left=bNode;
   aNode.right=cNode;
   bNode.left=dNode;
   bNode.right=eNode;
   cNode.left=fNode;
   cNode.right=gNode;
   
   setInterval(Next, 1000);
   function refresh(){
     a.style.backgroundColor="white";
       b.style.backgroundColor="white"
       c.style.backgroundColor="white"
       d.style.backgroundColor="white"
       e.style.backgroundColor="white"
       f.style.backgroundColor="white"
      g.style.backgroundColor="white"
   }
   function drawQueue(){
     let arr=queueO;
     queue.innerHTML=""
     for(let i=0;i <arr.length;i++){
       queue.innerHTML +=`<div>${arr[i].name}</div>`
     }
   }
   function drawArray(){
     let arr=arrayO;
     array.innerHTML=""
     for(let i of arr){
       array.innerHTML +=`<div>${i.name}</div>`
     }
   }
   function select(el){
       refresh();
       el.style.backgroundColor="yellow"
   }
   let step=0;
   let item=a;
   let itemN="a"
   let queueO=[]
   let arrayO=[]
   queueO.push(aNode)
   select(queueO[0].val)
   drawQueue()
   
   function Next(){
   let last=queueO.shift()
   
   arrayO.push(last)
   if(last){
    
   
    if (last.left){
   queueO.push(last.left);
   }
     if(last.right){
      queueO.push(last.right);
    }
   
   drawQueue();
   drawArray();
   if(queueO[0]){
   select(queueO[0].val)
   }
   
   
   }
     
   }
   
   
   
   
   


  return (
    <div className="App">
     



     <h1>Bredth-Search-First</h1>
<h2>Using Binary Trees</h2>
  <div class="mainContainer">
  <div id="a">a</div>
   <div class="arrows1">
    <div id="arrowAB"></div>
    <div id="arrowAE"></div>
  </div>
  <div class="row1">
    <div id="b">b</div>
    <div class="empty"></div>
    <div id="c">c</div>
  </div>
  <div class="arrows1">
    <div id="arrowAB"></div>
    <div id="arrowAE"></div>
    <div class="empty2"></div>
    <div id="arrowAB"></div>
    <div id="arrowAE"></div>
  </div>
  <div class="row2">
    <div id="d">d</div>
    <div id="e">e</div>
    <div id="f">f</div>
    <div id="g">g</div>
  </div>
  <div class="row3">
    <div >
   <div id="queue">
   
   </div>
    
      <h1>Memory Queue</h1>
    </div>
    <div >
     <div id="array">
      </div>

      <h1>Select Array</h1>
   </div>
    <div>
</div>
    </div>
</div>


    </div>
  );
}

export default App;
