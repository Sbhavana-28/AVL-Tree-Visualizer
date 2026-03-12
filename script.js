class Node{
constructor(value){
this.value=value
this.left=null
this.right=null
this.height=1
}
}

let root=null

function height(n){
return n? n.height:0
}

function balance(n){
return n? height(n.left)-height(n.right):0
}

function updateHeight(n){
n.height=1+Math.max(height(n.left),height(n.right))
}

function rightRotate(y){

let x=y.left
let t2=x.right

x.right=y
y.left=t2

updateHeight(y)
updateHeight(x)

return x
}

function leftRotate(x){

let y=x.right
let t2=y.left

y.left=x
x.right=t2

updateHeight(x)
updateHeight(y)

return y
}

function insert(node,value){

if(!node) return new Node(value)

if(value<node.value)
node.left=insert(node.left,value)

else if(value>node.value)
node.right=insert(node.right,value)

else
return node

updateHeight(node)

let bf=balance(node)

if(bf>1 && value<node.left.value)
return rightRotate(node)

if(bf<-1 && value>node.right.value)
return leftRotate(node)

if(bf>1 && value>node.left.value){
node.left=leftRotate(node.left)
return rightRotate(node)
}

if(bf<-1 && value<node.right.value){
node.right=rightRotate(node.right)
return leftRotate(node)
}

return node
}

function minValue(node){
while(node.left)
node=node.left
return node
}

function deleteNode(node,value){

if(!node) return node

if(value<node.value)
node.left=deleteNode(node.left,value)

else if(value>node.value)
node.right=deleteNode(node.right,value)

else{

if(!node.left || !node.right){

let temp=node.left?node.left:node.right

if(!temp)
node=null
else
node=temp
}
else{

let temp=minValue(node.right)

node.value=temp.value

node.right=deleteNode(node.right,temp.value)
}
}

if(!node) return node

updateHeight(node)

let bf=balance(node)

if(bf>1 && balance(node.left)>=0)
return rightRotate(node)

if(bf>1 && balance(node.left)<0){
node.left=leftRotate(node.left)
return rightRotate(node)
}

if(bf<-1 && balance(node.right)<=0)
return leftRotate(node)

if(bf<-1 && balance(node.right)>0){
node.right=rightRotate(node.right)
return leftRotate(node)
}

return node
}

function insertValue(){

let val=parseInt(document.getElementById("value").value)

if(isNaN(val)) return

root=insert(root,val)

drawTree()

document.getElementById("value").value=""
}

function deleteValue(){

let val=parseInt(document.getElementById("value").value)

if(isNaN(val)) return

root=deleteNode(root,val)

drawTree()

document.getElementById("value").value=""
}

function createNode(node){

if(!node) return null

let container=document.createElement("div")
container.className="node-container"

let nodeDiv=document.createElement("div")
nodeDiv.className="node"
nodeDiv.innerText=node.value

let bf=document.createElement("div")
bf.className="balance"
bf.innerText="BF: "+balance(node)

container.appendChild(nodeDiv)
container.appendChild(bf)

let children=document.createElement("div")
children.className="children"

let left=createNode(node.left)
let right=createNode(node.right)

if(left) children.appendChild(left)
if(right) children.appendChild(right)

container.appendChild(children)

return container
}

function drawTree(){

let tree=document.getElementById("tree")

tree.innerHTML=""

if(root)
tree.appendChild(createNode(root))
}