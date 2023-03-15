let picture = document.getElementById("full-img");
let image  = document.getElementById("image");
 
const openimage =(pic) =>
{
   picture.style.display = "flex";
   image.src = pic;
}
const closeimage =() =>
{
   picture.style.display = "none";
}
 
let r= 0;
const Rotate = () =>
{
    r = r + 90;
    image.style.transform = `rotate(${r}deg)`;
}
let z=0;
const zoomin = () =>
{
    z= z + 0.5;
    image.style.transform = `scale(${z})`;
}
const zoomout = () =>
{
    z= z - 0.5;
    image.style.transform = `scale(${z})`;
}
