

const functions = {

  isLessThan8Chars: (pw) => {
    if (pw.length < 9) {
      return true
    } else {
      return false
    }
  },


  isNotBlank: (pw) => {
    if (pw.length !== 0) {
      return true
    } else {
      return false
    }
  },

  hasUppercase: (pw) => {
    var upperCaseLetters = /[A-Z]/g;
    if (pw.match(upperCaseLetters)) {
      return true
    } else {
      return false
    }
  },

  hasLowercase: (pw) => {
    var lowerCaseLetters = /[a-z]/g;
    if (pw.match(lowerCaseLetters)) {
      return true
    } else {
      return false
    }
  },

  hasDigit: (pw) => {
    var numbers = /[0-9]/g;
    if (pw.match(numbers)) {
      return true
    } else {
      return false
    }
  },

  passwordVerifier: pw => {

    const isNotBlank = (pw) => {
      if (pw.length !== 0) {
        return true
      } else {
        return false
      }
    }
    const isLessThan8Chars = (pw) => {
      if (pw.length < 9) {
        return true
      } else {
        return false
      }
    }
    const hasUppercase = (pw) => {
      var upperCaseLetters = /[A-Z]/g;
      if (pw.match(upperCaseLetters)) {
        return true
      } else {
        return false
      }
    }
    const hasLowercase = (pw) => {
      var lowerCaseLetters = /[a-z]/g;
      if (pw.match(lowerCaseLetters)) {
        return true
      } else {
        return false
      }
    }
    const hasDigit = (pw) => {
      var numbers = /[0-9]/g;
      if (pw.match(numbers)) {
        return true
      } else {
        return false
      }
    }

    let score = 0;
    if (isNotBlank(pw)) score++;
    if (isLessThan8Chars(pw)) score++;
    if (hasUppercase(pw)) score++;
    if (hasDigit(pw)) score++;
    if (hasLowercase(pw)) {
      score++;
    } else {
      // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
      score = 0;
    }

    // Markeer het wachtwoord als valide als er een score van minimaal 3 is
    return {
      score: score,
      valid: score >= 3
    };

  }
};


module.exports = functions;

