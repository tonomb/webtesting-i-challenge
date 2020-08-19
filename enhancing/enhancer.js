module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  checkValid(item)
  if(item.enhancement < 20){
    item.enhancement += 1
  }

  return { ...item };
}

function fail(item) {

  if(item.enhancement < 15){
    item.durability -= 5
  } else if (item.enhancement > 16 && item.durability <= 10){
    item.durability = 0
    item.enhancement -= 1
  } else if (item.enhancement > 16 && item.durability > 10){
    item.durability -= 10
    item.enhancement -= 1
  } else if (item.enhancement >= 15 && item.durability <= 10){
    item.durability = 0
  } else if (item.enhancement >= 15 && item.durability > 10){
    item.durability -= 10
  }

  return { ...item };
}

function repair(item) {

  item.durability = 100

  return { ...item };
}

function get(item) {
  return { ...item };
}


function checkValid(item){
  if(item.enhancement < 0 || item.enhancement > 20 || item.durability < 0 || item.durability > 100){
    return
  } else {
    item
  }
}