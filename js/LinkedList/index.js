//Note:-
// 1. while(current !== null) - jab tak current node exist karta hai
// 2. while(current.next !== null) - jab tak next node exist karta hai

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }
  
  // =========================
  // INSERT AT END
  // =========================
  append(data){
    let node = new Node(data);
    
    if(this.head == null){
      this.head = node;
      return
    } 
    
    let current = this.head
    while(current.next != null){
      current = current.next;
    }
    
    current.next = node
  }
  
  // =========================
  // INSERT AT BEGINNING
  // =========================
  prepend(data){
    let node = new Node(data);
    
    if(this.head == null){
      this.head = node;
      return
    } 
    
    node.next = this.head
    this.head = node;
  }
  
   // =========================
  // INSERT AT SPECIFIC INDEX
  // =========================
  insertAt(data,index){
    let node = new Node(data)
    
    if(index == 0){
      node.next = this.head;
      this.head = node;
      return;
    }
    
    let current = this.head;
    let prev = null;
    let count = 0;
    
    while(current != null && count < index){
      prev = current;
      current = current.next;
      count++
    }
    
    prev.next = node;
    node.next = current
  }
  
  print(){
    
    let current = this.head;
    while(current != null){
      console.log(current.data)
      current = current.next
    }
  }
  
}


let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(1)
list.insertAt(25,3)
list.print()
