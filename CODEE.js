'use strict';

/*let hasLiscence = false
const passTest = true

if (passTest) hasLiscence = true;
if (hasLiscence) {
    console.log('I can drive');
}*/

/*function logger() {
    console.log('Alvitone')
}
logger();
logger();

function fruit(apples, banana) {
    console.log(apples, banana);
    const juice = `juice with ${apples} apples and ${banana} banana`;
    return juice;
}

const j = fruit(120, 46);
console.log(j)

function age(birthyear) {
    const cage = 2024 - birthyear;
    console.log(cage)
}

const calage = birthyear => 2024 - birthyear
const age2 = calage(1987)
console.log(age2)

age(2003)

const yearUntilRetire = birthyear => {
    const age3 = 2024 - birthyear;
    const retire = 65 - age3;
    return retire;
}

console.log(yearUntilRetire(2003));*/

/*function iseven(n) {
    if (n % 2 === 0) {
        console.log(`the number ${n} is even`)
    }
}

iseven(100)
*/
/*function calavg(a, b, c, team) {
    console.log(`the average of ${team} is ${(a + b + c) / 3}`);
}

calavg(44, 23, 71, 'Dolphins')
calavg(85, 54, 41, 'koalas')*/

/*let list = [1, 2, 3, 4, 5, 6]
console.log(list)
console.log(list[0])
console.log(list[2])
console.log(list.length)
console.log(list[list.length - 1])

list[2] = 'hello'
console.log(list)

let birthyears = [2000, 2003, 2005, 2007, 2009, 2011, 1999]

const cal = function (birthyear) {
    return 2024 - birthyear
}
console.log(cal(birthyears[5]))
console.log(cal(birthyears[4]))
console.log(cal(birthyears[3]))
console.log(cal(birthyears[2]))
console.log(cal(birthyears[1]))

birthyears.push(2018)
console.log(birthyears)
birthyears.pop()
console.log(birthyears)

birthyears.shift()
console.log(birthyears)

console.log(birthyears.indexOf(2003))

console.log(birthyears.includes(2001))*/

/*const alvi = {
    firstname: 'Alvitone',
    lastname: 'A',
    age: 2024 - 2003,

}
console.log(alvi.age)
const choice = prompt('what do want to choose');
console.log(choice)
console.log(alvi[choice])

if (alvi[choice]) {
    console.log(alvi[choice])
} else {
    console.log('wrong request')
}

function calbiuy*/

/*const gros = ['tea', 'coffee', 'bread', 'cookies', 'softdrink', 'butter', 'milk']
function find(gros, iteam) {
    if (iteam in gros) {
        return 'found it'
    } else {
        return 'not found'
    }


}
console.log(find(gros, 'milk'));*/

//Array data structes
/*class mylist {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length = this.length + 1

    }
    get(item) {
        console.log(this.data[item])
    }
    pop() {
        let last = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length = this.length - 1
        console.log(last)
    }
    deleteByIndex(index) {
        delete this.data[index]
        for (let i = index; i <= this.length - 1; i++) {
            this.data[i] = this.data[i + 1]

        }
        this.length--

    }
}
let list = new mylist();
list.push('a')
list.push('l')
list.push('v')
list.push('i')

list.get(2)
list.pop()

list.push('a')
list.push('l')
list.push('v')
list.push('i')
console.log(list)
list.deleteByIndex(4)
console.log(list)*/

/*function rev(string) {
    let old = string
    let newstring = string.split('').reverse().join('')
    if (old === newstring) {
        return 'this a palindrom'
    } else {
        return 'not a palindrom'
    }
}
console.log(rev('racecar'))

function revANumber(number) {
    let string = number + ''
    console.log(string.split('').reverse().join(''))

}
revANumber(500245)



function capital(string) {
    return string.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capital('Hello world I am alvitone'))

function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}
fizzbuzz(100)*/

/*function maxProfit(list) {
    let buy = 0
    let profit = 0
    for (let sell = 1; sell < list.length; sell++) {
        let temp = list[sell] - list[buy]
        profit = Math.max(temp, profit)

        if (list[sell] < list[buy]) {
            buy = sell
        }
    }

    console.log(profit)

}
maxProfit([7, 1, 5, 3, 6, 4])*/

/*function twosum(list, t) {
    let hashmap = {}
    for (let i = 0; i < list.length; i++) {
        let diff = t - list[i]
        if (diff in hashmap) {
            return [hashmap[diff], i]

        }
        hashmap[list[i]] = i
    }


}*/
//console.log(twosum([1, 2, 3, 4, 5], 9))

//Linked List - single
/*class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {


        let n = new node(value)
        if (!this.head) {
            this.head = n
            this.tail = n
        } else {
            this.tail.next = n
            this.tail = n
            this.length++
        }

    }
    pop() {
        let current = this.head
        while (current.next != this.tail) {
            current = current.next
        }
        this.tail = current
        current.next = null
        this.length--
    }
    unshift(value) {
        const n = new node(value)
        if (!this.head) {
            this.head = n
            this.tail = n
        } else {
            n.next = this.head
            this.head = n
            this.length++

        }


    }
    shift() {
        let nextnode = this.head.next
        this.head.next = null
        this.head = nextnode
        this.length--
    }
    getindex(index) {
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return current
            }
            current = current.next
        }
    }
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value)
        }
        if (index === this.length) {
            return this.push(value)
        }
        let prev = this.getindex(index - 1)
        let after = prev.next
        let newnode = new node(value)
        prev.next = newnode
        newnode.next = after
        this.length++



    }

}
const myLinkedList = new LinkedList(1)
console.log(myLinkedList)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(6)

myLinkedList.insert(1, 20)

console.log(myLinkedList.head.next.value)*/

//double linkedlist
/*class node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoubleLinkedList {
    constructor(value) {
        const n = new node(value)
        this.head = n
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const n = new node(value)
        this.tail.next = n
        n.prev = this.tail
        this.tail = n
        this.length++


    }
    pop() {
        let n = this.tail
        let p = n.prev
        p.next = null
        n.prev = null
        this.tail = p
        this.length--
    }
    unshift(value) {
        let n = new node(value)
        n.next = this.head
        this.head.prev = n
        this.head = n
        this.length++
    }

}
let mydoublelinkedlist = new DoubleLinkedList(1)
mydoublelinkedlist.push(20)
mydoublelinkedlist.unshift(100)
console.log(mydoublelinkedlist.head.value)

//reverse a linked list
class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Linkedlist{
    constructor(value){
        let n = new node(value)
        this.head = n
        this.tail = n
        this.lenght = 1
    }
    push(value){
        let n = new node(value)
        let current = this.tail
        current.next = n
        this.tail = n
        this.lenght++
    }
    print(){
        let current = this.head
        let result = ''
        while(current){
            result+=`${current.value}->`
            current = current.next

        }
        result+='null'
        console.log(result)

    }
    rev(){
        let p = null
        let current  = this.head
        this.tail = current
        while(current){
            let newnode = current.next
            current.next = p
            p = current
            current = newnode

        }
        this.head = p
    }
}
let mylist = new Linkedlist(10)
mylist.push(20)
mylist.push(30)
mylist.push(40)
mylist.push(50)
mylist.print()
mylist.rev()
mylist.print()*/

/*// two sum
function twosum(list,target){
    let hashmap={}
    for(let i = 0 ; i<list.length ; i++){
        let diff = target - list[i]
        if(diff in hashmap){
            return [hashmap[diff],i]
        }
        hashmap[list[i]] = i
    }
}
console.log(twosum([1,2,3,4,5],9))*/


//contains duplicate
/*function containsDuplcate(list){
    let contain = new Set()
    for(let i = 0 ; i<list.length;i++){
        if(contain.has(list[i])){
            return true
        }
        contain.add(list[i])
    }
    return false
}
console.log(containsDuplcate([11,1,2,2,11]))*/

//container with most water
/*function mostwater(list){
    let left = 0
    let right = list.length-1
    let maxArea = 0
    while(left<right){
        let area = Math.max((right-left)*(Math.min(list[left],list[right])))
        maxArea = Math.max(maxArea,area)
        if(left<=right){
            left++
        }else{
            right--
        }
    }
    console.log(maxArea)
}
mostwater([1,8,6,2,5,4,8,3,7])*/

//product of the array except itself
/*function pro(list){
    let list2=[]
    let total=1
    for(let i=0;i<list.length;i++){
        for(let j = 0 ;j<i;j++){
            total = total  * list[j]
        }
        for(let k = i+1 ; k<list.length;k++){
            total  = total * list[k]

    }
    list2.push(total)
    total = 1
    }
    console.log(list2)


    }
pro([1,2,3,4])*/

//number of 1 bit
/*function numberOfOnebit(n){
    let count = 0
    while(n){
        count += n&1
        n = n>>1
    }
    return count
}
console.log(numberOfOnebit(11))*/

/*function valid(string){
    string = string.toLowerCase();

    let clean = '';
    for(let i of string){
        if(/[a-z0-9]/.test(i)){
            clean += i;
        }
    }
    let r = clean.split('').reverse().join('')
    return clean === r
}
let s = "A man, a plan, a canal: Panama"
console.log(valid(s))*/

/*class node {
    constructor(value) {
        this.value = value
        this.next = null

    }

}
class LinkedList {
    constructor(value) {
        let newnode = new node(value)
        this.head = newnode
        this.tail = newnode
        this.length = 1
    }
    push(value) {
        let newnode = new node(value)
        this.tail.next = newnode
        this.tail = newnode
        this.length++
    }
    cycle() {
        let current = this.head
        let visited = new Set()
        while (current) {
            if (visited.has(current)) {
                return true

            }
            visited.add(current)
            current = current.next

        }
        return false
    }
}
let list = new LinkedList(100)
list.push(200)
list.push(300)
list.tail.next = list.head
console.log(list.cycle())*/

// binary tree
/*class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class tree{
    constructor(){

        this.root = null
    }
    insert(value){
         let newnode = new node(value)
         if(this.root === null){
             this.root = newnode
             return this
         }
         let current = this.root

         while(true){
             if (newnode.value === current.value){
                 return undefined
             }
             if (newnode.value<current.value){
                 if(current.left ===null){
                     current.left =newnode
                     return this
                 }else{
                     current = current.left
                 }
             }else{
                 if(current.right === null){
                     current.right = newnode
                     return this
                 }else{
                     current = current.right
                 }
             }
         }
    }
    include(value){
        let current = this.root
         while(current){
             if(value<current.value){
                 current = current.left
             }else if (value>current.value){
                 current = current.right
             }else if(value === current.value){
                 return true
             }
         }
         return false
    }
    isSameTree(p,q){
        if(!p && !q){
            return true
        }
        if(!p || !q){
            return false
        }
        if(p.value != q.value){
            return false
        }
        return this.isSameTree(p.left,q.left) && this.isSameTree(q.right, p.right)
    }
    bfs(){
        let current = this.root
        let q = []
        let data =[]
        q.push(current)
        while(q.length){
            current =  q.shift()
            data.push(current.value)

            if(current.left){
                q.push(current.left)
            }
            if(current.right){
                q.push(current.right)
            }
            console.log(data)
        }
    }
    dfsPreOrder(current = this.root,data=[]){

        if(current===null){
            return data
        }
        data.push(current.value)
        if(current.left){
            this.dfsPreOrder(current.left,data)
        }
        if(current.right){
            this.dfsPreOrder(current.right,data)
        }
        return data
    }
}
const mytree = new tree()
mytree.insert(5)
mytree.insert(8)
mytree.insert(3)
mytree.insert(1)
mytree.insert(7)
mytree.insert(9)
const mytree2 = new tree()
mytree2.insert(5)
mytree2.insert(8)
mytree2.insert(3)
mytree2.insert(1)
mytree2.insert(7)
mytree2.insert(9)
console.log(mytree)
console.log(mytree.include(25))
mytree.bfs()
console.log(mytree.isSameTree(mytree.root,mytree2.root))
console.log(mytree.dfsPreOrder(mytree.root))*/

//DOM
/*let m = document.getElementById("a")
console.log(a)

function change() {
    a.textContent = "Alvi"

}
let n1 = document.getElementById("num1")
let n2 = document.getElementById("num2")
let result = document.getElementById("res")
function add() {
    let total = parseInt(n1.value) + parseInt(n2.value)
    result.textContent = total
}*/


/*let guess = document.getElementById("in")
let result = document.getElementById("res")

function c() {
    let rando = Math.floor((Math.random() * 10) + 1)
    let enternumber = Number(guess.value)
    if (enternumber === rando) {
        result.textContent = "right"

    } else {
        result.textContent = 'wrong'
    }
}*/


class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}
class tree {
    contructor(value) {
        this.root = null

    }
    insert(value) {
        let newnode = new node(value)
        if (!this.root) {
            this.root = newnode
            return this
        }
        let current = this.root

        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newnode
                    return this
                } else {
                    current = current.left
                }
            }
            else if (value > current.value) {
                if (current.right === null) {
                    current.right = newnode
                    return this
                } else {
                    current = current.right
                }
            }
        }

    }
    dep(p) {
        if (!p) {
            return 0
        }
        return Math.max(this.dep(p.left), this.dep(p.right)) + 1
    }
}
const mytree = new tree()
mytree.insert(5)
mytree.insert(8)
mytree.insert(3)
mytree.insert(1)
mytree.insert(7)
mytree.insert(9)
mytree.insert(100)
mytree.insert(101)
mytree.insert(120)
console.log(mytree.dep(mytree.root))