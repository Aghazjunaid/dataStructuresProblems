//Note:-
// 1. while(current !== null) - jab tak current node exist karta hai
// Use - When:
// processing current node
// checking current.data
// printing current node
// searching current node

// 2. while(current.next !== null) - jab tak next node exist karta hai
// Use - When:
// you need access to next node
// deleting next node
// stopping before last node
// inserting before end

//3. “Jab bhi current.next access karoge, pehle ensure karo ki current.next null na ho.”

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

  // =========================
  // DELETE FIRST NODE
  // =========================
  deleteFirst(){
    let current = this.head;
    let next = current.next;
    this.head = next;
  }

  // =========================
  // DELETE LAST NODE
  // =========================
  deleteLast(){
    let current = this.head;
    let prev = null
    while(current.next != null){
      prev = current;
      current = current.next
    }
    
    prev.next = null
  }

  // =========================
  // DELETE BY VALUE
  // =========================
  deleteByValue(value){
   if(this.head.data == value){
     this.head = this.head.next;
     return
   } 
   
   let current = this.head;
   let prev = null;
   
   while(current.next != null){
     prev = current
     if(current.next.data == value){
       prev.next = current.next.next
       return
     }
     current = current.next
   } 
  }

  // =========================
  // SEARCH
  // =========================
  search(value){
    if(this.head.data == value){
      return true
    }
    
    let current = this.head;
    while(current != null){
      if(current.data == value){
        return true
      }
      current = current.next
    }
    
    return false;
  }

// =========================
  // LENGTH
  // =========================
  size(){
    if(this.head == null){
      return 0
    }
    
    let current = this.head;
    let count = 0;
    while(current != null){
      count++
      current = current.next
    }
    
    return count;
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
list.deleteFirst()
list.print()
list.deleteLast();
list.deleteByValue(30)
list.print()
console.log(list.search(20)) //true
console.log(list.size()) //5
