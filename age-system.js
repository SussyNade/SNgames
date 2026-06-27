function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Tabela de conversão rating -> idade mínima por sistema
const RATING_MIN_AGE = {
  BR: {
    'L': 0, 'AL': 0,
    '6': 6, 'A6': 6,
    '10': 10, 'A10': 10,
    '12': 12, 'A12': 12,
    '14': 14, 'A14': 14,
    '16': 16, 'A16': 16,
    '18': 18, 'A18': 18
  },
  US: {
    'E': 0, 'E10': 10, 'T': 13, 'M': 17, 'AO': 18,
    'RP': null, 'RP-LM17': null, 'RU': null
  },
  EUR: {
    '3': 3, '7': 7, '12': 12, '16': 16, '18': 18,
    'PG': 0, 'RP': null
  },
  JPN: {
    'A': 0, 'B': 12, 'C': 15, 'D': 17, 'Z': 18,
    'RS': null, 'ED': null, 'RP': null
  },
  KREA: {
    'ALL': 0, '12': 12, '15': 15, '18': 18,
    'TEST': null, 'RP': null
  },
  SNR: {
    '3': 3, '6': 6, '9': 9, '12': 12, '15': 15, '18': 18,
    'UserGen': 18, 'RP': null
  }
};

function getRatingMinAge(ratingCode, sistema) {
  const table = RATING_MIN_AGE[sistema];
  if (!table) return null;
  const val = table[ratingCode];
  return val !== undefined ? val : null;
}

function isGameAllowed(game, userAge) {
  if (userAge === null || userAge === undefined) return false;
  if (userAge >= 18) return true;

  const sistema = localStorage.getItem('rating') || 'BR';

  // Pega o campo de rating certo pro sistema escolhido
  const ratingFieldMap = {
    BR: 'rating', US: 'esrb', EUR: 'pegi', JPN: 'cero', KREA: 'grac', SNR: 'snr'
  };
  const field = ratingFieldMap[sistema] || 'rating';
  let ratingCode = game[field];

  // Se o rating for RP/RU/null (não classificado), usa SNR como fallback
  const unratedCodes = ['RP', 'RU', 'RP-LM17', 'RS', 'ED', 'TEST', null, undefined, ''];
  if (unratedCodes.includes(ratingCode)) {
    ratingCode = game.snr;
    const snrAge = getRatingMinAge(ratingCode, 'SNR');
    if (snrAge === null) return true; // SNR também não classificado, libera
    return userAge >= snrAge;
  }

  const minAge = getRatingMinAge(ratingCode, sistema);
  if (minAge === null) return true; // rating desconhecido, libera
  return userAge >= minAge;
}

function getUserAge() {
  const age = localStorage.getItem('user-age');
  if (age === null) return null;
  const parsedAge = parseInt(age);
  return isNaN(parsedAge) ? null : parsedAge;
}

function changeAge() {
  localStorage.removeItem('user-age');
  location.reload();
}