class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
};

class Stack {
    constructor(){
      this.top = null;
      this.size = 0;
    }

    push(elem){
      let node = new Node(elem);
      node.next = this.top;
      this.top = node;
      this.size += 1;
    }

    read(){
        if(this.size === 0){
          return "pilha vazia";
        }

        
        let s = ' ';
        let p = this.top;
        while(p !== null){
          s += p.data + ' ';
          p = p.next;
        }
        return s;
    }
};

let pilha = new Stack();
pilha.push(2)
pilha.push(3)

console.log('Lendo os elementos na pilha '+ pilha.read())

if(pilha !== null){
  console.log("Elemento no topo da pilha "+ pilha.top.data)
}else{
  console.log("A pilha continua vazia.")
}
console.log("Tamanho da pilha "+ pilha.size)