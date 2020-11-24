var Student_Array=[];
function Submit() {
    var Name_1=document.getElementById("Student_1").value;
    var Name_2=document.getElementById("Student_2").value;
    var Name_3=document.getElementById("Student_3").value;
    var Name_4=document.getElementById("Student_4").value;
    var Name_5=document.getElementById("Student_5").value;
    Student_Array.push(Name_1);
    Student_Array.push(Name_2);
    Student_Array.push(Name_3);
    Student_Array.push(Name_4);
    Student_Array.push(Name_5);
    console.log(Student_Array);
    document.getElementById("Dis_001").innerHTML=Student_Array;
    document.getElementById("Sub_001").style.display="none";
    document.getElementById("Sor_001").style.display="inline-block";
}

function Sorting() {
    Student_Array.sort();
    console.log(Student_Array);
    document.getElementById("Dis_001").innerHTML=Student_Array;
}
