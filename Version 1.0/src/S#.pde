class System={
  System(float tempX,float tempY){
    x=tempX;
    y=tempY;
  }
 color[][] pixels=[];
void start(){
for(var i=0;i<w;i++){
for(var j=0;j<h;j++){
this.pixels.push([]);
this.pixels[i].push(color(255,255,255));
}
}
};
void point(x,y,col){
if(x<w&&y<w&&x>0&&y>0){
this.pixels[x][y]=col;
}
};
void updateScreen(){
for(var i=0;i<w;i++){
for(var j=0;j<h;j++){
stroke(this.pixels[i][j]);
point(i,j);
}
}
}
};
