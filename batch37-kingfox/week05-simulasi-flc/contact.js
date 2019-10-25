//No. 3 

var contacts = [{
    Id: 1,
    name: 'Andi',
    gender: 'male',
    group_ids: [1, 2, 3]
}, {
    Id: 2,
    name: 'Budi',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 3,
    name: 'Cindy',
    gender: 'male',
    group_ids: [1]
}, {
    Id: 4,
    name: 'David',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 5,
    name: 'Emily',
    gender: 'male',
    group_ids: [1, 2, 3]
}]


var groups = [{
    id: 1,
    name: 'Teman SMP'
}, {
    id: 2,
    name: 'Teman SMA'
}, {
    id: 3,
    name: 'Teman Kuliah'
}]

function showContactByGroup(group_name) {
    //your code here...
  
}

showContactByGroup('Teman Kuliah')
//["Andi", "Emily"]
showContactByGroup('Teman SMA')
    //["Andi", "Budi", "David", "Emily"]
