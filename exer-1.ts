export type Users = {
  name: string;
  age: number;
  email: string;
  profession?: string;
};

export const user: Users = {
  name: "Sarah",
  age: 21,
  email: "sarah.neri@uscsonline.com.br",
  profession: "Developer"
};

export const isabella: Users = {
  name: "Isabella",
  age: 22,
  email: "isabella.santos@uscsonline.com.br",
  profession: "Designer"
};

export function LogUser(user: Users): void { 
    //console.log(`Name: ${user.name}`) , ${`Age: ${user.age}`}, ${`Email: ${user.email}`}, ${`Profession: ${user.profession}`};

        console.log(
      `Name: ${user.name} | Age: ${user.age} | Email: ${user.email} | Profession: ${user.profession}`
    );    console.log(
      `Name: ${user.name} | Age: ${user.age} | Email: ${user.email} | Profession: ${user.profession}`
    );

    
}


export function logPerson(user: Users): void { 
    let additionnalInformation: string ;

        
      if (user.profession) {
        additionnalInformation = `Profession: ${user.profession}`;
        console.log(additionnalInformation);
      };
    
    
    // ...existing code...) {



