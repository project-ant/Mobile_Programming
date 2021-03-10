const student = {
    fullName: "John",
    address: "Manado",
    age: 25,
};

const displayStudentInformation = ({fullName, address}) => {

    // const {fullName, address} = props; //destructuring

    console.log(`Student: ${fullName}, Address: ${address}`);
};

displayStudentInformation(student);