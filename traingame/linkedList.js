class LinkedListNode{
    value
    prev
    next

    constructor(value, prev, next) {
        this.value = value
        this.prev = prev
        this.next = next
    }

    getNext(){
        return this.next
    }

    getPrev(){
        return this.prev
    }

    setNext(next){
        this.next = next
    }

    setPrev(prev){
        this.prev = prev
    }
}


const a = new LinkedListNode('a', null)
const b = new LinkedListNode('b', a)
a.setNext(b)
const c = new LinkedListNode('c', b)
b.setNext(c)
const d = new LinkedListNode('d', c)
c.setNext(d)

class LinkedList{
    list

    constructor(list) {
        this.list = list
    }

    deleteAt(n){

    }

    get(i){
        let curr = this.list
        for(let j = 0; j < i; j++){
            curr = curr.getNext()
            if(curr === undefined){
                return undefined
            }
        }
        return curr
    }
}

const l = new LinkedList(a)

console.log(l.get(0))