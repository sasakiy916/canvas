//canvas取得(画用紙)
const cvs=document.getElementById("cvs");
//2dコンテキスト取得(筆＆絵の具)
const ctx=cvs.getContext("2d");

//キャンパスの大きさ設定
cvs.width=800;
cvs.height=500;

//キャンパスの背景色設定
ctx.fillStyle="#ddd";
ctx.fillRect(0,0,cvs.width,cvs.height);//長方形に塗りつぶし


//塗りの設定
ctx.fillStyle="blue";
//四角書いて塗りつぶす
ctx.fillRect(30,20,150,100);

//線の設定
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
//線で4角を描画
ctx.strokeRect(30,20,150,100);//場所を変更すれば線だけの描画も可


//線の設定
ctx.strokeStyle="purple";
ctx.lineCap = "round";//ラインの端の設定(round,butt,square)

//ラインの描画
ctx.beginPath();
ctx.moveTo(50,200);
ctx.lineTo(150,250);
ctx.stroke();


//三角形の描画
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.closePath();
ctx.fill();
ctx.stroke();//線追加 上書きなどしてない項目は上記のstroke設定利用


//円の追加
ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(250,70,50,0,Math.PI*2);
ctx.closePath();
ctx.fill();


//パックマン
ctx.fillStyle="yellow";
ctx.beginPath();
ctx.moveTo(250,200);
ctx.arc(250,200,50,-1*Math.PI/6,Math.PI/6,true);
ctx.closePath();
ctx.fill();


//テキスト
ctx.font="36px sans-serif";
ctx.fillText("こんにちはCanvas",250,350);
ctx.font="36px serif";
ctx.fillText("こんにちはCanvas",250,400);


//画像配置
const img1=new Image();
img1.src="./images/kaba1.jpg";
//画像読み込み終了してから描画
img1.onload=()=>{
    // ctx.drawImage(img1,350,20);
    ctx.drawImage(img1,350,20,200,150);
}


//Canvas回転
const img2=new Image();
img2.src="./images/kaba2.jpg";
//画像読み込み終了してから描画
img2.onload=()=>{
    ctx.save();//既存の座標系を保存
    ctx.translate(500,80);//座標系の原点をx方向に500,y方向に80移動(回転の中心となる)
    ctx.rotate(Math.PI/8);//canvasを回転
    ctx.drawImage(img2,0,0,200,150);//新しくなった原点から描画
    ctx.restore();//座標系を元に戻す
}


//canvasの連続回転
const img3=new Image();
img3.src="./images/kaba3.jpg";
//画像読み込み終了してから描画
img3.onload=()=>{
    for(let i=0;i<8;i++){
        ctx.save();
        ctx.translate(600,300);
        ctx.rotate(Math.PI/4*i);
        ctx.drawImage(img3,0,0,200,150);
        ctx.restore();
    }
}