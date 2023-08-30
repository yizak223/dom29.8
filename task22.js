//22
function getAndPrintCountry() {
    var divElemnt = document.getElementById("myDiv")
    divElemnt.innerHTML += "<ol></ol>"
    for (var i = 0; i < 5; i++) {
        var country = prompt('enter1');
        divElemnt.innerHTML += `<li>${country}</li>`
    }
}

//23
function getAndPrintTableUser() {
    var teacher = {}
    teacher.firstName = prompt('name')
    teacher.lastName = prompt('last name')
    teacher.professional = prompt('professional')
    teacher.email = prompt('email')
    document.getElementById('myDiv').innerHTML +=
        `<table>
        <thead>
    <th>firstName</th><th>lastName</th><th>professional</th><th><th>professional</th></th>
    </thead>
    <tbody>
        <tr>
        <td>${teacher.firstName}</td>
        <td>${teacher.lastName}</td>
        <td>${teacher.professional}</td>
        <td>${teacher.email}</td>
        </tr>
    </tbody>
    </table>`


}

//24

var companyArray = [
    { companyname: 'harmonic', companycity: 'kysria', companynumWorkers: '100', companysearchFor: false },
    { companyname: 'komdor', companycity: 'tlv', companynumWorkers: '300', companysearchFor: true },
    { companyname: 'matrix', companycity: 'tlv', companynumWorkers: '140', companysearchFor: true }
]
for (var i = 0; i < companyArray.length; i++) {
    document.getElementById('myTbody').innerHTML +=
        `
        <tr>
        <td>${companyArray[i].companyname}</td>
        <td>${companyArray[i].companycity}</td>
        <td>${companyArray[i].companynumWorkers}</td>
        <td>${companyArray[i].companysearchFor}</td>
        </tr>
        `
}
//25
var myTableForStyle = document.getElementById('myTable')

myTableForStyle.style = `
background-color:#b6abab;
border: solid ;
border-collapse: collapse;
`
var myTds=document.getElementsByTagName('td')
for(var i=0;i<myTds.length;i++)
{
    myTds[i].style.border="solid";
}

