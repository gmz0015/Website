const ALTITUDE = [0, 2000, 4000, 6000, 8000, 10000];
const ALTITUDE_LENGTH = ALTITUDE.length;

const WEIGHT = [18.000, 20.000, 22.000, 24.000, 26.000, 28.000, 29.000];
const WEIGHT_LENGTH = WEIGHT.length;

const FLAPS_5_ABOVE_20 = [
  [[102, 114], [102, 113], [102, 112], [103, 111], [103, 110], [105, 109]],
  [[107, 113], [108, 112], [108, 112], [110, 111], [110, 111], [112, 111]],
  [[113, 117], [114, 117], [115, 117], [116, 117], [117, 117], [118, 117]],
  [[120, 122], [120, 122], [121, 122], [122, 122], [123, 122], [124, 122]],
  [[126, 127], [126, 127], [127, 127], [128, 127], [129, 127], [130, 127]],
  [[131, 132], [132, 132], [133, 132], [134, 142], [135, 132], [136, 132]],
  [[135, 135], [136, 135], [137, 135], [138, 135], [138, 135], [140, 135]]
]
const FLAPS_5_BELOW_20 = [
  [[102, 116], [102, 115], [102, 114], [102, 113], [102, 112], [103, 111]],
  [[105, 115], [106, 114], [107, 113], [107, 112], [108, 112], [110, 111]],
  [[112, 117], [113, 117], [113, 117], [114, 117], [115, 117], [116, 117]],
  [[118, 122], [119, 122], [120, 122], [120, 122], [121, 122], [122, 122]],
  [[124, 127], [125, 127], [126, 127], [126, 127], [127, 127], [128, 127]],
  [[130, 132], [131, 132], [131, 132], [132, 132], [133, 132], [134, 132]],
  [[133, 135], [134, 135], [135, 135], [136, 135], [137, 135], [138, 135]]
]

const FLAPS_10_ABOVE_20 = [
  [[100, 109], [100, 109], [100, 109], [100, 107], ['---', 106], ['---', 105]],
  [[100, 108], [100, 108], [100, 107], [100, 106], ['---', 105], ['---', 105]],
  [[104, 108], [106, 108], [106, 108], [106, 108], ['---', 108], ['---', 108]],
  [[110, 113], [111, 113], [112, 113], [112, 113], ['---', 113], ['---', 113]],
  [[116, 118], [117, 118], [117, 118], [118, 118], ['---', 118], ['---', 118]],
  [[121, 122], [122, 122], [123, 122], [123, 122], ['---', 122], ['---', 122]],
  [[125, 125], [125, 125], [126, 125], [127, 125], ['---', 125], ['---', 125]]
]
const FLAPS_10_BELOW_20 = [
  [[100, 111], [100, 110], [100, 110], [100, 109], [100, 108], [100, 107]],
  [[100, 110], [100, 109], [100, 109], [100, 108], [100, 107], [101, 106]],
  [[103, 109], [105, 109], [105, 108], [105, 108], [106, 108], [108, 108]],
  [[109, 113], [110, 113], [111, 113], [111, 113], [112, 113], [113, 113]],
  [[115, 118], [116, 118], [116, 118], [117, 118], [118, 118], [190, 118]],
  [[120, 122], [121, 122], [122, 122], [122, 122], [123, 122], [124, 122]],
  [[124, 125], [125, 125], [125, 125], [126, 125], [127, 125], [128, 125]]
]

const FLAPS_15_ABOVE_20 = [
  [ [98, 105],  [98, 104],  [98, 103],  [98, 102],  [98, 102],  [98, 102]],
  [ [98, 103],  [98, 103],  [98, 102],  [98, 102],  [99, 102],  [99, 102]],
  [[101, 104], [102, 104], [103, 104], [104, 104], [104, 104], [104, 104]],
  [[107, 109], [108, 109], [108, 109], [109, 109], [110, 109], [110, 109]],
  [[112, 113], [113, 113], [114, 113], [114, 113], [115, 113], [115, 113]],
  [[117, 118], [118, 118], [119, 118], [119, 118], [120, 118], [120, 118]],
  [[120, 120], [121, 120], [121, 120], [122, 120], [123, 120], [123, 120]]
]
const FLAPS_15_BELOW_20 = [
  [ [98, 106],  [98, 106],  [98, 105],  [98, 104],  [98, 103],  [98, 102]],
  [ [98, 105],  [98, 105],  [98, 104],  [98, 103],  [98, 102],  [98, 102]],
  [[100, 104], [101, 104], [101, 104], [102, 104], [103, 104], [104, 104]],
  [[106, 109], [106, 109], [107, 109], [108, 109], [108, 109], [109, 109]],
  [[111, 113], [112, 113], [112, 113], [113, 113], [114, 113], [114, 113]],
  [[116, 118], [117, 118], [117, 118], [118, 118], [118, 118], [119, 118]],
  [[119, 120], [120, 120], [120, 120], [121, 120], [122, 120], [122, 120]]
]

const V_FRI_CLIMB = [
  [116, 110, 107, 130],
  [120, 112, 109, 131],
  [126, 118, 115, 137],
  [132, 123, 120, 143],
  [137, 128, 125, 148],
  [142, 134, 130, 154],
  [146, 137, 133, 158]
]

const LAND_FLAPS_5 = [
  [115, '---', 109],
  [120, '---', 110],
  [126, '---', 115],
  [131, '---', 120],
  [137, '---', 125],
  [142, '---', 130],
  [146, '---', 134]
]
const LAND_FLAPS_10 = [
  [109, 108, 108],
  [112, 112, 108],
  [117, 117, 108],
  [122, 122, 112],
  [127, 127, 117],
  [132, 132, 117],
  [136, 136, 125]
]
const LAND_FLAPS_15 = [
  [106, 105, 105],
  [106, 117, 105],
  [112, 112, 105],
  [117, 117, 107],
  [122, 121, 111],
  [126, 126, 116],
  [129, 129, 119]
]
const LAND_FLAPS_35 = [
  ['---', 101, '---'],
  ['---', 102, '---'],
  ['---', 107, '---'],
  ['---', 112, '---'],
  ['---', 116, '---'],
  ['---', 120, '---'],
  ['---', 123, '---']
]

export function cal_takeoff(flaps, oat, altitude, weight){
  var i, j, difference_1, difference_2, row = 0, col = 0;

  for(i = WEIGHT_LENGTH - 1; i > 0; i--) {
    if (weight > WEIGHT[i]) {
      // 判断weight离哪端更接近
      difference_1 = weight - WEIGHT[i];
      difference_2 = WEIGHT[i+1] - weight;
      if (difference_1 >= difference_2){
        row = i + 1;
      }else {
        row = i;
      }
      break;
    }
  }
  for(j = ALTITUDE_LENGTH - 1; j > 0; j--) {
    if (altitude > ALTITUDE[j]) {
      // 判断altitude离哪端更接近
      difference_1 = altitude - ALTITUDE[j];
      difference_2 = ALTITUDE[j+1] - altitude;
      if (difference_1 >= difference_2){
        col = j + 1;
      }else {
        col = j;
      }
      break;
    }
  }

  if (oat > 20) {
    switch (flaps){
      case '5':
        return [FLAPS_5_ABOVE_20[row][col], V_FRI_CLIMB[row][0], V_FRI_CLIMB[row][3]];
      case '10':
        return [FLAPS_10_ABOVE_20[row][col], V_FRI_CLIMB[row][1], V_FRI_CLIMB[row][3]];
      case '15':
        return [FLAPS_15_ABOVE_20[row][col], V_FRI_CLIMB[row][2], V_FRI_CLIMB[row][3]];
    }
  }else {
    switch (flaps){
      case '5':
        return [FLAPS_5_BELOW_20[row][col], V_FRI_CLIMB[row][0], V_FRI_CLIMB[row][3]];
      case '10':
        return [FLAPS_10_BELOW_20[row][col], V_FRI_CLIMB[row][1], V_FRI_CLIMB[row][3]];
      case '15':
        return [FLAPS_15_BELOW_20[row][col], V_FRI_CLIMB[row][2], V_FRI_CLIMB[row][3]];
    }
  }
}

export function cal_landing(flaps, weight) {
  var i, difference_1, difference_2, row = 0;

  for(i = WEIGHT_LENGTH - 1; i > 0; i--) {
    if (weight > WEIGHT[i]) {
      // 判断weight离哪端更接近
      difference_1 = weight - WEIGHT[i];
      difference_2 = WEIGHT[i+1] - weight;
      if (difference_1 >= difference_2){
        row = i + 1;
      }else {
        row = i;
      }
      break;
    }
  }

  switch (flaps){
    case '5':
      return LAND_FLAPS_5[row];
    case '10':
      return LAND_FLAPS_10[row];
    case '15':
      return LAND_FLAPS_15[row];
    case '35':
      return LAND_FLAPS_35[row];
  }
}
