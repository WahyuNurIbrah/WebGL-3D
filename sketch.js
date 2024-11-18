// Contoh dasar pembuatan objek 3D dengan p5.js
function setup() {
  // Membuat canvas 3D
  createCanvas(500,700, WEBGL);
}
 
function draw() {
  // Mengatur background
  background(200);
 
  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);
     
  // Mengatur rotasi objek berdasarkan waktu
  rotateY(frameCount * 0.01);
 
  // Menambahkan Cone
  push();
  fill(0, 150, 255);
  cone(50,250); 
  pop();
 
  // Menambahkan bola 3D
  push();
  translate(0, -130,0 ); // Menggeser posisi bola ke kanan
  fill(0, 255, 150); // Warna hijau
  sphere(45); // Membuat bola dengan radius 50
  pop();
  
  push();
  translate(0, -150,0 ); // Menggeser posisi bola ke kanan
  fill(0, 255, 150); // Warna hijau
  sphere(45); // Membuat bola dengan radius 50
  pop();
}