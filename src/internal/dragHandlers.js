export function dragstart() {
  this.dragging = true;
}

export function drag(e) {
  console.log(e);
}

export function dragend(e) {
  this.dragging = false;
}
