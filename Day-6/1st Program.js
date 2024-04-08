class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.hobbies = [];
    }
      addHobby(hobby) {
      this.hobbies.push(hobby);
    }
      removeHobby(hobby) {
      const index = this.hobbies.indexOf(hobby);
      if (index !== -1) {
        this.hobbies.splice(index, 1);
      }
    }
      displayHobbies() {
      if (this.hobbies.length === 0) {
        console.log(`${this.name} has no hobbies.`);
      } else {
        console.log(`${this.name}'s hobbies:`);
        this.hobbies.forEach(hobby => {
          console.log("- " + hobby);
        });
      }
    }
  }
  const person1 = new Person("Raja", 20, "male");
  person1.addHobby("Reading");
  person1.addHobby("Painting");
  person1.displayHobbies();
  
  person1.removeHobby("Painting");
  person1.displayHobbies(); 
  