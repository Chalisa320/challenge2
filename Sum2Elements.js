let arr = [1, 5, 7, -1, 5];
let n = arr.length;
let sum = 12;
function printPairs(arr, n, sum) {

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (arr[i] + arr[j] == sum)
        console.log('(' + arr[i] + ', ' + arr[j] + ')');
        else  ( arr[i] + arr[j] != sum) 
        console.log("No output");
                
            
}


printPairs(arr, n, sum);