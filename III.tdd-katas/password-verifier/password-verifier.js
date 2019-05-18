// //     STEP 1

// function passwordVerifier(password) {
//   if (!(password.length >= 8)) {
//     return "password should be larger than 8 chars";
//   } else {
//     var isPasswordHasUpperCase = password
//       .split("")
//       .some(letter => /^[A-Z]/.test(letter));
//     if (!isPasswordHasUpperCase) {
//       return "password should have one uppercase letter at least";
//     } else {
//       var isPasswordHasLowerCase = password
//         .split("")
//         .some(letter => /^[a-z]/.test(letter));
//       if (!isPasswordHasLowerCase) {
//         return "password should have one lowercase letter at least";
//       } else {
//         var isPasswordHasANumber = password.split("").some(el => !isNaN(el));
//         if (!isPasswordHasANumber) {
//           return "password should have one number at least";
//         }
//       }
//     }
//   }
//   return "your password is accepted";
// }
// module.exports = passwordVerifier;

///////         STEP 2

function passwordVerifier(password) {
  var passwordValidationCriterias = [
    isLargerThan8(password),
    isUpperCase(password),
    isLowerCase(password),
    hasNumber(password)
  ];
  if (
    passwordValidationCriterias[2] === true &&
    passwordValidationCriterias.filter(el => el === true).length >= 3
  ) {
    return "your password is valid";
  } else {
    return passwordValidationCriterias
      .filter(el => typeof el === "string")
      .join("\n");
  }
}

function isLargerThan8(password) {
  if (!(password.length >= 8)) {
    return "password should be larger than 8 chars";
  } else {
    return true;
  }
}

function isUpperCase(password) {
  var isPasswordHasUpperCase = password
    .split("")
    .some(letter => /^[A-Z]/.test(letter));
  if (!isPasswordHasUpperCase) {
    return "password should have one uppercase letter at least";
  } else {
    return isPasswordHasUpperCase;
  }
}

function isLowerCase(password) {
  var isPasswordHasLowerCase = password
    .split("")
    .some(letter => /^[a-z]/.test(letter));
  if (!isPasswordHasLowerCase) {
    return "password should have one lowercase letter at least";
  } else {
    return isPasswordHasLowerCase;
  }
}
function hasNumber(password) {
  var isPasswordHasANumber = password.split("").some(el => !isNaN(el));
  if (!isPasswordHasANumber) {
    return "password should have one number at least";
  } else {
    return isPasswordHasANumber;
  }
}

module.exports = passwordVerifier;
