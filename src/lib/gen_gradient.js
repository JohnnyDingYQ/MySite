/**
 * Random Gradient Generator
 *
 * Generate a random gradient for "background-image" CSS property
 *
 * @link https://codepen.io/chrisgresh/pen/aNjovb
 */
export default function generate() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var angle = Math.round(Math.random() * 360);

  return (
    "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")"
  );
}
