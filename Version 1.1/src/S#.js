var System=function(w,h){
this.start=function(){
for(var i=0;i<w;i++){
for(var j=0;j<h;j++){
this.pixels.push([]);
this.pixels[i].push(color(255,255,255));
}
}
};
this.background=function(col){
for(var i=0;i<w;i++){
for(var j=0;j<h;j++){
this.pixels[i][j]=col;
}
}
};
this.point=function(x,y,col){
if(x<w&&y<w&&x>0&&y>0){
this.pixels[x][y]=col;
}
};
this.updateScreen=function(){
for(var i=0;i<w;i++){
for(var j=0;j<h;j++){
stroke(this.pixels[i][j]);
point(i,j);
}
}
}
};
