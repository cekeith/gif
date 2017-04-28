// function capitalizeText(text, callback) {
//   callback(text.toUpperCase())
// }

function promiseCapitalizeText(text) {
  return new Promise(function(resolve, reject) {
    let toReturn
    // try {
    toReturn = text.toUpperCase();
    // } catch (e) {
    //   reject("error");
    // }
    if (toReturn) {
      resolve(toReturn);
    } else {
      reject("error");
    }
  });

}

// promiseCapitalizeText("test").then(function(text) {
//   console.log(reverseText(text))
// }).catch(function(text) {
//   console.log(text);
// });

Promise.all([promiseCapitalizeText(false), reverseText("hello")]).then(function(text) {
  text.forEach(function(x) {
    console.log(x)
  })
}).catch(function(text) {
  console.log('error')
})


function reverseText(text) {
  // parse out keywords.  Could be empty.
  return new Promise(function(resolve, reject) {
    let splitText = text.split("")
    let reverseArray = splitText.reverse()
    let callBack = reverseArray.join("")

    if (true) {
      resolve(callBack)
    } else {
      reject('ERROR')
    }
  })
}

// reverseText('hello').then(function(text) {
//   console.log(text)
// }).catch(function(error) {
//   console.log(error)
// // })
// on(error) {
//     //   console.log(error)
//     // })
//     on(error) {
//   console.log(error)
// })

// })

// })
