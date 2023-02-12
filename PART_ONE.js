//Mohammed Tahmid Chowdhury moch8386

//Ber om ursäkt för båda har dåliga kommentarer, jag förstår ungefär hur det fungerar men säkert på ett konstigt sätt och inte de sättet som average person gör
//Lyckades få ihop det men det var efter enormt mycket research och trial & error, och föröska visualizera så mycket som möjligt
//Ska göra mitt bästa med att lägga min tanke gång på en del ställen, men som sagt kommer vara dåligt förklarad och jag kan ha tolka hur saker och ting fungerar på annorlunda sätt

myObject = {
  prototypeList: [],
  create: function (parameter) {
    let protoholder = {}; //skapar en tom
    protoholder.__proto__ = this; // ser till prototype
    if (Array.isArray(parameter) || parameter === null) {
      //kollar om den är en array eller null eller undefined
      protoholder.prototypeList = parameter; // lägg till parameter till list
    }
    return protoholder; //preturn protoholder
  },

  call: function (funcName, parameters) {
    if (this.hasOwnProperty(funcName)) {
      //Om den existerar
      return this[funcName](parameters); // om det gör det visa
    } else {
      //annars gå igenom och sen se till att det finns
      if (this.protoypelist !== null) {
        for (var x = 0; x < this.prototypeList.length; x++) {
          //gå igenom
          if (this.prototypeList[x].call(funcName, parameters) !== undefined) { // innan den den går in en recursion och söker vidare se till att den nästa inte är undefined annars blir det prolem med call 
            return this.prototypeList[x].call(funcName, parameters); // retunera det
          }
        }
      }
         else{
            throw new Error ("något gick fel i call else loop");
          }
    }
  },
};

//TEST TEXT NERÅt
var obj0 = myObject.create(null);
obj0.func = function (arg) {
  return 'func0: ' + arg;
};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {
  return 'func2: ' + arg;
};
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call('func', ['hello']);
console.log('result: ' + result);

//Lyckades få consol log resultat (titta ner):
//result: func0: hello

//Sammma med de andra här nere

//Andra koden
var obj0 = myObject.create(null);
obj0.func = function (arg) {
  return 'func0: ' + arg;
};
var obj1 = myObject.create([obj0]);
var obj2 = myObject.create([]);
obj2.func = function (arg) {
  return 'func2: ' + arg;
};
var obj3 = myObject.create([obj1, obj2]);
var result = obj3.call('func', ['hello']);
console.log('should print ’func0: hello’ ->', result);

//3e koden
obj0 = myObject.create(null);
obj0.func = function (arg) {
  return 'func0: ' + arg;
};
obj1 = myObject.create([obj0]);
obj2 = myObject.create([]);
obj3 = myObject.create([obj2, obj1]);
result = obj3.call('func', ['hello']);
console.log('should print ’func0: hello’ ->', result);
