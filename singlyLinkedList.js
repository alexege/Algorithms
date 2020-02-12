class SLL {
    constructor(head = null) {
        this.head = head;
    }

    //Add Node to front
    addNodeToFront(val){
        //1. Create a new node
        const newNode = new Node(val);
        //2. Point newNode to current head
        newNode.next = this.head;
        //3. Update current head to reflect new node addition
        this.head = newNode;
    }

    //Add Node to back
    addNodeToBack(val){
        //1. Create a new node
        const newNode = new Node(val);
        //2. Establish a runner so we can keep track of our position. We need to find the end of the linked list.
        let runner = this.head;
        //3. Check to see if the linked list is empty. If so, add newNode where head is pointing to.
        if(runner === null){
            this.head = newNode;
        } else { //3.1 Otherwise find the last node

            //4. Update runner to move backwards while the previous node is not null. (Thus finding the last element in the list);
            while(runner.next != null){
                runner = runner.next;
            }
        }
        //5. Set the new node to the position the last node is pointing to. Effectively adding it to the back.
        runner.next = newNode;
    }

    //Remove Node from front
    removeNodeFromFront(){
        //1. Check to see if there's a head
        if(!this.head){
            return null;
        } else {
            //2. If there is a head, point the head to the next node to eliminate the first node.
            this.head = this.head.next;
        }
    }

    //Remove Node from back
    removeNodeFromBack(){
        //1. Create a runner to keep track of our position
        let runner = this.head;
        //2. While runner's next node exists, update position of the runner.
        while(runner.next){
            //3. If two nodes ahead is null, set next node's next to null to delete the last one.
            if(runner.next.next === null){
                runner.next = null;
                return sll;
            }
            //2.1 Updating the runner's position for each iteration of the loop.
            runner = runner.next;
        }

        //Assuming there are no nodes in the list, this.head will get set to null.
        this.head = null;
    }

    //Check to see if SLL contains a node
    contains(val){
        //1. Create a runner to keep track of position
        let runner = this.head;
        //2. While the runner is not null
        while (runner) {
          //3. If the value of the runner is the value we're looking for, return true
          if (runner.val === val){
            return true;
          }
          //4. Update the runner's position to continue down the linked list
          runner = runner.next;
        }
        //5. Assuming the while condition failed (no node in the list) we return false.
        return false;
    }

    //Find length of LL
    length(){
        let count = 0;
        let runner = this.head;
       
        while(runner){
            runner = runner.next;
            count++;
        }
        return count;
    }

    //Display all nodes in the SLL for debuggin purposes.
    display() {
        let runner = this.head;
        let vals = "";
    
        while (runner) {
          vals += `${runner.value}${runner.next ? ", " : ""}`;
          runner = runner.next;
        }
        console.log(vals);
        return vals;
      }
}

class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

const sll = new SLL();

sll.addNodeToFront('a');
sll.display();
sll.addNodeToFront('b');
sll.display();
sll.addNodeToFront('c');
sll.display();

sll.addNodeToBack('e');
sll.display();
sll.addNodeToBack('f');
sll.display();
sll.addNodeToBack('g');
sll.display();
console.log(sll.contains('f'));
console.log(sll.contains('z'));

// sll.removeNodeFromBack();


console.log("Length of SLL:", sll.length());