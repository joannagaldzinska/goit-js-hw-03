let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

console.log(user);

user.hobby = "skydiving"
user.premium = false
user.mood = "happy"
user["full time"] = true;

const keys = Object.keys(user);
// Write code under this line

console.log(keys)
 
for (const key of keys) {

 message += `${key}: ${user[key]}\n`;
    
}

 console.log(message);

/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
