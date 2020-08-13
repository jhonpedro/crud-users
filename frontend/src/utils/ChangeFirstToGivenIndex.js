module.exports = function ChangeFirstToGivenIndex (GivenArray, indexToChangeForFirst) {
  let aux = GivenArray[0]
  GivenArray[0] = GivenArray[indexToChangeForFirst]
  GivenArray[indexToChangeForFirst] = aux

  return GivenArray
}