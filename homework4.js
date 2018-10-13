const func=function (arr,bool) {
	let index =0;
	let max = arr[0];
	let min =arr[0];

	let minMax = arr[0];
while (index<arr.length) {
  if(bool){
    	if (arr[index] > minMax ){
		    minMax=arr[index]		
	  }
  }else{
  	if (arr[index] < minMax ){
		    minMax=arr[index]		
	  }
  }

	index = index +1;
}
return minMax;
};
console.log(func([3,5,7,2,7,99],true));


const sum=function(array) {
	let arraysum=0;
	let tiv=0;
	while (array.length>=1 && tiv<=array.length-1) {
arraysum=arraysum+array[tiv];
tiv=tiv+1;
	}
return arraysum;
};
console.log(sum([4,3,2]));




const reverse = function (string) {
let reversestring = '';
let index = string.length-1;
while (index >=0){
	reversestring=reversestring + string[index];
	index = index -1;
}
return reversestring;
};

console.log(reverse('Liana'));


const multytosingle= function(arr) {
let base=[];
let parentindex=0;
while (parentindex<arr.length){
  let childarr=arr[parentindex];
  let childindex=0;
  while (childindex < childarr.length){
    base[base.length]=childarr[childindex];
    childindex++;
  }
parentindex++;
}
return base;

};
console.log (multytosingle([[1,2,3],[4,5,6]]));





const trianglestars= function(char,num){
  let base="";
  while(num>0){
    base=base+char;
    num--;
  }
   return base;
}

  const triangle= function(n){
    let starquant=2*n-1;
    let space=0;
    while(n>0){
      console.log(trianglestars(" ",space)+trianglestars("*",starquant));
      n --;
      starquant=2*n-1;
      space ++;
    }
  }

triangle(4)

 



const checkerboard= function(char,num){
  let base="";
  while(num>0){
    base=base+char;
    num--;
  } 
  return base;
}

const trhangle= function(n){
    let starquant= n;
    let space=0;
    while(n>0){
      space ++;
      if (space % 2 !== 0){
            console.log(checkerboard("* ", starquant));
      }else{
            console.log(" " + checkerboard("* ", starquant));

      }
      n --;
   
    }
}
var a = checkerboard("*", 5);
 trhangle(5)





 const forEach= function (arr,func) {
  let index=0;
  while(index<=arr.length-1)
{ func(arr[index]);
  index++;

 }
};

forEach([1,2,3,4], function(val) {console.log(val);});