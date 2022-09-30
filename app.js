class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPacementAge(minPlacementAge) {
        return (minMarks) => {
            if(this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + " is ready for Placements");
            } else {
                console.log(this.name + " is not ready for Placements");
            }
        }
    }
}

const Yash = new Student('yash', 25, 75);
const Vaibhav = new Student('vaibhav', 13, 35);

Yash.setPacementAge(18)(40);