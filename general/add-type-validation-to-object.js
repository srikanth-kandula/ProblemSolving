/**
 * implement a function which adds a type validation to an object
 * 
 * 
 * Your function should receive an object as its only argument and return an object with the same properties, but with type validation added. Types should be validated when:

the function creates the object;
Someone updates a property;
Someone adds a property;
The type validation should always be based on the last part of the property name. For example, age_int property should always be an integer and throw an error when set to something else

Here are possible types:

string: for example, "string type"
int: 12.00 and 12 are both integers.
float: for example, 12.34
number: any int or float
bool: for example, true
Assumptions

Types are optional and validation should be skipped if the type isn't specified.
always precedes the type name.
Examples

Your function should behave as shown below:

const obj= {
age_int: 2,
name_string:"John",
Job: null,
}

const validatingbject=typeCheck(obj)

validatingobject.age_int=2.25 // Throws error
validatingbject.age.int= 2
validatingoject.job="fireman"
validatingbject.address_string= 20 // Throws error


const obj_2= {employed_bool: "true",}

const validatingobject = typeCheck(obj_2) // Throws error
 * 
 * 
 * 
 * 
 * @param {object} object 
 * @returns {object}
 */

function typeCheck(object) {
  if (object && typeof object === "object") {
    const initialObj = checkObjectType(object)
    const proxy = new Proxy(initialObj, validator);
    return proxy;
  } else {
    console.log("this is not an object!")
    return undefined;
  }
}

function checkObjectType(object) {
  for (key in object) {

    if (key.indexOf('_') !== -1) {
      if (key.includes('string')) {
        if (typeof (object[key]) !== 'string') {
          throw Error;
        }
      } else if (key.includes('int') || key.includes('float') || key.includes('number')) {
        if (typeof (object[key]) !== 'number') {
          throw Error;
        } else if (key.includes('int')) {
          if (!Number.isInteger(object[key])) {
            throw Error;
          }
        } else if (key.includes('float')) {
          if (Number.isInteger(object[key])) {
            throw Error;
          }
        }
      } else if (key.includes('bool')) {
        if (typeof (object[key]) !== 'boolean') {
          throw Error;
        }
      } else if (typeof (object[key] === 'object')) {
        checkObjectType(object[key])
      }
    }

  }
  return object;
}

const validator = {
  set(target, property, value) {
    if (property.indexOf('_') !== -1) {
      if (property.indexOf('string') !== -1) {
        if (typeof (value) != 'string') {
          throw Error;
        }
      } else if (property.indexOf('int') !== -1 || property.indexOf('float') !== -1 || property.indexOf('number') !== -1) {
        if (typeof (value) !== 'number') {
          throw Error;
        } else if (property.indexOf('int') !== -1) {
          if (!Number.isInteger(value)) {
            throw Error;
          }
        } else if (property.indexOf('float') !== -1) {
          if (Number.isInteger(value)) {
            throw Error;
          }
        }
      } else if (property.indexOf('bool') !== -1) {
        if (typeof (value) !== 'boolean') {
          throw Error;
        }
      } else if (typeof (object[key] === 'object')) {
        //srikanth: this needs to be improved, it doesn't work
        const proxy = new Proxy(object[key], validator);
        return proxy;
      }
      return target[property] = value
    } else {
      return target[property] = value
    }

  }
}

//To test the above code
const obj1 = {
  age_int: 2,
  name_string: "John",
  Job: null,
  temp_object: {
    my_string: "fasfa"
  }
}


const validatingobject = typeCheck(obj1)

//validatingobject.age_int = 2.25 // Throws error
validatingobject.age_int = 2
validatingobject.job = "fireman"
//validatingobject.address_string = 20 // Throws error
validatingobject.temp_object.my_string = 1


const obj_2 = { employed_bool: true }
