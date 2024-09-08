let nameArray = [];
let nameArrayDate = []
let listDiv = "";

function handleCostKeydown(event){
  if(event.key==='Enter'){
    addArray()
  }
}

function handleCostKeydown2(event){
  if(event.key==='Enter'){
    addArrayLoop()
  }
}

function handleCostKeydown3(event){
  if(event.key==='Enter'){
    addArrayLoopDate()
  }
}

function addArray(){
  const elem = document.getElementById('input-one')
  const name = elem.value
  if(name != ""){
    nameArray.push(name);
    consoele.log(nameArray)
    elem.value = '';
  }else{
    alert("Fiel is empty")
  }  
}

function addArrayLoop(){
  const elem = document.getElementById('input-two')
  const name = elem.value

  if(name != "" ){
    nameArray.push(name);
    nameArray.forEach(iteratorArray);
    document.getElementById('divList2').innerHTML = listDiv
    elem.value = '';
    listDiv = '';
  }else{
    alert("Field is empty")
  }  
}

function addArrayLoopDate(){

  const elemName = document.getElementById('input-tree')
  const elemDate = document.getElementById('input-four')
  
  const reg ={toDoName:elemName.value, toDoDate:elemDate.value}

  if(reg.toDoName != "" && reg.toDoDate != ""){
    
    //console.log(nameArrayDate)
    nameArrayDate.push(reg);
   
    nameArrayDate.forEach(iteratorArrayDate);
    
    //console.log(listDiv)
    document.getElementById('divList3').innerHTML = listDiv

    elemName.value = '';
    elemDate.value = ''
    listDiv = '';
  }else{
    alert("Someone Field is empty")
  }  
}

function iteratorArray(item, index, arr) {
  listDiv += `<p>${item}</p> `
  //console.log(listDiv)
}

function iteratorArrayDate(item, index, arr) {
  listDiv += `<p>${index} - ${item.toDoName} - ${item.toDoDate}<button class="red-button" onclick='deleteItem(${index})'>Delete</button></p>`

  }

  function deleteItem(indexItem){
   
    nameArrayDate.splice(indexItem,1)
    
    nameArrayDate.forEach(iteratorArrayDate);
    
    document.getElementById('divList3').innerHTML = listDiv

    listDiv = '';

  }