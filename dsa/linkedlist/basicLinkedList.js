class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class singlyLinkedList {
    constructor(){
        this.head=null;
        this.length=0;
    }
}

//insert at head

let newNode= new Node(data);

newNode.next=this.head;
this.head=newNode;
this.length ++;

const LL=new singlyLinkedList ();
LL.insertAtHead(10);
LL.insertAtHead(20);

function printLinkedList(){
    let current=this.head;
    while(current != null){
        console.log(current)
        current=current.next;
    }
}

LL.printLinkedList();