function Student(RollNo, Name) {
  this.rollNo = RollNo;
  this.name = Name;

  function print() {
    console.log("Roll No : ", this.rollNo, "Name : ", this.name);
  }
}

function StudentBuilder() {
  let rollNo;
  let name;
  return {
    //@Params rollNo is integer
    setRollNo: function (rollNo) {
      console.log("Roll no ", rollNo);
      this.rollNo = rollNo;
      return this;
    },

    //@Params rollNo is integer
    setName: function (name) {
      this.name = name;
      return this;
    },
    //@Params rollNo is integer
    build: function () {
      return new Student(this.rollNo, this.name);
    },
  };

}

const obj = StudentBuilder()
  .setRollNo(12)
  .setName("Abhishek")
  .build();
console.log("Obj ", obj);
