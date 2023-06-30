/*
  Assessment: CST8285 Assignment01
  Class: CST8285 300
  Student Name: Ziyao Tang (041085557)
  Due Date: June 25, 2023
  Lab Section Number: CST8285 301
  Professor Name: Hala Own, Alemeseged Legesse
*/
var input, courses, course, filter, i, title, txtValue;//for myFunction()
var sections,level1,classes,level,lvlValue; //for filterCourse()
function sortCourse(){
    var list, i, switching, order, shouldSwitch,changes,j;
    list = document.getElementById("main");
    for (j = 0; j < 2; j++) {
        changes = 0;
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
            // start by saying: no switching is done:
            switching = false;
            order = list.getElementsByTagName("section");
            // Loop through all list-items:
            for (i = 0; i < (order.length - 1); i++) {
                // start by saying there should be no switching:
                shouldSwitch = false;
                let v1=order[i].getElementsByTagName("p")[0].textContent;
                let v2=order[i + 1].getElementsByTagName("p")[0].textContent;
                if ((j == 0 && (v1 > v2)) || (j == 1 && (v1 < v2))) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                order[i].parentNode.insertBefore(order[i + 1], order[i]);
                switching = true;
                changes++;
            }
        }
        if (changes > 0) {break;}
    }
}

function filterCourse() {
    sections = document.getElementsByTagName("section");
    for (i=0;i<sections.length;i++) {
        level1="LEVEL 1"
        classes=sections[i];
        level = classes.getElementsByTagName("p")[0] ;
        lvlValue=level.textContent;
        if (lvlValue.toUpperCase().indexOf(level1) > -1) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
}

function filter2Course() {
    sections = document.getElementsByTagName("section");
    for (i=0;i<sections.length;i++) {
        level1="LEVEL 2"
        classes=sections[i];
        level = classes.getElementsByTagName("p")[0] ;
        lvlValue=level.textContent;
        if (lvlValue.toUpperCase().indexOf(level1) > -1) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
}

function myFunction() {
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    courses = document.getElementsByTagName("section");
    for (i=0;i<courses.length;i++) {
        course=courses[i];
        title = course.getElementsByTagName("p")[1] ;
        txtValue=title.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }
    }
}

function resetCourse(){
    var search =document.getElementById("myInput");
    search.value="";
    courses = document.getElementsByTagName("section");
    for (i=0;i<courses.length;i++) {
        courses[i].style.display = "";
    }
}