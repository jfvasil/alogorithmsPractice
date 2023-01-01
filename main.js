function hamming(str1,str2){
    let count = 0
    if(str1.length === str2.length){
      for(let i = 0; i < str1.length; i++){
          if(str1[i] !== str2[i]){
            count++
          }
    } 
      return count
    }else{
      return 'The strings are not of the same length!'
    }
  }
  
  console.log(hamming('river', 'rover'))
  
  function capital(str){
   return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
    }
  
    console.log(capital('hello how are you today'))
  
    function longest(str){
      let result = ''
      let arr = str.split(' ')
      let count = 0
      for(word of arr){
        if(word.length > count){
          result = word
          count = word.length
        }
      }
      return result
    }
    console.log(longest('H how are you doing on thishafhsdjfjkofdas fine day?'))
  
    function anagram(str1,str2){
      let arr1 = str1.split('')
      let arr2 = str2.split('')
      return arr1.sort().join('') === arr2.sort().join('')
    }
  
    console.log(anagram('listen', 'silent'))
  
  
    function countVowels(str){
      let vowels = ['a', 'e', 'i', 'o', 'u']
      let count = 0
      for(let char of str){
        if(vowels.includes(char)){
          count += 1
        }
      }
      return count
    }
  
  console.log(countVowels('appleee'))
  
  function reacurring(str){
    let maxCount = 0
    let maxVal
    let obj = {}
    for(let char of str){
      if(!obj[char]){
        obj[char] = 1
      } else{
        obj[char] += 1
      }
      if(obj[char] > maxCount){
        maxCount = obj[char]
        maxVal = char
      } 
      
    }
    return maxVal
  }
  
  console.log(reacurring('aaauuyyfhhfhhwheeeeeeee'))
  
  function chunking(arr, num){
    let final = []
   for(let i = 0; i < arr.length; i+=num){
     final.push(arr.slice(i,i + num))
   }
   return final
  }
  
  console.log(chunking([1, 3, 5 ,6, 5, 4, 32, 1,3, 5, 345, 243, 23], 3))
  
  function pigLatin(str){
    let vowels = ['a','e', 'i', 'o', 'u' ]
    let vowelIndex = 0
    str = str.toLowerCase()
    if(vowels.includes(str[0])){
      return str + 'way'
    } else{
      for(let char of str){
        if(vowels.includes(char)){
          vowelIndex = str.indexOf(char)
          break;
        }
      }
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
    }
  }
  
  console.log(pigLatin('water'))
  
  function noDuplicates(...arr){
    let joint = []
    arr.forEach(x =>{
      joint = [...joint, ...x]
    })
    return joint.filter((x,i) => joint.indexOf(x) === i)
  }
  
  console.log(noDuplicates([1,2,4, 5, 6, 3,32, 23, 1,3, 43, ], [21,3,5, 6, 6, 6, 23,243,53,4]))