const {success, fail, repair, get}= require('./enhancer.js');
// test away!


describe("durability restored to 100", () => {
  //act
  it("should restore the durability of an item to 100", () => {

    const item = {
      durability: 80
    }
    
    expect(repair(item)).toEqual({durability: 100});
  });
});

describe("Enhancement success", () => {
  //act
  it("passes enhancement success", () => {

    const test = {
      name: 'test',
      enhancement: 19,
      durablity: 80
    }

    const result = {
      name: 'test',
      enhancement: 20,
      durablity: 80
    }

    expect(success(test)).toEqual(result);
    
    
  });

  it("enhancement stops at 20", () => {

    const test = {
      name: 'test',
      enhancement: 20,
      durablity: 80
    }

    const result = {
      name: 'test',
      enhancement: 20,
      durablity: 80
    }

    expect(success(test)).toEqual(result);
    
    
  });
});

describe("Enhancement fails", () => {
  //act
  it("enhancement is less than 15, the durability of the item is decreased by 5", () => {

    const test = {
      name: 'test',
      enhancement: 14,
      durability: 80
    }

    const result = {
      name: 'test',
      enhancement: 14,
      durability: 75
    }

    expect(fail(test)).toEqual(result);
    
    
  });

  it("item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {

    const test = {
      name: 'test',
      enhancement: 15,
      durability: 9
    }

    const result = {
      name: 'test',
      enhancement: 15,
      durability: 0
    }

    expect(fail(test)).toEqual(result);

    const test1 = {
      name: 'test',
      enhancement: 15,
      durability: 90
    }

    const result1 = {
      name: 'test',
      enhancement: 15,
      durability: 80
    }

    expect(fail(test1)).toEqual(result1);
    
  });
  
  it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).", () => {
    
    const test = {
      name: 'test',
      enhancement: 17,
      durability: 80
    }
    
    const result = {
      name: 'test',
      enhancement: 16,
      durability: 70
    }
    
    expect(fail(test)).toEqual(result);
    
    
  
    const test1 = {
      name: 'test',
      enhancement: 18,
      durability: 9
    }
  
    const result1 = {
      name: 'test',
      enhancement: 17,
      durability: 0
    }
  
    expect(fail(test1)).toEqual(result1);
    
  });
});