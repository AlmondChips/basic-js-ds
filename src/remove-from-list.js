const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// let list = {
// 	value: 3,
// 	next: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next:{
// 				value:2,
// 				next:{
// 					value: 4,
// 					next: null,
// 				}
// 			}
// 		}
// 	}
// };

function removeKFromList( l, k ) {
		let current = l;

		if(k === l.value){
			l = current.next;
		}
		let prev = null;
		while (current.next) {
			prev = current;
			if(!current.next.next && current.next.value === k){
				prev.next = null;
				console.log(prev);
				break;
			} 
			
			current = current.next;
			
		  }
		  
		 
		

		   prev = null;
		   current = l;
			
			while (current.next) {
				prev = current;
				current = current.next;
				if(k === current.value && k === current.next.value){	
						prev.next = current.next.next;
				// } else if(current.next.value === k){
				// 	current.next = null;
				}
				else
				if(k === current.value){
					prev.next = current.next;
			
				}
			  }
			


		

	return l

}
// console.log(removeKFromList(list,4))


module.exports = {
  removeKFromList
};
