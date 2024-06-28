const flexbox = document.getElementById('flexbox');
const boxes = flexbox.children;
 
function resetFlexbox() {
flexbox.style.flexDirection = 'row';
flexbox.style.justifyContent = 'flex-start';
flexbox.style.alignItems = 'stretch';
flexbox.style.gap = '0px';
    for (let box of boxes) {
box.style.flexGrow = '0';
    }
}
 
function updateGap() {
    const gap = document.getElementById('gap').value;
flexbox.style.gap = `${gap}px`;
}
 
function setFlexDirection(direction) {
flexbox.style.flexDirection = direction;
}
 
function setJustifyContent(justifyContent) {
flexbox.style.justifyContent = justifyContent;
}
 
function setAlignItems(alignItems) {
flexbox.style.alignItems = alignItems;
}
 
function resetFlexGrow() {
    for (let box of boxes) {
box.style.flexGrow = '0';
    }
}
 
function setFlexGrowAll() {
    for (let box of boxes) {
box.style.flexGrow = '1';
    }
}
 
function setFlexGrow(index, value) {
    boxes[index].style.flexGrow = value;
}
