clearList();

const clearList = function(){
    $('.main').remove('.text');
}

let list = [];

$('#add').on("click", addToList(){
    $('#text').html(getListItem);
}

const getListItem = function(devSkill) {
    let devSkill = '';
    return devSkill;
}

const addToList = function(devSkill){
    list.push(devSkill)
}