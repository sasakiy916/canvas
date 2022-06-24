//canvas取得(画用紙)
const cvs=document.getElementById("cvs");
//2dコンテキスト取得(筆＆絵の具)
const ctx=cvs.getContext("2d");
//キャンパスの大きさ設定
cvs.width=800;
cvs.height=500;

//キャンパスの背景色設定
ctx.fillStyle="#ddd";
ctx.fillRect(0,0,cvs.width,cvs.height);

//画像配列作成
const imgs=[new Image(),new Image(),new Image()];
const paths=["kaba1.jpg","kaba2.jpg","kaba3.jpg"]
for(let i=0;i<imgs.length;i++){
    imgs[i].src="./images/"+paths[i];
}

//すべての画像の読み込み完了時に動かすcallbackをセットする関数
const setLoadAllCallback=(imgs,callback)=>{
    let count = 0;//読み込んだ枚数
    for(let i=0;i<imgs.length;i++){
        imgs[i].onload=()=>{
            ++count;
            if(count == imgs.length){
                callback(imgs);
            }
        };
    }
}
//実行
setLoadAllCallback(imgs,(imgs)=>{
    let count = 0;
    let timerId=setInterval(()=>{
        count++;
        let idx=Math.floor(Math.random()*imgs.length);//どの画像を使うか抽選
        let img=imgs[idx];//抽選結果から画像取得
        ctx.save();//キャンバスの座標保存
        ctx.translate(Math.random()*cvs.width,Math.random()*cvs.height);//画像の位置
        ctx.rotate(Math.random()*2*Math.PI);//画像の回転
        let width=Math.floor(Math.random()*200)+100;//画像の大きさ(横幅)
        ctx.drawImage(img,0,0,width,width*3/4);//画像の描画
        ctx.restore();
        if(count > 100){//100枚分処理したら終了
            clearInterval(timerId);
        }
    },30);
});