var values = [1,2,2,3];

//console.log([...new Set(values)]);

let func = function(){
    {
        (function(){
            let l = 'let';
            var v = 'var';
        })();

        
    }
    
    console.log(v);
    console.log(l);
}
//console.log(func());


//console.log(findSuitableSeats('3A,2B,2K',3));




//console.log(rotateArray([1,2,3]));

function prepareBinaryTree(N){
    class Node{
        constructor(data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    class Tree{
        constructor(){
            this.root = null;
        }
        insertLeft(data){
            const newLeft = new Node(data);
            
        }
        insertRight(data){

        }
        insert(data,root,side){
            let newNode  = new Node(data);
            if(this.root  === null){
                this.root = newNode;
            } else{
                this.insertNode(this.root,newNode,side,root)
            }
        }
            insertNode(node,newNode,side,root){
                // if(newNode.data < node.data){
                if(side == 'l'){
                    if(node.left  === null){
                        node.left = newNode;
                    } else{
                        this.insertNode(node.left,newNode);
                    }
                } else {
                    if(node.right === null){
                        node.right = newNode;
                    } else {
                        this.insertNode(node.right,newNode);
                    }
                }
            }
            inorder(node)
        { 
            if(node !== null) 
            { 
                this.inorder(node.left); 
                console.log(node.data); 
                this.inorder(node.right); 
            } 
        }
        getRootNode(){
            return this.root;
        } 
        }
let tree = new Tree();
tree.insert(1);
tree.insert(2,1,'l');
tree.insert(9,1,'r');
tree.insert(65,2,'l');
tree.insert(6,2,'r');
tree.insert(9,1,'l');
tree.insert(10,9,'l');
tree.insert(13,9,'r');

let root = tree.getRootNode();
tree.inorder(root);
}
//prepareBinaryTree();

