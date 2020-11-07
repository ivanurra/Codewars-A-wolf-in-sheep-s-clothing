function warnTheSheep(queue) {
if (queue[queue.length-1] == "wolf") {
  return "Pls go away and stop eating my sheep"
  } else {
    queue.reverse()
    let posWolf = queue.indexOf('wolf')
    return `Oi! Sheep number ${posWolf}! You are about to be eaten by a wolf!`
  }
}